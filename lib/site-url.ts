/**
 * Canonical public origin of the site, used for <link rel="canonical">, Open Graph
 * URLs, the sitemap and robots.txt.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL         — set this in Vercel once the real domain is live.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — the project's stable *.vercel.app domain,
 *     injected automatically by Vercel. Keeps canonical/OG correct before a custom
 *     domain is attached, even if step 1 was forgotten.
 *  3. localhost                    — local dev only.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProd) return `https://${vercelProd.replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
