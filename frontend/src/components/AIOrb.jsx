import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

export default function AIOrb() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="fixed bottom-8 right-8 z-50"
    >
      {/* Outer Glow */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.05, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background: "var(--primary)",
        }}
      />

      {/* Orb */}

      <motion.button
        whileHover={{
          scale: 1.12,
          rotate: 12,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          background:
            "linear-gradient(135deg,var(--primary),#8b5cf6)",
          border: "2px solid rgba(255,255,255,.15)",
        }}
      >
        <FaRobot className="text-white text-3xl" />
      </motion.button>
    </motion.div>
  );
}