import { useState, useEffect, useRef } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { store, navItems } from "../data/store";
import { whatsappUrl } from "../utils/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const firstLink = menuRef.current?.querySelector("a");
      firstLink?.focus();
    } else {
      document.body.style.overflow = "";
      buttonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll(
          'a, button'
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
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-soft"
          : "bg-cream"
      }`}
    >
      <div className="container-narrow flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="flex flex-col leading-none"
          aria-label={`${store.name} - início`}
        >
          <span className="font-serif text-2xl font-bold text-gold sm:text-3xl">
            Requinte
          </span>
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-forest-700 sm:text-[0.65rem]">
            Produtos Naturais
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink hover:bg-forest-700/10 hover:text-forest-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={store.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full text-forest-700 hover:bg-forest-700/10"
            aria-label={`Instagram ${store.instagram.handle}`}
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Pedir pelo WhatsApp
          </a>
        </div>

        <button
          ref={buttonRef}
          className="flex h-11 w-11 items-center justify-center rounded-full text-forest-700 hover:bg-forest-700/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="fixed inset-0 top-0 z-50 bg-cream lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-serif text-2xl font-bold text-gold">Requinte</span>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full text-forest-700 hover:bg-forest-700/10"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav
            className="flex flex-col gap-1 px-4 py-4"
            aria-label="Navegação móvel"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-card px-4 py-3 text-lg font-medium text-ink hover:bg-forest-700/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={store.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                onClick={() => setOpen(false)}
              >
                <Instagram className="h-5 w-5" />
                Seguir no Instagram
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                onClick={() => setOpen(false)}
              >
                Pedir pelo WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
