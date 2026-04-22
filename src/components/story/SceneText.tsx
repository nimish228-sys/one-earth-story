import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SceneTextProps {
  lines: string[];
  align?: "center" | "left";
  size?: "md" | "lg" | "xl";
  tone?: "light" | "dark";
}

const sizeMap = {
  md: "text-2xl md:text-3xl",
  lg: "text-3xl md:text-5xl",
  xl: "text-4xl md:text-6xl lg:text-7xl",
};

export function SceneText({ lines, align = "center", size = "lg", tone = "light" }: SceneTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <div
      ref={ref}
      className={`scene-text text-balance ${sizeMap[size]} ${
        align === "center" ? "text-center" : "text-left"
      } ${tone === "light" ? "text-foreground" : "text-background"}`}
    >
      {lines.map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(8px)" }}
          transition={{ duration: 1.2, delay: i * 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2"
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
}