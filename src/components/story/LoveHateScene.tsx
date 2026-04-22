import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function LoveHateScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dark = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const light = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [1, 0.2, 1]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div
        className="absolute inset-0"
        style={{ opacity: light, background: "radial-gradient(ellipse at center, oklch(0.92 0.08 60), oklch(0.7 0.1 40))" }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ opacity: dark, background: "radial-gradient(ellipse at center, oklch(0.25 0.04 280), oklch(0.08 0.02 280))" }}
      />

      <div className="absolute inset-0 flex items-center justify-center gap-12 md:gap-32 px-6">
        {/* hand reaching */}
        <motion.svg viewBox="0 0 100 140" className="h-[40vh] w-auto"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.4 }}
        >
          <path d="M30,140 L30,70 Q30,50 50,50 L50,30 Q50,15 60,15 Q70,15 70,30 L70,55 Q80,55 80,70 L80,90 Q80,140 60,140 Z"
            fill="oklch(0.65 0.1 50)" />
        </motion.svg>

        {/* hand reaching back */}
        <motion.svg viewBox="0 0 100 140" className="h-[40vh] w-auto -scale-x-100"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        >
          <path d="M30,140 L30,70 Q30,50 50,50 L50,30 Q50,15 60,15 Q70,15 70,30 L70,55 Q80,55 80,70 L80,90 Q80,140 60,140 Z"
            fill="oklch(0.6 0.09 200)" />
        </motion.svg>
      </div>
    </div>
  );
}