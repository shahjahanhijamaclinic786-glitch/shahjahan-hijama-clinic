"use client";

import { clinic } from "@/lib/site-data";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  return (
    <a
      href={clinic.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shahjahan Hijama Clinic on WhatsApp"
      onClick={() => track("whatsapp_click", { location: "floating_button" })}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
