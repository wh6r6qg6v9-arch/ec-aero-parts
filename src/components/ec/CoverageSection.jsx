import React from "react";
import { motion } from "framer-motion";
import { Plane, Wheat, Building2, Compass, Truck } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const SEGMENTS = [
  { icon: Plane, label: "Executiva" },
  { icon: Building2, label: "Comercial" },
  { icon: Wheat, label: "Agrícola" },
  { icon: Compass, label: "Geral" },
];

export default function CoverageSection() {
  return (
    <section className="relative bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[hsl(var(--avionics))]" />
              <span className="font-mono-tech text-[11px] text-[hsl(var(--avionics))]">
                Cobertura Nacional
              </span>
            </div>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
              Envio para todo o Brasil, para cada segmento da aviação
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Atendemos operações em todo o território nacional — de bases
              executivas a pistas agrícolas e operações comerciais. Logística
              rastreada e despacho ágil para qualquer localidade.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {SEGMENTS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center"
                  >
                    <Icon className="h-6 w-6 text-[hsl(var(--avionics))]" />
                    <span className="text-sm font-semibold">{s.label}</span>
                  </div>
                );
              })}
            </div>

            <a
              href={whatsappLink(
                "Olá! Preciso de envio de peças aeronáuticas para minha base. Podemos conversar?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Truck className="h-5 w-5" />
              Solicitar envio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="corner-frame relative overflow-hidden rounded-xl border border-border bg-card p-8"
          >
            <div className="font-mono-tech text-[11px] text-muted-foreground">
              Status Operacional
            </div>
            <div className="mt-6 space-y-5">
              <StatRow label="Estoque nacional" value="5.000+ peças" />
              <StatRow label="Pronta entrega" value="Imediata" highlight />
              <StatRow label="Importação" value="Até 20 dias" />
              <StatRow label="Cobertura" value="Todo o Brasil" />
              <StatRow label="Price-match" value="Garantido" highlight />
            </div>
            <div className="mt-8 flex items-center gap-2 rounded-lg bg-secondary px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 blink" />
              <span className="font-mono-tech text-[11px] text-foreground">
                Sistema operacional · Despacho ativo
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatRow({ label, value, highlight }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-3 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={`font-heading text-base font-bold ${
          highlight ? "text-[hsl(var(--signal))]" : "text-foreground"
        }`}
      >
        {value}
      </span>
    </div>
  );
}