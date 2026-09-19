import { benefits } from "../data/store";

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
            Variedade e atendimento que fazem a diferença
          </h2>
          <p className="mt-5 text-base text-ink-muted sm:text-lg">
            Na Requinte Produtos Naturais, você encontra uma seleção ampla para
            deixar sua rotina mais prática, saborosa e equilibrada. Nossa proposta
            combina variedade, qualidade, preços justos e um atendimento próximo
            para ajudar você a encontrar o produto certo para o seu dia a dia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="reveal rounded-card bg-white p-7 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest-700/10">
                  <Icon className="h-7 w-7 text-forest-700" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
