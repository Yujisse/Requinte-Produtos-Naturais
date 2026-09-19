import { useState, useMemo } from "react";
import { MessageCircle, Check } from "lucide-react";
import {
  productCategories,
  categoryFilters,
  type CategoryFilter,
} from "../data/store";
import { whatsappUrl } from "../utils/whatsapp";

export default function ProductCategories() {
  const [active, setActive] = useState<CategoryFilter>("todos");

  const filtered = useMemo(() => {
    if (active === "todos") return productCategories;
    return productCategories.filter((c) => c.filter === active);
  }, [active]);

  return (
    <section id="produtos" className="section-padding bg-cream-light">
      <div className="container-narrow">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
            Encontre o que combina com a sua rotina
          </h2>
          <p className="mt-5 text-base text-ink-muted sm:text-lg">
            Conheça algumas das categorias disponíveis e fale conosco para consultar
            marcas, tamanhos, sabores e estoque.
          </p>
        </div>

        <div
          className="reveal mt-8 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label="Filtrar categorias"
        >
          {categoryFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all min-h-[44px] ${
                active === filter.id
                  ? "bg-forest-700 text-white shadow-soft"
                  : "bg-white text-forest-700 hover:bg-forest-700/10"
              }`}
              aria-pressed={active === filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.id}
                className="reveal group flex flex-col overflow-hidden rounded-card bg-white shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-cream/95 shadow-soft">
                    <Icon className="h-5 w-5 text-forest-700" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-ink">
                    {category.name}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm text-ink-muted">
                    {category.description}
                  </p>
                  <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-gold-dark">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    Consulte disponibilidade
                  </p>
                  <a
                    href={whatsappUrl(category.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp mt-4 w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Perguntar no WhatsApp
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
