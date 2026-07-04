import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#timeline" },
  { label: "Themes", href: "#themes" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function NavbarLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div
        className="rounded-3xl backdrop-blur-xl transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(15,23,42,.78)"
            : "rgba(15,23,42,.45)",
          border: "1px solid var(--border)",
          boxShadow: scrolled
            ? "0 15px 50px rgba(0,0,0,.25)"
            : "0 5px 20px rgba(0,0,0,.15)",
        }}
      >
        <div className="flex items-center justify-between px-7 py-4">

          {/* Brand */}

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="cursor-pointer"
          >
            <h1
              className="text-2xl font-black"
              style={{
                color: "var(--primary)",
              }}
            >
              CONFUSION Stack
            </h1>

            <p
              className="text-xs"
              style={{
                opacity: .65,
              }}
            >
              Building Ideas. Shipping Chaos.
            </p>
          </motion.div>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="font-medium transition"
                style={{
                  color: "var(--text)",
                }}
              >
                {item.label}
              </motion.a>
            ))}

          </div>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-3">

            <button
              className="px-5 py-2 rounded-xl transition"
              style={{
                border: "1px solid var(--border)",
                background: "var(--card)",
              }}
            >
              Login
            </button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .96,
              }}
              className="px-6 py-2 rounded-xl font-semibold flex items-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg,var(--primary),#8b5cf6)",
                color: "#fff",
              }}
            >
              Get Started

              <FaArrowRight />
            </motion.button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-2xl"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}

        <AnimatePresence>

          {mobileOpen && (

            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="overflow-hidden lg:hidden"
            >
              <div className="px-6 pb-6 flex flex-col gap-5">

                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <button
                  className="py-3 rounded-xl"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                  }}
                >
                  Login
                </button>

                <button
                  className="py-3 rounded-xl font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--primary),#8b5cf6)",
                    color: "#fff",
                  }}
                >
                  Get Started
                </button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </motion.header>
  );
}