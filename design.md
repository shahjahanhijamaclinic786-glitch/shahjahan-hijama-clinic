# Design System — Shahjahan Hijama Clinic Website

**Document status:** Implementation-ready visual specification
**Version:** 2.0
**Primary reference:** Supplied Shahjahan Hijama website mockup
**Product model:** One-page conversion-focused clinic website

This document defines the visual system and component behavior for the launch website. The supplied mockup is the visual benchmark. Do not redesign the product into a different visual direction unless a component is demonstrably weak, confusing, inaccessible, or technically harmful.

---

# 1. Visual Direction

## Desired impression

```text
Clean
Clinical
Traditional
Warm
Trustworthy
Premium but approachable
```

The website should communicate a professional healthcare-style experience while preserving a clear traditional/Sunnah Hijama identity.

Avoid the visual extremes of:

- Generic hospital website
- Spa/luxury website
- Overly religious/decorative Islamic website
- Ecommerce dashboard
- Technology/SaaS landing page

Primary visual relationship:

```text
Warm Off-White
      ↓
Soft Sage Green
      ↓
Deep Hijama Green
```

---

# 2. Source-of-Truth Rules

1. The supplied mockup is the primary visual reference.
2. This document defines the reusable design system.
3. `PRD.md` defines product behavior and scope.
4. Do not invent sections that are absent from the approved one-page architecture.
5. Do not remove important sections merely to simplify coding.
6. When the mockup and a general design recommendation conflict, reproduce the mockup unless the conflict harms usability/accessibility/responsiveness.

---

# 3. Color System

## Primary palette

```text
Primary Deep Green:  #075B35
Dark Forest Green:   #06452A
Reference Sage:      #E2EFE5
Soft Sage:           #EDF5F0
Warm Off-White:      #F8F9F4
White:               #FFFFFF
Charcoal:            #171A18
Muted Green-Gray:    #68756D
```

## Navbar

The navbar MUST use the pale sage-green treatment visible in the supplied reference.

```text
Background: #E2EFE5
Primary text: #06452A
Active/hover: #075B35
Divider: rgba(6, 69, 42, 0.12)
```

Do not change the navbar to a dark green background.

## Usage balance

Target approximately:

```text
65–75% warm white / white
15–25% sage surfaces
5–10% deep green accents
```

Deep green is primarily for:

- CTAs
- Important headings
- Active navigation
- Icons
- Borders
- Small accents
- Section labels

Do not make the entire interface green.

---

# 4. Typography

Recommended:

```text
Headings: Manrope
Body/UI: Inter
```

Fallbacks should be system-safe.

## Headings

- Deep forest green
- Strong but not excessively bold
- Comfortable line-height
- Sentence case preferred
- Avoid excessive uppercase

## Section labels

Small uppercase labels may be used:

```text
OUR SERVICES
WHY CHOOSE US
OUR LOCATIONS
ABOUT SHAHJAHAN HIJAMA
```

Use restrained letter-spacing.

## Body text

- Charcoal or muted green-gray
- High readability
- Generous line height
- Avoid tiny descriptive text

---

# 5. Layout System

## Desktop

```text
Max content width: 1200–1280px
Section vertical padding: 80–110px
Card gap: 20–28px
Grid gap: ~24px
Button height: 44–52px
```

## Mobile

```text
Horizontal padding: 20–24px
Section vertical padding: 56–72px
Card gap: 16–20px
```

Do not cram large amounts of content into a single viewport.

---

# 6. Border Radius

```text
Small control:        8–10px
Input:                10–12px
Card:                 14–18px
Large feature block:  20–24px
Pill CTA:             999px
```

Use consistent rounding throughout.

---

# 7. Shadows and Borders

Prefer borders over heavy shadows.

Preferred shadow:

```text
0 4px 20px rgba(6, 69, 42, 0.06)
```

Cards should look clean and grounded rather than floating dramatically.

---

# 8. Navbar

## Desktop composition

```text
[ Logo ]

Home
Services
Locations
Home Service
About
Reviews
FAQs

[ Book Appointment ]
```

No Call button.

No second competing primary CTA.

## Appearance

- Sage background
- Subtle divider
- Spacious
- Moderate rounding only where the mockup calls for it
- Deep green text
- Deep green appointment CTA

## Behavior

- Sticky is preferred if it does not create visual obstruction.
- Anchor links should scroll smoothly to sections.
- Active section may have subtle visual emphasis.

## Mobile

```text
[ compact logo ]                         [ menu ]
```

Use a clean hamburger menu.

Keep the appointment CTA easy to reach.

The floating WhatsApp button remains at bottom-right.

---

# 9. Buttons

## Primary

```text
Background: #075B35
Text: #FFFFFF
Border: none
Radius: 999px
```

Use for:

- Book an Appointment
- Request Home Service
- Request a Female Practitioner
- Request/submit booking form

## Secondary

```text
Background: transparent
Text: #075B35
Border: 1px solid #075B35
Radius: 999px
```

Examples:

- Learn More
- Chat on WhatsApp
- Get Directions where visually appropriate

## Hover

Use subtle interaction only:

```text
150–250ms transition
slight darkening
optional 1–2px lift
```

Avoid exaggerated bounce, scale, glow, or magnetic effects.

---

# 10. Floating WhatsApp

Use one persistent WhatsApp action.

Position:

```text
fixed
right: 20–24px
bottom: 20–24px
```

On mobile, respect safe-area padding.

Use a recognizable WhatsApp icon and accessible label.

Do not add a floating Call button.

Do not automatically open WhatsApp after booking form submission.

---

# 11. Hero

The hero is the most important visual section.

## Target composition

```text
-------------------------------------------------
| text/content             | real hero image    |
|                          |                    |
| headline                 | Shahjahan          |
| supporting copy          | performing Hijama  |
| CTA + WhatsApp           |                    |
-------------------------------------------------
```

## Hero image requirement

Use the actual supplied photograph named conceptually:

**Shahjahan performing Hijama**

Normalize/use project filename:

```text
hero-hijama.jpg
```

Do not generate an AI replacement.

Do not materially alter the person, treatment, or photograph.

Responsive object positioning/cropping is allowed.

## Image presentation

- High visual quality
- Rounded corners consistent with the mockup
- Natural crop
- No aggressive filters
- No artificial glow
- No text over the photograph unless explicitly shown by the design composition

## Hero copy hierarchy

```text
Small eyebrow
↓
Large headline
↓
Supporting copy
↓
Primary CTA + WhatsApp CTA
↓
Trust micro-points if used
```

Do not overfill the hero.

---

# 12. Trust Strip

Immediately after the hero.

Use the pale sage feature strip visible in the mockup.

Visual construction:

```text
[symbol] metric/value
   | 
[symbol] metric/value
   |
...
```

On desktop:
- horizontal layout
- subtle dividers
- equal visual weight

On mobile:
- responsive grid or horizontal scroll
- readable text
- no tiny compressed labels

---

# 13. Why Choose Section

Use a clean centered heading and compact benefit items.

Suggested structure:

```text
small label
heading
supporting line

[benefit] [benefit] [benefit] [benefit]
```

Icons should be line-based and consistent.

Use soft sage circular icon containers if needed.

Do not turn the section into a dense feature matrix.

---

# 14. Service Card Design

Services use photographic cards, matching the supplied mockup.

Each card:

```text
┌─────────────────────┐
│                     │
│      IMAGE          │
│                     │
├─────────────────────┤
│ Service name        │
│ Short description   │
│ Learn More →        │
└─────────────────────┘
```

## Desktop

Target a four-column layout where space permits, matching the mockup's dense-but-clean service grid.

## Tablet

Two columns.

## Mobile

One column or a carefully designed compact two-column card system only if readability is preserved; default to one column for card content requiring descriptions.

## Card styling

```text
Background: #FFFFFF
Border: rgba(6,69,42,0.10)
Radius: 14–18px
Shadow: minimal
```

The card should feel like a professional healthcare service card, not a product/ecommerce card.

---

# 15. Service Images

Use these normalized filenames:

```text
wet-cupping.jpg
sunnah-hijama.jpg
dry-cupping.jpg
facial-cupping.jpg
hair-loss-hijama.jpg
fasd.jpg
wooden-therapy.jpg
```

Use consistent photographic treatment and aspect ratio.

Crop behavior:

```text
object-fit: cover
```

Do not distort photographs.

---

# 16. Privacy & Female Practitioner Section

This is a major trust/conversion section.

The reference direction uses a large image + text composition.

Preferred structure:

```text
[privacy/female-care image] [heading + benefit list + CTA]
```

The copy should visually emphasize:

- Private sessions
- Female practitioner availability
- Female Hijama performed by female practitioners
- Comfortable environment
- Customer practitioner preference

CTA:

**Request a Female Practitioner**

CTA scrolls to booking and preselects `Female`.

Do not show a female headshot/profile card or expose her name.

---

# 17. Home Service Section

Use a large horizontal feature section similar to the mockup.

Preferred visual structure:

```text
[ icon / copy / CTA ]             [ home service image ]
```

On mobile:

```text
copy
image
CTA
```

CTA:

**Request Home Service**

It scrolls to the booking form and sets the form mode to `Home Service`.

---

# 18. Location Card Design

Each location card should feel photographic and trustworthy.

Structure:

```text
┌──────────────────────────┐
│                          │
│       location image     │
│                          │
├──────────────────────────┤
│ Branch name              │
│ Short address            │
│ Get Directions →         │
└──────────────────────────┘
```

Do not show excessive address text in tiny font.

Use a shortened display address on card when necessary while retaining the full address in accessible content/data.

`Get Directions →` should be visually identifiable as the action.

---

# 19. Location Map

Use an OpenStreetMap-based interactive map for the four physical branches.

Visual style should remain subdued and compatible with the sage/green brand.

Do not let the map dominate the page.

On mobile:
- make it comfortably scrollable/zoomable
- provide location cards as the primary readable alternative

The location list should never depend entirely on the map.

---

# 20. Practitioner Section

Display the real male practitioner prominently.

Suggested visual card:

```text
[ Shahjahan real portrait ]

Shahjahan
Lead / Hijama Practitioner

D.A.H. • M.D.H. • D.M.S.S.
Gold Medalist in Tibb-e-Nabavi
20+ years of experience
```

Keep the presentation concise and credible.

Do not create a fake portrait for the female practitioner.

Do not show her name.

Use female-practitioner availability elsewhere in the design.

---

# 21. Certificates

Selected trust proof:

```text
Certificate of Registration
Diploma
Gold Medalist
```

Display as restrained certificate thumbnails/cards.

Click → lightbox/document viewer.

The viewer should allow:

- close
- inspect
- scroll/zoom as appropriate
- mobile use

Do not use certificate images as decorative wallpaper.

---

# 22. Reviews

Reference visual direction:

```text
section label
heading
short supporting line

Google rating / trust summary

[review card] [review card] [review card]
```

Cards should be light, white, and authentic.

Avoid giant quote typography or overly promotional language.

Do not fabricate reviewer identities.

---

# 23. FAQ Accordion

Use clean bordered white cards/rows on a soft background.

Interaction:
- clear plus/minus indicator
- keyboard accessible
- one or multiple open states are acceptable, but use the simpler behavior unless the mockup indicates otherwise
- smooth but subtle transition

Do not use overly animated accordions.

---

# 24. Final CTA

Use a strong deep-green section near the bottom.

```text
Background: #075B35
Text: #FFFFFF
```

Recommended hierarchy:

```text
Ready to Book an Appointment?
Short explanation
[ Request an Appointment ]
[ Chat on WhatsApp ]
```

The final CTA must remain consistent with the booking-request model.

Do not say `Book Now` if it implies an instantly confirmed time slot.

---

# 25. Booking Form Design

The form is a key conversion component.

## Form container

Use a large white card with subtle border/shadow on the warm off-white page.

Desktop composition:

```text
-----------------------------------------------
| Appointment Request Form | Helpful booking  |
|                          | information      |
| inputs                    | what happens     |
|                           | after submit     |
|                           | WhatsApp/contact |
-----------------------------------------------
```

The exact mockup composition should guide the balance between form and support panel.

## Inputs

```text
Background: #FFFFFF
Border: #D5E1D9
Text: #171A18
Focus border: #075B35
Radius: 10–12px
```

Use explicit labels above fields rather than relying on placeholders alone.

## Required/optional indicators

Make required and optional status visually clear but restrained.

## Focus

Use a strong accessible focus ring without a neon/glowing effect.

## Submit button

Deep green.

During submission:

```text
Submitting…
```

Disable double-submit.

---

# 26. Form Conditional UI

When the user chooses:

```text
Clinic / Home Service
```

show:

```text
Clinic
Home Service
```

### Clinic
Show location branch selector:

```text
Barakhu
F-7 Markaz
Bahria Enclave
Abbottabad
```

### Home Service
Hide branch selector.

Show:

```text
Home Address
```

Do not show a separate service-area dropdown.

Use a small helper line if needed:

`Home-service addresses are reviewed manually by our team.`

---

# 27. Success and Error UI

## Success

Use a calm confirmation panel.

```text
✓
Your appointment request has been submitted.
Our team will review your request and contact you to confirm the appointment.
```

Do not automatically launch WhatsApp.

## Error

```text
We couldn't submit your request right now.
Please try again or contact us on WhatsApp.
```

Keep the recovery path visually obvious.

---

# 28. Footer

Use deep forest green:

```text
Background: #06452A
Text: #FFFFFF
Secondary text: #DDEBE3
```

Structure:

```text
Brand + tagline

Quick links
Services
Locations
Home Service
About
Reviews
FAQs

Contact
Phone
WhatsApp
Email
Hours

Social
Instagram
Facebook
TikTok

Book Appointment

Copyright
Legal/disclaimer placeholders
```

Do not overload the footer with duplicate content.

---

# 29. Social Icons

Use official recognizable line/simple brand icons.

Links:

- Instagram
- Facebook
- TikTok

Do not add platforms that were not supplied.

Icons must have accessible labels.

---

# 30. Imagery System

## Hero

```text
hero-hijama.jpg
```

Source: real Shahjahan performing Hijama photograph.

## Services

```text
wet-cupping.jpg
sunnah-hijama.jpg
dry-cupping.jpg
facial-cupping.jpg
hair-loss-hijama.jpg
fasd.jpg
wooden-therapy.jpg
```

## Home service

```text
home-hijama.jpg
```

## Locations

```text
barakhu.jpg
f7-markaz.jpg
bahria-enclave.jpg
abbottabad.jpg
```

## Practitioner

```text
shahjahan.jpg
```

## Certificates

```text
certificate-registration.jpg
certificate-diploma.jpg
certificate-gold-medalist.jpg
```

### Image treatment rules

- warm and natural
- high-quality
- photorealistic
- clean professional environments
- no graphic blood imagery in marketing cards
- no excessive color grading
- no fake text/logos in generated images

---

# 31. Photography Direction

Photography should feel:

```text
Bright
Clean
Warm
Professional
Natural
Trustworthy
```

Prefer:
- Real clinic photography
- Real practitioner photography
- Real branch photography
- Real treatment photographs
- Premium commercial-style AI photography when real imagery is unavailable

Avoid:
- generic spa stock photographs
- generic Western hospital rooms
- plastic/CGI-looking skin
- obvious AI artifacts
- over-smiling staged healthcare scenes
- graphic wound/blood imagery

---

# 32. Iconography

Use a consistent minimal line-icon family.

Visual characteristics:

- thin/medium stroke
- rounded stroke caps
- deep green
- minimal detail

Useful concepts:

- Shield = hygiene
- User/doctor = practitioner
- Heart = care
- Home = home service
- Cup = Hijama
- Calendar = appointment
- Clock = hours
- Location pin = clinic
- Certificate = qualifications

Do not use cartoon icons.

---

# 33. Islamic / Sunnah Visual Language

Keep it subtle.

Allowed:
- small Sunnah/Hadith callout
- restrained geometric pattern
- tasteful Arabic decorative accent if genuinely useful
- green/natural palette

Avoid:
- large mosque imagery
- heavy Islamic pattern coverage
- gold-heavy religious styling
- excessive Arabic copy
- religious decoration in every section

The identity should come primarily from the **content + tagline + traditional Hijama subject matter**, not decoration.

---

# 34. Motion

Use calm motion.

Allowed:

- fade-in
- slight upward reveal
- subtle hover transition
- 1–2% image scale on hover
- smooth anchor scrolling
- light accordion transitions
- light menu transitions

Avoid:

- aggressive parallax
- bounce
- large zoom
- constant moving backgrounds
- scroll-jacking
- excessive blur transitions
- elaborate 3D effects

Respect `prefers-reduced-motion`.

---

# 35. Responsive Rules

The website must be designed intentionally for:

- Desktop
- Laptop
- Tablet
- Mobile

Suggested breakpoints:

```text
Mobile: < 768px
Tablet: 768–1023px
Desktop: 1024px+
```

Exact CSS breakpoints may be adjusted by implementation if they produce a better result.

## Mobile

- stacked hero
- compact navbar
- hamburger menu
- service cards stacked/readable
- location cards stacked
- booking form single column
- large tap targets
- floating WhatsApp
- no tiny text

Do not simply scale down desktop.

---

# 36. Accessibility Styling

Focus states must remain clearly visible.

Example concept:

```text
outline: 2px solid #075B35
outline-offset: 2px
```

Use:
- sufficient contrast
- visible labels
- semantic landmarks
- clear errors
- accessible icon buttons
- keyboard-accessible lightbox, menu, accordion

---

# 37. Performance-Oriented Design

Visual quality should not create unnecessary payload.

Rules:

- Use optimized responsive images.
- Lazy-load below-the-fold photographs.
- Load hero imagery with appropriate priority.
- Avoid autoplay video.
- Avoid huge decorative background images.
- Avoid heavy client-side animations.
- Load map only when appropriate/near viewport if practical.
- Use modern formats such as WebP/AVIF where supported by the chosen pipeline.

---

# 38. Component Design Rules

Create reusable components for:

```text
Navbar
Button
SectionHeader
TrustItem
ServiceCard
LocationCard
PractitionerCard
CertificateCard
ReviewCard
FAQItem
Input
Select
DateField
TimeField
FormField
CTASection
Footer
WhatsAppButton
Lightbox
```

Component APIs should be simple and data-driven.

Avoid duplicating layout code for each service/location.

---

# 39. Content Density

The mockup is information-rich, but each section must still breathe.

Rules:

- Keep supporting copy short.
- Use visual grouping.
- Never cram a long paragraph into a small card.
- Use line breaks intentionally in desktop hero headings if needed.
- Keep card heights visually consistent.
- Prefer one strong image over multiple weak decorative images.

---

# 40. Final Visual Checklist

Before considering the design complete:

- [ ] Navbar is pale sage green.
- [ ] No dark-green full navbar.
- [ ] Deep green is used for key accents/CTAs.
- [ ] Background is warm off-white.
- [ ] Real Shahjahan hero image is used.
- [ ] Hero closely follows the supplied mockup.
- [ ] Service cards use photography.
- [ ] Service cards do not look like ecommerce products.
- [ ] Privacy/female-care section is prominent.
- [ ] Female practitioner's name is not exposed.
- [ ] No anonymous female profile card is shown.
- [ ] Location cards are photographic and readable.
- [ ] Interactive map is visually restrained.
- [ ] Certificate gallery uses real documents.
- [ ] Reviews look authentic.
- [ ] Booking form looks clinical and trustworthy.
- [ ] Success state does not imply confirmation.
- [ ] Sticky WhatsApp button is present.
- [ ] No sticky/floating Call button.
- [ ] Footer includes social links and contact essentials.
- [ ] No neon gradients.
- [ ] No glassmorphism.
- [ ] No excessive shadows.
- [ ] No excessive motion.
- [ ] No generic hospital-blue styling.
- [ ] No spa-purple/luxury aesthetic.
- [ ] Mobile experience is intentionally redesigned.

---

# 41. Final Design Direction

The finished site should feel like:

**A trusted, established Hijama clinic presented through a modern, clean, premium healthcare-style website.**

The visual language should be led by:

**Warm Off-White + Sage Green + Deep Hijama Green + Authentic Photography**

The supplied mockup remains the key visual benchmark.

Creative improvements are welcome only when they make an element clearly stronger, clearer, faster, more accessible, or more professional while preserving the approved structure and identity.
