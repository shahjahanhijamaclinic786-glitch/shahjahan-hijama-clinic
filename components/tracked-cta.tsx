"use client";

import type { ReactNode } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { prefillBooking, type BookingPrefill } from "@/lib/booking-prefill";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  event?: AnalyticsEvent;
  eventParams?: Record<string, string | number | boolean>;
  prefill?: BookingPrefill;
  external?: boolean;
  ariaLabel?: string;
};

export function TrackedCTA({
  children,
  className,
  href = "#book-appointment",
  event,
  eventParams,
  prefill,
  external,
  ariaLabel,
}: Props) {
  const onClick = (e: React.MouseEvent) => {
    if (event) track(event, eventParams);
    if (prefill) {
      e.preventDefault();
      prefillBooking(prefill);
    }
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
