import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
  FaRobot,
  FaUsers,
  FaGlobe,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaRobot />,
    value: 12000,
    suffix: "+",
    label: "Excuses Generated",
    description: "AI excuses created worldwide.",
    color: "#06b6d4",
  },
  {
    icon: <FaUsers />,
    value: 4500,
    suffix: "+",
    label: "Happy Users",
    description: "Students & professionals trust us.",
    color: "#8b5cf6",
  },
  {
    icon: <FaGlobe />,
    value: 35,
    suffix: "+",
    label: "Countries",
    description: "Growing community across the globe.",
    color: "#22c55e",
  },
  {
    icon: <FaStar />,
    value: 4.9,
    decimals: 1,
    suffix: "/5",
    label: "Average Rating",
    description: "Loved by our users.",
    color: "#f59e0b",
  },
];

const CountUpComponent = typeof CountUp === "function" ? CountUp : CountUp.default;

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section
      ref={ref}
      className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="absolute -left-40 top-0 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(6,182,212,.10)",
        }}
      />

      <div
        className="absolute -right-40 bottom-0 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(139,92,246,.12)",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: .7,
        }}
      >
        {/* Heading */}

        <div className="text-center mb-20">

          <span
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            🌍 Trusted Worldwide
          </span>

          <h2
            className="text-5xl lg:text-6xl font-black mt-8"
            style={{
              color: "var(--text)",
            }}
          >
            Numbers That

            <span
              style={{
                color: "var(--primary)",
              }}
            >
              {" "}Speak For Themselves
            </span>

          </h2>

          <p
            className="mt-8 max-w-3xl mx-auto text-lg leading-8"
            style={{
              color: "var(--text)",
              opacity: .72,
            }}
          >
            Thousands of users rely on SorryNotSorry AI
            every day to generate believable,
            professional and creative excuses.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div

              key={item.label}

              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }

              transition={{
                delay: index * .12,
              }}

              whileHover={{
                y: -12,
                scale: 1.03,
              }}

              className="relative overflow-hidden rounded-[32px] p-8 text-center"

              style={{
                background:
                  "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",
                border: "1px solid var(--border)",
                backdropFilter: "blur(24px)",
              }}

            >

              {/* Glow */}

              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[90px] opacity-20"
                style={{
                  background: item.color,
                }}
              />

              {/* Icon */}

              <motion.div

                whileHover={{
                  rotate: 12,
                  scale: 1.15,
                }}

                className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto text-4xl shadow-xl"

                style={{
                  background: `linear-gradient(135deg, ${item.color}, var(--primary))`,
                  color: "#fff",
                }}

              >

                {item.icon}

              </motion.div>

              {/* Number */}

              <h3
                className="text-5xl font-black mt-8"
                style={{
                  color: item.color,
                }}
              >

                {inView && (

                  <CountUpComponent
                    end={item.value}
                    duration={2}
                    decimals={item.decimals || 0}
                  />

                )}

                {item.suffix}

              </h3>

              {/* Label */}

              <p
                className="mt-4 text-xl font-semibold"
                style={{
                  color: "var(--text)",
                }}
              >
                {item.label}
              </p>

              {/* Description */}

              <p
                className="mt-4 leading-7"
                style={{
                  color: "var(--text)",
                  opacity: .7,
                }}
              >
                {item.description}
              </p>

              {/* Bottom Accent */}

              <motion.div

                initial={{
                  width: 0,
                }}

                whileHover={{
                  width: "100%",
                }}

                transition={{
                  duration: .35,
                }}

                className="h-1 rounded-full mt-8"

                style={{
                  background: `linear-gradient(90deg, ${item.color}, var(--primary))`,
                }}

              />

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}