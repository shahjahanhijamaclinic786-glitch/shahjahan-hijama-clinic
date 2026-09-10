import { TrackedCTA } from "./tracked-cta";
import { WhatsAppIcon } from "./icons";
import { clinic } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section className="bg-green">
      <div className="container-x py-14 text-center sm:py-20">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to book an appointment?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-sage-ref">
          Send your appointment request and our team will review it and contact you to
          confirm. Submitting the form does not confirm an appointment automatically.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <TrackedCTA
            className="btn bg-white text-green hover:bg-sage-ref"
            event="hero_book_appointment_click"
            eventParams={{ location: "final_cta" }}
          >
            Request an Appointment
          </TrackedCTA>
          <TrackedCTA
            className="btn border border-white text-white hover:bg-white/10"
            href={clinic.whatsappUrl}
            external
            event="whatsapp_click"
            eventParams={{ location: "final_cta" }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </TrackedCTA>
        </div>
      </div>
    </section>
  );
}
