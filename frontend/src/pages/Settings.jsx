import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaCog,
  FaBell,
  FaRobot,
  FaMoon,
  FaSignOutAlt,
  FaInfoCircle,
} from "react-icons/fa";

import DashboardLayout from "../layouts/DashboardLayout";

import Background from "../components/Background";
import MouseGlow from "../components/MouseGlow";
import Particles from "../components/Particles";
import Footer from "../components/Footer";

import PremiumCard from "../components/PremiumCard";

import { useAuth } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

export default function Settings() {

  const navigate = useNavigate();
  const { logout } = useAuth();

  const [emailNotification, setEmailNotification] = useState(true);
  const [sound, setSound] = useState(false);
  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Medium");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (

    <DashboardLayout>

      <div
        className="min-h-screen relative overflow-hidden"
        style={{
          background: "var(--bg)",
          color: "var(--text)",
        }}
      >

        <Background />
        <MouseGlow />
        <Particles />

        <div className="max-w-5xl mx-auto px-6 py-10">

          <div className="text-center mb-8">

            <FaCog
              className="text-4xl mx-auto mb-4"
              style={{ color: "var(--primary)" }}
            />

            <h1
              className="text-4xl font-black"
              style={{ color: "var(--primary)" }}
            >
              Settings
            </h1>

            <p
              className="mt-2 text-sm"
              style={{
                color: "var(--text)",
                opacity: .6,
              }}
            >
              Customize your SorryNotSorry experience.
            </p>

          </div>

          <PremiumCard className="max-w-3xl mx-auto p-8">

            {/* Appearance */}

            <div className="mb-8">

              <h2
                className="text-lg font-bold flex items-center gap-2.5 mb-4"
                style={{ color: "var(--primary)" }}
              >
                <FaMoon className="text-base" />
                Appearance
              </h2>

              <div
                className="rounded-xl p-4"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >

                <p className="font-semibold text-sm">
                  Theme
                </p>

                <p
                  className="mt-1.5 text-sm leading-6"
                  style={{ opacity: .55 }}
                >
                  Use the floating theme switcher on the dashboard
                  to change between Midnight, Sakura, Emerald,
                  Sunset, Royal and Light themes.
                </p>

              </div>

            </div>

            {/* Notifications */}

            <div className="mb-8">

              <h2
                className="text-lg font-bold flex items-center gap-2.5 mb-4"
                style={{ color: "var(--primary)" }}
              >
                <FaBell className="text-base" />
                Notifications
              </h2>

              <div className="space-y-3">

                <div
                  className="flex justify-between items-center rounded-xl p-4 cursor-pointer hover:bg-white/[0.02] transition-all duration-200"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                  onClick={() => setEmailNotification(!emailNotification)}
                >
                  <span className="font-medium text-sm">Email Notifications</span>
                  <div
                    className="w-11 h-6 rounded-full p-0.5 transition-colors duration-300 relative"
                    style={{
                      background: emailNotification ? "var(--primary)" : "rgba(255,255,255,0.08)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <motion.div
                      layout
                      className="w-[18px] h-[18px] rounded-full bg-white shadow-lg absolute top-[2px]"
                      animate={{
                        left: emailNotification ? "22px" : "3px"
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </div>
                </div>

                <div
                  className="flex justify-between items-center rounded-xl p-4 cursor-pointer hover:bg-white/[0.02] transition-all duration-200"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                  onClick={() => setSound(!sound)}
                >
                  <span className="font-medium text-sm">Sound Effects</span>
                  <div
                    className="w-11 h-6 rounded-full p-0.5 transition-colors duration-300 relative"
                    style={{
                      background: sound ? "var(--primary)" : "rgba(255,255,255,0.08)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <motion.div
                      layout
                      className="w-[18px] h-[18px] rounded-full bg-white shadow-lg absolute top-[2px]"
                      animate={{
                        left: sound ? "22px" : "3px"
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </div>
                </div>

              </div>

            </div>

            {/* AI Preferences */}

            <div className="mb-8">

              <h2
                className="text-lg font-bold flex items-center gap-2.5 mb-4"
                style={{ color: "var(--primary)" }}
              >
                <FaRobot className="text-base" />
                AI Preferences
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="font-medium text-sm">
                    Default Tone
                  </label>

                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full mt-2 p-3 rounded-xl"
                    style={{
                      background: "var(--card)",
                      color: "var(--text)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <option>Professional</option>
                    <option>Funny</option>
                    <option>Believable</option>
                    <option>Dramatic</option>
                    <option>Serious</option>
                    <option>Emotional</option>
                  </select>
                </div>

                <div>
                  <label className="font-medium text-sm">
                    Default Length
                  </label>

                  <select
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full mt-2 p-3 rounded-xl"
                    style={{
                      background: "var(--card)",
                      color: "var(--text)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <option>Short</option>
                    <option>Medium</option>
                    <option>Long</option>
                  </select>
                </div>

              </div>

            </div>

            {/* Account */}

            <div className="mb-8">

              <h2
                className="text-lg font-bold flex items-center gap-2.5 mb-4"
                style={{ color: "var(--primary)" }}
              >
                <FaSignOutAlt className="text-base" />
                Account
              </h2>

              <div
                className="rounded-xl p-4"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >

                <p
                  className="mb-4 text-sm"
                  style={{ opacity: .55 }}
                >
                  Logout from your account on this device.
                </p>

                <button
                  onClick={handleLogout}
                  className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #ef4444, #dc2626)",
                    color: "#fff",
                  }}
                >
                  Logout
                </button>

              </div>

            </div>

            {/* About */}

            <div>

              <h2
                className="text-lg font-bold flex items-center gap-2.5 mb-4"
                style={{ color: "var(--primary)" }}
              >
                <FaInfoCircle className="text-base" />
                About
              </h2>

              <div
                className="rounded-xl p-4"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >

                <div className="space-y-3">

                  <div
                    className="flex justify-between items-center py-1"
                    style={{
                      borderBottom: "1px solid color-mix(in srgb, var(--border) 40%, transparent)",
                    }}
                  >
                    <span className="text-sm" style={{ opacity: .5 }}>
                      Application
                    </span>
                    <span className="font-semibold text-sm">
                      SorryNotSorry AI
                    </span>
                  </div>

                  <div
                    className="flex justify-between items-center py-1"
                    style={{
                      borderBottom: "1px solid color-mix(in srgb, var(--border) 40%, transparent)",
                    }}
                  >
                    <span className="text-sm" style={{ opacity: .5 }}>
                      Version
                    </span>
                    <span className="font-semibold text-sm">
                      v1.0.0
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm" style={{ opacity: .5 }}>
                      Build
                    </span>
                    <span className="font-semibold text-sm">
                      Production
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </PremiumCard>

        </div>

        <Footer />

      </div>

    </DashboardLayout>

  );

}