import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SceneProps {
  children: ReactNode;
  background?: ReactNode;
  className?: string;
  id?: string;
}

export function Scene({ children, background, className = "", id }: SceneProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  // Stay fully visible while the section is on-screen; only fade at the far edges.
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 1, 1, 1]);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center ${className}`}
    >
      {background && (
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          {background}
        </motion.div>
      )}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-5xl px-6 py-24">
        {children}
      </motion.div>
    </section>
  );
}