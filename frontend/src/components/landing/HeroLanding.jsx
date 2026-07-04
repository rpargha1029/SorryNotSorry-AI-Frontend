import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaPlay,
  FaBolt,
  FaShieldAlt,
  FaMagic,
} from "react-icons/fa";

export default function HeroLanding() {

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-36 pb-24">

      {/* Background Glow */}

      <div
        className="absolute -top-32 -left-40 w-[450px] h-[450px] rounded-full blur-[140px] -z-10"
        style={{
          background: "rgba(6,182,212,.15)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(139,92,246,.18)",
        }}
      />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* ======================================
                    LEFT SIDE
        ====================================== */}

        <motion.div

          initial={{
            opacity: 0,
            x: -70,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: .8,
          }}

        >



          {/* Heading */}

          <h1
            className="text-6xl lg:text-7xl font-black leading-tight"
            style={{
              color: "var(--text)",
            }}
          >

            Generate

            <br />

            <span
              style={{
                color: "var(--primary)",
              }}
            >

              AI Excuses

            </span>

            <br />

            That Actually

            <br />

            Sound Human.

          </h1>

          {/* Animated Text */}

          <div
            className="mt-8 h-12 text-2xl font-bold"
            style={{
              color: "var(--primary)",
            }}
          >

            <TypeAnimation

              sequence={[

                "Professional Excuses.",

                1600,

                "Funny Excuses.",

                1600,

                "Believable Excuses.",

                1600,

                "Emotional Excuses.",

                1600,

                "Dramatic Excuses.",

                1600,

              ]}

              speed={45}

              repeat={Infinity}

            />

          </div>

          {/* Description */}

          <p

            className="mt-8 max-w-xl text-lg leading-9"

            style={{
              color: "var(--text)",
              opacity: .75,
            }}

          >

            SorryNotSorry helps students,
            professionals and everyone in between
            generate believable AI-powered excuses
            within seconds using modern artificial
            intelligence.

          </p>

          {/* CTA Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">

            <Link to="/register">

              <motion.button

                whileHover={{
                  scale: 1.05,
                }}

                whileTap={{
                  scale: .96,
                }}

                className="px-8 py-4 rounded-2xl font-bold flex items-center gap-3 text-lg shadow-xl"

                style={{
                  background:
                    "linear-gradient(135deg,var(--primary),#8b5cf6)",
                  color: "#fff",
                }}

              >

                Start Free

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

              className="px-8 py-4 rounded-2xl font-bold flex items-center gap-3 text-lg"

              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}

            >

              <FaPlay />

              Watch Demo

            </motion.button>

          </div>
                    {/* Live Statistics */}

          <div className="grid grid-cols-3 gap-8 mt-14 max-w-lg">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
            >

              <h2
                className="text-4xl font-black"
                style={{
                  color: "var(--primary)",
                }}
              >
                150K+
              </h2>

              <p
                className="mt-2"
                style={{
                  opacity: .7,
                }}
              >
                Excuses Generated
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .45 }}
            >

              <h2
                className="text-4xl font-black"
                style={{
                  color: "#22c55e",
                }}
              >
                98%
              </h2>

              <p
                className="mt-2"
                style={{
                  opacity: .7,
                }}
              >
                AI Accuracy
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .6 }}
            >

              <h2
                className="text-4xl font-black"
                style={{
                  color: "#8b5cf6",
                }}
              >
                24/7
              </h2>

              <p
                className="mt-2"
                style={{
                  opacity: .7,
                }}
              >
                Online
              </p>

            </motion.div>

          </div>

          {/* Highlights */}

          <div className="flex flex-wrap gap-8 mt-14">

            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-center gap-3"
            >

              <FaBolt
                style={{
                  color: "var(--primary)",
                }}
              />

              <span>Instant AI Generation</span>

            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-center gap-3"
            >

              <FaShieldAlt
                style={{
                  color: "#22c55e",
                }}
              />

              <span>Private History</span>

            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-center gap-3"
            >

              <FaMagic
                style={{
                  color: "#ec4899",
                }}
              />

              <span>Smart Rewrite</span>

            </motion.div>

          </div>

        </motion.div>

        {/* ======================================
                  RIGHT SIDE
        ====================================== */}

        <motion.div

          initial={{
            opacity: 0,
            x: 70,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: .9,
          }}

          className="relative"

        >

          {/* Floating Glow */}

          <div
            className="absolute -z-10 -top-10 -right-10 w-80 h-80 rounded-full blur-[120px]"
            style={{
              background: "rgba(6,182,212,.15)",
            }}
          />

          <div
            className="absolute -z-10 bottom-0 left-0 w-72 h-72 rounded-full blur-[120px]"
            style={{
              background: "rgba(139,92,246,.18)",
            }}
          />

          {/* AI Card */}

          <motion.div

            animate={{

              y: [-15, 10, -15],

              rotate: [-1, 1, -1],

            }}

            transition={{

              repeat: Infinity,

              duration: 6,

            }}

            className="rounded-[36px] p-8 shadow-2xl"

            style={{

              background:
                "linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))",

              border: "1px solid var(--border)",

              backdropFilter: "blur(25px)",

            }}

          >

            <div className="flex justify-between items-center">

              <div>

                <p
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  SorryNotSorry AI
                </p>

                <h2 className="text-3xl font-bold mt-2">
                                    <TypeAnimation

                    sequence={[

                      "Thinking...",

                      1200,

                      "Analyzing Context...",

                      1200,

                      "Optimizing Response...",

                      1200,

                      "Generating Excuse...",

                      1200,

                    ]}

                    speed={45}

                    repeat={Infinity}

                  />

                </h2>

              </div>

              <motion.div

                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg"

                style={{
                  background:
                    "linear-gradient(135deg,var(--primary),#8b5cf6)",
                }}

              >

                🤖

              </motion.div>

            </div>

            {/* AI Steps */}

            <div className="mt-10 space-y-6">

              {[
                "Understanding Situation",
                "Selecting Best Tone",
                "Calculating Believability",
                "Generating AI Response",
              ].map((item, index) => (

                <motion.div

                  key={item}

                  initial={{
                    opacity: 0,
                    x: -30,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    delay: index * .25,
                  }}

                  className="flex items-center justify-between"

                >

                  <span
                    style={{
                      color: "var(--text)",
                    }}
                  >
                    {item}
                  </span>

                  <motion.div

                    animate={{
                      scale: [1, 1.25, 1],
                    }}

                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: index * .2,
                    }}

                    className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"

                    style={{
                      background: "#22c55e22",
                      color: "#22c55e",
                    }}

                  >

                    ✓

                  </motion.div>

                </motion.div>

              ))}

            </div>

            {/* AI Progress */}

            <div
              className="w-full h-2 rounded-full overflow-hidden mt-10"
              style={{
                background: "rgba(255,255,255,.08)",
              }}
            >

              <motion.div

                animate={{
                  scaleX: [0, 1, .25, 1],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}

                className="origin-left h-full rounded-full"

                style={{
                  background:
                    "linear-gradient(90deg,var(--primary),#8b5cf6)",
                }}

              />

            </div>

            {/* AI Status */}

            <div className="flex items-center justify-between mt-8">

              <div>

                <p
                  className="text-sm"
                  style={{
                    opacity: .6,
                  }}
                >
                  Response Quality
                </p>

                <h3
                  className="text-2xl font-bold"
                  style={{
                    color: "#22c55e",
                  }}
                >
                  Excellent
                </h3>

              </div>

              <div>

                <p
                  className="text-sm"
                  style={{
                    opacity: .6,
                  }}
                >
                  Confidence
                </p>

                <h3
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  96%
                </h3>

              </div>

            </div>

          </motion.div>

          <div className="mt-6 flex justify-center hidden lg:flex">
            <motion.div

              animate={{
                y: [-8, 8, -8],
              }}

              transition={{
                repeat: Infinity,
                duration: 4.5,
              }}

              className="rounded-full px-8 py-4 shadow-2xl flex items-center gap-4"

              style={{
                background:
                  "linear-gradient(135deg,var(--primary),#8b5cf6)",
                color: "#fff",
              }}

            >

              <div className="text-2xl">

                ⚡

              </div>

              <div>

                <p className="text-sm opacity-80">

                  Average Generation Time

                </p>

                <h4 className="font-bold text-lg">

                  1.8 Seconds

                </h4>

              </div>

            </motion.div>
          </div>

        </motion.div>

      </div>

    </section>

  );

}