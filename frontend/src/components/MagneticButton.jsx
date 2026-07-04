import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
  style = {},
  onClick,
  type = "button",
  disabled = false,
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.15;
    const moveY = (y - rect.height / 2) * 0.15;

    ref.current.style.transform =
      `translate(${moveX}px,${moveY}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <motion.button
      ref={ref}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 15,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
      style={{
        transition: "transform .25s ease",
        ...style,
      }}
    >
      {children}
    </motion.button>
  );
}