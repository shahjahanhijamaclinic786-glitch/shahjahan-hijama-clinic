"use client";

import { useState } from "react";
import { faqs, clinic } from "@/lib/site-data";
import { WhatsAppIcon } from "./icons";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="section scroll-mt-24 bg-gradient-to-b from-sage-ref via-sage-soft to-cream"
    >
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-14">
        {/* Left — intro */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="flex items-center gap-3 eyebrow">
            <span className="h-px w-8 bg-green" aria-hidden="true" />
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.15] sm:text-[2.4rem]">
            Before your appointment
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Clear answers for anyone considering Sunnah Hijama, wet cupping or dry cupping at
            {" "}
            {clinic.name}.
          </p>

          <div className="mt-6 flex gap-3 rounded-2xl border border-[rgba(6,69,42,0.14)] border-l-4 border-l-green bg-white/70 p-4">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-green" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8h.01M11 12h1v4h1" strokeLinecap="round" />
            </svg>
            <p className="text-[13px] leading-relaxed text-forest/90">
              If you have a medical condition, are pregnant, or take medication, please consult
              a qualified healthcare professional before booking.
            </p>
          </div>

          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-6 bg-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Contact the clinic
          </a>
        </div>

        {/* Right — accordion */}
        <div className="overflow-hidden rounded-feature border border-[rgba(6,69,42,0.12)] bg-white/60 shadow-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`border-b border-[rgba(6,69,42,0.14)] last:border-b-0 transition-colors ${
                  isOpen ? "border-l-2 border-l-green bg-white" : "hover:bg-white/70"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-forest sm:px-6"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {f.q}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-green text-green transition-all duration-300 ${
                        isOpen ? "rotate-180 bg-green text-white" : ""
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
