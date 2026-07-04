import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

export default function DashboardNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Close dropdown when clicking outside

  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-xl"
      style={{
        background: "rgba(2,6,23,0.82)",
        borderBottom: "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Search */}
        {location.pathname === "/dashboard" ? (
          <div
            className="flex items-center gap-3 rounded-2xl px-5 py-3 w-full max-w-md"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <FaSearch
              style={{
                color: "var(--primary)",
              }}
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full"
              style={{
                color: "var(--text)",
              }}
            />
          </div>
        ) : (
          <div className="flex-1" />
        )}

        {/* Right */}

        <div
          className="flex items-center gap-5 ml-6 relative"
          ref={dropdownRef}
        >
          {/* Notification */}

          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="relative text-xl"
            style={{
              color: "var(--text)",
            }}
          >
            <FaBell />

            <span
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
              style={{
                background: "#ef4444",
              }}
            />
          </motion.button>

          {/* Avatar */}

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setOpen(!open)}
            className="text-4xl"
            style={{
              color: "var(--primary)",
            }}
          >
            <FaUserCircle />
          </motion.button>

          {/* Dropdown */}

          <AnimatePresence>

            {open && (

              <motion.div

                initial={{
                  opacity: 0,
                  y: -10,
                  scale: .95,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}

                exit={{
                  opacity: 0,
                  y: -10,
                  scale: .95,
                }}

                transition={{
                  duration: .18,
                }}

                className="absolute right-0 top-14 w-56 rounded-2xl overflow-hidden shadow-2xl"

                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(20px)",
                }}

              >

                <button

                  onClick={() => {
                    setOpen(false);
                    navigate("/profile");
                  }}

                  className="w-full flex items-center gap-4 px-6 py-4 transition hover:bg-white/10"

                >

                  <FaUser />

                  Profile

                </button>

                <button

                  onClick={() => {
                    setOpen(false);
                    navigate("/settings");
                  }}

                  className="w-full flex items-center gap-4 px-6 py-4 transition hover:bg-white/10"

                >

                  <FaCog />

                  Settings

                </button>

                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                  }}
                />

                <button

                  onClick={handleLogout}

                  className="w-full flex items-center gap-4 px-6 py-4 text-red-400 transition hover:bg-red-500/10"

                >

                  <FaSignOutAlt />

                  Logout

                </button>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>
    </nav>
  );
}