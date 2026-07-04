import { useState, useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import Background from "../components/Background";
import MouseGlow from "../components/MouseGlow";
import Particles from "../components/Particles";
import Footer from "../components/Footer";

import FavoriteCard from "../components/favorites/FavoriteCard";
import EmptyFavorites from "../components/favorites/EmptyFavorites";

import { getFavorites, removeFavorite } from "../utils/favorites";

import {
  FaStar,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [tone, setTone] = useState("All");

  // ==========================
  // Load Favorites
  // ==========================

  useEffect(() => {
    const data = getFavorites();
    setFavorites(data);
    setFiltered(data);
  }, []);

  // ==========================
  // Search + Filter
  // ==========================

  useEffect(() => {
    let data = [...favorites];

    if (search.trim()) {
      data = data.filter((item) =>
        item.text.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (tone !== "All") {
      data = data.filter(
        (item) => item.tone === tone
      );
    }

    setFiltered(data);
  }, [favorites, search, tone]);

  // ==========================
  // Delete Favorite
  // ==========================

  const deleteFavorite = (id) => {
    removeFavorite(id);
    const updated = favorites.filter(
      (item) => item.id !== id
    );
    setFavorites(updated);
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

        <div className="max-w-6xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="text-center">

            <FaStar
              className="text-4xl mx-auto mb-4"
              style={{ color: "#FFD700" }}
            />

            <h1
              className="text-4xl font-black"
              style={{ color: "var(--primary)" }}
            >
              Favorite Excuses
            </h1>

            <p
              className="mt-2 text-sm"
              style={{ opacity: .6 }}
            >
              Quickly access all your saved AI excuses.
            </p>

          </div>

          {/* Search + Filter */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <FaSearch
                className="text-sm"
                style={{ color: "var(--primary)" }}
              />
              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search favorites..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <FaFilter
                className="text-sm"
                style={{ color: "var(--primary)" }}
              />
              <select
                value={tone}
                onChange={(e) =>
                  setTone(e.target.value)
                }
                className="bg-transparent outline-none w-full text-sm"
                style={{
                  color: "var(--text)",
                  backgroundImage: "none",
                  padding: 0,
                  border: "none",
                }}
              >
                <option>All</option>
                <option>Professional</option>
                <option>Funny</option>
                <option>Emotional</option>
                <option>Dramatic</option>
                <option>Serious</option>
                <option>Believable</option>
              </select>
            </div>

          </div>

          {/* Counter */}
          <div className="mt-8">
            <h3
              className="text-base font-semibold"
              style={{ color: "var(--primary)" }}
            >
              {filtered.length} Saved Favorite
              {filtered.length !== 1 && "s"}
            </h3>
          </div>

          {/* Cards */}
          <div className="space-y-5 mt-6">

            {filtered.length === 0 ? (
              <EmptyFavorites />
            ) : (
              filtered.map((item) => (
                <FavoriteCard
                  key={item.id}
                  item={item}
                  onDelete={deleteFavorite}
                />
              ))
            )}

          </div>

        </div>

        <Footer />

      </div>
    </DashboardLayout>
  );
}