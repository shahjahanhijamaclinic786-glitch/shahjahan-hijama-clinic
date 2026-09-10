// One-time / on-demand image optimizer. Source photos supplied by the clinic are large
// PNGs (some with a .jpg extension); this writes web-ready JPEGs into public/images/**.
//
// Run: npm run images
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const R = (p) => join(root, p);

// [source candidates (first that exists wins), output, width, quality]
const JOBS = [
  [["hero-hijama.png", "shahjahan performning hijama.png"], "public/images/hero/hero-hijama.jpg", 1800, 80],
  [["shahjahan.png", "Shahjahan.png"], "public/images/practitioners/shahjahan.jpg", 1100, 82],
  [["wet-cupping.jpg", "wetcupping.jpg"], "public/images/services/wet-cupping.jpg", 1400, 78],
  [["sunnah-hijama.jpg"], "public/images/services/sunnah-hijama.jpg", 1400, 78],
  [["dry-cupping.jpg"], "public/images/services/dry-cupping.jpg", 1400, 78],
  [["facial-cupping.jpg"], "public/images/services/facial-cupping.jpg", 1400, 78],
  [["hair-loss-hijama.jpg"], "public/images/services/hair-loss-hijama.jpg", 1400, 78],
  [["fasd.jpg", "fasad.jpg", "public/images/services/fasad.jpg"], "public/images/services/fasd.jpg", 1400, 78],
  [["wooden-therapy.jpg"], "public/images/services/wooden-therapy.jpg", 1400, 78],
  [["home-service.jpg", "home-service.png"], "public/images/services/home-hijama.jpg", 1600, 80],
  [
    ["certificate of regestration national council for TIbb.jpg", "public/images/certificates/certificate-tibb-council.jpg"],
    "public/images/certificates/certificate-tibb-council.jpg",
    1600,
    82,
  ],
  [
    ["training certificate.jpg", "public/images/certificates/certificate-training.jpg"],
    "public/images/certificates/certificate-training.jpg",
    1600,
    82,
  ],
  [
    ["certificate-diploma.jpg", "public/images/certificates/certificate-diploma.jpg"],
    "public/images/certificates/certificate-diploma.jpg",
    1600,
    82,
  ],
  [
    ["certificate-gold-medalist.jpg", "public/images/certificates/certificate-gold-medalist.jpg"],
    "public/images/certificates/certificate-gold-medalist.jpg",
    1600,
    82,
  ],
];

// Favicon + Open Graph image (generated, not part of the JOBS resize loop)
async function derived() {
  const logo = R("public/images/brand/logo.jpeg");
  const hero = R("public/images/hero/hero-hijama.jpg");
  if (existsSync(logo)) {
    await sharp(logo).resize(256, 256, { fit: "cover" }).png({ compressionLevel: 9, palette: true }).toFile(R("app/icon.png"));
    await sharp(logo).resize(180, 180, { fit: "cover" }).flatten({ background: "#F8F9F4" }).png().toFile(R("app/apple-icon.png"));
    console.log("app/icon.png, app/apple-icon.png");
  }
  if (existsSync(hero)) {
    await sharp(hero).resize(1200, 630, { fit: "cover", position: "attention" }).jpeg({ quality: 82, mozjpeg: true }).toFile(R("public/images/og.jpg"));
    console.log("public/images/og.jpg");
  }
}

let ok = 0;
for (const [candidates, out, width, quality] of JOBS) {
  const src = candidates.map(R).find(existsSync);
  if (!src) {
    console.warn(`skip ${out} — no source found (${candidates.join(", ")})`);
    continue;
  }
  mkdirSync(dirname(R(out)), { recursive: true });
  const info = await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toFile(R(out) + ".tmp");
  // atomic-ish replace (sharp can't read+write same path)
  const { renameSync } = await import("node:fs");
  renameSync(R(out) + ".tmp", R(out));
  console.log(`${out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
  ok++;
}

await derived();

console.log(`\n${ok}/${JOBS.length} images written.`);
