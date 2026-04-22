import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PeaceWarScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const warOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const peaceOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [1, 0.3, 1]);

  return (
    <div ref={ref} className="absolute inset-0 grid grid-cols-2">
      {/* peace side */}
      <motion.div style={{ opacity: peaceOpacity }} className="relative overflow-hidden" >
        <div className="absolute inset-0" style={{ background: "var(--gradient-peace)" }} />
        {/* sun rays */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.95 0.12 85), transparent 70%)" }} />
        {/* wheat field */}
        <svg viewBox="0 0 400 300" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-2/3">
          <path d="M0,300 L0,180 Q100,140 200,180 T400,180 L400,300Z" fill="oklch(0.6 0.13 90)" />
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={i} x1={i * 14} y1={300} x2={i * 14 + 2} y2={200 + Math.sin(i) * 20}
              stroke="oklch(0.45 0.1 80)" strokeWidth="1.5" />
          ))}
        </svg>
      </motion.div>

      {/* war side */}
      <motion.div style={{ opacity: warOpacity }} className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-war)" }} />
        {/* embers */}
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i}
            className="absolute rounded-full animate-ember"
            style={{
              width: Math.random() * 4 + 2, height: Math.random() * 4 + 2,
              background: "oklch(0.7 0.2 40)",
              left: `${Math.random() * 100}%`, bottom: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: "0 0 8px oklch(0.7 0.2 40)",
            }}
          />
        ))}
        {/* broken silhouettes */}
        <svg viewBox="0 0 400 300" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-2/3 opacity-80">
          <path d="M0,300 L0,220 L40,200 L60,240 L100,180 L130,230 L170,170 L210,250 L250,190 L290,240 L330,180 L370,230 L400,200 L400,300Z"
            fill="oklch(0.1 0.02 30)" />
        </svg>
      </motion.div>

      {/* center seam */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-foreground/20" />
    </div>
  );
}