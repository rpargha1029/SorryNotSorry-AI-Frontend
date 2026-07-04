import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaUserCircle,
  FaRobot,
  FaCopy,
  FaMagic,
  FaShareAlt,
  FaStar,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

export default function DemoSection() {

  return (

    <section

      id="demo"

      className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden"

    >

      {/* Background Glow */}

      <div

        className="absolute -left-40 top-20 w-[420px] h-[420px] rounded-full blur-[140px] -z-10"

        style={{
          background: "rgba(6,182,212,.12)",
        }}

      />

      <div

        className="absolute -right-40 bottom-0 w-[420px] h-[420px] rounded-full blur-[140px] -z-10"

        style={{
          background: "rgba(139,92,246,.16)",
        }}

      />

      {/* Heading */}

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

        className="text-center mb-20"

      >

        <span

          className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold"

          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}

        >

          🤖 Live AI Preview

        </span>

        <h2

          className="text-5xl lg:text-6xl font-black mt-8"

          style={{
            color: "var(--text)",
          }}

        >

          Watch AI Generate

          <span

            style={{
              color: "var(--primary)",
            }}

          >

            {" "}Excuses In Real Time

          </span>

        </h2>

        <p

          className="mt-8 max-w-3xl mx-auto text-lg leading-8"

          style={{
            color: "var(--text)",
            opacity: .75,
          }}

        >

          Every request produces three unique AI responses,
          automatically ranked by believability,
          professionalism and confidence.

        </p>

      </motion.div>

      {/* Main Grid */}

      <div className="grid lg:grid-cols-2 gap-14 items-start">

        {/* ======================================
                  USER REQUEST
        ====================================== */}

        <motion.div

          initial={{
            opacity: 0,
            x: -50,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{
            once: true,
          }}

          className="rounded-[36px] p-8"

          style={{

            background:
              "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",

            border: "1px solid var(--border)",

            backdropFilter: "blur(25px)",

          }}

        >

          <div className="flex items-center gap-4">

            <FaUserCircle

              size={48}

              style={{
                color: "var(--primary)",
              }}

            />

            <div>

              <h3 className="text-xl font-bold">

                Student

              </h3>

              <p

                style={{
                  opacity: .65,
                }}

              >

                Requesting AI Help

              </p>

            </div>

          </div>

          <div

            className="mt-10 rounded-3xl p-6 leading-8"

            style={{
              background: "rgba(255,255,255,.05)",
            }}

          >

            <p className="font-semibold">

              Situation

            </p>

            <p
              className="mt-4"
              style={{
                opacity: .8,
              }}
            >

              I missed my assignment because my internet
              stopped working just before the deadline.

            </p>

          </div>

          {/* AI Analysis */}

          <div className="space-y-5 mt-10">

            {[
              "Analyzing Context",
              "Understanding Audience",
              "Choosing Best Tone",
              "Ranking Responses",
            ].map((item, index) => (

              <motion.div

                key={item}

                initial={{
                  opacity: 0,
                  x: -20,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  delay: index * .15,
                }}

                className="flex justify-between items-center"

              >

                <span>{item}</span>

                <motion.div

                  animate={{
                    scale: [1, 1.2, 1],
                  }}

                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: index * .2,
                  }}

                  className="w-7 h-7 rounded-full flex items-center justify-center"

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

        </motion.div>

        {/* ======================================
                    AI RESPONSE
        ====================================== */}

        <motion.div

          initial={{
            opacity: 0,
            x: 50,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{
            once: true,
          }}

          className="relative"

        >

          <motion.div

            animate={{
              y: [-8, 8, -8],
            }}

            transition={{
              repeat: Infinity,
              duration: 5,
            }}

            className="rounded-[36px] p-8 shadow-2xl"

            style={{

              background:
                "linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.03))",

              border: "1px solid var(--border)",

              backdropFilter: "blur(24px)",

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

                    "Calculating Believability...",

                    1200,

                    "Generating Best Excuse...",

                    1200,

                  ]}

                  speed={45}

                  repeat={Infinity}

                />

              </h2>

            </div>


          </div>

          {/* ======================================
                    BEST RESPONSE
          ====================================== */}

          <motion.div

            whileHover={{
              scale: 1.02,
            }}

            className="rounded-3xl p-6 mt-10"

            style={{
              background:
                "linear-gradient(135deg,var(--primary),#8b5cf6)",
              color: "#fff",
            }}

          >

            <div className="flex justify-between items-center mb-5">

              <div className="flex items-center gap-3">

                <FaStar />

                <span className="font-bold">

                  Recommended Response

                </span>

              </div>

              <div className="font-bold">

                96%

              </div>

            </div>

            <TypeAnimation

              sequence={[

`Dear Professor,

I sincerely apologize for missing the assignment submission.

Unfortunately, my internet connection failed unexpectedly just before the deadline, preventing me from uploading my completed work.

I have finished the assignment and would greatly appreciate your consideration for a late submission.

Thank you for your understanding.`,

                3500,

                "",

              ]}

              speed={65}

              repeat={Infinity}

              cursor={true}

              style={{
                whiteSpace: "pre-line",
                lineHeight: "2",
              }}

            />

          </motion.div>

          {/* ======================================
                  AI METRICS
          ====================================== */}

          <div className="grid grid-cols-3 gap-4 mt-8">

            <motion.div

              whileHover={{
                y: -5,
              }}

              className="rounded-2xl p-5 text-center"

              style={{
                background: "rgba(255,255,255,.05)",
              }}

            >

              <FaShieldAlt
                className="mx-auto text-2xl mb-3"
                style={{
                  color: "#22c55e",
                }}
              />

              <h3
                className="text-2xl font-black"
                style={{
                  color: "#22c55e",
                }}
              >
                96%
              </h3>

              <p
                className="text-sm"
                style={{
                  opacity: .65,
                }}
              >
                Believable
              </p>

            </motion.div>

            <motion.div

              whileHover={{
                y: -5,
              }}

              className="rounded-2xl p-5 text-center"

              style={{
                background: "rgba(255,255,255,.05)",
              }}

            >

              <FaBolt
                className="mx-auto text-2xl mb-3"
                style={{
                  color: "#facc15",
                }}
              />

              <h3
                className="text-2xl font-black"
                style={{
                  color: "#facc15",
                }}
              >
                Fast
              </h3>

              <p
                className="text-sm"
                style={{
                  opacity: .65,
                }}
              >
                1.8 sec
              </p>

            </motion.div>

            <motion.div

              whileHover={{
                y: -5,
              }}

              className="rounded-2xl p-5 text-center"

              style={{
                background: "rgba(255,255,255,.05)",
              }}

            >

              <FaMagic
                className="mx-auto text-2xl mb-3"
                style={{
                  color: "#ec4899",
                }}
              />

              <h3
                className="text-2xl font-black"
                style={{
                  color: "#ec4899",
                }}
              >
                AI

              </h3>

              <p
                className="text-sm"
                style={{
                  opacity: .65,
                }}
              >
                Gemini
              </p>

            </motion.div>

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
                scaleX: [0, 1, .3, 1],
              }}

              transition={{
                repeat: Infinity,
                duration: 4,
              }}

              className="origin-left h-full"

              style={{
                background:
                  "linear-gradient(90deg,var(--primary),#8b5cf6)",
              }}

            />

          </div>
                    {/* Action Buttons */}

          <div className="grid grid-cols-3 gap-4 mt-10">

            <motion.button

              whileHover={{
                scale: 1.04,
              }}

              whileTap={{
                scale: .96,
              }}

              className="py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold"

              style={{
                background:
                  "linear-gradient(135deg,var(--primary),#8b5cf6)",
                color: "#fff",
              }}

            >

              <FaMagic />

              Rewrite

            </motion.button>

            <motion.button

              whileHover={{
                scale: 1.04,
              }}

              whileTap={{
                scale: .96,
              }}

              className="py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold"

              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid var(--border)",
              }}

            >

              <FaCopy />

              Copy

            </motion.button>

            <motion.button

              whileHover={{
                scale: 1.04,
              }}

              whileTap={{
                scale: .96,
              }}

              className="py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold"

              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid var(--border)",
              }}

            >

              <FaShareAlt />

              Share

            </motion.button>

          </div>

          </motion.div>

          <div className="mt-6 flex justify-center hidden lg:flex">
            <motion.div

              animate={{
                y: [-10, 10, -10],
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

              <FaBolt className="text-2xl" />

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