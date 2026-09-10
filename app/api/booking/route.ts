import { NextResponse } from "next/server";
import { validateBooking, type BookingInput } from "@/lib/validation";
import { clinic } from "@/lib/site-data";

export const runtime = "nodejs";

const endpoint = process.env.BOOKING_ENDPOINT_URL;

// --- Basic in-memory rate limiting -------------------------------------------
// Best-effort only: Vercel serverless instances are ephemeral and not shared,
// so this blocks rapid-fire abuse per instance. For hard guarantees add a
// shared store (Upstash / Vercel KV) later.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    // prevent unbounded growth
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return recent.length > MAX_PER_WINDOW;
}

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0] : request.headers.get("x-real-ip") || "unknown").trim();
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later or contact us on WhatsApp." },
      { status: 429 }
    );
  }

  let body: BookingInput & { hp?: string; t?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a hidden field only a bot would fill. Pretend success, drop silently.
  if (typeof body.hp === "string" && body.hp.trim() !== "") {
    return NextResponse.json({ ok: true });
  }
  // Time-trap: a genuine person takes more than a couple of seconds to fill the form.
  if (typeof body.t === "number" && Date.now() - body.t < 2500) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateBooking(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Validation failed.", errors }, { status: 422 });
  }

  const clip = (s: string, n: number) => s.replace(/\s+/g, " ").trim().slice(0, n);
  const payload = {
    timestamp: new Date().toISOString(),
    fullName: clip(body.fullName, 120),
    whatsapp: clip(body.whatsapp, 40),
    email: clip(body.email, 160) || "Not provided",
    service: clip(body.service, 60),
    mode: body.mode === "home" ? "Home Service" : "Clinic",
    location: body.mode === "home" ? "Home Service" : clip(body.location, 80),
    homeAddress: body.mode === "home" ? clip(body.homeAddress, 400) : "",
    date: clip(body.date, 20),
    time: clip(body.time, 20),
    practitioner: body.practitioner === "Female" ? "Female" : "Male",
    message: clip(body.message || "", 1500),
    source: body.utm && Object.keys(body.utm).length ? clip(JSON.stringify(body.utm), 300) : "",
    pageUrl: clip(body.pageUrl || "", 300),
    notifyEmail: clinic.email,
  };

  const leadRef = `${payload.fullName} / ${payload.whatsapp} / ${payload.service}`;

  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ ok: true, dev: true });
    }
    console.error("[booking] BOOKING_ENDPOINT_URL is not set. Lost lead:", leadRef);
    return NextResponse.json(
      { ok: false, error: "We couldn't submit your request right now." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: AbortSignal.timeout(25000), // Apps Script can be slow on cold start
    });

    const text = await res.text();
    if (!res.ok) throw new Error(`upstream HTTP ${res.status}`);

    // Apps Script always answers 200; a misconfigured Web App returns Google's HTML
    // login page instead of our JSON, so confirm the body really is { ok: true }.
    let parsed: { ok?: boolean; error?: string };
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error('upstream returned non-JSON (deploy the Web App with "Who has access: Anyone")');
    }
    if (parsed.ok !== true) throw new Error(`upstream reported failure: ${parsed.error ?? "unknown"}`);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[booking] submission failed:", (err as Error).message, "| lead:", leadRef);
    return NextResponse.json(
      { ok: false, error: "We couldn't submit your request right now." },
      { status: 502 }
    );
  }
}
