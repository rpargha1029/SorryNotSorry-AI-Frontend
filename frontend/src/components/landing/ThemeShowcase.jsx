import { motion } from "framer-motion";
import {
  FaPalette,
  FaCheckCircle,
  FaDesktop,
} from "react-icons/fa";

const themes = [
  {
    name: "Cyberpunk",
    colors: ["#0a0a0f", "#161124", "#facc15"],
    desc: "Neon pink borders & bright yellow accents",
    accent: "#facc15",
    badge: "Popular",
  },
  {
    name: "Nord",
    colors: ["#2e3440", "#3b4252", "#88c0d0"],
    desc: "Cool arctic frost palette style",
    accent: "#88c0d0",
    badge: "New",
  },
  {
    name: "Rose Gold",
    colors: ["#1c1917", "#292524", "#fda4af"],
    desc: "Premium rose stone layout theme",
    accent: "#fda4af",
    badge: "Premium",
  },
  {
    name: "Ocean",
    colors: ["#082f49", "#0c4a6e", "#38bdf8"],
    desc: "Deep ocean background with sky accents",
    accent: "#38bdf8",
    badge: "New",
  },
  {
    name: "Midnight",
    colors: ["#020617", "#0f172a", "#06b6d4"],
    desc: "Sleek default dark cyan and indigo theme",
    accent: "#06b6d4",
    badge: "Default",
  },
  {
    name: "Sunset",
    colors: ["#431407", "#7c2d12", "#fb923c"],
    desc: "Vibrant warm sunset orange look",
    accent: "#fb923c",
  },
];

export default function ThemeShowcase() {
  return (
    <section
      id="themes"
      className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="absolute -left-40 top-20 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(6,182,212,.12)",
        }}
      />

      <div
        className="absolute -right-40 bottom-0 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(139,92,246,.14)",
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
          🎨 Personalization
        </span>

        <h2
          className="text-5xl lg:text-6xl font-black mt-8"
          style={{
            color: "var(--text)",
          }}
        >
          Beautiful

          <span
            style={{
              color: "var(--primary)",
            }}
          >
            {" "}Themes
          </span>

        </h2>

        <p
          className="mt-8 max-w-3xl mx-auto text-lg leading-8"
          style={{
            color: "var(--text)",
            opacity: .72,
          }}
        >
          Transform the entire application instantly
          with handcrafted premium themes designed
          for every mood and workspace.
        </p>

      </div>

      {/* Theme Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

        {themes.map((theme, index) => (

          <motion.div

            key={theme.name}

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

            className="relative overflow-hidden rounded-[32px]"

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
                background: theme.accent,
              }}
            />

            {/* Badge */}

            {theme.badge && (

              <span
                className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold z-20"
                style={{
                  background: `${theme.accent}22`,
                  color: theme.accent,
                }}
              >
                {theme.badge}
              </span>

            )}

            {/* Preview */}

            <div
              className="h-48 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg,${theme.colors[0]},${theme.colors[1]})`,
              }}
            >

              <motion.div

                animate={{
                  scale: [1, 1.15, 1],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}

                className="absolute w-28 h-28 rounded-full blur-[70px]"

                style={{
                  background: "#fff",
                  opacity: .25,
                  top: 20,
                  left: 20,
                }}

              />

              {/* Fake Dashboard */}

              <motion.div

                whileHover={{
                  scale: 1.05,
                }}

                className="absolute left-8 right-8 top-10 rounded-2xl p-4"

                style={{
                  background: "rgba(255,255,255,.18)",
                  backdropFilter: "blur(20px)",
                }}

              >

                <div className="flex items-center gap-3">

                  <FaDesktop color="#fff"/>

                  <div
                    className="h-2 rounded-full flex-1"
                    style={{
                      background: "rgba(255,255,255,.35)",
                    }}
                  />

                </div>

                <div className="grid grid-cols-3 gap-2 mt-5">

                  {theme.colors.map(color => (

                    <div

                      key={color}

                      className="h-8 rounded-lg"

                      style={{
                        background: color,
                      }}

                    />

                  ))}

                </div>

              </motion.div>

            </div>

            {/* Content */}

            <div className="p-8">

              <div className="flex justify-between items-center">

                <h3
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--text)",
                  }}
                >
                  {theme.name}
                </h3>

                <FaPalette
                  style={{
                    color: theme.accent,
                  }}
                />

              </div>

              <p
                className="mt-5 leading-7"
                style={{
                  color: "var(--text)",
                  opacity: .72,
                }}
              >
                {theme.desc}
              </p>

              {/* Palette */}

              <div className="flex gap-3 mt-7">

                {theme.colors.map(color => (

                  <motion.div

                    key={color}

                    whileHover={{
                      scale: 1.25,
                    }}

                    className="w-9 h-9 rounded-full border-2 border-white/20 shadow-lg"

                    style={{
                      background: color,
                    }}

                  />

                ))}

              </div>

              {/* Status */}

              <div
                className="flex items-center gap-3 mt-8 font-semibold"
                style={{
                  color: "#22c55e",
                }}
              >

                <FaCheckCircle />

                Available Now

              </div>

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
                  background:
                    `linear-gradient(90deg,${theme.accent},var(--primary))`,
                }}

              />

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}