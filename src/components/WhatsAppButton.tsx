import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../utils/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 hidden lg:flex"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lift transition-transform hover:scale-110">
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring"
          aria-hidden="true"
        />
        <MessageCircle className="relative h-7 w-7 text-white" aria-hidden="true" />
      </span>
      <span
        className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-sm font-medium text-cream opacity-0 shadow-soft transition-opacity group-hover:opacity-100"
        role="tooltip"
      >
        Falar no WhatsApp
      </span>
    </a>
  );
}
