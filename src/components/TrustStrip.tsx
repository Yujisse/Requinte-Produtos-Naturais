import { Star, MapPin } from "lucide-react";
import { directionsUrl } from "../utils/whatsapp";

interface TrustItem {
  text: string;
  href?: string;
  external?: boolean;
}

const trustItems: TrustItem[] = [
  { text: "4,9 no Google", href: directionsUrl, external: true },
  { text: "63 avaliações", href: directionsUrl, external: true },
  { text: "60+ opções de chás" },
  { text: "30+ opções de temperos" },
  { text: "Entregas em Curitiba" },
];

export default function TrustStrip() {
  return (
    <section
      className="border-y border-forest-700/10 bg-forest-900 py-5"
      aria-label="Destaques da loja"
    >
      <div className="container-narrow flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 sm:gap-x-8 lg:px-8">
        {trustItems.map((item, i) => {
          const isRating = i < 2;
          if (item.href && item.external) {
            return (
              <a
                key={item.text}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-cream transition-colors hover:text-gold"
              >
                {isRating && (
                  <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                )}
                {i === 1 && (
                  <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                )}
                {item.text}
              </a>
            );
          }
          return (
            <span
              key={item.text}
              className="flex items-center gap-1.5 text-sm font-semibold text-cream"
            >
              {item.text}
            </span>
          );
        })}
      </div>
    </section>
  );
}
