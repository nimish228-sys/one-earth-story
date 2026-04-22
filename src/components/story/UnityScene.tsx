import { motion } from "framer-motion";

const figures = [
  { color: "oklch(0.55 0.08 60)", x: 0 },
  { color: "oklch(0.5 0.1 30)", x: 1 },
  { color: "oklch(0.45 0.09 200)", x: 2 },
  { color: "oklch(0.5 0.08 140)", x: 3 },
  { color: "oklch(0.4 0.07 280)", x: 4 },
];

export function UnityScene() {
  return (
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.92 0.03 70), oklch(0.85 0.05 60))" }}>
      {/* heartbeat ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="rounded-full border border-primary/20"
          style={{ width: 400, height: 400 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full border border-primary/30"
          style={{ width: 280, height: 280 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </div>

      {/* silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-2 px-4">
        {figures.map((f, i) => (
          <motion.svg
            key={i}
            viewBox="0 0 60 180"
            className="h-[60vh] max-h-[480px] w-auto animate-breathe"
            style={{ animationDelay: `${i * 0.3}s` }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.85 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <circle cx="30" cy="22" r="14" fill={f.color} />
            <path
              d={`M${30 - 18},45 q18,-10 36,0 l-4,135 q-14,4 -28,0 Z`}
              fill={f.color}
            />
          </motion.svg>
        ))}
      </div>
    </div>
  );
}