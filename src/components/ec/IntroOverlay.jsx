import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "ec-aero-intro-played";
const RING_CIRC = 2 * Math.PI * 54; // ≈ 339.29

function Propeller({ className }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <defs>
        <linearGradient id="ec-blade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef2f7" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
      <g transform="translate(60 60)">
        {[0, 120, 240].map((deg) => (
          <path
            key={deg}
            d="M0 0 C -8 -24 -5 -42 0 -48 C 5 -42 8 -24 0 0 Z"
            transform={`rotate(${deg})`}
            fill="url(#ec-blade)"
            stroke="#cbd5e1"
            strokeWidth="0.8"
          />
        ))}
        <circle r="9" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <circle r="3" fill="#38bdf8" />
      </g>
    </svg>
  );
}

export default function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setShow(true);
    const t = setTimeout(() => setShow(false), 2300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="ec-intro"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-foreground"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* background grid + glow */}
          <div className="absolute inset-0 grid-overlay opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_60%)]" />

          {/* corner markers */}
          <div className="pointer-events-none absolute inset-6">
            <span className="absolute top-0 left-0 h-5 w-5 border-t border-l border-[hsl(var(--avionics))]/60" />
            <span className="absolute top-0 right-0 h-5 w-5 border-t border-r border-[hsl(var(--avionics))]/60" />
            <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-[hsl(var(--avionics))]/60" />
            <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[hsl(var(--avionics))]/60" />
          </div>

          {/* edge labels */}
          <div className="absolute top-6 left-8 font-mono-tech text-[10px] text-white/40">SYS // BOOT</div>
          <div className="absolute top-6 right-8 font-mono-tech text-[10px] text-white/40">v.1.0</div>
          <div className="absolute bottom-7 left-8 font-mono-tech text-[10px] text-white/40">PRONTA ENTREGA</div>
          <div className="absolute bottom-7 right-8 font-mono-tech text-[10px] text-white/40">BR · 20 DIAS</div>

          <div className="relative flex flex-col items-center">
            <div className="relative h-40 w-40">
              {/* drawing ring */}
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full">
                <motion.circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRC}
                  initial={{ strokeDashoffset: RING_CIRC }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.9, ease: "easeInOut" }}
                  transform="rotate(-90 60 60)"
                />
              </svg>
              {/* spinning propeller */}
              <motion.div
                className="absolute inset-0"
                initial={{ rotate: 0, scale: 0.85 }}
                animate={{ rotate: 1620, scale: 1 }}
                transition={{ duration: 2.1, ease: [0.2, 0, 0.7, 1] }}
              >
                <Propeller className="h-full w-full drop-shadow-[0_0_14px_rgba(56,189,248,0.45)]" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-9 text-center"
            >
              <div className="font-heading text-xl font-extrabold tracking-[0.22em] text-white">
                EC AERO PARTS
              </div>
              <div className="mt-2.5 font-mono-tech text-[10px] text-[hsl(var(--avionics))]">
                INICIALIZANDO SISTEMA<span className="blink">_</span>
              </div>
            </motion.div>
          </div>

          {/* progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-[hsl(var(--avionics))]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.1, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}