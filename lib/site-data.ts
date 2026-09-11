// Single source of truth for clinic business data. Edit here, not in components.

export const clinic = {
  name: "Shahjahan Hijama Clinic",
  tagline: "Reviving the Sunnah Since 2004.",
  shortDescription:
    "Professional Hijama and cupping care with qualified practitioners, private sessions, and convenient booking across Islamabad, Rawalpindi and Abbottabad.",
  phone: "03376122210",
  whatsapp: "03376122210",
  whatsappUrl: "https://wa.me/923376122210",
  email: "shahjahanhijamaclinic786@gmail.com",
  openingHours: "Monday–Sunday: 9:00 AM–9:00 PM",
  openingHoursShort: "9 AM–9 PM",
  serviceMarkets: ["Islamabad", "Rawalpindi"],
  additionalLocation: "Abbottabad",
} as const;

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/shahjahanhijama?stkn=MWN2cXEyZXQ0bnJ6NA==",
  },
  { label: "Facebook", href: "https://www.facebook.com/share/1QDAdL8fta/" },
  { label: "TikTok", href: "https://vm.tiktok.com/ZS9SyNSB8NRAW-aytDd/" },
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Locations", href: "#locations" },
  { label: "Home Service", href: "#home-service" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
] as const;

export type Service = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "wet-cupping",
    name: "Wet Cupping",
    description:
      "Traditional Hijama using controlled suction with tiny surface scratches. Performed with single-use equipment in a private, clean setting.",
    image: "/images/services/sunnah-hijama.jpg",
  },
  {
    slug: "sunnah-hijama",
    name: "Sunnah Hijama",
    description:
      "Hijama following the traditional Sunnah method and points, carried out by qualified practitioners with careful hygiene.",
    image: "/images/services/wet-cupping.jpg",
  },
  {
    slug: "dry-cupping",
    name: "Dry Cupping",
    description:
      "Suction cups applied to the skin without any scratches. A gentler option often used for muscle tension and general comfort.",
    image: "/images/services/dry-cupping.jpg",
  },
  {
    slug: "facial-cupping",
    name: "Facial Cupping",
    description:
      "Small, light cups used gently on the face. A calm, non-graphic treatment for those seeking a lighter cupping session.",
    image: "/images/services/facial-cupping.jpg",
  },
  {
    slug: "hair-loss-hijama",
    name: "Hair Loss Hijama",
    description:
      "A scalp-focused Hijama session using clean, single-use equipment, performed carefully by an experienced practitioner.",
    image: "/images/services/hair-loss-hijama.jpg",
  },
  {
    slug: "fasd",
    name: "Venesection (Fasd)",
    description:
      "A traditional bloodletting procedure prepared with sterile equipment and a restrained, professional approach.",
    image: "/images/services/fasd.jpg",
  },
  {
    slug: "wooden-therapy",
    name: "Wooden Therapy",
    description:
      "Manual therapy using smooth wooden tools to work on the back and muscles in a relaxed, comfortable setting.",
    image: "/images/services/wooden-therapy.jpg",
  },
];

export type Location = {
  slug: string;
  name: string;
  city: string;
  address: string;
  shortAddress: string;
  mapsUrl: string;
  coords: [number, number]; // [lat, lng] — used for LocalBusiness structured data
};

export const locations: Location[] = [
  {
    slug: "barakhu",
    name: "Barakhu",
    city: "Islamabad",
    address:
      "Imran Plaza, Opposite Attock Petrol Pump, Near Umaniya Restaurant, Main Murree Road, Barakhu, Islamabad",
    shortAddress: "Imran Plaza, Main Murree Road, Barakhu, Islamabad",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Imran+Plaza+Main+Murree+Road+Barakhu+Islamabad",
    coords: [33.7274, 73.1543],
  },
  {
    slug: "f7-markaz",
    name: "F-7 Markaz",
    city: "Islamabad",
    address:
      "Safa Gym, 5th Floor, Safa Gold Mall, Plot No. 5, F-7 Markaz, Islamabad",
    shortAddress: "Safa Gym, 5th Floor, Safa Gold Mall, F-7 Markaz, Islamabad",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Safa+Gold+Mall+F-7+Markaz+Islamabad",
    coords: [33.7195, 73.0551],
  },
  {
    slug: "bahria-enclave",
    name: "Bahria Enclave",
    city: "Islamabad",
    address:
      "Plaza Burj-ul-Bilal, Office No. 3, Ground Floor, Bahria Enclave, Kuri Road, Near Attock Pump, Newmal, Islamabad",
    shortAddress:
      "Plaza Burj-ul-Bilal, Ground Floor, Bahria Enclave, Kuri Road, Islamabad",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Plaza+Burj-ul-Bilal+Bahria+Enclave+Kuri+Road+Islamabad",
    coords: [33.6702, 73.1741],
  },
  {
    slug: "abbottabad",
    name: "Abbottabad",
    city: "Abbottabad",
    address:
      "Markez-e-Hijama Rehman, DSP Plaza, Opposite OPD Gate No. 4, Ayub Medical Complex, Abbottabad",
    shortAddress:
      "Markez-e-Hijama Rehman, DSP Plaza, Opp. OPD Gate No. 4, Ayub Medical Complex, Abbottabad",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=DSP+Plaza+Ayub+Medical+Complex+Abbottabad",
    coords: [34.1688, 73.2215],
  },
];

export const practitioner = {
  name: "Shahjahan",
  role: "Lead Hijama Practitioner",
  image: "/images/practitioners/shahjahan.jpg",
  credentials: [
    "D.A.H.",
    "M.D.H.",
    "D.M.S.S.",
    "Gold Medalist in Tibb-e-Nabavi",
    "20+ years of experience",
  ],
} as const;

export const trustIndicators = [
  "1,000+ Customers Served",
  "Qualified Practitioners",
  "Male & Female Practitioners",
  "Private Sessions",
  "Single-Use Equipment",
  "Sterilization Procedures",
  "Multiple Locations",
  "9 AM–9 PM Availability",
] as const;

export const whyChooseUs = [
  {
    title: "Safe & Clean Environment",
    text: "Single-use equipment and sterilization procedures for every session.",
    icon: "shield",
  },
  {
    title: "Private & Comfortable Sessions",
    text: "Private treatment spaces designed for your comfort and dignity.",
    icon: "heart",
  },
  {
    title: "Male & Female Practitioner Availability",
    text: "Female Hijama is performed by a female practitioner on request.",
    icon: "user",
  },
  {
    title: "Qualified & Certified Practitioners",
    text: "Trained, experienced practitioners with recognised qualifications.",
    icon: "certificate",
  },
] as const;

export const certificates = [
  {
    slug: "certificate-registration",
    title: "Certificate of Registration",
    image: "/images/certificates/certificate-tibb-council.jpg",
  },
  {
    slug: "certificate-diploma",
    title: "Diploma",
    image: "/images/certificates/certificate-diploma.jpg",
  },
  {
    slug: "certificate-gold-medalist",
    title: "Gold Medalist",
    image: "/images/certificates/certificate-gold-medalist.jpg",
  },
  {
    slug: "certificate-training",
    title: "Training Certificate",
    image: "/images/certificates/certificate-training.jpg",
  },
] as const;

// SAMPLE reviews — replace every item below with real, clinic-approved Google review
// text/names before launch. Only publish what the clinic is permitted to publish.
export const reviews = {
  ratingSummary: { score: 4.9, count: 120, source: "Google Reviews" },
  items: [
    {
      name: "Ayesha S.",
      city: "Islamabad",
      text: "Very professional and caring staff. The session was comfortable and well organised. Highly recommend.",
    },
    {
      name: "Usman R.",
      city: "Rawalpindi",
      text: "Clean environment and experienced practitioners. Great service. Will definitely visit again.",
    },
    {
      name: "Sara K.",
      city: "Islamabad",
      text: "Had a great experience with their female practitioner. The privacy and care were excellent.",
    },
    {
      name: "Bilal A.",
      city: "Islamabad",
      text: "Booked online and the team called back the same day. Single-use equipment, very hygienic setup.",
    },
    {
      name: "Fatima N.",
      city: "Rawalpindi",
      text: "Requested home service and it was smooth and private. The practitioner was punctual and professional.",
    },
    {
      name: "Hamza R.",
      city: "Abbottabad",
      text: "Traditional Sunnah Hijama done properly. Calm environment and clear aftercare advice.",
    },
  ],
} as const;

export const faqs = [
  {
    q: "What is Hijama?",
    a: "Hijama (cupping) is a traditional practice that uses suction cups on the skin. In wet cupping, tiny surface scratches are made so a small amount of blood is drawn with the suction. Sessions are performed by qualified practitioners with single-use equipment.",
  },
  {
    q: "Is fasting required before hijama session?",
    a: "Yes, 4 hours of fasting is required for attending a hijama session.",
  },
  {
    q: "What happens during a session?",
    a: "The practitioner discusses your request, prepares the area, applies the cups, and completes the treatment. The whole session is done privately and calmly, and single-use equipment is used throughout.",
  },
  {
    q: "What are the Sunnah Hijama dates?",
    a: "The preferred dates are the 17th, 19th, and 21st of the Islamic lunar month. Gregorian dates change every month and may vary according to local moon sighting.",
  },
  {
    q: "Are sessions private?",
    a: "Yes. Every session takes place in a private treatment space.",
  },
  {
    q: "Is a female practitioner available for women?",
    a: "Yes. Female Hijama is performed by a female practitioner. Select “Female” under Preferred Practitioner when you send your request.",
  },
  {
    q: "Is home service available?",
    a: "Yes — home service is available.",
  },
  {
    q: "Where are the clinics located?",
    a: "We have branches at Barakhu, F-7 Markaz and Bahria Enclave in Islamabad, and one in Abbottabad. Full addresses and directions are in the Locations section.",
  },
  {
    q: "How do I request an appointment?",
    a: "Fill in the booking form on this page with your preferred service, location, date and time. You can also reach us on WhatsApp.",
  },
  {
    q: "Is my appointment confirmed immediately?",
    a: "No. Submitting the form sends us an appointment request. Our team reviews it and contacts you to confirm the appointment separately.",
  },
] as const;
