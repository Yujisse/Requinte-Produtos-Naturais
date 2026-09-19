import { MessageCircle, Info } from "lucide-react";
import { featuredItems } from "../data/store";
import { whatsappUrl } from "../utils/whatsapp";

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-forest-900">
      <div className="container-narrow">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-cream sm:text-4xl">
            Alguns dos mais procurados
          </h2>
          <p className="mt-4 text-base text-cream/80">
            Conheça os itens que mais chamam a atenção de quem visita a Requinte.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="reveal group flex flex-col overflow-hidden rounded-card bg-forest-700 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={320}
                  />
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-cream/95 shadow-soft">
                    <Icon className="h-5 w-5 text-forest-700" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-cream">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm text-cream/80">
                    {item.description}
                  </p>
                  <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-gold">
                    <Info className="h-3.5 w-3.5" aria-hidden="true" />
                    Marcas, sabores e disponibilidade podem variar.
                  </p>
                  <a
                    href={whatsappUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-4 w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar pelo WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
