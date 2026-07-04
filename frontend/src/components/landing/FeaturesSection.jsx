import { motion } from "framer-motion";
import {
  FaRobot,
  FaShieldAlt,
  FaMagic,
  FaHistory,
  FaPalette,
  FaShareAlt,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Powered",
    description:
      "Generate realistic excuses instantly using advanced artificial intelligence trained for human-like writing.",
    color: "#06b6d4",
    badge: "POPULAR",
  },
  {
    icon: <FaMagic />,
    title: "Smart Rewrite",
    description:
      "Rewrite any excuse into Funny, Professional, Emotional or Dramatic tones with one click.",
    color: "#ec4899",
    badge: "NEW",
  },
  {
    icon: <FaShieldAlt />,
    title: "Private & Secure",
    description:
      "Your history is protected with secure authentication and encrypted storage.",
    color: "#22c55e",
    badge: "SECURE",
  },
  {
    icon: <FaHistory />,
    title: "Cloud History",
    description:
      "Every generated excuse is saved automatically so you can revisit it anytime.",
    color: "#8b5cf6",
  },
  {
    icon: <FaPalette />,
    title: "Premium Themes",
    description:
      "Switch between beautiful themes that completely transform your experience.",
    color: "#f97316",
  },
  {
    icon: <FaShareAlt />,
    title: "Instant Sharing",
    description:
      "Copy or share your excuse instantly to WhatsApp, Email or anywhere else.",
    color: "#14b8a6",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        {/* Header */}

        <div className="text-center">

          <span
            className="inline-block px-5 py-2 rounded-full font-semibold"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            ✨ Why Choose SorryNotSorry
          </span>

          <h2
            className="text-5xl lg:text-6xl font-black mt-8"
            style={{
              color: "var(--text)",
            }}
          >
            Everything You Need

            <span
              style={{
                color: "var(--primary)",
              }}
            >
              {" "}In One Platform
            </span>

          </h2>

          <p
            className="mt-8 max-w-3xl mx-auto text-lg leading-8"
            style={{
              color: "var(--text)",
              opacity: .75,
            }}
          >
            SorryNotSorry combines modern AI,
            beautiful design,
            secure authentication,
            cloud history,
            premium themes,
            and intelligent rewriting
            into one seamless experience.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * .12,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="relative overflow-hidden rounded-[32px] p-8"
              style={{
                background:
                  "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",
                border: "1px solid var(--border)",
                backdropFilter: "blur(24px)",
              }}
            >

              {/* Glow */}

              <div
                className="absolute -top-14 -right-14 w-40 h-40 rounded-full blur-[80px] opacity-20"
                style={{
                  background: feature.color,
                }}
              />

              {/* Badge */}

              {feature.badge && (

                <span
                  className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: `${feature.color}22`,
                    color: feature.color,
                  }}
                >
                  {feature.badge}
                </span>

              )}

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.15,
                }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}, var(--primary))`,
                  color: "#fff",
                }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}

              <h3
                className="text-2xl font-bold mt-8"
                style={{
                  color: "var(--text)",
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}

              <p
                className="mt-5 leading-8"
                style={{
                  color: "var(--text)",
                  opacity: .72,
                }}
              >
                {feature.description}
              </p>

              {/* Divider */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileHover={{
                  width: "100%",
                }}
                transition={{
                  duration: .4,
                }}
                className="h-1 rounded-full mt-8"
                style={{
                  background: `linear-gradient(90deg, ${feature.color}, var(--primary))`,
                }}
              />

              {/* Learn More */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                whileHover={{
                  opacity: 1,
                  x: 0,
                }}
                className="flex items-center gap-3 mt-8 font-semibold"
                style={{
                  color: feature.color,
                }}
              >

                Learn More

                <FaArrowRight />

              </motion.div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}