import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Cog, Frame, Wind, Gauge, ChevronRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const CATEGORIES = [
{
  title: "Jato",
  img: "https://media.base44.com/images/public/6a92114e2556cb47240633cd/693e6a916_generated_image.png",
  tag: "Jet",
  desc: "Jatos executivos e comerciais — leve e médio porte.",
  parts: ["Motor", "Célula", "Aviônicos", "Componentes"]
},
{
  title: "Turboélice",
  img: "https://media.base44.com/images/public/6a92114e2556cb47240633cd/3db6d73d7_generated_21f7a7d8.png",
  tag: "Turboprop",
  desc: "King Air, Cessna Caravan, ATR e demais turboélices.",
  parts: ["Motor", "Célula", "Hélices", "Aviônicos"]
},
{
  title: "Aeronave a Pistão",
  img: "https://media.base44.com/images/public/6a92114e2556cb47240633cd/7ac2a3588_generated_e0d18022.png",
  tag: "Piston",
  desc: "Cirrus, Cessna, Piper e aeronaves de motor a pistão.",
  parts: ["Motor", "Célula", "Hélices", "Aviônicos"]
},
{
  title: "Helicóptero",
  img: "https://media.base44.com/images/public/6a92114e2556cb47240633cd/3fb2975b4_generated_7907c3dc.png",
  tag: "Rotorcraft",
  desc: "Helicópteros a pistão e a turbina — Airbus H125 e similares.",
  parts: ["Motor", "Célula", "Aviônicos", "Componentes"]
}];


const PART_ICONS = {
  Motor: Cog,
  Célula: Frame,
  Hélices: Wind,
  Aviônicos: Gauge,
  Componentes: Cog
};

export default function FleetMatrix() {
  return (
    <section id="frota" className="relative bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Matriz da Frota"
          title="Especialização por categoria de aeronave"
          desc="Inventário organizado para aviação executiva, comercial, agrícola e geral — atendendo turboélices, aeronaves a pistão e helicópteros a pistão e turbina." />
        

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) =>
          <motion.a
            key={cat.title}
            href={whatsappLink(
              `Olá! Tenho interesse em peças para ${cat.title}. Poderia verificar disponibilidade?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative block overflow-hidden rounded-xl border border-border bg-card">
            
              <div className="radar-pulse relative aspect-[4/3] overflow-hidden">
                <Image
                src={cat.img}
                alt={cat.title}
                fittingType="fill"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                <div className="scan-line" />
                <span className="absolute top-3 left-3 font-mono-tech text-[10px] text-white/80 bg-foreground/40 backdrop-blur-sm px-2 py-1 rounded">
                  {cat.tag}
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="font-heading text-xl font-bold text-white">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-white/75">{cat.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {cat.parts.map((p) => {
                  const Icon = PART_ICONS[p] || Cog;
                  return (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1.5 rounded border border-white/25 bg-white/10 px-2 py-1 font-mono-tech text-[10px] text-white backdrop-blur-sm">
                      
                        <Icon className="h-3 w-3" />
                        {p}
                      </span>);

                })}
                </div>

                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--avionics))]">
                  Verificar estoque
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </section>);

}

export function SectionHeading({ kicker, title, desc, light }) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-2">
        <span className="h-px w-8 bg-[hsl(var(--avionics))]" />
        <span className="font-mono-tech text-[11px] text-[hsl(var(--avionics))]">
          {kicker}
        </span>
      </div>
      <h2
        className={`mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance ${
        light ? "text-white" : "text-foreground"}`
        }>
        
        {title}
      </h2>
      {desc &&
      <p
        className={`mt-4 text-lg leading-relaxed hidden ${
        light ? "text-white/75" : "text-muted-foreground"}`
        }>
        
          {desc}
        </p>
      }
    </div>);

}