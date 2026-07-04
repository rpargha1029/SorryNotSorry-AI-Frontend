import { motion } from "framer-motion";

export default function OptionCard({
  icon,
  label,
  value,
  selected,
  onClick,
}) {
  return (
    <motion.button
      type="button"
      whileHover={{
        scale: 1.04,
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={() => onClick(value)}
      className="w-full rounded-2xl p-5 transition-all duration-300"
      style={{
        background: selected
          ? "color-mix(in srgb, var(--primary) 18%, var(--card))"
          : "var(--card)",

        border: selected
          ? "2px solid var(--primary)"
          : "1px solid var(--border)",

        color: "var(--text)",

        boxShadow: selected
          ? "0 0 20px color-mix(in srgb, var(--primary) 35%, transparent)"
          : "0 8px 20px rgba(0,0,0,.15)",
      }}
    >
      {/* Emoji */}

      <div className="text-4xl mb-3">
        {icon}
      </div>

      {/* Title */}

      <div
        className="font-bold text-base transition-all duration-300"
        style={{
          color: selected
            ? "var(--primary)"
            : "var(--text)",
        }}
      >
        {label}
      </div>

      {/* Selected Badge */}

      {selected && (
        <div
          className="mt-3 text-xs font-semibold"
          style={{
            color: "var(--primary)",
          }}
        >
          ✓ Selected
        </div>
      )}
    </motion.button>
  );
}