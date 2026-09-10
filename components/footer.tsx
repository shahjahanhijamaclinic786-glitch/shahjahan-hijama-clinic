import Image from "next/image";
import { TrackedCTA } from "./tracked-cta";
import { socialIcon } from "./icons";
import { clinic, navLinks, socialLinks, locations } from "@/lib/site-data";

const bodyText = "text-[#CFE3D6]";

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white">
      {children}
    </h3>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-x py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.1fr_1.2fr] lg:gap-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/brand/logo.jpeg"
                alt=""
                width={56}
                height={56}
                loading="eager"
                className="h-12 w-12 rounded-full object-cover ring-1 ring-white/25"
              />
              <span className="font-heading text-[15px] font-bold leading-tight text-white">
                Shahjahan
                <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-sage-ref">
                  Hijama Clinic
                </span>
              </span>
            </div>
            <p className={`mt-4 text-sm ${bodyText}`}>{clinic.tagline}</p>
            <p className={`mt-2 max-w-xs text-sm leading-relaxed ${bodyText}`}>
              {clinic.shortDescription}
            </p>

            <ul className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-green"
                  >
                    {socialIcon(s.label, "h-[18px] w-[18px]")}
                  </a>
                </li>
              ))}
            </ul>

            <TrackedCTA
              className="btn mt-6 w-full bg-white px-6 text-green shadow-[0_10px_24px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:bg-sage-ref sm:w-auto"
              event="hero_book_appointment_click"
              eventParams={{ location: "footer" }}
            >
              Book Appointment
            </TrackedCTA>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <ColHeading>Quick Links</ColHeading>
            <ul className={`space-y-2.5 text-sm ${bodyText}`}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <ColHeading>Contact</ColHeading>
            <ul className={`space-y-2.5 text-sm ${bodyText}`}>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">Phone</span>
                <a href={`tel:${clinic.phone}`} className="transition-colors hover:text-white">
                  {clinic.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">WhatsApp</span>
                <a
                  href={clinic.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {clinic.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">Email</span>
                <a
                  href={`mailto:${clinic.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {clinic.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-white/50">Working hours</span>
                {clinic.openingHours}
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <ColHeading>Our Locations</ColHeading>
            <ul className={`space-y-4 text-sm ${bodyText}`}>
              {locations.map((l) => (
                <li key={l.slug}>
                  <span className="font-semibold text-white">
                    {l.name} <span className="font-normal text-white/60">· {l.city}</span>
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed">{l.shortAddress}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className={`container-x py-5 text-xs ${bodyText}`}>
          © {new Date().getFullYear()} {clinic.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
