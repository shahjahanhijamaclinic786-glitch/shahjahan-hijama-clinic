# Deployment — Shahjahan Hijama Clinic

The code is production-ready. Do these steps once.

## 1. Push to GitHub

```bash
git remote set-url origin <YOUR_REPO_URL>   # e.g. https://github.com/<owner>/shahjahan-hijama-clinic.git
git push -u origin main
```

`.env.local` is **not** pushed (it holds the private booking URL) — that is intentional.
Its values go into Vercel as environment variables instead (step 3).

## 2. Import the repo in Vercel

Vercel dashboard → **Add New → Project → Import** the GitHub repo.
Framework preset auto-detects as **Next.js**. Leave build/output settings at defaults.

## 3. Environment Variables (Vercel → Project → Settings → Environment Variables)

Add all three for **Production, Preview and Development**:

| Name | Value |
|------|-------|
| `BOOKING_ENDPOINT_URL` | `https://script.google.com/macros/s/AKfycby0MGMSNTYkFOyoa4eGqXg6fpHD2vl4i2PEHQwbRFTk6TbAtdn2RNNNUAYPzRCVvxT0/exec` |
| `NEXT_PUBLIC_SITE_URL` | Leave **unset** for now — the site auto-uses the `*.vercel.app` production domain. Set it to the real domain (e.g. `https://shahjahanhijama.com`) once that domain is attached, then redeploy. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-0YKW7QF71R` |

After adding vars, **Deployments → ⋯ → Redeploy** so they take effect.

## 4. Google Apps Script (booking backend)

Already deployed and verified working (a test submission returned `{ok:true}` and wrote a
row to the **Requests** tab). If you ever re-deploy it:

- Editor: paste `scripts/apps-script.gs`
- Deploy → **Manage deployments → Edit → New version**
- Execute as: **Me** · Who has access: **Anyone**
- Keep the same `/exec` URL in `BOOKING_ENDPOINT_URL`, or update it if the URL changes

Delete the test row `WEBSITE TEST - safe to delete` from the sheet.

## 5. Custom domain (when the third party provides it)

Vercel → Project → **Domains → Add** → follow the DNS instructions.
Then set `NEXT_PUBLIC_SITE_URL` to `https://<that-domain>` and redeploy so canonical URLs,
`sitemap.xml`, `robots.txt` and Open Graph tags use it.

## Future updates

`git push` → Vercel auto-builds and deploys. No manual step.

## Post-deploy smoke test

- [ ] Home page loads on the `*.vercel.app` URL, no layout issues on mobile + desktop
- [ ] `curl -sI https://<url>/` shows CSP + `X-Frame-Options: DENY`, no `X-Powered-By`
- [ ] `/robots.txt` and `/sitemap.xml` show the correct domain (not `localhost`/`example.com`)
- [ ] Submit the booking form → success message → row in the **Requests** tab + email to
      `shahjahanhijamaclinic786@gmail.com`
- [ ] View source → `<link rel="canonical">` and `og:url` use the live domain
- [ ] GA Realtime (analytics.google.com) shows your visit
- [ ] Replace the 6 sample reviews in `lib/site-data.ts` with real Google reviews
