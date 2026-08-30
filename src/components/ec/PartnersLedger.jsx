import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ec/FleetMatrix";

const PARTNERS = [
  {
    name: "Embraer",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Embraer_logo.png",
  },
  {
    name: "Bombardier",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Bombardier_Logo.svg",
  },
  {
    name: "Airbus Helicopters",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Airbus_Helicopters_logo_2014.svg",
  },
  {
    name: "Pratt & Whitney",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Pratt-%26-Whitney-Logo.svg",
  },
  {
    name: "Garmin",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Garmin_logo_2006.svg",
  },
];

export default function PartnersLedger() {
  const loop = [...PARTNERS, ...PARTNERS];
  return (
    <section id="parceiros" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Ecossistema Aeronáutico"
          title="Marcas que circulam no nosso dia a dia"
          desc="Trabalhamos com peças dos principais fabricantes do setor aeronáutico — os logos abaixo reforçam a credibilidade da operação."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="marquee-mask mt-12 overflow-hidden"
      >
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex h-32 w-56 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-8"
            >
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                className="logo-grayscale max-h-12 w-auto max-w-[150px] object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <p className="mt-6 text-center font-mono-tech text-[11px] text-muted-foreground">
        Marcas ilustrativas do segmento · Embraer · Bombardier · Airbus Helicopters · Pratt &amp; Whitney · Garmin
      </p>
    </section>
  );
}