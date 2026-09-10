import Image from "next/image";
import { TrackedCTA } from "./tracked-cta";
import { HomeIcon, CheckIcon } from "./icons";

const points = [
  "Available across Islamabad & Rawalpindi",
  "Same single-use equipment and hygiene as the clinic",
  "Your address is reviewed manually — we confirm coverage when we call",
  "Male or female practitioner on request",
];

export function HomeServiceSection() {
  return (
    <section id="home-service" className="section scroll-mt-24 bg-cream">
      <div className="container-x">
        <div className="overflow-hidden rounded-feature bg-forest text-white shadow-card">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <HomeIcon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Hijama at Your Home</h2>
              <p className="mt-3 text-sm leading-relaxed text-sage-ref">
                Convenient, private and safe home service — the same professional treatment,
                brought to you.
              </p>
              <ul className="mt-5 space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-sage-ref">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                    {p}
                  </li>
                ))}
              </ul>
              <TrackedCTA
                className="btn bg-white text-green hover:bg-sage-ref mt-6"
                event="home_service_selected"
                eventParams={{ location: "home_service_section" }}
                prefill={{ mode: "home" }}
              >
                Request Home Service
              </TrackedCTA>
            </div>
            <div className="relative min-h-[260px] lg:min-h-full">
              <Image
                src="/images/services/home-hijama.jpg"
                alt="A practitioner providing a professional Hijama treatment at a patient's home"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
