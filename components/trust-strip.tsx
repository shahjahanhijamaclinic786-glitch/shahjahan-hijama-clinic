import { trustIndicators } from "@/lib/site-data";
import { CheckIcon } from "./icons";

function TrustRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      {...(ariaHidden ? { "aria-hidden": true } : {})}
    >
      {trustIndicators.map((t) => (
        <li
          key={(ariaHidden ? "c-" : "") + t}
          className="mx-6 flex items-center gap-2 whitespace-nowrap text-[13px] font-medium text-forest"
        >
          <CheckIcon className="h-4 w-4 shrink-0 text-green" />
          {t}
        </li>
      ))}
    </ul>
  );
}

export function TrustStrip() {
  return (
    <section
      aria-label="Why patients trust us"
      className="trust-marquee border-y border-[rgba(6,69,42,0.1)] bg-sage-soft py-4"
    >
      {/* Two identical rows: the animation shifts the track by exactly one row
          width (translateX -50%), so the loop is perfectly seamless. Pure CSS. */}
      <div className="trust-marquee-track">
        <TrustRow />
        <TrustRow ariaHidden />
      </div>
    </section>
  );
}
