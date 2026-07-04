import { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaRobot,
  FaStar,
  FaFire,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

import DashboardLayout from "../layouts/DashboardLayout";
import Background from "../components/Background";
import MouseGlow from "../components/MouseGlow";
import Particles from "../components/Particles";
import Footer from "../components/Footer";

import PremiumCard from "../components/PremiumCard";

import api from "../services/api";

export default function Profile() {

  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  const [stats, setStats] = useState({
    generated: 0,
    favorites: 0,
    streak: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);
      const meResponse = await api.get("/auth/me");
      setUser({
        username: meResponse.data.username,
        email: meResponse.data.email,
      });

      const historyResponse = await api.get("/history");
      const favoritesResponse = await api.get("/favorites");

      const historyItems = historyResponse.data || [];
      const favoritesList = favoritesResponse.data.favorites || [];

      // Calculate streak
      const dates = historyItems
        .map((item) => new Date(item.created_at).toLocaleDateString("en-CA"))
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => new Date(b) - new Date(a));

      let calculatedStreak = 0;
      if (dates.length > 0) {
        const todayStr = new Date().toLocaleDateString("en-CA");
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toLocaleDateString("en-CA");

        if (dates[0] === todayStr || dates[0] === yesterdayStr) {
          let checkDate = new Date(dates[0]);
          for (let i = 0; i < dates.length; i++) {
            const expectedStr = checkDate.toLocaleDateString("en-CA");
            if (dates[i] === expectedStr) {
              calculatedStreak++;
              checkDate.setDate(checkDate.getDate() - 1);
            } else {
              break;
            }
          }
        }
      }

      setStats({
        generated: historyItems.length,
        favorites: favoritesList.length,
        streak: calculatedStreak,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
            <h1
              className="text-4xl font-black"
              style={{ color: "var(--primary)" }}
            >
              My Profile
            </h1>
            <p
              className="mt-2 text-sm"
              style={{
                color: "var(--text)",
                opacity: .6,
              }}
            >
              Manage your account and view your AI statistics.
            </p>
          </div>

          <PremiumCard className="max-w-3xl mx-auto p-8">

            {/* Avatar */}
            <div className="flex flex-col items-center">

              <div
                className="relative"
              >
                <div
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{
                    background: "color-mix(in srgb, var(--primary) 25%, transparent)",
                    transform: "scale(1.3)",
                  }}
                />
                <FaUserCircle
                  className="text-7xl relative z-10"
                  style={{ color: "var(--primary)" }}
                />
              </div>

              <h2
                className="text-2xl font-bold mt-4"
              >
                {loading ? "Loading..." : user.username}
              </h2>

              <div
                className="flex items-center gap-2 mt-2 text-sm"
                style={{
                  color: "var(--text)",
                  opacity: .55,
                }}
              >
                <FaEnvelope className="text-xs" />
                {loading ? "Loading..." : user.email}
              </div>

            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">

              <div
                className="rounded-xl p-5 text-center"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <FaRobot
                  className="text-2xl mx-auto mb-2"
                  style={{ color: "var(--primary)" }}
                />
                <h3 className="text-2xl font-bold">
                  {stats.generated}
                </h3>
                <p className="text-xs opacity-50 mt-1 uppercase tracking-wider">
                  AI Excuses
                </p>
              </div>

              <div
                className="rounded-xl p-5 text-center"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <FaStar
                  className="text-2xl mx-auto mb-2"
                  style={{ color: "#facc15" }}
                />
                <h3 className="text-2xl font-bold">
                  {stats.favorites}
                </h3>
                <p className="text-xs opacity-50 mt-1 uppercase tracking-wider">
                  Favorites
                </p>
              </div>

              <div
                className="rounded-xl p-5 text-center"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <FaFire
                  className="text-2xl mx-auto mb-2"
                  style={{ color: "#f97316" }}
                />
                <h3 className="text-2xl font-bold">
                  {stats.streak}
                </h3>
                <p className="text-xs opacity-50 mt-1 uppercase tracking-wider">
                  Day Streak
                </p>
              </div>

            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <button
                className="px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2.5 transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, var(--primary), #8b5cf6)",
                  color: "#fff",
                  boxShadow: "0 4px 16px color-mix(in srgb, var(--primary) 25%, transparent)",
                }}
              >
                <FaUser className="text-xs" />
                Edit Profile
              </button>

              <button
                onClick={() => window.location.href = "/settings"}
                className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                }}
              >
                Settings
              </button>

            </div>

            {/* Member Information */}
            <div
              className="mt-8 rounded-xl p-5"
              style={{
                background: "rgba(255,255,255,.03)",
                border: "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
              }}
            >

              <h3
                className="text-base font-bold mb-4"
                style={{ color: "var(--primary)" }}
              >
                Account Information
              </h3>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <p
                    className="text-xs mb-1 uppercase tracking-wider"
                    style={{ opacity: .4 }}
                  >
                    Username
                  </p>
                  <p className="font-semibold text-sm">
                    {user.username}
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs mb-1 uppercase tracking-wider"
                    style={{ opacity: .4 }}
                  >
                    Email
                  </p>
                  <p className="font-semibold text-sm">
                    {user.email}
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs mb-1 uppercase tracking-wider"
                    style={{ opacity: .4 }}
                  >
                    Membership
                  </p>
                  <p className="font-semibold text-sm">
                    Free Plan
                  </p>
                </div>

                <div>
                  <p
                    className="text-xs mb-1 uppercase tracking-wider"
                    style={{ opacity: .4 }}
                  >
                    Status
                  </p>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#22c55e" }}
                  >
                    Active
                  </p>
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