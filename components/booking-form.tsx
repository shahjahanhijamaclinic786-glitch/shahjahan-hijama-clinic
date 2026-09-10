"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { services, locations, clinic } from "@/lib/site-data";
import {
  validateBooking,
  hasErrors,
  todayLocalISO,
  type BookingInput,
  type Errors,
} from "@/lib/validation";
import { track, getUtmParams } from "@/lib/analytics";
import { BOOKING_PREFILL_EVENT, type BookingPrefill } from "@/lib/booking-prefill";
import { WhatsAppIcon, CheckIcon, MaleIcon, FemaleIcon, ArrowRightIcon } from "./icons";

const TIME_OPTIONS = (() => {
  const out: string[] = [];
  for (let m = 9 * 60; m <= 21 * 60; m += 30) {
    const h = Math.floor(m / 60);
    const mm = m % 60;
    const hour12 = ((h + 11) % 12) + 1;
    const ampm = h < 12 ? "AM" : "PM";
    out.push(`${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}|${hour12}:${String(mm).padStart(2, "0")} ${ampm}`);
  }
  return out;
})();

const empty: BookingInput = {
  fullName: "",
  whatsapp: "",
  email: "",
  service: "",
  mode: "",
  location: "",
  homeAddress: "",
  date: "",
  time: "",
  practitioner: "",
  message: "",
  consent: false,
};

const leftPoints = [
  "Private appointment request",
  "Clinic or home service",
  "Qualified male & female practitioners",
  "No online payment required",
  "Personal confirmation by phone or WhatsApp",
  "Hygiene & suitability reviewed before your session",
];

type Status = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [data, setData] = useState<BookingInput>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [showErrors, setShowErrors] = useState(false);
  const startedRef = useRef(false);
  const viewedRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hpRef = useRef<HTMLInputElement>(null);

  const today = useMemo(() => todayLocalISO(), []);
  const renderedAt = useMemo(() => Date.now(), []);

  const set = <K extends keyof BookingInput>(key: K, value: BookingInput[K]) => {
    if (!startedRef.current) {
      startedRef.current = true;
      track("booking_form_start");
    }
    setData((d) => {
      const next = { ...d, [key]: value };
      if (showErrors) setErrors(validateBooking(next));
      return next;
    });
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !viewedRef.current) {
            viewedRef.current = true;
            track("booking_form_view");
            io.disconnect();
          }
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<BookingPrefill>).detail || {};
      setData((d) => ({
        ...d,
        ...(detail.service ? { service: detail.service } : {}),
        ...(detail.mode ? { mode: detail.mode, location: detail.mode === "home" ? "" : d.location } : {}),
        ...(detail.practitioner ? { practitioner: detail.practitioner } : {}),
      }));
    };
    window.addEventListener(BOOKING_PREFILL_EVENT, handler);
    return () => window.removeEventListener(BOOKING_PREFILL_EVENT, handler);
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const validation = validateBooking(data);
    setErrors(validation);
    setShowErrors(true);
    if (hasErrors(validation)) {
      const firstKey = Object.keys(validation)[0];
      document.getElementById(`field-${firstKey}`)?.focus();
      return;
    }

    setStatus("submitting");
    track("booking_form_submit", { service: data.service, mode: data.mode });

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          hp: hpRef.current?.value ?? "",
          t: renderedAt,
          utm: getUtmParams(),
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("success");
      track("booking_form_success");
    } catch {
      setStatus("error");
      track("booking_form_error");
    }
  };

  if (status === "success") {
    return (
      <section id="book-appointment" ref={sectionRef} className="section scroll-mt-24 bg-cream">
        <div className="container-x max-w-2xl">
          <div className="rounded-feature border border-[rgba(6,69,42,0.12)] bg-white p-8 text-center shadow-card sm:p-12">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green text-white">
              <CheckIcon className="h-8 w-8" />
            </span>
            <h2 className="mt-5 text-2xl font-bold">Your appointment request has been submitted.</h2>
            <p className="mt-2 text-sm text-muted">
              Our team will review your request and contact you to confirm the appointment.
            </p>
            <a
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6"
              onClick={() => track("whatsapp_click", { location: "booking_success" })}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-appointment" ref={sectionRef} className="section scroll-mt-24 bg-cream">
      <div className="container-x">
        <div className="overflow-hidden rounded-feature border border-[rgba(6,69,42,0.12)] shadow-card lg:grid lg:grid-cols-[310px_1fr]">
          {/* Left panel */}
          <div className="relative bg-forest p-8 text-white lg:p-9">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(225deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-ref">
                Book your visit
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-[1.7rem]">
                Request your Hijama appointment.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-sage-ref">
                Choose your preferred service, date and time. Our team personally confirms every
                appointment by phone or WhatsApp.
              </p>

              <ul className="mt-6 space-y-2.5">
                {leftPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13px] text-sage-ref">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-white/15 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-ref">
                  Prefer to speak first?
                </p>
                <p className="mt-1.5 text-xs text-sage-ref">
                  Call or WhatsApp us during clinic hours and we&rsquo;ll guide you before booking.
                </p>
                <a href={`tel:${clinic.phone}`} className="mt-2 block text-lg font-bold text-white">
                  {clinic.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-white p-6 sm:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
              Private request
            </p>
            <h3 className="mt-2 text-xl font-bold sm:text-2xl">Your appointment details</h3>

            {status === "error" ? (
              <div role="alert" className="mt-5 rounded-xl border border-[#e6c3c3] bg-[#fbeeee] p-4 text-sm text-[#8a1c1c]">
                We couldn&rsquo;t submit your request right now. Please try again or{" "}
                <a href={clinic.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                  contact us on WhatsApp
                </a>
                .
              </div>
            ) : null}

            <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
              {/* Honeypot — hidden from people, tempting to bots. Leave empty. */}
              <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="company-website">Company website</label>
                <input
                  ref={hpRef}
                  id="company-website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="fullName" label="Full name" required error={showErrors ? errors.fullName : undefined}>
                  <input
                    id="field-fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    className="field-input"
                    value={data.fullName}
                    onChange={(e) => set("fullName", e.target.value)}
                  />
                </Field>
                <Field id="whatsapp" label="Phone or WhatsApp number" required error={showErrors ? errors.whatsapp : undefined}>
                  <input
                    id="field-whatsapp"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+92 3XX XXX XXXX"
                    className="field-input"
                    value={data.whatsapp}
                    onChange={(e) => set("whatsapp", e.target.value)}
                  />
                </Field>
              </div>

              <Field id="email" label="Email address (optional)" error={showErrors ? errors.email : undefined}>
                <input
                  id="field-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Optional email"
                  className="field-input"
                  value={data.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="service" label="Preferred service" required error={showErrors ? errors.service : undefined}>
                  <select
                    id="field-service"
                    className="field-input"
                    value={data.service}
                    onChange={(e) => set("service", e.target.value)}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="mode" label="Clinic / Home service" required error={showErrors ? errors.mode : undefined}>
                  <select
                    id="field-mode"
                    className="field-input"
                    value={data.mode}
                    onChange={(e) => {
                      const v = e.target.value as BookingInput["mode"];
                      set("mode", v);
                      if (v === "home") track("home_service_selected", { location: "booking_form" });
                    }}
                  >
                    <option value="">Select an option</option>
                    <option value="clinic">Clinic appointment</option>
                    <option value="home">Home service</option>
                  </select>
                </Field>
              </div>

              {data.mode === "clinic" ? (
                <Field id="location" label="Location" required error={showErrors ? errors.location : undefined}>
                  <select
                    id="field-location"
                    className="field-input"
                    value={data.location}
                    onChange={(e) => set("location", e.target.value)}
                  >
                    <option value="">Select a location</option>
                    {locations.map((l) => (
                      <option key={l.slug} value={l.name}>
                        {l.name} ({l.city})
                      </option>
                    ))}
                  </select>
                </Field>
              ) : null}

              {data.mode === "home" ? (
                <Field
                  id="homeAddress"
                  label="Home address"
                  required
                  error={showErrors ? errors.homeAddress : undefined}
                  hint="Home-service addresses are reviewed manually by our team."
                >
                  <textarea
                    id="field-homeAddress"
                    rows={2}
                    className="field-input"
                    value={data.homeAddress}
                    onChange={(e) => set("homeAddress", e.target.value)}
                  />
                </Field>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="date" label="Preferred date" required error={showErrors ? errors.date : undefined}>
                  <input
                    id="field-date"
                    type="date"
                    min={today}
                    className="field-input"
                    value={data.date}
                    onChange={(e) => set("date", e.target.value)}
                  />
                </Field>
                <Field id="time" label="Preferred time" required error={showErrors ? errors.time : undefined}>
                  <select
                    id="field-time"
                    className="field-input"
                    value={data.time}
                    onChange={(e) => set("time", e.target.value)}
                  >
                    <option value="">Select a time</option>
                    {TIME_OPTIONS.map((t) => {
                      const [value, label] = t.split("|");
                      return (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      );
                    })}
                  </select>
                </Field>
              </div>

              <fieldset id="field-practitioner">
                <legend className="field-label">
                  Practitioner preference <span className="text-[#8a1c1c]">*</span>
                </legend>
                <div className="mt-1 grid grid-cols-2 gap-3">
                  {([
                    { key: "Male", label: "Male Practitioner", Icon: MaleIcon },
                    { key: "Female", label: "Female Practitioner", Icon: FemaleIcon },
                  ] as const).map(({ key, label, Icon }) => {
                    const selected = data.practitioner === key;
                    return (
                      <label
                        key={key}
                        className={`relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border px-3 py-4 text-center text-[13px] font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-green/40 ${
                          selected ? "border-green bg-green/10 text-forest" : "border-inputline text-muted hover:border-green/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="practitioner"
                          value={key}
                          className="sr-only"
                          checked={selected}
                          onChange={() => {
                            set("practitioner", key);
                            if (key === "Female") track("female_practitioner_selected", { location: "booking_form" });
                          }}
                        />
                        {selected ? (
                          <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-green text-white">
                            <CheckIcon className="h-3 w-3" />
                          </span>
                        ) : null}
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            selected ? "bg-green text-white" : "bg-sage-soft text-green"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        {label}
                      </label>
                    );
                  })}
                </div>
                {showErrors && errors.practitioner ? (
                  <p className="field-error">{errors.practitioner}</p>
                ) : null}
              </fieldset>

              <Field id="message" label="Health notes, medication or special considerations">
                <textarea
                  id="field-message"
                  rows={3}
                  placeholder="Share medication, health conditions, pregnancy, anemia, bleeding concerns, or anything we should know before confirming."
                  className="field-input"
                  value={data.message}
                  onChange={(e) => set("message", e.target.value)}
                />
              </Field>
              <p className="text-xs text-muted">
                Private note: health details are used only to review suitability before confirming
                your appointment.
              </p>

              <label className="flex items-start gap-3 rounded-xl border border-inputline p-3.5 text-[13px] text-charcoal">
                <input
                  id="field-consent"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 shrink-0 accent-green"
                  checked={data.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                />
                <span>
                  I understand this booking request is not confirmed until the clinic contacts me.{" "}
                  <span className="text-[#8a1c1c]">*</span>
                  {showErrors && errors.consent ? (
                    <span className="mt-1 block font-medium text-[#8a1c1c]">{errors.consent}</span>
                  ) : null}
                </span>
              </label>

              <button type="submit" className="btn-primary w-full" disabled={status === "submitting"}>
                {status === "submitting" ? "Submitting…" : "Request Appointment"}
                {status !== "submitting" ? <ArrowRightIcon className="h-4 w-4" /> : null}
              </button>
              <p className="text-center text-xs text-muted">
                Your request is private. The clinic will personally confirm your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={`field-${id}`}
        className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-forest/70"
      >
        {label} {required ? <span className="text-[#8a1c1c]">*</span> : null}
      </label>
      {children}
      {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
      {error ? (
        <p className="field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
