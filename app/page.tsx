import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServicesSection } from "@/components/services-section";
import { PrivacySection } from "@/components/privacy-section";
import { HomeServiceSection } from "@/components/home-service-section";
import { LocationsSection } from "@/components/locations-section";
import { PractitionerSection } from "@/components/practitioner-section";
import { CertificateGallery } from "@/components/certificate-gallery";
import { ReviewsSection } from "@/components/reviews-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { BookingForm } from "@/components/booking-form";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhyChooseUs />
        <ServicesSection />
        <PrivacySection />
        <HomeServiceSection />
        <LocationsSection />
        <PractitionerSection />
        <CertificateGallery />
        <ReviewsSection />
        <FaqSection />
        <FinalCta />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
