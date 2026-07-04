import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaRobot,
} from "react-icons/fa";

export default function FooterLanding() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer
      className="relative overflow-hidden mt-32"
      style={{
        background: "var(--card)",
        borderTop: "1px solid var(--border)",
      }}
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

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="SorryNotSorry"
                className="w-14 h-14 rounded-2xl"
              />

              <div>

                <h2
                  className="text-3xl font-black"
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  SorryNotSorry
                </h2>

                <p
                  className="text-sm"
                  style={{
                    opacity: .65,
                  }}
                >
                  AI Excuse Generator
                </p>

              </div>

            </div>

            <p
              className="mt-6 leading-8"
              style={{
                color: "var(--text)",
                opacity: .72,
              }}
            >
              Generate believable AI-powered excuses in seconds.
              Beautiful design, powerful AI and an effortless experience.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Product
            </h3>

            <div className="space-y-4">

              <a href="#features" className="block hover:text-cyan-400 transition">
                Features
              </a>

              <a href="#themes" className="block hover:text-cyan-400 transition">
                Themes
              </a>

              <a href="#timeline" className="block hover:text-cyan-400 transition">
                How It Works
              </a>

              <a href="#faq" className="block hover:text-cyan-400 transition">
                FAQ
              </a>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Company
            </h3>

            <div className="space-y-4">

              <Link to="/login" className="block hover:text-cyan-400 transition">
                Login
              </Link>

              <Link to="/register" className="block hover:text-cyan-400 transition">
                Register
              </Link>

              <span className="block opacity-70">
                Privacy Policy
              </span>

              <span className="block opacity-70">
                Terms of Service
              </span>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Connect
            </h3>

            <div className="flex gap-4">

              {[
                <FaGithub />,
                <FaLinkedin />,
                <FaEnvelope />,
              ].map((icon, index) => (

                <motion.button

                  key={index}

                  whileHover={{
                    scale: 1.1,
                    y: -4,
                  }}

                  whileTap={{
                    scale: .95,
                  }}

                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl"

                  style={{
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid var(--border)",
                  }}

                >

                  {icon}

                </motion.button>

              ))}

            </div>

            <div
              className="mt-8 flex items-center gap-3"
              style={{
                color: "var(--primary)",
              }}
            >

              <FaRobot />

              Powered by Gemini AI

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div

          className="mt-20 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6"

          style={{
            borderTop: "1px solid var(--border)",
          }}

        >

          <div
            className="flex flex-wrap items-center gap-2 text-center lg:text-left"
            style={{
              opacity: .72,
            }}
          >

            © {new Date().getFullYear()} SorryNotSorry AI • Built With Love To Help You.

          </div>

          <motion.button

            whileHover={{
              scale: 1.12,
              rotate: -10,
            }}

            whileTap={{
              scale: .95,
            }}

            onClick={scrollTop}

            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"

            style={{
              background:
                "linear-gradient(135deg,var(--primary),#8b5cf6)",
              color: "#fff",
            }}

          >

            <FaArrowUp />

          </motion.button>

        </div>

      </div>

    </footer>

  );

}