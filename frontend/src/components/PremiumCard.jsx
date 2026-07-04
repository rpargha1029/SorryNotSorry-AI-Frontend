import { motion } from "framer-motion";
import { useState } from "react";

export default function PremiumCard({
  children,
  className = "",
}) {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .45,
      }}
      whileHover={{
        y: -4,
        transition: {
          duration: .25,
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className={`
        relative
        overflow-hidden
        rounded-[30px]
        h-full
        transition-all duration-300
        ${className}
      `}
      style={{
        background: "rgba(15, 23, 42, 0.45)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid transparent",
        backgroundImage: isHovered
          ? "linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.55)), linear-gradient(135deg, var(--primary), #8b5cf6)"
          : "linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.45)), linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        boxShadow: isHovered
          ? "0 12px 40px rgba(0, 0, 0, 0.25), 0 0 15px color-mix(in srgb, var(--primary) 12%, transparent)"
          : "0 8px 32px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
      }}
    >

      {/* Spotlight */}

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            300px circle at ${mouse.x}px ${mouse.y}px,
            color-mix(in srgb, var(--primary) 20%, transparent),
            transparent 70%
          )`,
        }}
      />

      {/* Glass Reflection */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, .08), transparent 35%)",
        }}
      />

      <div className="relative z-10 h-full p-7">

        {children}

      </div>

    </motion.div>
  );
}