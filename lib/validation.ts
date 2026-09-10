import { services, locations } from "./site-data";

export type BookingMode = "clinic" | "home";
export type PractitionerPref = "Male" | "Female";

export type BookingInput = {
  fullName: string;
  whatsapp: string;
  email: string;
  service: string;
  mode: BookingMode | "";
  location: string;
  homeAddress: string;
  date: string;
  time: string;
  practitioner: PractitionerPref | "";
  message: string;
  consent: boolean;
  // hidden context
  utm?: Record<string, string>;
  pageUrl?: string;
};

export type Errors = Partial<Record<keyof BookingInput, string>>;

const serviceNames = services.map((s) => s.name);
const locationNames = locations.map((l) => l.name);

export function todayLocalISO(): string {
  const d = new Date();
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// Time must be a HH:MM within 09:00–21:00 inclusive.
function isValidTime(v: string): boolean {
  if (!/^\d{2}:\d{2}$/.test(v)) return false;
  const [h, m] = v.split(":").map(Number);
  const mins = h * 60 + m;
  return mins >= 9 * 60 && mins <= 21 * 60;
}

export function validateBooking(input: BookingInput): Errors {
  const e: Errors = {};

  if (!input.fullName.trim()) e.fullName = "Please enter your full name.";
  if (!input.whatsapp.trim()) e.whatsapp = "Please enter your WhatsApp number.";
  if (input.email.trim() && !isValidEmail(input.email.trim()))
    e.email = "Please enter a valid email address.";

  if (!input.service.trim()) e.service = "Please choose a service.";
  else if (!serviceNames.includes(input.service))
    e.service = "Please choose a valid service.";

  if (!input.mode) e.mode = "Please choose clinic or home service.";

  if (input.mode === "clinic") {
    if (!input.location.trim()) e.location = "Please choose a location.";
    else if (!locationNames.includes(input.location))
      e.location = "Please choose a valid location.";
  }

  if (input.mode === "home" && !input.homeAddress.trim())
    e.homeAddress = "Please enter your home address.";

  if (!input.date) e.date = "Please choose a preferred date.";
  else if (input.date < todayLocalISO())
    e.date = "Please choose a date that is not in the past.";

  if (!input.time) e.time = "Please choose a preferred time.";
  else if (!isValidTime(input.time))
    e.time = "Please choose a time between 9:00 AM and 9:00 PM.";

  if (!input.practitioner)
    e.practitioner = "Please choose a preferred practitioner.";

  if (!input.consent)
    e.consent = "Please confirm you understand this is a request, not a confirmed appointment.";

  return e;
}

export function hasErrors(e: Errors): boolean {
  return Object.keys(e).length > 0;
}
