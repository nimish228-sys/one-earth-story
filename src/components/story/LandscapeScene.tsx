import { motion } from "framer-motion";

export function LandscapeScene() {
  return (
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.85 0.06 70), oklch(0.78 0.08 90) 60%, oklch(0.5 0.07 100))" }}>
      {/* sun */}
      <div
        className="absolute rounded-full"
        style={{
          width: 200, height: 200, top: "15%", left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(circle, oklch(0.95 0.1 80), oklch(0.8 0.12 70 / 0.3) 60%, transparent)",
        }}
      />

      {/* mountains far */}
      <svg viewBox="0 0 1200 400" preserveAspectRatio="none" className="absolute bottom-[40%] left-0 w-full h-[35vh]">
        <path d="M0,400 L0,200 L150,80 L280,180 L420,60 L580,200 L720,100 L880,220 L1020,90 L1200,200 L1200,400Z" fill="oklch(0.45 0.04 240 / 0.5)" />
      </svg>
      {/* mountains mid */}
      <svg viewBox="0 0 1200 400" preserveAspectRatio="none" className="absolute bottom-[28%] left-0 w-full h-[32vh]">
        <path d="M0,400 L0,260 L120,160 L260,260 L400,140 L560,240 L700,170 L860,260 L1000,180 L1200,260 L1200,400Z" fill="oklch(0.4 0.05 100 / 0.7)" />
      </svg>
      {/* hills */}
      <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-[40vh]">
        <path d="M0,300 L0,150 Q200,80 400,150 T800,150 T1200,150 L1200,300Z" fill="oklch(0.35 0.06 110)" />
      </svg>

      {/* walking people silhouettes */}
      <div className="absolute bottom-[18%] left-0 right-0 flex justify-around px-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 2, delay: i * 0.2 }}
          >
            <svg viewBox="0 0 20 50" className="h-12 w-auto">
              <circle cx="10" cy="6" r="4" fill="oklch(0.18 0.04 80)" />
              <path d="M5,14 q5,-3 10,0 l-2,30 q-3,2 -6,0 Z" fill="oklch(0.18 0.04 80)" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}