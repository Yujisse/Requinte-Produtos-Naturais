import { advantages } from "../data/store";

export default function Advantages() {
  return (
    <section className="section-padding bg-cream-light">
      <div className="container-narrow">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
            Por que escolher a Requinte
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <div
                key={advantage.title}
                className="reveal rounded-card bg-white p-6 text-center shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                  <Icon className="h-6 w-6 text-gold-dark" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-ink">
                  {advantage.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
