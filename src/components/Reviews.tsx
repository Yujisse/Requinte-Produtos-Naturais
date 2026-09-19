import { Star, ExternalLink } from "lucide-react";
import { store } from "../data/store";
import { directionsUrl } from "../utils/whatsapp";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="section-padding bg-cream-light">
      <div className="container-narrow">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
            Quem conhece, recomenda
          </h2>

          <div className="mt-6 flex flex-col items-center gap-2">
            <div
              className="flex items-center gap-1"
              aria-label={`Nota ${store.reviews.rating} de 5 estrelas`}
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-7 w-7 fill-gold text-gold"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-2xl font-bold text-ink font-serif">
              {store.reviews.rating}
            </p>
            <p className="text-sm text-ink-muted">
              {store.reviews.count} avaliações no Google
            </p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-3"
            >
              <ExternalLink className="h-4 w-4" />
              Ver no Google Maps
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {store.reviews.excerpts.map((excerpt, i) => (
            <figure
              key={i}
              className="reveal rounded-card bg-white p-7 shadow-soft"
            >
              <div className="mb-3 flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-base text-ink italic">
                &ldquo;{excerpt}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-muted">
                Avaliação pública no Google
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
