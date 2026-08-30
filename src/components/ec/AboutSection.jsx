import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Quote, MessageCircle } from "lucide-react";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";

const PHOTO =
  "https://media.base44.com/images/public/6a93444a4c6401c526e7cfb1/bac5babd3_IMG_8633.PNG";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-foreground py-20 sm:py-28">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(56,189,248,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="corner-frame relative aspect-[4/5] sm:aspect-[5/4] overflow-hidden rounded-xl border border-white/10"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
              <Image
                src={PHOTO}
                alt="Especialista da EC Aero Parts na cabine de um jato"
                fittingType="fill"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 font-mono-tech text-[10px] text-white/70 bg-foreground/50 backdrop-blur-sm px-2.5 py-1.5 rounded">
              Cabine · Jato Executivo
            </span>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[hsl(var(--avionics))]" />
              <span className="font-mono-tech text-[11px] text-[hsl(var(--avionics))]">
                Quem Está por Trás
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
              Aviação no DNA, peças na ponta da língua
            </h2>

            <div className="mt-5 flex items-start gap-3">
              <Quote className="h-7 w-7 shrink-0 text-[hsl(var(--avionics))]/60" />
              <p className="text-lg text-white/80 leading-relaxed">
                “Conhecemos cada parafuso, cada número de parte e cada prazo
                real. A EC Aero Parts nasce de quem vive o hangar — para que sua
                frota nunca fique no solo.”
              </p>
            </div>

            <p className="mt-5 text-base text-white/65 leading-relaxed">
              Atendimento direto com especialistas que entendem de aviação
              executiva, comercial, agrícola e geral. Da identificação da peça
              ao despacho, falamos a sua língua — e cobrimos qualquer oferta do
              mercado.
            </p>

            <a
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-[hsl(var(--avionics))] px-6 py-4 text-base font-semibold text-white shadow-xl shadow-[hsl(var(--avionics))]/30 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com um especialista
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}