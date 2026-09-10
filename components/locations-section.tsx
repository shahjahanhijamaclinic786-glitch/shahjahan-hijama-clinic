import { SectionHeader } from "./section-header";
import { LocationCard } from "./location-card";
import { TrackedCTA } from "./tracked-cta";
import { ArrowRightIcon, HomeIcon } from "./icons";
import { locations, clinic } from "@/lib/site-data";

export function LocationsSection() {
  return (
    <section id="locations" className="section scroll-mt-24 bg-cream">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Locations"
          title="Visit one of our branches"
          intro="Three branches in Islamabad and one in Abbottabad — or request a home service in Islamabad and Rawalpindi."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((l) => (
            <LocationCard key={l.slug} location={l} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-feature bg-forest p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
              <HomeIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-base font-semibold">Prefer Hijama at home?</p>
              <p className="mt-1 text-sm text-sage-ref">
                Home service is available across {clinic.serviceMarkets.join(" & ")}, with nearby
                areas reviewed by our team.
              </p>
            </div>
          </div>
          <TrackedCTA
            className="btn shrink-0 bg-white text-green hover:bg-sage-ref"
            event="home_service_selected"
            eventParams={{ location: "locations_band" }}
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
