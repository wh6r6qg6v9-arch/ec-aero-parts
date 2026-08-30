import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, MessageCircle, Plane } from "lucide-react";
import { Image } from "@/components/ui/image";
import { whatsappLink } from "@/lib/whatsapp";

const HERO_IMG =
  "https://media.base44.com/images/public/6a92114e2556cb47240633cd/ebfc81d64_generated_edb30e8a.png";

const AIRCRAFT_TYPES = [
  "Jato",
  "Turboélice",
  "Aeronave a Pistão",
  "Helicóptero a Pistão",
  "Helicóptero a Turbina",
];
const PART_CATEGORIES = [
  "Motor",
  "Célula",
  "Hélices",
  "Aviônicos",
  "Componentes",
];

export default function Hero() {
  const [aircraft, setAircraft] = useState("");
  const [part, setPart] = useState("");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const message =
    aircraft || part
      ? `Olá! Vim pelo site da EC Aero Parts. Tenho interesse em peças de ${
          aircraft || "aeronave"
        }${part ? ` — categoria: ${part}` : ""}. Poderia verificar disponibilidade?`
      : "Olá! Vim pelo site da EC Aero Parts e gostaria de verificar a disponibilidade de peças aeronáuticas.";

  return (
    <section ref={sectionRef} id="inicio" className="relative min-h-[100svh] w-full overflow-hidden bg-foreground">
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <Image
          src={HERO_IMG}
          alt="Turbinas de jato em close-up macro"
          fittingType="fill"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/40" />
      </motion.div>

      {/* coordinate markers */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-24 left-6 h-px w-16 bg-white/30" />
        <div className="absolute top-24 left-6 h-16 w-px bg-white/30" />
        <div className="absolute bottom-28 right-6 h-px w-16 bg-white/30" />
        <div className="absolute bottom-28 right-6 h-16 w-px bg-white/30" />
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 pt-32 sm:pt-40 pb-16 min-h-[100svh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 blink" />
            <span className="font-mono-tech text-[11px] text-white/80">
              Balcão de Logística · Online
            </span>
          </div>

          <h1 className="mt-6 font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.02] text-balance">
            O Inventário Estratégico da Aviação Brasileira
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
            Um dos estoques de peças aeronáuticas mais completos do Brasil.
            Jatos, turboélices, aeronaves a pistão e helicópteros — pronta
            entrega, importação em até 20 dias e envio para todo o país.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-md bg-[hsl(var(--avionics))] px-6 py-4 text-base font-semibold text-white shadow-xl shadow-[hsl(var(--avionics))]/30 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Consultar Disponibilidade
            </a>
            <a
              href="#frota"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver Especializações
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Quick-search visual selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-12 sm:mt-16 max-w-4xl"
        >
          <div className="corner-frame rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-4 w-4 text-[hsl(var(--avionics))]" />
              <span className="font-mono-tech text-[11px] text-white/70">
                Consulta Rápida de Disponibilidade
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <Select
                value={aircraft}
                onChange={setAircraft}
                placeholder="Tipo de Aeronave"
                options={AIRCRAFT_TYPES}
              />
              <Select
                value={part}
                onChange={setPart}
                placeholder="Categoria de Peça"
                options={PART_CATEGORIES}
              />
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3.5 text-sm font-bold text-foreground transition-transform hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="h-4 w-4 text-[hsl(var(--avionics))]" />
                Verificar via WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Select({ value, onChange, placeholder, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-md border border-white/20 bg-foreground/40 px-4 py-3.5 pr-10 text-sm font-medium text-white outline-none focus:border-[hsl(var(--avionics))] [&>option]:text-foreground"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronRight className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-white/60" />
    </div>
  );
}