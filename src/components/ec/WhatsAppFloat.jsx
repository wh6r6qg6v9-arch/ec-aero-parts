import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_DISPLAY, DEFAULT_MESSAGE } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[hsl(var(--avionics))] pl-4 pr-5 py-3.5 text-white shadow-2xl shadow-[hsl(var(--avionics))]/40 transition-all duration-500 hover:scale-105 active:scale-95 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400/40 blink" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden sm:block text-sm font-semibold leading-tight">
        <span className="block font-mono-tech text-[9px] text-white/70">
          Balcão Online
        </span>
        Falar agora
      </span>
    </a>
  );
}