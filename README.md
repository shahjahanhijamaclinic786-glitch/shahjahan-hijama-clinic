# Shahjahan Hijama Clinic — Website

One-page, conversion-focused clinic website. Next.js (App Router) + React + TypeScript + Tailwind.
Built to `PRD.md` and `design.md`.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev
```

Open http://localhost:3000

## Environment variables

| Var | Purpose |
|---|---|
| `BOOKING_ENDPOINT_URL` | Google Apps Script Web App `/exec` URL. Server-side only — the browser posts to `/api/booking`, which proxies here. |
| `NEXT_PUBLIC_SITE_URL` | Public origin, used for canonical URL, sitemap, Open Graph. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional. Google Analytics 4 id. Blank = analytics disabled (site still works). |

## Booking backend

No app database. `scripts/apps-script.gs` is the Google Apps Script Web App: it appends each
request to a Google Sheet and emails `shahjahanhijamaclinic786@gmail.com`. Deploy it under the
clinic's Google account and paste the `/exec` URL into `BOOKING_ENDPOINT_URL`. Until that is
set, `/api/booking` returns an error and the form shows its WhatsApp recovery path (no lead
is silently dropped — the payload is also logged server-side).

## Content to update before launch

Edit `lib/site-data.ts` — it is the single source of truth for clinic data, services,
locations (incl. map coordinates + Google Maps links), practitioner credentials, reviews, FAQs.

## Placeholder assets to replace before launch

Real photos are required for these; branded SVG placeholders are in place now:

- `public/images/locations/{barakhu,f7-markaz,bahria-enclave,abbottabad}.svg` → real branch photos (`.jpg`)
- `public/images/services/home-hijama.svg` → real home-service photo (`.jpg`)

After swapping to `.jpg`, update the `image` paths in `lib/site-data.ts` and
`components/home-service-section.tsx`.

Real assets already wired: hero (`hero-hijama.png`), practitioner (`shahjahan.png`),
7 service photos, 3 certificates.

## Deploy

Vercel. Set the three env vars in the project settings. `npm run build` must pass.
