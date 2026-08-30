import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { PackageCheck, Globe2, BadgePercent, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import CountUp from "@/components/ec/CountUp";

const WAREHOUSE_IMG =
  "https://media.base44.com/images/public/6a92114e2556cb47240633cd/79dc2263e_generated_55bee756.png";

const CARDS = [
  {
    icon: PackageCheck,
    accent: "avionics",
    title: "Pronta Entrega",
    numericValue: 5000,
    suffix: "+",
    metricLabel: "componentes em estoque",
    desc: "Um dos estoques mais completos do Brasil, com peças prontas para despacho imediato.",
    cta: "Verificar disponibilidade",
  },
  {
    icon: Globe2,
    accent: "avionics",
    title: "Importação em até 20 dias",
    numericValue: 20,
    suffix: " dias",
    metricLabel: "prazo máximo de sourcing",
    desc: "Logística global com sourcing dos EUA e Europa. O que não está em estoque, importamos.",
    cta: "Solicitar importação",
  },
  {
    icon: BadgePercent,
    accent: "signal",
    title: "Cobrimos Oferta",
    numericValue: 100,
    suffix: "%",
    metricLabel: "price-match guarantee",
    desc: "Cobrimos a oferta de concorrentes. Não apenas fornecemos — superamos qualquer proposta.",
    cta: "Enviar contraproposta",
  },
];

export default function LogisticalEngine() {
  return (
    <section id="logistica" className="relative overflow-hidden bg-foreground py-20 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src={WAREHOUSE_IMG}
          alt="Armazém de peças aeronáuticas organizado"
          fittingType="fill"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/90 to-foreground" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[hsl(var(--avionics))]" />
            <span className="font-mono-tech text-[11px] text-[hsl(var(--avionics))]">
              Motor Logístico
            </span>
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
            Velocidade, escala e o melhor preço do mercado
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Do estoque nacional à importação global — infraestrutura logística
            projetada para manter sua frota no ar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            const accentColor =
              c.accent === "signal"
                ? "hsl(var(--signal))"
                : "hsl(var(--avionics))";
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="corner-frame group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:bg-white/[0.08]"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${accentColor}1a`, color: accentColor }}
                >
                  <Icon className="h-6 w-6" />
                </span>

                <div className="mt-5">
                  <div
                    className="font-heading text-4xl font-extrabold tracking-tight"
                    style={{ color: accentColor }}
                  >
                    <CountUp to={c.numericValue} suffix={c.suffix} />
                  </div>
                  <div className="mt-1 font-mono-tech text-[10px] text-white/50">
                    {c.metricLabel}
                  </div>
                </div>

                <h3 className="mt-4 font-heading text-xl font-bold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {c.desc}
                </p>

                <a
                  href={whatsappLink(
                    `Olá! Tenho interesse no serviço "${c.title}" da EC Aero Parts.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: accentColor }}
                >
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}