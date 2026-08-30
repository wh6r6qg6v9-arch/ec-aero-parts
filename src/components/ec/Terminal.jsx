import React from "react";
import { Plane, MessageCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import { whatsappLink, WHATSAPP_DISPLAY, DEFAULT_MESSAGE } from "@/lib/whatsapp";

export default function Terminal() {
  return (
    <footer id="contato" className="relative bg-foreground text-white">
      {/* Flight Status CTA bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400 blink" />
                <span className="font-mono-tech text-[11px] text-white/70">
                  Balcão de Logística · Online
                </span>
              </div>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
                Inicie sua aquisição agora
              </h2>
              <p className="mt-3 text-lg text-white/70 max-w-lg">
                Fale diretamente com nosso balcão de logística pelo WhatsApp.
                Resposta ágil de especialistas em peças aeronáuticas.
              </p>
            </div>
            <a
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-[hsl(var(--avionics))] px-7 py-5 text-lg font-bold text-white shadow-xl shadow-[hsl(var(--avionics))]/30 transition-transform hover:scale-[1.03] active:scale-95">
              
              <MessageCircle className="h-6 w-6" />
              <span className="leading-tight text-left">
                <span className="block text-xs font-medium font-mono-tech text-white/70">
                  Iniciar Aquisição
                </span>
                {WHATSAPP_DISPLAY}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer grid */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/30">
                <Plane className="h-[18px] w-[18px] -rotate-45" strokeWidth={2.2} />
              </span>
              <span className="leading-none">
                <span className="block font-heading text-base font-extrabold tracking-tight">
                  EC AERO PARTS
                </span>
                <span className="block font-mono-tech text-[10px] mt-0.5 text-white/60">
                  Aeronautical Supply
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-white/65 leading-relaxed">
              Um dos estoques de peças aeronáuticas mais completos do Brasil.
              Turboélice, aeronave a pistão e helicóptero — pronta entrega,
              importação em até 20 dias e envio para todo o país.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-[hsl(var(--avionics))]" />
              Cobrimos a oferta de concorrentes
            </div>
          </div>

          <div>
            <h4 className="font-mono-tech text-[11px] text-white/50">Segmentos</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>Aviação Executiva</li>
              <li>Aviação Comercial</li>
              <li>Aviação Agrícola</li>
              <li>Aviação Geral</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono-tech text-[11px] text-white/50">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={whatsappLink(DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white">
                  
                  <MessageCircle className="h-4 w-4 text-[hsl(var(--avionics))]" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[hsl(var(--avionics))]" />
                Atendimento em todo o Brasil
              </li>
              


              
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="font-mono-tech text-[10px] text-white/45">
            © {new Date().getFullYear()} EC Aero Parts · Todos os direitos reservados
          </p>
          <p className="font-mono-tech text-[10px] text-white/45">
            Peças aeronáuticas · Turboélice · Pistão · Helicóptero
          </p>
        </div>
      </div>
    </footer>);

}