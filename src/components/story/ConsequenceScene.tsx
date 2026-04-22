import { motion } from "framer-motion";

export function ConsequenceScene() {
  return (
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.2 0.03 30), oklch(0.35 0.1 35) 60%, oklch(0.15 0.04 20))" }}>
      {/* dust haze */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 70%, oklch(0.45 0.08 40 / 0.5), transparent 60%)" }} />

      {/* cracking earth */}
      <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-1/2">
        <path d="M0,200 L0,80 L800,80 L800,200Z" fill="oklch(0.18 0.04 30)" />
        {[
          "M100,80 L120,140 L110,200",
          "M260,80 L240,160 L260,200",
          "M420,80 L440,150 L430,200",
          "M580,80 L560,170 L580,200",
          "M720,80 L740,140 L720,200",
        ].map((d, i) => (
          <motion.path key={i} d={d} stroke="oklch(0.6 0.18 35)" strokeWidth="2" fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 2, delay: i * 0.3 }}
          />
        ))}
      </svg>

      {/* fire embers rising */}
      {Array.from({ length: 40 }).map((_, i) => (
        <span key={i}
          className="absolute rounded-full animate-ember"
          style={{
            width: Math.random() * 5 + 2, height: Math.random() * 5 + 2,
            background: `oklch(${0.6 + Math.random() * 0.2} 0.2 ${30 + Math.random() * 20})`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 50}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            boxShadow: "0 0 10px oklch(0.7 0.2 40)",
          }}
        />
      ))}
    </div>
  );
}