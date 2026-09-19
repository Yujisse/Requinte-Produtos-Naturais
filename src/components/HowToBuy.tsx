import { MessageCircle } from "lucide-react";
import { howToBuySteps } from "../data/store";
import { whatsappUrl } from "../utils/whatsapp";

export default function HowToBuy() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
            Comprar na Requinte é simples
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {howToBuySteps.map((step) => (
            <div
              key={step.number}
              className="reveal relative flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest-700 text-2xl font-bold text-cream font-serif">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-ink-muted">
                {step.description}
              </p>
              {step.number < howToBuySteps.length && (
                <span
                  className="absolute -right-4 top-8 hidden text-gold sm:block"
                  aria-hidden="true"
                >
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                    <path
                      d="M2 12h26M20 4l8 8-8 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-5 w-5" />
            Começar pedido pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
