import { MessageCircle, MapPin } from "lucide-react";
import { whatsappUrl, directionsUrl } from "../utils/whatsapp";

export default function MobileBar() {
  return (
    <>
      <div className="h-16 lg:hidden" aria-hidden="true" />
      <div className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-forest-700/10 bg-cream/95 backdrop-blur-sm lg:hidden">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#25D366] min-h-[56px]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 border-l border-forest-700/10 py-3 text-sm font-semibold text-forest-700 bg-cream min-h-[56px]"
        >
          <MapPin className="h-5 w-5" aria-hidden="true" />
          Como chegar
        </a>
      </div>
    </>
  );
}
