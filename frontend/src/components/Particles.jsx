import { motion } from "framer-motion";

export default function Particles() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "var(--primary)",
              opacity: Math.random() * 0.25 + 0.05,
              filter: "blur(1px)",
            }}
            animate={{
              y: [-40, 40, -40],
              x: [-20, 20, -20],
              opacity: [0.05, 0.25, 0.05],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}