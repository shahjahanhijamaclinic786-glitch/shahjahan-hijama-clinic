import { SectionHeader } from "./section-header";
import { iconByName, SparkleIcon, ShieldIcon } from "./icons";
import { whyChooseUs, clinic } from "@/lib/site-data";

export function WhyChooseUs() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={`Why choose ${clinic.name}`}
          intro="Experience traditional healing with modern standards of safety, hygiene and care."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-8">
          {/* Left — Sunnah + registration trust card */}
          <div className="relative overflow-hidden rounded-feature border border-[rgba(6,69,42,0.12)] bg-sage-soft p-8 text-center shadow-card">
            <svg
              className="pointer-events-none absolute -bottom-6 left-1/2 h-48 w-[130%] -translate-x-1/2 text-green/10"
              viewBox="0 0 200 120"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M100 8 190 118 10 118z" />
            </svg>

            <div className="relative">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-green shadow-card">
                <SparkleIcon className="h-7 w-7" />
              </span>

              <p dir="rtl" lang="ar" className="mt-6 font-heading text-2xl font-bold text-forest">
                وَفِي الْحِجَامَةِ شِفَاءٌ
              </p>
              <p className="mt-3 text-[15px] font-medium italic text-green">
                &ldquo;In cupping there is healing.&rdquo;
              </p>
              <p className="mt-1 text-sm text-muted">— Sahih Muslim</p>

              <div className="mx-auto mt-6 max-w-[16rem] border-t border-[rgba(6,69,42,0.15)] pt-5">
                <p className="flex items-center justify-center gap-2 text-sm font-semibold text-forest">
                  <ShieldIcon className="h-4 w-4 shrink-0 text-green" />
                  Registered with the National Council for Tibb
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Full privacy for male and female patients, with male and female certified
                  practitioners.
                </p>
              </div>
            </div>
          </div>

          {/* Right — benefit grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((b) => (
              <div
                key={b.title}
                className="group rounded-feature border border-[rgba(6,69,42,0.12)] bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(6,69,42,0.13)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-ref text-green transition-colors group-hover:bg-green group-hover:text-white">
                  {iconByName(b.icon, "h-6 w-6")}
                </span>
                <h3 className="mt-4 text-[16px] font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
