import { Instagram } from "lucide-react";
import { store, instagramImages } from "../data/store";

export default function InstagramSection() {
  return (
    <section id="instagram" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
            Acompanhe a Requinte no Instagram
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Veja novidades, produtos, receitas, dicas e ofertas no perfil{" "}
            <a
              href={store.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-700 underline underline-offset-2 hover:text-gold-dark"
            >
              {store.instagram.handle}
            </a>
            .
          </p>
          <a
            href={store.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-6"
          >
            <Instagram className="h-5 w-5" />
            Seguir no Instagram
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {instagramImages.map((img, i) => (
            <a
              key={i}
              href={store.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative overflow-hidden rounded-card shadow-soft transition-shadow hover:shadow-card"
              aria-label={`Ver ${img.alt} no Instagram`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={300}
                height={300}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-forest-900/0 transition-colors group-hover:bg-forest-900/40">
                <Instagram
                  className="h-8 w-8 text-cream opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
