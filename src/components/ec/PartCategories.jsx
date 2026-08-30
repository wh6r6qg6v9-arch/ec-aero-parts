import React from "react";
import { motion } from "framer-motion";
import { Cog, Frame, Wind, Radio, Boxes, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const CATEGORIES = [
  {
    icon: Cog,
    title: "Motor",
    desc: "Peças de motor a pistão e turbina, kits de manutenção e componentes internos.",
    items: ["Cilindros", "Magneto", "Turbinas", "Acessórios"],
  },
  {
    icon: Frame,
    title: "Célula",
    desc: "Estrutura, carenagens, trem de pouso e componentes da fuselagem.",
    items: ["Trem de pouso", "Carenagens", "Estrutura", "Parafusaria"],
  },
  {
    icon: Wind,
    title: "Hélices",
    desc: "Hélices metálicas e compósitas, cubos, pás e componentes de governador.",
    items: ["Pás", "Cubos", "Governador", "Selos"],
  },
  {
    icon: Radio,
    title: "Aviônicos",
    desc: "Glass cockpit, transponders, GPS, rádios e instrumentos de navegação.",
    items: ["GPS", "Transponder", "Comunicações", "Instrumentos"],
  },
  {
    icon: Boxes,
    title: "Componentes",
    desc: "Demais componentes: hidráulica, elétrica, pneus, óleos e consumíveis.",
    items: ["Hidráulica", "Elétrica", "Pneus", "Consumíveis"],
  },
];

export default function PartCategories() {
  return (
    <section id="componentes" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[hsl(var(--avionics))]" />
              <span className="font-mono-tech text-[11px] text-[hsl(var(--avionics))]">
                Tipos de Componentes
              </span>
            </div>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
              Tudo o que sua aeronave precisa, em um só estoque
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg">
            Peças de motor, célula, hélices, aviônicos e demais componentes —
            com amplo estoque no Brasil.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-[hsl(var(--avionics))]/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-[hsl(var(--avionics))] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono-tech text-[10px] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.items.map((it) => (
                    <span
                      key={it}
                      className="rounded border border-border bg-secondary px-2 py-0.5 font-mono-tech text-[10px] text-muted-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          <a
            href={whatsappLink(
              "Olá! Gostaria de consultar a disponibilidade de componentes aeronáuticos na EC Aero Parts."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-foreground p-6 text-white transition-transform hover:scale-[1.01]"
          >
            <div>
              <span className="font-mono-tech text-[11px] text-white/60">
                Consulta Direta
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold leading-tight">
                Não encontrou a peça?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Fale com nosso balcão de logística. Importamos qualquer
                componente em até 20 dias.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--avionics))]">
              Iniciar consulta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}