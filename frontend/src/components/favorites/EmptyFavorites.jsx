import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaStar,
  FaMagic,
  FaArrowRight,
} from "react-icons/fa";

export default function EmptyFavorites() {

  const navigate = useNavigate();

  return (

    <motion.div

      initial={{
        opacity: 0,
        scale: .95,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      className="rounded-[36px] p-14 text-center relative overflow-hidden"

      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
      }}

    >

      {/* Background Glow */}

      <motion.div

        animate={{
          scale: [1, 1.25, 1],
          rotate: [0, 10, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 8,
        }}

        className="absolute w-80 h-80 rounded-full blur-[120px]"

        style={{
          background: "rgba(6,182,212,.18)",
          top: "-120px",
          right: "-120px",
        }}

      />

      {/* Floating Icon */}

      <motion.div

        animate={{
          y: [-8, 8, -8],
          rotate: [-5, 5, -5],
        }}

        transition={{
          repeat: Infinity,
          duration: 4,
        }}

        className="w-28 h-28 rounded-full mx-auto flex items-center justify-center text-5xl"

        style={{
          background:
            "linear-gradient(135deg,var(--primary),#8b5cf6)",
          color: "#fff",
        }}

      >

        <FaStar />

      </motion.div>

      <h2

        className="text-4xl font-black mt-10"

        style={{
          color: "var(--primary)",
        }}

      >

        No Favorites Yet

      </h2>

      <p

        className="mt-6 max-w-xl mx-auto leading-8"

        style={{
          color: "var(--text)",
          opacity: .72,
        }}

      >

        Save your best AI excuses and they'll appear here.
        Build your own collection of professional,
        funny, emotional and believable responses.

      </p>

      {/* Button */}

      <motion.button

        whileHover={{
          scale: 1.05,
        }}

        whileTap={{
          scale: .95,
        }}

        onClick={() => navigate("/dashboard")}

        className="mt-10 px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold mx-auto"

        style={{
          background:
            "linear-gradient(135deg,var(--primary),#8b5cf6)",
          color: "#fff",
        }}

      >

        <FaMagic />

        Generate Your First Excuse

        <FaArrowRight />

      </motion.button>

    </motion.div>

  );

}