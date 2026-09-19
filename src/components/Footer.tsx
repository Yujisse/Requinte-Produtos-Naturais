import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import { store, navItems } from "../data/store";
import { whatsappUrl, directionsUrl, phoneLink } from "../utils/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-cream">
      <div className="container-narrow px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold text-gold">
                Requinte
              </span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/70">
                Produtos Naturais
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-cream/80">
              Loja de produtos naturais no Uberaba, Curitiba. Chás, temperos,
              castanhas, suplementos e muito mais, com atendimento próximo.
            </p>
            <a
              href={store.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              {store.instagram.handle}
            </a>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
              Navegação
            </h2>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/80 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
              Contato
            </h2>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {store.address.street}
                  <br />
                  {store.address.district}, {store.address.city} –{" "}
                  {store.address.state}
                  <br />
                  CEP {store.address.cep}
                </span>
              </li>
              <li>
                <a
                  href={phoneLink}
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  {store.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light"
                >
                  Pedir pelo WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
              Horários
            </h2>
            <ul className="space-y-2 text-sm text-cream/80">
              {store.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {h.day}: <span className="text-cream">{h.time}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-cream/60">{store.hoursNote}</p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-gold hover:text-gold-light"
            >
              Ver no Google Maps →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-cream/60">
              © {year} {store.name}. Todos os direitos reservados.
            </p>
            <p className="text-xs text-cream/60">
              Informações e disponibilidade podem sofrer alterações.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
