import Link from "next/link";
import type { Metadata } from "next";
import { clinic } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-cream">
      <div className="container-x max-w-lg py-16 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-bold">This page could not be found</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The page you are looking for may have moved. Everything about {clinic.name} —
          services, locations and booking — is on the home page.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
