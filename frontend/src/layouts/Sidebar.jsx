import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  FaHome,
  FaMagic,
  FaHistory,
  FaStar,
  FaUser,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
  FaCrown,
} from "react-icons/fa";

import { motion } from "framer-motion";

import logo from "../assets/logo.png";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    {
      icon: <FaHome />,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <FaHistory />,
      text: "History",
      path: "/history",
    },
    {
      icon: <FaStar />,
      text: "Favorites",
      path: "/favorites",
    },
    {
      icon: <FaUser />,
      text: "Profile",
      path: "/profile",
    },
    {
      icon: <FaCog />,
      text: "Settings",
      path: "/settings",
    },
  ];

  return (
    <aside
      className={`sticky top-0 h-screen transition-all duration-500 flex flex-col ${
        collapsed ? "w-24" : "w-72"
      }`}
      style={{
        background: "rgba(255,255,255,.04)",
        backdropFilter: "blur(25px)",
        borderRight: "1px solid var(--border)",
      }}
    >
      {/* Header */}

      <div className="flex items-center justify-between p-6">

        {!collapsed && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={logo}
            alt="Logo"
            className="w-40 object-contain"
          />
        )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: .95 }}
          onClick={() => setCollapsed(!collapsed)}
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          {collapsed ? (
            <FaChevronRight />
          ) : (
            <FaChevronLeft />
          )}
        </motion.button>

      </div>

      {/* Navigation */}

      <div className="px-4 mt-8 flex-1">

        <div className="space-y-3">

          {menus.map((item) => {

            const active = item.path.includes("#")
              ? location.pathname === item.path.split("#")[0] && location.hash === "#" + item.path.split("#")[1]
              : location.pathname === item.path && (item.path !== "/dashboard" || location.hash === "");

            return (

              <motion.button
                key={item.text}

                whileHover={{
                  x: 5,
                }}

                whileTap={{
                  scale: .97,
                }}

                onClick={() => navigate(item.path)}

                className="w-full rounded-2xl flex items-center gap-4 px-4 py-3 transition-all duration-200"

                style={{
                  background: active
                    ? "linear-gradient(135deg,var(--primary),#8b5cf6)"
                    : "transparent",
                  color: active
                    ? "#fff"
                    : "var(--text)",
                  border: active
                    ? "none"
                    : "1px solid transparent",
                  opacity: active ? 1 : 0.85,
                  boxShadow: active
                    ? "0 4px 20px color-mix(in srgb, var(--primary) 25%, transparent)"
                    : "none",
                }}
              >

                <div
                  className="text-xl"
                >
                  {item.icon}
                </div>

                {!collapsed && (

                  <span className="font-semibold">

                    {item.text}

                  </span>

                )}

              </motion.button>

            );

          })}

        </div>

      </div>

      {/* Upgrade Card */}

      {!collapsed && (

        <div className="p-5 pt-0">

          {/* Separator */}
          <div
            className="mb-5 mx-2"
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, var(--border), transparent)",
            }}
          />


          <motion.div

            whileHover={{
              y: -3,
            }}

            className="rounded-3xl p-5"

            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >

            <div className="flex items-center gap-3">

              <FaCrown
                style={{
                  color: "#FFD700",
                }}
              />

              <h3
                className="font-bold"
                style={{
                  color: "var(--primary)",
                }}
              >
                SorryNotSorry Pro
              </h3>

            </div>

            <p
              className="text-sm mt-4 leading-6"
              style={{
                opacity: .7,
              }}
            >
              Unlock AI Rewrite,
              Cloud Sync,
              Premium Themes,
              Favorites,
              Multiple Suggestions
              and more.
            </p>

            <motion.button

              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: .96,
              }}

              className="mt-5 w-full rounded-xl py-3 font-semibold"

              style={{
                background:
                  "linear-gradient(135deg,var(--primary),#8b5cf6)",
                color: "#fff",
              }}
            >

              Upgrade Now

            </motion.button>

          </motion.div>

        </div>

      )}

    </aside>
  );
}