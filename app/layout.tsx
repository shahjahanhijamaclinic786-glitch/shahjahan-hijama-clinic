import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { clinic, locations, socialLinks, faqs } from "@/lib/site-data";
import { siteUrl } from "@/lib/site-url";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const description =
  "Trusted Hijama and cupping care in Islamabad, Rawalpindi and Abbottabad. Qualified practitioners, private sessions, male & female practitioners, home service, and easy appointment requests.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shahjahan Hijama Clinic — Hijama in Islamabad, Rawalpindi & Abbottabad",
    template: "%s — Shahjahan Hijama Clinic",
  },
  description,
  keywords: [
    "Hijama Islamabad",
    "Hijama Rawalpindi",
    "Hijama Abbottabad",
    "Hijama clinic Islamabad",
    "Hijama home service Islamabad",
    "Female Hijama Islamabad",
    "Sunnah Hijama Islamabad",
    "Wet Cupping Islamabad",
    "Dry Cupping Islamabad",
    "Facial Cupping Islamabad",
  ],
  alternates: { canonical: "/" },
  applicationName: clinic.name,
  authors: [{ name: clinic.name }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: clinic.name,
    locale: "en_PK",
    title: "Shahjahan Hijama Clinic — Reviving the Sunnah Since 2004",
    description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Shahjahan Hijama Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahjahan Hijama Clinic",
    description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#075B35",
  colorScheme: "light",
};

function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: clinic.name,
    slogan: clinic.tagline,
    description,
    url: siteUrl,
    telephone: `+92${clinic.phone.replace(/^0/, "")}`,
    email: clinic.email,
    priceRange: "$$",
    sameAs: socialLinks.map((s) => s.href),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    location: locations.map((l) => ({
      "@type": "Place",
      name: `${clinic.name} — ${l.name}`,
      address: { "@type": "PostalAddress", streetAddress: l.address, addressLocality: l.city, addressCountry: "PK" },
      geo: { "@type": "GeoCoordinates", latitude: l.coords[0], longitude: l.coords[1] },
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <StructuredData />
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
