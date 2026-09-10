"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SectionHeader } from "./section-header";
import { reviews } from "@/lib/site-data";

function Stars({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[#E5A100]" aria-label={`${score} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < Math.round(score) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const { ratingSummary, items } = reviews;
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  // keep dots in sync with manual scroll / swipe
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      const mid = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let best = Infinity;
      children.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - track.offsetLeft + c.clientWidth / 2 - mid);
        if (d < best) { best = d; closest = i; }
      });
      setActive(closest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // auto-advance
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % items.length;
        goTo(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, [paused, items.length, goTo]);

  return (
    <section id="reviews" className="section scroll-mt-24 bg-white">
      <div className="container-x">
        <SectionHeader eyebrow="Reviews" title="Trusted by 1,000+ customers" />

        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-card bg-sage-soft p-5">
          <div className="text-3xl font-bold text-forest">{ratingSummary.score.toFixed(1)}</div>
          <div>
            <Stars score={ratingSummary.score} />
            <p className="mt-1 text-sm text-muted">
              Based on {ratingSummary.count}+ {ratingSummary.source}
            </p>
          </div>
        </div>

        <div
          className="mt-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((r) => (
              <figure
                key={r.name + r.text}
                className="w-[85%] shrink-0 snap-start rounded-feature border border-[rgba(6,69,42,0.14)] bg-white p-6 shadow-card sm:w-[46%] lg:w-[31.5%]"
              >
                <Stars score={5} />
                <blockquote className="mt-2 text-sm leading-relaxed text-forest">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-muted">
                  {r.name} · {r.city}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                aria-current={active === i}
                onClick={() => { setActive(i); goTo(i); }}
                className={`h-2 rounded-full transition-all ${active === i ? "w-6 bg-green" : "w-2 bg-[rgba(6,69,42,0.25)]"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
