import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center pt-8 pb-10"
    >

      {/* Title */}

      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] transition-all duration-500"
        style={{
          color: "var(--primary)",
          textShadow:
            "0 0 40px color-mix(in srgb, var(--primary) 15%, transparent)",
        }}
      >
        Generate Smarter Excuses
      </h1>

      {/* Subtitle */}

      <p
        className="max-w-xl mx-auto mt-4 text-sm md:text-base leading-7 transition-all duration-500"
        style={{
          color: "var(--text)",
          opacity: 0.65,
        }}
      >
        Create believable, professional, funny, emotional or dramatic
        AI generated excuses in seconds with a clean and intuitive experience.
      </p>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">

        <div
          className="rounded-2xl px-5 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <h2
            className="text-xl font-bold"
            style={{
              color: "var(--primary)",
            }}
          >
            Confusion Stack
          </h2>

          <p
            className="mt-1 text-xs uppercase tracking-wider"
            style={{
              color: "var(--text)",
              opacity: .5,
            }}
          >
            Presents
          </p>
        </div>

        <div
          className="rounded-2xl px-5 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <h2
            className="text-xl font-bold"
            style={{
              color: "var(--primary)",
            }}
          >
            6+
          </h2>

          <p
            className="mt-1 text-xs uppercase tracking-wider"
            style={{
              color: "var(--text)",
              opacity: .5,
            }}
          >
            Excuse Categories
          </p>
        </div>

        <div
          className="rounded-2xl px-5 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <h2
            className="text-xl font-bold"
            style={{
              color: "var(--primary)",
            }}
          >
            Instant
          </h2>

          <p
            className="mt-1 text-xs uppercase tracking-wider"
            style={{
              color: "var(--text)",
              opacity: .5,
            }}
          >
            AI Response
          </p>
        </div>

      </div>
    </motion.section>
  );
}