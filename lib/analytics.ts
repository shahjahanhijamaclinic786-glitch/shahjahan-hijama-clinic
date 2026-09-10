// Lightweight analytics helper. Never send health-related content (concern/message).
// No-ops gracefully when no measurement id is configured.

export type AnalyticsEvent =
  | "hero_book_appointment_click"
  | "whatsapp_click"
  | "location_directions_click"
  | "booking_form_view"
  | "booking_form_start"
  | "booking_form_submit"
  | "booking_form_success"
  | "booking_form_error"
  | "home_service_selected"
  | "female_practitioner_selected"
  | "certificate_opened";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const k of UTM_KEYS) {
    const v = params.get(k);
    if (v) out[k] = v;
  }
  return out;
}

export function track(
  event: AnalyticsEvent,
  params: Record<string, string | number | boolean> = {}
): void {
  try {
    if (typeof window === "undefined") return;
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", event, params);
    }
  } catch {
    // analytics must never break the page
  }
}
