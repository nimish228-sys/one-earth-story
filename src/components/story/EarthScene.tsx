import { motion } from "framer-motion";

export function EarthScene({ calm = false }: { calm?: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "var(--gradient-sky)" }}>
      {/* stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
      </div>

      {/* atmospheric glow */}
      <div
        className="absolute rounded-full animate-glow-pulse"
        style={{
          width: "min(70vmin, 700px)",
          height: "min(70vmin, 700px)",
          background: "radial-gradient(circle, oklch(0.6 0.12 220 / 0.4), transparent 65%)",
        }}
      />

      {/* the earth */}
      <div
        className="relative rounded-full overflow-hidden animate-spin-slow"
        style={{
          width: "min(55vmin, 520px)",
          height: "min(55vmin, 520px)",
          background:
            "radial-gradient(circle at 35% 30%, oklch(0.75 0.1 200), oklch(0.45 0.09 220) 40%, oklch(0.2 0.05 240) 90%)",
          boxShadow: "inset -40px -40px 100px oklch(0 0 0 / 0.6), 0 0 80px oklch(0.55 0.12 220 / 0.5)",
        }}
      >
        {/* continents — abstract organic blobs */}
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-80">
          <defs>
            <radialGradient id="land" cx="0.4" cy="0.4">
              <stop offset="0%" stopColor={calm ? "oklch(0.75 0.12 130)" : "oklch(0.65 0.1 130)"} />
              <stop offset="100%" stopColor="oklch(0.4 0.08 100)" />
            </radialGradient>
          </defs>
          <path
            d="M40,70 q15,-25 40,-15 q20,8 25,30 q5,20 -15,25 q-25,5 -35,-10 q-20,-15 -15,-30Z"
            fill="url(#land)"
          />
          <path
            d="M110,40 q20,-5 30,15 q10,25 -10,35 q-25,8 -30,-10 q-8,-25 10,-40Z"
            fill="url(#land)"
          />
          <path
            d="M130,110 q25,5 25,30 q-5,25 -30,25 q-30,-5 -25,-30 q5,-25 30,-25Z"
            fill="url(#land)"
          />
          <path
            d="M55,130 q20,-5 30,10 q8,20 -10,30 q-25,8 -35,-10 q-10,-20 15,-30Z"
            fill="url(#land)"
          />
        </svg>
      </div>
    </div>
  );
}