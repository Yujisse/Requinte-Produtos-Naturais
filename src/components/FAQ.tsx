import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/store";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-narrow max-w-3xl">
        <div className="reveal text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="reveal overflow-hidden rounded-card bg-white shadow-soft"
              >
                <h3>
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink hover:bg-forest-700/5 min-h-[44px]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-forest-700 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  ref={(el) => {
                    panelRefs.current[i] = el;
                  }}
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-ink-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
