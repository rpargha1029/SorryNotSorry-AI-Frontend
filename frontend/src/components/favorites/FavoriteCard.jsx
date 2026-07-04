import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
  FaCopy,
  FaTrash,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

export default function FavoriteCard({
  item,
  onDelete,
}) {
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(item.text);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Copy failed.");
    }
  };

  const badgeColor = () => {
    if (item.believability >= 95)
      return "#22c55e";

    if (item.believability >= 85)
      return "#f59e0b";

    return "#ef4444";
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: .25,
      }}
      className="rounded-2xl p-6"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
      }}
    >

      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-4">

        <div>
          <div className="flex items-center gap-2.5">
            <FaStar
              className="text-sm"
              style={{ color: "#FFD700" }}
            />
            <h2
              className="text-base font-bold"
              style={{ color: "var(--primary)" }}
            >
              {item.tone}
            </h2>
          </div>

          <p
            className="mt-1 text-sm"
            style={{ opacity: .5 }}
          >
            {item.category}
          </p>
        </div>

        {/* Score */}
        <div
          className="rounded-lg px-3 py-2 flex items-center gap-2"
          style={{
            background: "rgba(255,255,255,.04)",
            border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)",
          }}
        >
          <FaCheckCircle
            className="text-xs"
            style={{ color: badgeColor() }}
          />
          <span
            className="font-semibold text-sm"
            style={{ color: badgeColor() }}
          >
            {item.believability}% believable
          </span>
        </div>

      </div>

      {/* Excuse */}
      <div
        className="mt-5 rounded-xl p-5 text-[15px] leading-8 tracking-wide"
        style={{
          background: "rgba(255,255,255,.03)",
          border: "1px solid color-mix(in srgb, var(--border) 40%, transparent)",
        }}
      >
        {item.text}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-5">

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: .95 }}
          onClick={copyText}
          className="px-5 py-2.5 rounded-xl flex items-center gap-2.5 text-sm font-semibold"
          style={{
            background:
              "linear-gradient(135deg,var(--primary),#8b5cf6)",
            color: "#fff",
          }}
        >
          <FaCopy className="text-xs" />
          Copy
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: .95 }}
          onClick={() =>
            onDelete(item.id)
          }
          className="px-5 py-2.5 rounded-xl flex items-center gap-2.5 text-sm font-semibold transition-all duration-200"
          style={{
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.2)",
            color: "#ef4444",
          }}
        >
          <FaTrash className="text-xs" />
          Remove
        </motion.button>

      </div>

    </motion.div>
  );
}