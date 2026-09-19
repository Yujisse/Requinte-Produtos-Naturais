import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import { store } from "../data/store";
import { whatsappUrl, directionsUrl, phoneLink } from "../utils/whatsapp";

export default function Location() {
  const [loadMap, setLoadMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

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

          <div
            ref={mapRef}
            className="reveal overflow-hidden rounded-card shadow-soft"
          >
            {loadMap && (
              <iframe
                title="Mapa da Requinte Produtos Naturais no Uberaba, Curitiba"
                src={store.mapsEmbed}
                className="h-full min-h-[350px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
            {!loadMap && (
              <div className="flex h-full min-h-[350px] items-center justify-center bg-forest-700/5">
                <MapPin className="h-12 w-12 text-forest-700/30" aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
