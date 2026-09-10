import { SectionHeader } from "./section-header";
import { ServiceCard } from "./service-card";
import { TrackedCTA } from "./tracked-cta";
import { WhatsAppIcon } from "./icons";
import { services, clinic } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="section scroll-mt-24 bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Services"
          title="Hijama services"
          intro="A range of professional cupping and Hijama services, performed by qualified practitioners in a safe and clean environment."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-muted">
          Not sure which service you need?
          <TrackedCTA
            className="inline-flex items-center gap-1.5 font-semibold text-green"
            href={clinic.whatsappUrl}
            external
            event="whatsapp_click"
            eventParams={{ location: "services" }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Ask us on WhatsApp
          </TrackedCTA>
        </p>
      </div>
    </section>
  );
}
