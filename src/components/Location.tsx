import { MapPin, Phone, Clock, MessageCircle, Navigation, Compass } from "lucide-react";
import { store } from "../data/store";
import { whatsappUrl, directionsUrl, phoneLink } from "../utils/whatsapp";

export default function Location() {
  return (
    <section id="localizacao" className="section-padding bg-cream-light">
      <div className="container-narrow">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
            Visite nossa unidade no Uberaba
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="reveal flex flex-col justify-center rounded-card bg-white p-7 shadow-soft sm:p-8">
            <div className="mb-2 flex items-center gap-2 text-forest-700">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-ink">
                {store.name}
              </h3>
            </div>
            <div className="space-y-3 text-sm text-ink-muted">
              <p>
                {store.address.street}
                <br />
                {store.address.district}, {store.address.city} –{" "}
                {store.address.state}
                <br />
                CEP {store.address.cep}
              </p>
              <a
                href={phoneLink}
                className="flex items-center gap-2 font-medium text-forest-700 hover:text-gold-dark"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {store.phone.display}
              </a>
              <div className="border-t border-forest-700/10 pt-3">
                <div className="mb-2 flex items-center gap-2 font-medium text-ink">
                  <Clock className="h-4 w-4 text-forest-700" aria-hidden="true" />
                  Horário de funcionamento
                </div>
                <ul className="space-y-1">
                  {store.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="font-medium text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-ink-muted">
                  {store.hoursNote}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1"
              >
                <Navigation className="h-4 w-4" />
                Traçar rota
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div className="reveal relative min-h-[350px] overflow-hidden rounded-card bg-forest-900 shadow-soft">
            <div className="absolute inset-0 map-grid opacity-30" aria-hidden="true" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-gold/20" aria-hidden="true" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-forest-500/40" aria-hidden="true" />
            <div className="relative flex h-full min-h-[350px] flex-col items-center justify-center px-6 text-center">
              <div className="map-pin-pulse mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gold text-forest-900 shadow-lift">
                <MapPin className="h-9 w-9" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                Unidade Uberaba
              </p>
              <p className="mt-2 max-w-sm font-serif text-2xl font-semibold text-cream">
                Rua Eunice Bettini Bartoszeck, 1870
              </p>
              <p className="mt-2 text-sm text-cream/70">
                Uberaba, Curitiba – PR
              </p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                <Compass className="h-4 w-4" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
