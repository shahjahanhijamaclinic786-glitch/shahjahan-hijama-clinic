"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { navLinks, services, clinic } from "@/lib/site-data";
import { track } from "@/lib/analytics";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [servicesOpen]);

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
          {navLinks.map((l) =>
            l.label === "Services" ? (
              <li key={l.href} ref={servicesRef} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-forest transition-colors hover:text-green"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {l.label}
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {servicesOpen ? (
                  <ul
                    role="menu"
                    className="absolute left-0 top-[calc(100%+10px)] z-50 w-64 overflow-hidden rounded-2xl border border-[rgba(6,69,42,0.12)] bg-white py-2 shadow-[0_18px_44px_rgba(6,69,42,0.18)]"
                  >
                    {services.map((s) => (
                      <li key={s.slug} role="none">
                        <a
                          href={l.href}
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 text-sm font-medium text-forest transition-colors hover:bg-sage-soft hover:text-green"
                        >
                          {s.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ) : (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-forest transition-colors hover:text-green"
                >
                  {l.label}
                </a>
              </li>
            )
          )}
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
            {navLinks.map((l) =>
              l.label === "Services" ? (
                <li key={l.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-base font-medium text-forest"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    {l.label}
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileServicesOpen ? (
                    <ul className="mb-2 space-y-0.5 border-l border-[rgba(6,69,42,0.15)] pl-4">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <a
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-muted hover:text-green"
                          >
                            {s.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-forest"
                  >
                    {l.label}
                  </a>
                </li>
              )
            )}
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
