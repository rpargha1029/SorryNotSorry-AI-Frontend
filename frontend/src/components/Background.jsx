import { motion } from "framer-motion";

export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background: "var(--bg)",
      }}
    >
      {/* Aurora 1 */}

      <motion.div
        animate={{
          x: [0, 250, -150, 0],
          y: [0, -120, 80, 0],
          rotate: [0, 20, -10, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full blur-[170px]"
        style={{
          background: "var(--primary)",
          opacity: 0.18,
        }}
      />

      {/* Aurora 2 */}

      <motion.div
        animate={{
          x: [0, -220, 160, 0],
          y: [0, 160, -80, 0],
          rotate: [0, -20, 15, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-52 -right-52 w-[850px] h-[850px] rounded-full blur-[190px]"
        style={{
          background: "var(--primary)",
          opacity: 0.15,
        }}
      />

      {/* Center Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background: "var(--primary)",
        }}
      />

      {/* Soft Noise */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Radial Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,.35) 100%)",
        }}
      />
    </div>
  );
}