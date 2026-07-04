import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPlay,
  FaBolt,
  FaRobot,
  FaUsers,
  FaStar,
} from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-32 px-6">

      {/* Background Glow */}

      <div
        className="absolute -left-40 top-0 w-[450px] h-[450px] rounded-full blur-[160px] -z-10"
        style={{
          background: "rgba(6,182,212,.15)",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute w-[650px] h-[650px] rounded-full blur-[180px] -z-10"
        style={{
          background: "rgba(139,92,246,.18)",
          top: "-250px",
          right: "-150px",
        }}
      />

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

        className="relative max-w-6xl mx-auto rounded-[42px] p-12 md:p-20 overflow-hidden"

        style={{
          background:
            "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",
          border: "1px solid var(--border)",
          backdropFilter: "blur(30px)",
        }}

      >

        {/* Glow */}

        <div
          className="absolute -top-24 -right-20 w-72 h-72 rounded-full blur-[100px] opacity-20"
          style={{
            background: "var(--primary)",
          }}
        />

        {/* Badge */}

        <div
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold"
          style={{
            background: "rgba(255,255,255,.05)",
            border: "1px solid var(--border)",
          }}
        >
          <FaBolt
            style={{
              color: "var(--primary)",
            }}
          />

          AI Powered • Gemini
        </div>

        {/* Heading */}

        <h2
          className="text-5xl lg:text-6xl font-black mt-10 leading-tight"
          style={{
            color: "var(--text)",
          }}
        >
          Ready To Create

          <span
            style={{
              color: "var(--primary)",
            }}
          >
            {" "}Smarter Excuses?
          </span>

        </h2>

        <p
          className="mt-8 text-xl max-w-3xl mx-auto leading-9"
          style={{
            color: "var(--text)",
            opacity: .72,
          }}
        >
          Join thousands of students and professionals
          generating believable AI excuses within seconds.
          Fast, private and beautifully designed.
        </p>

        {/* CTA Buttons */}

        <div className="flex flex-wrap justify-center gap-6 mt-14">

          <Link to="/register">

            <motion.button

              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: .96,
              }}

              className="px-10 py-5 rounded-2xl font-bold flex items-center gap-3 text-lg shadow-xl"

              style={{
                background:
                  "linear-gradient(135deg,var(--primary),#8b5cf6)",
                color: "#fff",
              }}

            >

              Get Started Free

              <FaArrowRight />

            </motion.button>

          </Link>

          <motion.button

            whileHover={{
              scale: 1.05,
            }}

            whileTap={{
              scale: .96,
            }}

            onClick={() =>
              document
                .getElementById("demo")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }

            className="px-10 py-5 rounded-2xl font-bold flex items-center gap-3 text-lg"

            style={{
              background: "rgba(255,255,255,.05)",
              border: "1px solid var(--border)",
            }}

          >

            <FaPlay />

            Watch Demo

          </motion.button>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,.04)",
            }}
          >

            <FaRobot
              className="text-3xl mx-auto mb-4"
              style={{
                color: "var(--primary)",
              }}
            />

            <h3
              className="text-4xl font-black"
              style={{
                color: "var(--primary)",
              }}
            >
              12K+
            </h3>

            <p
              className="mt-2"
              style={{
                opacity: .7,
              }}
            >
              AI Excuses Generated
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,.04)",
            }}
          >

            <FaUsers
              className="text-3xl mx-auto mb-4"
              style={{
                color: "#22c55e",
              }}
            />

            <h3
              className="text-4xl font-black"
              style={{
                color: "#22c55e",
              }}
            >
              4.5K+
            </h3>

            <p
              className="mt-2"
              style={{
                opacity: .7,
              }}
            >
              Happy Users
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,.04)",
            }}
          >

            <FaStar
              className="text-3xl mx-auto mb-4"
              style={{
                color: "#FFD700",
              }}
            />

            <h3
              className="text-4xl font-black"
              style={{
                color: "#FFD700",
              }}
            >
              4.9★

            </h3>

            <p
              className="mt-2"
              style={{
                opacity: .7,
              }}
            >
              Average Rating
            </p>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}