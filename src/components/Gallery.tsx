import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "../data/store";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i + 1) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  useEffect(() => {
    if (lightboxIndex === null || !dialogRef.current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll(
        'button, a, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  let touchStartX = 0;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev();
      else next();
    }
  };

  return (
    <section id="galeria" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">
            Conheça a Requinte
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Veja um pouco do ambiente, dos produtos e da equipe da nossa loja.
          </p>
        </div>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="reveal group block w-full overflow-hidden rounded-card shadow-soft transition-shadow hover:shadow-card focus:outline-none"
              aria-label={`Ampliar imagem: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  img.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
                loading="lazy"
                width={img.tall ? 400 : 500}
                height={img.tall ? 533 : 500}
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da galeria"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            ref={closeBtnRef}
            onClick={close}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
            aria-label="Fechar visualização"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={prev}
            className="absolute left-2 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:left-4"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <figure className="mx-16 max-h-[85vh] max-w-3xl">
            <img
              src={galleryImages[lightboxIndex].src.replace(/w=\d+&h=\d+/, "w=1200&h=900")}
              alt={galleryImages[lightboxIndex].alt}
              className="max-h-[78vh] w-auto rounded-card object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-cream/80">
              {galleryImages[lightboxIndex].alt}
            </figcaption>
          </figure>
          <button
            onClick={next}
            className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:right-4"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}
