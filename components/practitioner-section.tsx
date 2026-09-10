import Image from "next/image";
import { SectionHeader } from "./section-header";
import { practitioner, locations } from "@/lib/site-data";

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "2004", label: "Serving since" },
  { value: String(locations.length), label: "Clinic branches" },
];

export function PractitionerSection() {
  return (
    <section id="about" className="section scroll-mt-24 bg-sage-ref">
      <div className="container-x">
        <SectionHeader
          eyebrow="Qualified Practitioners"
          title="Care from experienced hands"
          intro="Our team is dedicated to safe, effective Hijama. Female Hijama is performed by a female practitioner on request."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[340px_1fr] lg:items-center">
          {/* Photo with an offset accent block behind it */}
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-feature bg-green/15" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-feature border border-[rgba(6,69,42,0.12)] shadow-card">
              <Image
                src={practitioner.image}
                alt={`${practitioner.name}, ${practitioner.role}`}
                width={800}
                height={1000}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 340px"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold">{practitioner.name}</h3>
            <p className="mt-1 text-sm font-semibold text-green">{practitioner.role}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {practitioner.credentials
                .filter((c) => !/years/i.test(c))
                .map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[rgba(6,69,42,0.2)] bg-white px-3 py-1.5 text-xs font-semibold text-forest transition-colors hover:border-green hover:bg-green hover:text-white"
                  >
                    {c}
                  </span>
                ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[rgba(6,69,42,0.14)] bg-white p-4 text-center shadow-card"
                >
                  <div className="font-heading text-2xl font-bold text-green">{s.value}</div>
                  <div className="mt-1 text-[11px] leading-tight text-muted">{s.label}</div>
                </div>
              ))}
            </div>

            <blockquote className="mt-6 rounded-2xl border-l-4 border-green bg-white p-4 text-sm leading-relaxed text-forest">
              <span className="font-semibold">Reviving the Sunnah since 2004.</span> A
              traditional, Sunnah-oriented approach delivered with modern hygiene: single-use
              equipment, sterilization procedures, and private sessions at every branch.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
