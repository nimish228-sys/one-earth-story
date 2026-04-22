import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SceneTextProps {
  chapter?: string;          // e.g. "II. ONE BODY"
  headline?: string[];       // large italic display lines
  subtitle?: string;         // smaller prose paragraph
  align?: "center" | "left";
  tone?: "light" | "dark";
}

export function SceneText({
  chapter,
  headline = [],
  subtitle,
  align = "center",
  tone = "light",
}: SceneTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const fg = tone === "light" ? "text-foreground" : "text-background";
  const muted = tone === "light" ? "text-muted-foreground" : "text-background/70";
  const accent = tone === "light" ? "text-primary" : "text-background";
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div ref={ref} className={`max-w-2xl ${alignCls}`}>
      {chapter && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`mb-8 text-xs md:text-sm font-medium tracking-[0.35em] uppercase ${accent}`}
        >
          {chapter}
        </motion.p>
      )}

      {headline.length > 0 && (
        <div className={`scene-text italic text-balance text-3xl md:text-5xl lg:text-6xl leading-[1.15] ${fg}`}>
          {headline.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(8px)" }}
              transition={{ duration: 1.1, delay: 0.2 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.2 + headline.length * 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-8 text-base md:text-lg leading-relaxed text-balance ${muted}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}