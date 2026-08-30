import React, { useEffect, useState } from "react";
import { Plane, Menu, X } from "lucide-react";
import { whatsappLink, WHATSAPP_DISPLAY, DEFAULT_MESSAGE } from "@/lib/whatsapp";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Frota", href: "#frota" },
  { label: "Componentes", href: "#componentes" },
  { label: "Logística", href: "#logistica" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-md border transition-colors ${
                scrolled
                  ? "border-foreground/20 text-foreground"
                  : "border-white/40 text-white"
              }`}
            >
              <Plane className="h-[18px] w-[18px] -rotate-45" strokeWidth={2.2} />
            </span>
            <span className="leading-none">
              <span
                className={`block font-heading text-base font-extrabold tracking-tight transition-colors ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                EC AERO PARTS
              </span>
              <span
                className={`block font-mono-tech text-[10px] mt-0.5 transition-colors ${
                  scrolled ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Aeronautical Supply
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-[hsl(var(--avionics))] ${
                  scrolled ? "text-foreground/80" : "text-white/85"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[hsl(var(--avionics))] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[hsl(var(--avionics))]/25 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <span className="h-2 w-2 rounded-full bg-green-400 blink" />
              Consultar Peças
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-md border transition-colors ${
                scrolled
                  ? "border-foreground/20 text-foreground"
                  : "border-white/40 text-white"
              }`}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[hsl(var(--avionics))] px-4 py-3 text-sm font-semibold text-white"
            >
              WhatsApp · {WHATSAPP_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}