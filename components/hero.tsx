import Image from "next/image";
import { TrackedCTA } from "./tracked-cta";
import { WhatsAppIcon, HomeIcon, ArrowRightIcon, StarIcon } from "./icons";
import { clinic, reviews } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex flex-col overflow-hidden bg-cream lg:min-h-[600px]"
    >
      {/* Photo layer — landscape crop. Full-bleed on mobile (behind the copy);
          right ~50% on desktop, dissolving into the cream on its left edge. */}
      <div className="absolute inset-0 z-0 lg:left-[50%]">
        <Image
          src="/images/hero/hero-hijama.jpg"
          alt="Shahjahan performing a Hijama cupping treatment at the clinic"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-[50%_30%] lg:object-[42%_center]"
        />
      </div>
      {/* Gradient blend: light vertical fade on mobile; on desktop opaque cream past
          the photo's left edge then a short feather so the practitioner stays clear. */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(248,249,244,0.45)_0%,rgba(248,249,244,0.72)_55%,#F8F9F4_96%)] lg:bg-[linear-gradient(90deg,#F8F9F4_0%,#F8F9F4_47%,rgba(248,249,244,0.5)_54%,rgba(248,249,244,0.1)_60%,rgba(248,249,244,0)_66%)]"
        aria-hidden="true"
      />

      {/* Trust badge — floats gently over the top-left of the photo on desktop */}
      <div className="badge-float absolute left-[51%] top-8 z-20 hidden rounded-2xl bg-forest/95 px-5 py-3 text-white shadow-[0_14px_34px_rgba(6,69,42,0.3)] lg:block">
        <p className="text-[15px] font-semibold">Authentic Sunnah Hijama</p>
        <p className="text-xs text-sage-ref">Safe • Professional • Trusted</p>
      </div>

      <div className="container-x relative z-10 flex flex-1 items-center">
        <div className="max-w-xl py-14 sm:py-16 lg:max-w-[540px] lg:py-20">
          <p className="hero-fade-up eyebrow" style={{ animationDelay: "0ms" }}>
            Traditional Healing • Modern Care
          </p>
          <h1
            className="hero-fade-up mt-3 text-[2rem] font-bold leading-[1.1] sm:text-[2.6rem] lg:text-[2.9rem]"
            style={{ animationDelay: "80ms" }}
          >
            Trusted Hijama Care in Islamabad, Rawalpindi &amp; Abbottabad
          </h1>
          <p
            className="hero-fade-up mt-4 max-w-md text-[15px] font-medium leading-relaxed text-charcoal"
            style={{ animationDelay: "160ms" }}
          >
            Qualified male &amp; female practitioners, private sessions and single-use
            equipment — at our clinics or your home.
          </p>

          <div
            className="hero-fade-up mt-6 flex flex-wrap gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <TrackedCTA className="btn-primary" event="hero_book_appointment_click" eventParams={{ location: "hero" }}>
              Book an Appointment
            </TrackedCTA>
            <TrackedCTA
              className="btn-secondary bg-white/70 backdrop-blur-sm"
              href={clinic.whatsappUrl}
              external
              event="whatsapp_click"
              eventParams={{ location: "hero" }}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </TrackedCTA>
          </div>

          {/* Compact trust row */}
          <div
            className="hero-fade-up mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[13px] text-forest"
            style={{ animationDelay: "320ms" }}
          >
            <span className="flex items-center gap-1.5">
              <StarIcon className="h-4 w-4 text-[#E5A100]" />
              <span className="font-bold">{reviews.ratingSummary.score.toFixed(1)}</span>
              <span className="text-muted">(120+ reviews)</span>
            </span>
            <span className="hidden h-4 w-px bg-[rgba(6,69,42,0.22)] sm:block" aria-hidden="true" />
            <span>
              <span className="font-bold">1,000+</span> <span className="text-muted">Customers</span>
            </span>
            <span className="hidden h-4 w-px bg-[rgba(6,69,42,0.22)] sm:block" aria-hidden="true" />
            <span>
              <span className="font-bold">Male &amp; Female</span>{" "}
              <span className="text-muted">Practitioners</span>
            </span>
          </div>

          <p
            className="hero-fade-up mt-4 max-w-md text-[13px] italic leading-relaxed text-forest"
            style={{ animationDelay: "400ms" }}
          >
            &ldquo;Indeed, the best of remedies you have is cupping (Hijama).&rdquo;{" "}
            <span className="not-italic text-muted">— Sahih al-Bukhari</span>
          </p>
        </div>
      </div>

      {/* Prominent home-service ribbon across the hero bottom */}
      <div className="relative z-10 border-t border-white/10 bg-forest text-white">
        <div className="container-x flex flex-col items-start gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2.5 text-sm font-medium">
            <HomeIcon className="h-5 w-5 shrink-0 text-sage-ref" />
            Home Hijama service — available across {clinic.serviceMarkets.join(" & ")}
          </p>
          <TrackedCTA
            className="btn shrink-0 bg-white px-5 text-[13px] text-green hover:bg-sage-ref hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
            event="home_service_selected"
            eventParams={{ location: "hero_ribbon" }}
            prefill={{ mode: "home" }}
          >
            Request Home Service
            <ArrowRightIcon className="h-4 w-4" />
          </TrackedCTA>
        </div>
      </div>
    </section>
  );
}
