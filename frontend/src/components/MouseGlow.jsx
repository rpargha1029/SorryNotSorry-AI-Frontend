import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {
  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 250,
        y: mouse.y - 250,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 25,
      }}
      className="fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full blur-[120px]"
      style={{
        background: "var(--primary)",
        opacity: 0.12,
      }}
    />
  );
}