"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "./section-header";
import { Lightbox } from "./lightbox";
import { certificates } from "@/lib/site-data";
import { track } from "@/lib/analytics";

export function CertificateGallery() {
  const [active, setActive] = useState<(typeof certificates)[number] | null>(null);

  return (
    <section id="certificates" className="section scroll-mt-24 bg-cream">
      <div className="container-x">
        <SectionHeader
          eyebrow="Trust Proof"
          title="Selected certificates"
          intro="Genuine registration and qualification documents, shown with the clinic's consent."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => {
                setActive(c);
                track("certificate_opened", { certificate: c.title });
              }}
              className="group overflow-hidden rounded-feature border border-[rgba(6,69,42,0.16)] bg-white text-left shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-green hover:shadow-[0_16px_40px_rgba(6,69,42,0.14)]"
              aria-label={`Open larger view of ${c.title}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sage-soft">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-forest/90 py-1.5 text-[11px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  View full document
                </span>
              </div>
              <div className="border-t border-[rgba(6,69,42,0.1)] p-3 text-sm font-semibold text-forest">
                {c.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <Lightbox src={active.image} alt={active.title} onClose={() => setActive(null)} />
      ) : null}
    </section>
  );
}
