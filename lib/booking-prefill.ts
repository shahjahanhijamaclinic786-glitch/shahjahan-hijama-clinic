import type { BookingMode, PractitionerPref } from "./validation";

export type BookingPrefill = {
  service?: string;
  mode?: BookingMode;
  practitioner?: PractitionerPref;
};

export const BOOKING_PREFILL_EVENT = "booking:prefill";

// Scroll to the booking form and hand it values to pre-select.
// This is a conversion interaction, not navigation to another page.
export function prefillBooking(prefill: BookingPrefill): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<BookingPrefill>(BOOKING_PREFILL_EVENT, { detail: prefill }));
  const el = document.getElementById("book-appointment");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
