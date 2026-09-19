import { MessageCircle, MapPin } from "lucide-react";
import { store } from "../data/store";
import { whatsappUrl, directionsUrl } from "../utils/whatsapp";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      <div className="container-narrow grid items-center gap-8 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="reveal order-2 lg:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gold-dark">
            {store.tagline}
          </p>
          <h1 className="text-balance text-3xl font-bold text-ink sm:text-4xl md:text-5xl lg:text-6xl">
            Mais sabor, equilíbrio e bem-estar para a sua rotina.
          </h1>
          <p className="mt-5 max-w-xl text-base text-ink-muted sm:text-lg">
            Encontre chás, temperos, produtos a granel, castanhas, suplementos e
            muito mais, com atendimento próximo e entrega em Curitiba e região.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-5 w-5" />
              Pedir pelo WhatsApp
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MapPin className="h-5 w-5" />
              Como chegar
            </a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-forest-500" aria-hidden="true" />
            Fale diretamente com nossa equipe e consulte produtos, disponibilidade e
            entregas.
          </p>
        </div>

        <div className="reveal order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src={store.images.heroProducts}
              alt="Variedade de chás, temperos e produtos naturais na Requinte"
              className="aspect-[3/4] w-full rounded-card object-cover shadow-card"
              loading="eager"
              width={450}
              height={600}
            />
            <div className="flex flex-col gap-3 sm:gap-4">
              <img
                src={store.images.chasTemperos}
                alt="Seleção de chás e temperos coloridos"
                className="aspect-square w-full rounded-card object-cover shadow-soft"
                loading="eager"
                width={300}
                height={300}
              />
              <img
                src={store.images.produtosGranel}
                alt="Produtos a granel em dispensadores"
                className="aspect-square w-full rounded-card object-cover shadow-soft"
                loading="eager"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
