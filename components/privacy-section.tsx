import { TrackedCTA } from "./tracked-cta";
import { CheckIcon, HeartIcon, UserIcon, ShieldIcon, HomeIcon } from "./icons";

const tiles = [
  { icon: <ShieldIcon className="h-5 w-5" />, title: "Private rooms", text: "Every session is one-to-one in a closed room." },
  { icon: <UserIcon className="h-5 w-5" />, title: "Female practitioner", text: "Female Hijama is performed by a female practitioner." },
  { icon: <HeartIcon className="h-5 w-5" />, title: "Your choice", text: "Pick your practitioner preference when you book." },
  { icon: <HomeIcon className="h-5 w-5" />, title: "At home too", text: "The same privacy for home-service appointments." },
];

const points = [
  "Fully private sessions",
  "Male and female practitioners available",
  "Female Hijama performed by a female practitioner",
  "Request a female practitioner when you book",
  "Select your practitioner preference during booking",
];

export function PrivacySection() {
  return (
    <section id="privacy" className="section scroll-mt-24 bg-sage-soft">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Privacy &amp; Female Care</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Your privacy matters</h2>
          <p className="mt-3 text-muted">
            Every session takes place in a private, comfortable setting. Female Hijama is
            carried out by a female practitioner, and you can state your practitioner
            preference when you send your request.
          </p>
          <ul className="mt-5 space-y-2.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-forest">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                {p}
              </li>
            ))}
          </ul>
          <TrackedCTA
            className="btn-primary mt-6"
            event="female_practitioner_selected"
            eventParams={{ location: "privacy_section" }}
            prefill={{ practitioner: "Female" }}
          >
            Request a Female Practitioner
          </TrackedCTA>
        </div>

        <div className="order-1 grid gap-4 sm:grid-cols-2 lg:order-2">
          {tiles.map((t) => (
            <div
              key={t.title}
              className="group rounded-2xl border border-[rgba(6,69,42,0.18)] bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-green hover:shadow-[0_16px_40px_rgba(6,69,42,0.14)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-ref text-green transition-colors group-hover:bg-green group-hover:text-white">
                {t.icon}
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-forest">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
