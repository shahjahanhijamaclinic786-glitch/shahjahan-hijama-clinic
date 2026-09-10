# Shahjahan Hijama Clinic — Image Asset Manifest

This file is the asset handoff specification for the coding agent and the person generating/providing images.

The coding agent must not invent missing images or silently substitute random stock photography.

---

## 1. Existing Real Assets

| Easy filename | Existing asset | Use | Source |
|---|---|---|---|
| `hero-hijama.jpg` | Shahjahan performing Hijama | Homepage hero | REAL photo supplied by clinic |
| `shahjahan.jpg` | Shahjahan | Practitioner section | REAL photo supplied by clinic |
| `certificate-registration.jpg` | Certificate of Registration | Selected certificate trust proof | REAL document supplied by clinic |
| `certificate-diploma.jpg` | Diploma certificate | Selected certificate trust proof | REAL document supplied by clinic |
| `certificate-gold-medalist.jpg` | Gold Medalist certificate | Selected certificate trust proof | REAL document supplied by clinic |

Other supplied certificates may remain in the project but do not need to be prominent on the homepage.

---

# 2. Service Images to Generate

Use these exact filenames after generation:

```text
wet-cupping.jpg
sunnah-hijama.jpg
dry-cupping.jpg
facial-cupping.jpg
hair-loss-hijama.jpg
fasd.jpg
wooden-therapy.jpg
```

## Wet Cupping — `wet-cupping.jpg`

```text
Photorealistic premium commercial healthcare photography of a professional Hijama wet cupping session, transparent Hijama cups carefully positioned on the back of an adult patient, gloved practitioner hands, clean modern Pakistani clinic interior, warm natural daylight, sage green and cream palette, hygienic organized equipment, calm trustworthy atmosphere, realistic skin texture, high-end editorial photography, no visible blood, no wounds, no graphic imagery, no text, no logo, no watermark, horizontal composition suitable for a website service card.
```

## Sunnah Hijama — `sunnah-hijama.jpg`

```text
Photorealistic premium commercial healthcare photography of traditional Sunnah Hijama treatment in a clean modern Pakistani clinic, several transparent cupping cups arranged on an adult patient's upper back, professional gloved practitioner, warm natural light, subtle traditional wellness identity, sage green and cream environment, hygienic and trustworthy, realistic Pakistani setting, no visible blood, no wounds, no graphic imagery, no text, no logo, no watermark, horizontal website card composition.
```

## Dry Cupping — `dry-cupping.jpg`

```text
Photorealistic professional dry cupping therapy session, transparent suction cups placed on an adult patient's back, trained practitioner wearing clean disposable gloves, bright modern Hijama clinic, warm daylight, sage and cream interior, realistic skin texture, clean equipment, premium healthcare editorial photography, no cuts, no blood, no graphic imagery, no text, no logo, no watermark, horizontal composition.
```

## Facial Cupping — `facial-cupping.jpg`

```text
Photorealistic premium facial cupping treatment performed by a professional practitioner on an adult woman, small facial cups used carefully on the cheek area, clean hygienic clinic, warm natural daylight, calm respectful expression, realistic skin texture, sage green and cream palette, premium wellness healthcare photography, no injury, no blood, no text, no logo, no watermark, horizontal website image.
```

## Hair Loss Hijama — `hair-loss-hijama.jpg`

```text
Photorealistic premium healthcare photography of a professional Hijama practitioner performing a scalp-focused treatment on an adult male patient, clean gloves and organized equipment, modern Pakistani clinic, warm natural daylight, realistic skin and hair texture, professional and hygienic atmosphere, tasteful non-graphic composition, no blood, no wound, no text, no logo, no watermark, horizontal website image.
```

## Venesection / Fasd — `fasd.jpg`

```text
Photorealistic premium healthcare editorial photograph showing preparation for a traditional venesection/Fasd procedure inside a clean Hijama clinic, gloved practitioner preparing sterile equipment beside a treatment bed, restrained medical composition, warm natural light, sage green and cream environment, professional hygienic atmosphere, no visible blood, no wound, no graphic imagery, no text, no logo, no watermark, horizontal service-card composition.
```

## Wooden Therapy — `wooden-therapy.jpg`

```text
Photorealistic premium commercial wellness photography of traditional wooden therapy being performed on an adult patient's back using smooth wooden therapy tools, professional practitioner, clean modern Pakistani clinic, warm natural light, sage green and cream environment, calm relaxing atmosphere, realistic skin texture, hygienic professional setting, no text, no logo, no watermark, horizontal website service-card composition.
```

---

# 3. Home Service Image

Filename:

```text
home-hijama.jpg
```

Prompt:

```text
Photorealistic premium commercial healthcare photography of a Pakistani male Hijama practitioner providing a professional cupping treatment in a comfortable modern Pakistani home, clean dark navy medical scrubs, disposable gloves, portable Hijama equipment organized neatly beside the treatment area, warm natural daylight, trustworthy and hygienic service, realistic local environment, calm family-friendly feeling, no blood, no wounds, no text, no logo, no watermark, wide horizontal website composition.
```

---

# 4. About Section Image

Filename:

```text
about-hijama.jpg
```

This is optional. Use an existing real clinic/treatment photo if one is available instead of generating a new image.

If an image is needed, use a premium professional clinic image with the same lighting, palette, and realism as the service imagery.

---

# 5. Location Images

Use exact filenames:

```text
barakhu.jpg
f7-markaz.jpg
bahria-enclave.jpg
abbottabad.jpg
```

**Preferred source:** real photographs of each actual branch.

Do not use AI-generated architecture as though it were a photograph of the real branch.

If AI imagery is temporarily used during development, it must be treated as a placeholder and replaced before launch.

---

# 6. Practitioner Image

Filename:

```text
shahjahan.jpg
```

Use the real supplied professional headshot.

Do not AI-generate a replacement.

Do not create a fake female practitioner portrait that could be mistaken for the actual practitioner.

---

# 7. Certificate Images

Use real supplied documents only:

```text
certificate-registration.jpg
certificate-diploma.jpg
certificate-gold-medalist.jpg
```

Requirements:

- Preserve document content.
- Do not alter certificate text.
- Do not generate certificates with AI.
- Do not hide official details unless the clinic later requests redaction.
- Support a larger viewer/lightbox.

---

# 8. Image Technical Targets

Preferred output:

```text
Format: WebP or AVIF where the framework pipeline supports it
Fallback: JPG for photographic assets
```

Suggested dimensions:

### Hero
```text
1600–2000px wide
16:9 or similarly wide composition
```

### Service cards
```text
1000–1400px wide
3:2 or 4:3 composition
```

### Location cards
```text
1000–1400px wide
3:2 composition
```

### Practitioner
```text
800–1200px wide
portrait composition
```

### Certificates
Use enough resolution to allow readable zooming.

Do not upload unnecessarily gigantic originals to the public page.

---

# 9. Image Styling Rules

All photography should visually belong to one family:

```text
Photorealistic
Premium commercial photography
Warm natural lighting
Clean clinical/wellness environment
Sage + cream surroundings where practical
Natural skin texture
Authentic equipment
Respectful treatment scenes
```

Avoid:

```text
Artificial plastic skin
Overly cinematic teal/orange grading
Exaggerated HDR
Generic luxury spa imagery
Hospital blue everywhere
Visible graphic blood
Graphic wounds
AI-looking hands
AI-looking cups/equipment
Text embedded into generated images
Logos embedded into generated images
Watermarks
```

---

# 10. Asset Mapping to Website

```text
hero-hijama.jpg
→ Homepage Hero

wet-cupping.jpg
→ Wet Cupping card

sunnah-hijama.jpg
→ Sunnah Hijama card

dry-cupping.jpg
→ Dry Cupping card

facial-cupping.jpg
→ Facial Cupping card

hair-loss-hijama.jpg
→ Hair Loss Hijama card

fasd.jpg
→ Venesection (Fasd) card

wooden-therapy.jpg
→ Wooden Therapy card

home-hijama.jpg
→ Home Hijama section

barakhu.jpg
→ Barakhu location card

f7-markaz.jpg
→ F-7 Markaz location card

bahria-enclave.jpg
→ Bahria Enclave location card

abbottabad.jpg
→ Abbottabad location card

shahjahan.jpg
→ Practitioner section

certificate-registration.jpg
→ Selected certificate gallery

certificate-diploma.jpg
→ Selected certificate gallery

certificate-gold-medalist.jpg
→ Selected certificate gallery
```

---

# 11. What the Coding Agent Must NOT Do

The coding agent must not:

- Invent branch photographs.
- Invent practitioner identities.
- Invent certificate content.
- Replace the supplied Shahjahan hero photo with stock/AI imagery.
- Use random Unsplash/Pexels images without approval.
- Create a fake female practitioner's profile/name.
- Reuse one service image for all seven services unless a temporary placeholder is explicitly required during development.
- Leave final pages dependent on missing third-party image URLs.

Temporary placeholders may be used during development, but the final production build must use the approved asset filenames above.
