import { motion } from "framer-motion";

export function HumanityScene() {
  return (
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.88 0.04 60), oklch(0.78 0.06 50))" }}>
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-6 p-10 items-center">
        {/* eye */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.4 }}
          className="flex justify-center"
        >
          <svg viewBox="0 0 200 100" className="w-full max-w-xs">
            <motion.path
              d="M10,50 Q100,5 190,50 Q100,95 10,50Z"
              fill="none"
              stroke="oklch(0.25 0.04 50)"
              strokeWidth="2"
              animate={{ d: ["M10,50 Q100,5 190,50 Q100,95 10,50Z", "M10,50 Q100,45 190,50 Q100,55 10,50Z", "M10,50 Q100,5 190,50 Q100,95 10,50Z"] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <circle cx="100" cy="50" r="22" fill="oklch(0.35 0.08 200)" />
            <circle cx="100" cy="50" r="10" fill="oklch(0.1 0.02 50)" />
            <circle cx="105" cy="45" r="3" fill="white" />
          </svg>
        </motion.div>

        {/* working hands */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="flex justify-center"
        >
          <svg viewBox="0 0 200 200" className="w-full max-w-xs">
            <motion.path
              d="M40,140 Q60,60 100,80 Q140,60 160,140 Q140,180 100,170 Q60,180 40,140Z"
              fill="oklch(0.55 0.07 50)"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ transformOrigin: "100px 120px" }}
            />
            <path d="M70,90 L70,40 M90,80 L90,30 M110,80 L110,30 M130,90 L130,40"
              stroke="oklch(0.55 0.07 50)" strokeWidth="14" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* heartbeat line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="flex justify-center col-span-2 md:col-span-1"
        >
          <svg viewBox="0 0 200 60" className="w-full max-w-xs">
            <motion.path
              d="M0,30 L60,30 L70,10 L80,50 L90,30 L200,30"
              fill="none"
              stroke="oklch(0.5 0.18 30)"
              strokeWidth="2"
              strokeDasharray="400"
              animate={{ strokeDashoffset: [400, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}