# Product Requirements Document (PRD)
# Shahjahan Hijama Clinic — Conversion-Focused One-Page Website

**Document status:** Implementation-ready baseline
**Version:** 2.0
**Primary audience:** Coding agent / frontend developer
**Source of truth for product decisions:** This document + `design.md`
**Visual reference:** Supplied Shahjahan Hijama website mockup

---

## 1. Product Definition

### 1.1 Product
A fast, mobile-first, conversion-focused one-page website for **Shahjahan Hijama Clinic**.

### 1.2 Primary objective
Generate qualified appointment requests and make it extremely easy for visitors to understand the clinic, services, locations, privacy options, practitioner availability, and booking process.

### 1.3 Brand
**Shahjahan Hijama Clinic**

### 1.4 Brand tagline
**Reviving the Sunnah Since 2004.**

Use this tagline consistently as a compact brand statement. Do not rewrite it into a longer tagline unless explicitly requested later.

### 1.5 Primary service markets
- Islamabad
- Rawalpindi

### 1.6 Additional physical location
- Abbottabad

### 1.7 Language
English.

### 1.8 Site model
**Single-page / long-scroll public website.**

Do not create separate public service pages, branch/location pages, blog pages, hygiene pages, or practitioner pages for this release.

Primary route:

```text
/
```

Use section anchors for navigation:

```text
#home
#services
#locations
#home-service
#about
#reviews
#faqs
#book-appointment
```

---

# 2. Business Information

## 2.1 Contact

**Phone:** `03376122210`

**WhatsApp:** `03376122210`

**Email:** `shahjahanhijamaclinic786@gmail.com`

## 2.2 Social profiles

Instagram:
`https://www.instagram.com/shahjahanhijama?stkn=MWN2cXEyZXQ0bnJ6NA==`

Facebook:
`https://www.facebook.com/share/1QDAdL8fta/`

TikTok:
`https://vm.tiktok.com/ZS9SyNSB8NRAW-aytDd/`

## 2.3 Opening hours

**Monday–Sunday: 9:00 AM–9:00 PM**

Do not display 10 PM anywhere.

## 2.4 Pricing

Do **not** display service prices anywhere on the public website.

Do not replace prices with a WhatsApp-pricing message. Simply omit pricing from the site.

---

# 3. Core Customer Journey

The primary journey is:

```text
Google / Social / Referral
        ↓
Homepage
        ↓
Trust + Services + Locations + Privacy + Practitioner Information
        ↓
Book Appointment CTA
        ↓
Booking Form
        ↓
Form submitted
        ↓
Success message
        ↓
Clinic receives submission by email
        ↓
Submission is recorded in Google Sheet
        ↓
Clinic manually reviews request
        ↓
Clinic contacts customer manually
        ↓
Appointment is confirmed separately by clinic
```

### Critical distinction

**Submitting the form does NOT confirm an appointment.**

The website must never say or imply that an appointment is automatically confirmed.

The success state should communicate only that the **appointment request has been submitted/received**.

---

# 4. Scope

## 4.1 In scope for launch

- One-page responsive website
- Homepage/landing-page sections
- Sticky WhatsApp button
- Anchor navigation
- Service cards
- Location cards
- Interactive map using OpenStreetMap-based implementation
- Google Maps direction links for each clinic
- About section
- Practitioner section
- Reviews section
- FAQ accordion
- Booking form
- Home-service conditional address field
- Client-side validation
- Lightweight form submission integration
- Email notification to clinic
- Google Sheet record of submissions
- Submission success and failure states
- Certificate/document display
- Certificate lightbox/viewer
- SEO foundations
- Analytics foundations
- Mobile responsive behavior
- Accessibility foundations
- Fast image delivery

## 4.2 Explicitly out of scope for launch

Do not build these unless explicitly requested later:

- Admin dashboard
- Custom database
- User accounts
- Patient portal
- Online payment
- Live appointment availability
- Calendar synchronization
- Automatic appointment confirmation
- Automatic WhatsApp API messaging
- Individual service pages
- Individual branch pages
- Blog/CMS
- Dedicated Hygiene & Safety page
- Dedicated Practitioner page
- Complex booking management system
- Online pricing system

Post-launch improvements can be evaluated later based on actual business needs.

---

# 5. Information Architecture

## 5.1 Navbar

Desktop navigation:

```text
Home
Services
Locations
Home Service
About
Reviews
FAQs
[ Book Appointment ]
```

Rules:
- `Home` scrolls to the hero/top.
- `Services` scrolls to Services.
- `Locations` scrolls to Locations.
- `Home Service` scrolls to Home Service.
- `About` scrolls to About.
- `Reviews` scrolls to Reviews.
- `FAQs` scrolls to FAQs.
- `Book Appointment` scrolls directly to the booking form.
- Do not add a Call button to the navbar.
- Do not add a second CTA that duplicates the appointment CTA.

## 5.2 Mobile navigation

Use a compact hamburger menu with the same section anchors.

Keep the `Book Appointment` action prominent.

A **sticky/floating WhatsApp button** must remain available at the bottom-right.

There is no floating Call button.

---

# 6. Homepage Structure

Implement this exact section order unless a later approved design change says otherwise:

```text
1. Navbar
2. Hero
3. Trust / Feature Strip
4. Why Choose Shahjahan Hijama Clinic
5. Services
6. Privacy & Female Practitioner Information
7. Home Hijama Service
8. Locations
9. Qualified Practitioners
10. Selected Certificates / Trust Proof
11. Google Reviews
12. FAQs
13. Final Booking CTA
14. Booking Form
15. Contact / social information
16. Footer
17. Floating WhatsApp button
```

The supplied visual mockup is the primary reference for composition, spacing, hierarchy, card treatment, and section relationships.

---

# 7. Hero Requirements

## 7.1 Required content

Brand/eyebrow may communicate:

**TRADITIONAL HEALING • MODERN CARE**

Primary headline direction:

**Trusted Hijama Care in Islamabad, Rawalpindi & Abbottabad**

Supporting copy should be concise and trustworthy. It should emphasize professional Hijama/cupping services, qualified practitioners, privacy, cleanliness, and convenient booking without unsupported medical promises.

Primary CTA:

**Book an Appointment**

Secondary CTA:

**Chat on WhatsApp**

WhatsApp CTA must open:

```text
a href="https://wa.me/923376122210"
```

The hero must use the existing real image named conceptually **`Shahjahan performing Hijama`** as the hero photograph.

### Important
Do not replace this hero photograph with an AI-generated image.

Do not materially alter the person in the photograph.

Responsive cropping/repositioning is allowed to fit the layout.

---

# 8. Trust / Feature Strip

Use a horizontal/light sage feature strip similar to the supplied mockup.

Recommended trust indicators:

- 1,000+ Customers Served
- Qualified Practitioners
- Male & Female Practitioners
- Private Sessions
- Single-Use Equipment
- Sterilization Procedures
- Multiple Locations
- 9 AM–9 PM Availability

On smaller screens, transform this into a responsive grid or horizontally scrollable row rather than shrinking text into unreadable sizes.

Only display factual claims that the clinic can substantiate.

---

# 9. Why Choose Shahjahan Hijama Clinic

Purpose: answer the visitor's trust questions quickly.

Recommended benefits:

- Qualified & Certified Practitioners
- Safe & Clean Environment
- Private & Comfortable Sessions
- Traditional & Sunnah Hijama Options
- Convenient Booking
- Male & Female Practitioner Availability

Use compact visual icon blocks consistent with `design.md`.

---

# 10. Services

## 10.1 Services at launch

Exactly these seven:

1. Wet Cupping
2. Sunnah Hijama
3. Dry Cupping
4. Facial Cupping
5. Hair Loss Hijama
6. Venesection (Fasd)
7. Wooden Therapy

## 10.2 Service cards

Every card contains:

```text
Image
Service name
Short description
Learn More →
```

The supplied mockup is the structural reference.

## 10.3 Learn More behavior

`Learn More →` scrolls to the booking form and automatically preselects that service.

Example:

```text
Wet Cupping
Learn More →
      ↓
#book-appointment
Service = Wet Cupping
```

This is a conversion interaction, not a route to another page.

## 10.4 Medical language

Service descriptions should explain what the service involves, what a customer can expect, and relevant safety/privacy details.

Avoid unsupported guarantees, guaranteed cures, disease-treatment claims, or statements implying established clinical efficacy when evidence is uncertain.

No hard rule forbids all health-related language; write it responsibly and avoid overclaiming.

---

# 11. Privacy & Female Practitioner Section

Purpose: make privacy and female-practitioner availability highly visible.

Message themes:

- Private sessions
- Female Hijama performed by a female practitioner
- Male and female practitioner availability
- Comfortable environment
- Customer practitioner preference

CTA:

**Request a Female Practitioner**

CTA behavior:
- Scroll to booking form.
- Set `Preferred Practitioner` to `Female`.

## Important visual decision

Do **not** display an anonymous female practitioner profile card.

The existence of female practitioner availability should be communicated through content, trust indicators, and the booking form.

---

# 12. Home Hijama Service

Section title:

**Hijama at Your Home**

Explain that home service is primarily available in Islamabad and Rawalpindi, with address coverage reviewed manually by the clinic.

CTA:

**Request Home Service**

CTA behavior:
- Scroll to booking form.
- Set `Clinic / Home Service = Home Service`.
- Reveal the `Home Address` field.

### Address coverage

The website must NOT automatically reject addresses or attempt to determine service coverage.

The submitted address will be reviewed manually by clinic staff.

---

# 13. Locations

## 13.1 Physical branches

### Barakhu
Imran Plaza, Opposite Attock Petrol Pump, Near Umaniya Restaurant, Main Murree Road, Barakhu, Islamabad

### F-7 Markaz
Safa Gym, 5th Floor, Safa Gold Mall, Plot No. 5, F-7 Markaz, Islamabad

### Bahria Enclave
Plaza Burj-ul-Bilal, Office No. 3, Ground Floor, Bahria Enclave, Kuri Road, Near Attock Pump, Newmal, Islamabad

### Abbottabad
Markez-e-Hijama Rehman, DSP Plaza, Opposite OPD Gate No. 4, Ayub Medical Complex, Abbottabad

## 13.2 Location cards

Cards should show:

```text
Location image
Branch name
Short address
Get Directions →
```

Optional small support text may include opening hours if visually appropriate.

## 13.3 Get Directions

Use Google Maps URLs rather than requiring a Google Maps JavaScript/API integration for simple directions links.

Use a specific place/address destination for each branch.

## 13.4 Interactive map

Use an OpenStreetMap-based interactive map for the location section.

The map should show all four physical branch points.

Do not require a paid map API for this feature.

---

# 14. Practitioner Section

## 14.1 Practitioners

There are two practitioners:

### Male practitioner
Display name:
**Shahjahan**

Credentials:

- D.A.H.
- M.D.H.
- D.M.S.S.
- Gold Medalist in Tibb-e-Nabavi
- 20+ years of experience

Use the real professional headshot available in the project assets.

### Female practitioner

Do not publicly display her name.

Do not create a visible anonymous practitioner profile card for launch.

Her availability is represented as:

**Female Practitioner**

in the booking form and privacy/female-care messaging.

Do not specify individual branch assignments for either practitioner.

---

# 15. Certificates / Trust Proof

Use real certificate assets supplied by the clinic.

Selected certificates shown publicly:

1. Certificate of Registration
2. Diploma
3. Gold Medalist

The remaining certificates may remain in the asset library but do not need to be prominent on the homepage.

## 15.1 Interaction

Clicking a certificate opens a larger viewer/lightbox.

The viewer must:
- Preserve document readability.
- Support close action.
- Work on mobile.
- Allow the user to inspect the full document.

Certificate details may remain visible because the clinic has explicitly approved public display.

Do not fabricate, edit, or AI-generate certificates.

---

# 16. Reviews

Use authentic Google reviews.

Do not fabricate testimonials.

The website may display manually approved review excerpts rather than implementing a live Google Reviews API in the first release.

Recommended presentation:

```text
Trusted by 1,000+ Customers

Google rating summary
Approved review cards
```

Only publish review text/name/photo information that the clinic is allowed to publish.

---

# 17. FAQs

Use an accordion component.

FAQ content should answer common practical questions such as:

- What is Hijama?
- What is Sunnah Hijama?
- What happens during a session?
- What should I expect before/after a session?
- Are sessions private?
- Is a female practitioner available for women?
- Is home service available?
- Where are the clinics located?
- How do I request an appointment?
- Is my appointment confirmed immediately?

The FAQ must make clear that the website form is an **appointment request**, not live appointment confirmation.

---

# 18. Booking Form

## 18.1 Purpose

Capture enough information for clinic staff to review and contact the customer while keeping the form short.

## 18.2 Fields

### Personal information

- Full Name — required
- WhatsApp — required
- Email — optional

### Appointment

- Service — required
- Location — required for clinic appointments
- Clinic / Home Service — required
- Preferred Date — required
- Preferred Time — required
- Preferred Practitioner — required

### Additional

- Concern / Message — optional

### Conditional field

When `Clinic / Home Service = Home Service`, reveal:

- Home Address — required

Do not ask for a separate home-service city selector.

## 18.3 Preferred Practitioner

Use **one field only**:

```text
Preferred Practitioner

○ Male
○ Female
```

No `No Preference` option is required for the launch specification.

The customer is responsible for selecting the preference that reflects their request.

## 18.4 Location behavior

For clinic appointments, show exactly:

```text
Barakhu
F-7 Markaz
Bahria Enclave
Abbottabad
```

For home service, hide the branch-location selector and reveal `Home Address`.

The address is manually reviewed by clinic staff.

## 18.5 Date

- Prevent selecting dates in the past.
- Use the visitor's local date where possible.
- Do not implement live availability.
- Do not disable dates merely because the clinic may later need to review them.

## 18.6 Time

Preferred time must be within:

**9:00 AM–9:00 PM**

This is a preferred time request, not a live slot reservation.

## 18.7 Validation

Client-side validation must include:

- Required fields
- Valid email format when email is provided
- Non-empty name
- Non-empty WhatsApp number
- Valid date not in the past
- Valid preferred time
- Required service
- Required practitioner preference
- Required location for clinic appointment
- Required address for home service

Do not restrict WhatsApp/phone to only Pakistani number formats.

## 18.8 Duplicate / double-submit protection

Disable the submit button while submitting and prevent accidental double submission.

---

# 19. Booking Submission Architecture

## 19.1 Architecture requirement

There will be **no custom application backend and no database** for launch.

Use a lightweight hosted/serverless form submission endpoint.

### Recommended implementation

Use **Google Apps Script deployed as a Web App** as the lightweight submission endpoint.

The script should:

1. Receive the form POST.
2. Validate/sanitize expected fields.
3. Append the request as a new row in a Google Sheet.
4. Send an email notification to `shahjahanhijamaclinic786@gmail.com`.
5. Return a simple success/failure response.

The Google Sheet is the staff's simple lead record for launch.

The clinic can connect/configure the Google account later.

## 19.2 Why this architecture

It avoids:
- Custom backend hosting.
- Database costs.
- Admin-dashboard development.
- Unnecessary infrastructure.

Google Apps Script web apps support `doPost` HTTP handling and can execute as the deploying account, making this appropriate for a lightweight form endpoint. Google documents current quotas, including daily email-recipient limits, so the implementation should handle failures gracefully and the clinic should use a suitable Google account for the expected lead volume.

## 19.3 Secrets/configuration

Never hard-code private credentials, tokens, or the eventual Google Apps Script deployment URL in documentation intended for public sharing.

Keep deployment/configuration values in environment/configuration settings as appropriate.

The Google Sheet and Apps Script are operational infrastructure, not part of the public frontend repository's UI.

---

# 20. Email Notification

Each successful form submission should produce an email to:

`shahjahanhijamaclinic786@gmail.com`

Recommended subject:

```text
New Appointment Request — [Customer Name]
```

Recommended body:

```text
NEW APPOINTMENT REQUEST

Name: [Name]
WhatsApp: [WhatsApp]
Email: [Email or Not Provided]

Service: [Service]
Location: [Branch or Home Service]
Home Address: [Address if applicable]
Preferred Date: [Date]
Preferred Time: [Time]
Preferred Practitioner: [Male/Female]

Concern / Message:
[Message]

Submitted from the Shahjahan Hijama Clinic website.
Appointment is not automatically confirmed.
```

The email should not expose unnecessary technical/internal data.

---

# 21. Google Sheet Structure

Recommended columns:

```text
Timestamp
Full Name
WhatsApp
Email
Service
Clinic/Home
Location
Home Address
Preferred Date
Preferred Time
Preferred Practitioner
Concern/Message
Source/UTM
```

No patient portal or staff status management is required for launch.

The sheet is simply a reliable record of submitted requests.

---

# 22. Form Success State

After a successful submission, show a clear success state inside/adjacent to the booking form:

**Your appointment request has been submitted.**

Supporting text:

**Our team will review your request and contact you to confirm the appointment.**

Do not automatically open WhatsApp.

Do not say `Appointment Confirmed`.

Do not redirect the user to WhatsApp.

---

# 23. Form Failure State

If the submission endpoint is unavailable or an unexpected error occurs, show a clear recovery message.

Recommended:

**We couldn't submit your request right now. Please try again or contact us on WhatsApp.**

Provide a WhatsApp recovery CTA.

The site should never silently discard a lead.

---

# 24. WhatsApp

Use one persistent/floating WhatsApp button:

```text
https://wa.me/923376122210
```

Requirements:
- Bottom-right floating position.
- Mobile-friendly.
- Accessible label.
- Opens WhatsApp conversation.
- No automatic message required.
- No WhatsApp API integration.
- No automatic redirect after form submission.

Desktop may also show a compact `Chat on WhatsApp` CTA where appropriate, especially in the hero/contact areas, but do not turn the navbar into multiple competing contact buttons.

---

# 25. About Section

The About content is a section, not a separate page.

It should communicate:

- Shahjahan Hijama Clinic's long-running identity.
- `Reviving the Sunnah Since 2004.`
- Professional approach.
- Traditional/Sunnah orientation.
- Privacy.
- Hygiene.
- Qualified care.

Avoid a long corporate biography.

Use the supplied real practitioner/clinic imagery where appropriate.

---

# 26. Footer

The footer should be deep green and structured.

Include:

- Shahjahan Hijama Clinic logo
- Tagline
- Short clinic description
- Phone
- WhatsApp
- Email
- Opening hours
- Key location names
- Social media links
- Quick anchor links
- Book Appointment CTA
- Copyright
- Privacy Policy link
- Disclaimer link

The first release does not require a public Terms/Privacy/Cookie page because those documents have not yet been supplied, but the footer should have architecture ready for those links to be added later.

Do not invent legal copy and present it as an official clinic policy.

---

# 27. Medical / Wellness Disclaimer

A disclaimer is required.

Use a concise, responsible statement explaining that the website provides general information and that an appointment request does not constitute medical diagnosis or an automatically confirmed appointment.

Do not create unsupported clinical claims.

Do not claim that every condition can be treated by Hijama.

The disclaimer should not visually dominate the site.

---

# 28. Images and Asset System

## 28.1 Existing assets that must be reused

The current project already contains:

- logo
- Shahjahan practitioner photo
- Shahjahan performing Hijama photo
- Certificate of Registration
- Diploma Certificate
- Gold Medalist Certificate
- other training/registration certificates
- reference/mockup image

## 28.2 Hero asset

Use:

```text
hero-hijama.jpg
```

as the normalized project filename for the real `Shahjahan performing Hijama` photo.

The actual existing source file can be renamed/copy-mapped to this easy filename.

## 28.3 Planned service assets

Generate/provide these later using exactly these easy filenames:

```text
wet-cupping.jpg
sunnah-hijama.jpg
dry-cupping.jpg
facial-cupping.jpg
hair-loss-hijama.jpg
fasd.jpg
wooden-therapy.jpg
```

## 28.4 Planned supporting assets

```text
home-hijama.jpg
about-hijama.jpg
```

Only create these if needed after the real available assets are reviewed.

## 28.5 Location assets

Create/provide real or approved images using:

```text
barakhu.jpg
f7-markaz.jpg
bahria-enclave.jpg
abbottabad.jpg
```

Use real branch photographs whenever available.

## 28.6 Practitioner asset

```text
shahjahan.jpg
```

Use the real professional headshot.

Do not fabricate the female practitioner's identity or use an AI portrait as though it were her.

## 28.7 Certificate assets

Normalize selected public certificates to:

```text
certificate-registration.jpg
certificate-diploma.jpg
certificate-gold-medalist.jpg
```

Do not alter certificate content.

---

# 29. AI Image Generation Prompts

These prompts are for supporting photography only. The real Shahjahan hero photograph remains the source-of-truth hero asset.

## 29.1 Wet Cupping

```text
Photorealistic premium commercial healthcare photography of a professional Hijama wet cupping session, transparent Hijama cups carefully positioned on the back of an adult patient, gloved practitioner hands, clean modern Pakistani clinic interior, warm natural daylight, sage green and cream palette, hygienic organized equipment, calm trustworthy atmosphere, realistic skin texture, high-end editorial photography, no visible blood, no wounds, no graphic imagery, no text, no logo, no watermark, horizontal composition suitable for a website service card.
```

## 29.2 Sunnah Hijama

```text
Photorealistic premium commercial healthcare photography of traditional Sunnah Hijama treatment in a clean modern Pakistani clinic, several transparent cupping cups arranged on an adult patient's upper back, professional gloved practitioner, warm natural light, subtle traditional wellness identity, sage green and cream environment, hygienic and trustworthy, realistic Pakistani setting, no visible blood, no wounds, no graphic imagery, no text, no logo, no watermark, horizontal website card composition.
```

## 29.3 Dry Cupping

```text
Photorealistic professional dry cupping therapy session, transparent suction cups placed on an adult patient's back, trained practitioner wearing clean disposable gloves, bright modern Hijama clinic, warm daylight, sage and cream interior, realistic skin texture, clean equipment, premium healthcare editorial photography, no cuts, no blood, no graphic imagery, no text, no logo, no watermark, horizontal composition.
```

## 29.4 Facial Cupping

```text
Photorealistic premium facial cupping treatment performed by a professional practitioner on an adult woman, small facial cups used carefully on the cheek area, clean hygienic clinic, warm natural daylight, calm respectful expression, realistic skin texture, sage green and cream palette, premium wellness healthcare photography, no injury, no blood, no text, no logo, no watermark, horizontal website image.
```

## 29.5 Hair Loss Hijama

```text
Photorealistic premium healthcare photography of a professional Hijama practitioner performing a scalp-focused treatment on an adult male patient, clean gloves and organized equipment, modern Pakistani clinic, warm natural daylight, realistic skin and hair texture, professional and hygienic atmosphere, tasteful non-graphic composition, no blood, no wound, no text, no logo, no watermark, horizontal website image.
```

## 29.6 Venesection / Fasd

```text
Photorealistic premium healthcare editorial photograph showing preparation for a traditional venesection/Fasd procedure inside a clean Hijama clinic, gloved practitioner preparing sterile equipment beside a treatment bed, restrained medical composition, warm natural light, sage green and cream environment, professional hygienic atmosphere, no visible blood, no wound, no graphic imagery, no text, no logo, no watermark, horizontal service-card composition.
```

## 29.7 Wooden Therapy

```text
Photorealistic premium commercial wellness photography of traditional wooden therapy being performed on an adult patient's back using smooth wooden therapy tools, professional practitioner, clean modern Pakistani clinic, warm natural light, sage green and cream environment, calm relaxing atmosphere, realistic skin texture, hygienic professional setting, no text, no logo, no watermark, horizontal website service-card composition.
```

## 29.8 Home Hijama

```text
Photorealistic premium commercial healthcare photography of a Pakistani male Hijama practitioner providing a professional cupping treatment in a comfortable modern Pakistani home, clean dark navy medical scrubs, disposable gloves, portable Hijama equipment organized neatly beside the treatment area, warm natural daylight, trustworthy and hygienic service, realistic local environment, calm family-friendly feeling, no blood, no wounds, no text, no logo, no watermark, wide horizontal website composition.
```

---

# 30. Image Rules

- Prefer authentic clinic/practitioner photography where available.
- AI-generated images must not impersonate a real clinic employee.
- Do not AI-generate certificates.
- Do not replace the actual Shahjahan hero image.
- Avoid graphic blood/wound imagery in general website marketing photography.
- Keep skin texture and equipment realistic.
- Do not use generic spa imagery.
- Do not use stock-looking white Western hospital scenes when a local context is appropriate.

---

# 31. SEO Requirements

Use descriptive, stable anchor-based one-page content while retaining meaningful semantic structure.

Core target concepts:

- Hijama Islamabad
- Hijama Rawalpindi
- Hijama Abbottabad
- Hijama clinic Islamabad
- Hijama home service Islamabad
- Hijama home service Rawalpindi
- Female Hijama Islamabad
- Sunnah Hijama Islamabad
- Wet Cupping Islamabad
- Dry Cupping Islamabad
- Facial Cupping Islamabad

Do not create fake/tinny pages solely for keywords.

## Technical SEO

Implement:

- Unique page title
- Meta description
- Canonical URL
- Open Graph metadata
- Twitter/X metadata where supported
- `robots.txt`
- `sitemap.xml`
- Semantic headings
- Descriptive image alt text
- Internal anchor navigation
- Local business structured-data foundation
- FAQ structured data only when appropriate and supported by visible FAQ content

The homepage must target the brand + local intent naturally rather than keyword stuffing.

---

# 32. Analytics

Analytics should measure conversion behavior rather than only page views.

Recommended launch events:

```text
hero_book_appointment_click
whatsapp_click
service_learn_more_click
location_directions_click
booking_form_view
booking_form_start
booking_form_submit
booking_form_success
booking_form_error
home_service_selected
female_practitioner_selected
certificate_opened
```

Support UTM capture where practical:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
```

Do not block basic site use if analytics fails.

No sensitive health information should be sent to analytics platforms.

---

# 33. Accessibility

Target a strong WCAG 2.2 AA baseline.

Required foundations:

- Semantic HTML
- Proper heading hierarchy
- Visible keyboard focus states
- Keyboard-accessible menu/accordion/lightbox
- Form labels associated with controls
- Accessible error text
- Meaningful button labels
- Appropriate color contrast
- Alt text for meaningful images
- Decorative images marked appropriately
- Reduced-motion support
- Touch-friendly controls

Do not rely on color alone to communicate form errors or selected states.

---

# 34. Performance

The website must be optimized for mobile visitors and slow connections.

Requirements:

- Static-first architecture
- Minimize JavaScript
- Lazy-load non-critical images
- Prioritize the hero image appropriately
- Use responsive image sizes
- Prefer modern compressed image formats when supported
- Avoid heavy animation libraries unless genuinely required
- Avoid auto-playing video
- Avoid unnecessary third-party scripts
- Keep map integration isolated and lazy where practical

The visual experience must remain close to the supplied mockup without sacrificing load performance.

---

# 35. Recommended Technical Stack

Use a modern static-first stack suited to a small marketing/lead-generation site:

```text
Next.js (App Router)
React
TypeScript
Tailwind CSS
```

Recommended deployment:

```text
Vercel
```

External lightweight form infrastructure:

```text
Google Apps Script Web App
Google Sheets
Email via Apps Script
```

No custom backend or database.

Use reusable React components and data-driven arrays for services, locations, certificates, FAQs, and navigation rather than duplicating markup.

---

# 36. Suggested Project Structure

```text
app/
  page.tsx
  layout.tsx
  globals.css
  robots.ts
  sitemap.ts

components/
  navbar.tsx
  hero.tsx
  trust-strip.tsx
  why-choose-us.tsx
  service-card.tsx
  services-section.tsx
  privacy-section.tsx
  home-service-section.tsx
  location-card.tsx
  locations-section.tsx
  practitioner-section.tsx
  certificate-gallery.tsx
  reviews-section.tsx
  faq-section.tsx
  booking-form.tsx
  final-cta.tsx
  footer.tsx
  whatsapp-button.tsx
  lightbox.tsx

lib/
  site-data.ts
  validation.ts
  analytics.ts
  maps.ts

public/images/
  brand/
  hero/
  services/
  locations/
  practitioners/
  certificates/
```

Do not over-engineer the project.

---

# 37. Brand Data

Centralize these values in one data/config location so future edits are easy:

```text
clinicName
clinicTagline
phone
whatsapp
email
socialLinks
openingHours
locations
services
practitioner
```

Do not hard-code the same business details across many components.

---

# 38. Security / Privacy

The form should collect only information needed to process an appointment request.

Do not ask for a detailed medical history.

The concern/message field should be optional.

Do not expose submitted customer data in frontend code.

Do not send health-related form content into analytics events.

Use HTTPS in production.

Keep Google Apps Script deployment configuration and spreadsheet access under the clinic's Google account.

---

# 39. Error / Edge Cases

The frontend must handle:

- Missing required field
- Invalid email
- Invalid date
- Invalid preferred time
- Home service without address
- Failed form submission
- Slow form submission
- Double click / duplicate submit attempt
- Failed WhatsApp link
- Image loading failure
- Map unavailable
- Empty review list during development
- Missing non-critical location image

The page itself should remain usable if a third-party widget fails.

---

# 40. Acceptance Criteria

The launch build is complete when all of the following are true:

### Product
- [ ] Single-page website only.
- [ ] Required navbar anchors work.
- [ ] Book Appointment scrolls to the booking form.
- [ ] Sticky WhatsApp button works.
- [ ] No Call button is present in the navbar.
- [ ] No prices are displayed.

### Visual
- [ ] Visual structure closely reflects the supplied mockup.
- [ ] Hero uses the real Shahjahan performing Hijama image.
- [ ] Pale sage navbar is preserved.
- [ ] Deep green CTAs are preserved.
- [ ] Warm off-white background is preserved.
- [ ] Service cards use photographic imagery.
- [ ] Locations use location imagery/map.
- [ ] Mobile design is intentionally adapted rather than merely shrunk.

### Booking
- [ ] Form includes all specified fields.
- [ ] One Preferred Practitioner field with Male/Female.
- [ ] Home Service reveals Home Address.
- [ ] Clinic selection shows the four branches.
- [ ] Past dates cannot be selected.
- [ ] Time selection is within 9 AM–9 PM.
- [ ] Form does not provide live availability.
- [ ] Successful submission displays request-submitted state.
- [ ] Successful request is recorded in Google Sheet.
- [ ] Successful request generates clinic email.
- [ ] Failed submission gives recovery path.
- [ ] Form submission never states that the appointment is confirmed.

### Trust
- [ ] Real practitioner image used.
- [ ] Selected real certificates displayed.
- [ ] Certificate viewer works.
- [ ] Review content is authentic.
- [ ] Female practitioner availability is communicated without exposing her name.

### Technical
- [ ] No custom database.
- [ ] No admin dashboard.
- [ ] No service/location subpages.
- [ ] SEO metadata exists.
- [ ] Sitemap/robots exist.
- [ ] Accessibility basics implemented.
- [ ] Images are optimized.
- [ ] No unnecessary heavy client-side code.

---

# 41. Post-Launch / Deferred Improvements

These are intentionally not launch blockers:

- Google review automation/API
- Dedicated service pages
- Dedicated location pages
- CMS/blog
- Admin dashboard
- Lead-status management
- Live calendar availability
- Automated WhatsApp API messaging
- CRM integration
- Online payment
- Advanced lead attribution
- Dedicated legal pages once official clinic text is supplied

Do not add deferred features just because an implementation seems easy. The launch build should remain focused and lightweight.

---

# 42. Final Product Principle

The website should make the visitor understand within seconds:

```text
What do they provide?
→ Professional Hijama / cupping services

Can I trust them?
→ Qualified practitioner + experience + real certificates + real reviews

Will my privacy be respected?
→ Private sessions + female practitioner option

Where are they?
→ Four physical locations + home service

How do I book?
→ Short request form

Is my appointment immediately confirmed?
→ No. The clinic reviews the request and confirms separately.
```

The website should feel like a **professional, trustworthy, modern Hijama clinic**, not like a generic hospital, spa, ecommerce site, or overly decorative religious website.

The supplied mockup remains the visual benchmark; creative deviation is allowed only when it clearly improves usability, clarity, performance, or weak content without changing the approved product direction.
