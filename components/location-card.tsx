import { TrackedCTA } from "./tracked-cta";
import { ArrowRightIcon, PinIcon } from "./icons";
import type { Location } from "@/lib/site-data";

export function LocationCard({ location }: { location: Location }) {
  return (
    <TrackedCTA
      href={location.mapsUrl}
      external
      event="location_directions_click"
      eventParams={{ branch: location.name }}
      ariaLabel={`Get directions to the ${location.name} branch on Google Maps`}
      className="group flex h-full flex-col rounded-feature border border-[rgba(6,69,42,0.16)] bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1.5 hover:border-green hover:shadow-[0_18px_44px_rgba(6,69,42,0.16)]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-ref text-green transition-colors group-hover:bg-green group-hover:text-white">
        <PinIcon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-[15px] font-semibold text-forest">
        {location.name}
        <span className="ml-1 font-normal text-muted">· {location.city}</span>
      </h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{location.address}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green">
        Get Directions
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </TrackedCTA>
  );
}
