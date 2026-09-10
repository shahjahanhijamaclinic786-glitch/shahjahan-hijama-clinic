"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, clinic } from "@/lib/site-data";
import { track } from "@/lib/analytics";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const bookClick = () => {
    setOpen(false);
    track("hero_book_appointment_click", { location: "navbar" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(6,69,42,0.12)] bg-sage-ref/95 backdrop-blur">
      <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${clinic.name} — home`}>
          <Image
            src="/images/brand/logo.jpeg"
            alt=""
            width={64}
            height={64}
            className="h-12 w-12 rounded-full object-cover ring-1 ring-[rgba(6,69,42,0.15)] sm:h-14 sm:w-14"
            priority
          />
          <span className="font-heading text-[15px] font-bold leading-tight text-forest">
            Shahjahan
            <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-green">
              Hijama Clinic
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-forest transition-colors hover:text-green"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#book-appointment" onClick={bookClick} className="btn-primary hidden sm:inline-flex">
            Book Appointment
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[rgba(6,69,42,0.2)] text-forest lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-[rgba(6,69,42,0.12)] bg-sage-ref lg:hidden">
          <ul className="container-x flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-forest"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a href="#book-appointment" onClick={bookClick} className="btn-primary w-full">
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
