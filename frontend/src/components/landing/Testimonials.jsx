import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Ranab Paul Argha",
    role: "KIIT University Student",
    text:
      "This saved me before one of my toughest presentations. The excuse sounded completely natural and professional.",
    avatar: "👨‍🎓",
    color: "#06b6d4",
  },
  {
    name: "Swapnil Nandi Utsha",
    role: "KIIT University Student",
    text:
      "Beautiful UI and surprisingly believable AI responses. It genuinely feels like a premium AI application.",
    avatar: "👩‍💻",
    color: "#8b5cf6",
  },
  {
    name: "Chandan Kumar Barman",
    role: "KIIT University Student",
    text:
      "The rewrite feature is amazing. I love how quickly it generates multiple believable responses.",
    avatar: "👨‍💼",
    color: "#22c55e",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="absolute -left-44 top-0 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(6,182,212,.10)",
        }}
      />

      <div
        className="absolute -right-44 bottom-0 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(139,92,246,.12)",
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
          ❤️ Testimonials
        </span>

        <h2
          className="text-5xl lg:text-6xl font-black mt-8"
          style={{
            color: "var(--text)",
          }}
        >
          Loved By

          <span
            style={{
              color: "var(--primary)",
            }}
          >
            {" "}Thousands
          </span>

        </h2>

        <p
          className="mt-8 max-w-3xl mx-auto text-lg leading-8"
          style={{
            color: "var(--text)",
            opacity: .72,
          }}
        >
          Students and professionals trust
          SorryNotSorry AI every day to create
          believable excuses within seconds.
        </p>

      </div>

      {/* Overall Rating */}

      <motion.div

        whileHover={{
          scale: 1.03,
        }}

        className="rounded-[30px] p-8 mt-16 mb-20 flex flex-col md:flex-row items-center justify-between gap-8"

        style={{
          background:
            "linear-gradient(135deg,var(--primary),#8b5cf6)",
          color: "#fff",
        }}

      >

        <div>

          <h3 className="text-4xl font-black">

            4.9 / 5 ⭐

          </h3>

          <p className="mt-3 opacity-90">

            Average rating from thousands of users.

          </p>

        </div>

        <div className="flex items-center gap-4">

          <FaUsers className="text-5xl" />

          <div>

            <h4 className="text-2xl font-bold">

              4,500+

            </h4>

            <p>

              Happy Users

            </p>

          </div>

        </div>

      </motion.div>

      {/* Cards */}

      <div className="grid lg:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (

          <motion.div

            key={item.name}

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
              delay: index * .15,
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
              backdropFilter: "blur(25px)",
            }}

          >

            {/* Glow */}

            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-20"
              style={{
                background: item.color,
              }}
            />

            <FaQuoteLeft
              className="absolute right-8 top-8 text-5xl"
              style={{
                color: item.color,
                opacity: .2,
              }}
            />

            {/* Avatar */}

            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-xl"
              style={{
                background:
                  `linear-gradient(135deg,${item.color},var(--primary))`,
              }}
            >
              {item.avatar}
            </div>

            {/* Stars */}

            <div className="flex gap-1 mt-8">

              {[1,2,3,4,5].map((i)=>(

                <FaStar
                  key={i}
                  color="#FFD700"
                />

              ))}

            </div>

            {/* Text */}

            <p
              className="mt-6 leading-8 italic"
              style={{
                color:"var(--text)",
                opacity:.75,
              }}
            >
              "{item.text}"
            </p>

            {/* Footer */}

            <div className="mt-8 flex justify-between items-center">

              <div>

                <h3
                  className="text-xl font-bold"
                  style={{
                    color:"var(--text)",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    opacity:.65,
                  }}
                >
                  {item.role}
                </p>

              </div>

              <div
                className="flex items-center gap-2 text-sm font-semibold"
                style={{
                  color:"#22c55e",
                }}
              >

                <FaCheckCircle />

                Verified

              </div>

            </div>

            {/* Bottom Accent */}

            <motion.div

              initial={{
                width:0,
              }}

              whileHover={{
                width:"100%",
              }}

              transition={{
                duration:.35,
              }}

              className="h-1 rounded-full mt-8"

              style={{
                background:
                  `linear-gradient(90deg,${item.color},var(--primary))`,
              }}

            />

          </motion.div>

        ))}

      </div>

    </section>
  );
}