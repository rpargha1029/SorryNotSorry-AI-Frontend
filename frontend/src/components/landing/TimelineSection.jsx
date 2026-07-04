import { motion } from "framer-motion";
import {
  FaKeyboard,
  FaBrain,
  FaRobot,
  FaMagic,
  FaShareAlt,
  FaClock,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaKeyboard />,
    title: "Describe Your Situation",
    description:
      "Choose category, audience, tone and response length in seconds.",
    color: "#06b6d4",
    time: "10 sec",
  },
  {
    icon: <FaBrain />,
    title: "AI Understands",
    description:
      "Gemini AI analyzes your situation and understands the context.",
    color: "#8b5cf6",
    time: "Instant",
  },
  {
    icon: <FaRobot />,
    title: "Generate Excuses",
    description:
      "Receive three unique excuses ranked by believability.",
    color: "#22c55e",
    time: "2 sec",
  },
  {
    icon: <FaMagic />,
    title: "Rewrite with AI",
    description:
      "Rewrite into Funny, Professional, Emotional or Dramatic tone.",
    color: "#ec4899",
    time: "1 click",
  },
  {
    icon: <FaShareAlt />,
    title: "Copy & Share",
    description:
      "Copy instantly or share through WhatsApp, Email and more.",
    color: "#f97316",
    time: "Instant",
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative max-w-6xl mx-auto px-6 py-32 overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="absolute -left-44 top-20 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(6,182,212,.12)",
        }}
      />

      <div
        className="absolute -right-44 bottom-0 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(139,92,246,.15)",
        }}
      />

      {/* Header */}

      <div className="text-center">

        <span
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          ⚡ How It Works
        </span>

        <h2
          className="text-5xl lg:text-6xl font-black mt-8"
          style={{
            color: "var(--text)",
          }}
        >
          Create AI Excuses

          <span
            style={{
              color: "var(--primary)",
            }}
          >
            {" "}In Seconds
          </span>

        </h2>

        <p
          className="mt-8 max-w-3xl mx-auto text-lg leading-8"
          style={{
            color: "var(--text)",
            opacity: .72,
          }}
        >
          From your situation to a believable AI-generated excuse,
          everything happens in just a few simple steps.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative mt-24">

        {/* Line */}

        <div
          className="absolute left-8 top-0 bottom-0 w-1 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom,var(--primary),#8b5cf6)",
          }}
        />

        <div className="space-y-14">

          {steps.map((step, index) => (

            <motion.div

              key={step.title}

              initial={{
                opacity: 0,
                x: -40,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: index * .12,
              }}

              className="relative flex gap-8"

            >

              {/* Step Number */}

              <div
                className="absolute -left-2 -top-3 text-7xl font-black opacity-5 select-none"
                style={{
                  color: step.color,
                }}
              >
                0{index + 1}
              </div>

              {/* Icon */}

              <motion.div

                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}

                transition={{
                  duration: .6,
                }}

                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-xl shrink-0"

                style={{
                  background: `linear-gradient(135deg,${step.color},var(--primary))`,
                  color: "#fff",
                }}

              >

                {step.icon}

              </motion.div>

              {/* Card */}

              <motion.div

                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}

                className="relative overflow-hidden flex-1 rounded-[30px] p-8"

                style={{
                  background:
                    "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(24px)",
                }}

              >

                {/* Glow */}

                <div
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-[80px] opacity-20"
                  style={{
                    background: step.color,
                  }}
                />

                <div className="flex justify-between items-center">

                  <h3
                    className="text-2xl font-bold"
                    style={{
                      color: step.color,
                    }}
                  >
                    {step.title}
                  </h3>

                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                      background: `${step.color}22`,
                      color: step.color,
                    }}
                  >
                    <FaClock />
                    {step.time}
                  </div>

                </div>

                <p
                  className="mt-5 leading-8"
                  style={{
                    color: "var(--text)",
                    opacity: .72,
                  }}
                >
                  {step.description}
                </p>

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
                    background:
                      `linear-gradient(90deg,${step.color},var(--primary))`,
                  }}

                />

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}