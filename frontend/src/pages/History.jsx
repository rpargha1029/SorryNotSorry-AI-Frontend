import { useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";

import Background from "../components/Background";
import MouseGlow from "../components/MouseGlow";
import Particles from "../components/Particles";
import Footer from "../components/Footer";
import ThemeSwitcher from "../components/ThemeSwitcher";

import HistoryPanel from "../components/HistoryPanel";
import PremiumCard from "../components/PremiumCard";
import ExcuseCard from "../components/ExcuseCard";

import { getFavorites, saveFavorite, removeFavorite } from "../utils/favorites";

import { FaHistory } from "react-icons/fa";

export default function History() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState(() => getFavorites());
  const [refreshHistoryKey, setRefreshHistoryKey] = useState(0);

  const copyExcuse = async (text) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Copy failed.");
    }
  };

  const handleFavorite = (excuse) => {
    const favs = getFavorites();
    const exists = favs.find(item => item.text === excuse.text);
    if (exists) {
      removeFavorite(exists.id);
      const updated = favs.filter(item => item.id !== exists.id);
      setFavorites(updated);
      toast.success("Removed from favorites");
    } else {
      const excuseToSave = {
        id: excuse.id || Date.now().toString() + Math.random().toString(36).substr(2, 9),
        text: excuse.text,
        category: selectedItem?.category || "AI Excuse",
        audience: selectedItem?.audience || "Someone",
        tone: excuse.tone || selectedItem?.tone || "Casual",
        believability: excuse.believability || 85,
        created_at: new Date().toISOString(),
      };
      const success = saveFavorite(excuseToSave);
      if (success) {
        setFavorites(getFavorites());
        toast.success("Saved to favorites!");
      }
    }
  };

  const responsesToShow = selectedItem
    ? (selectedItem.responses && selectedItem.responses.length > 0
        ? selectedItem.responses
        : [{
            id: selectedItem.id,
            text: selectedItem.excuse || selectedItem.text,
            believability: selectedItem.believability || 85,
            drama: selectedItem.drama || 50,
            risk: selectedItem.risk || 20,
          }])
    : [];

  return (
    <DashboardLayout>
      <div
        className="min-h-screen relative overflow-hidden transition-all duration-700"
        style={{
          background: "var(--bg)",
          color: "var(--text)",
        }}
      >
        {/* Background Effects */}
        <Background />
        <MouseGlow />
        <Particles />

        <div className="max-w-7xl mx-auto px-6 py-8">

          {/* Page Header */}
          <div className="text-center mb-8">
            <FaHistory
              className="text-4xl mx-auto mb-4"
              style={{ color: "var(--primary)" }}
            />
            <h1
              className="text-4xl font-black"
              style={{ color: "var(--primary)" }}
            >
              History
            </h1>
            <p
              className="mt-2 text-sm"
              style={{ color: "var(--text)", opacity: 0.6 }}
            >
              Review and manage all your generated excuses.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* History Panel */}
            <div className="lg:col-span-5 flex">
              <PremiumCard className="flex-1 min-h-[600px]">
                <HistoryPanel
                  refresh={refreshHistoryKey}
                  onSelect={(item) => setSelectedItem(item)}
                />
              </PremiumCard>
            </div>

            {/* Selected excuse details */}
            <div className="lg:col-span-7 flex">
              <PremiumCard className="flex-1 min-h-[600px]">
                {selectedItem ? (
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-5">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                          style={{
                            background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                            border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)",
                            color: "var(--primary)",
                          }}
                        >
                          {selectedItem.category}
                        </span>
                        <span
                          className="text-xs"
                          style={{ opacity: 0.5 }}
                        >
                          Audience: <strong style={{ opacity: 1 }}>{selectedItem.audience}</strong>
                        </span>
                      </div>
                      <ExcuseCard
                        responses={responsesToShow}
                        onCopy={copyExcuse}
                        onFavorite={handleFavorite}
                        favorites={favorites}
                        onRegenerate={null}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <span className="text-5xl mb-4">📜</span>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                      History Viewer
                    </h3>
                    <p className="max-w-xs text-sm leading-6" style={{ opacity: 0.5 }}>
                      Select any excuse generation from the history log to inspect metrics, copy text, or save to favorites.
                    </p>
                  </div>
                )}
              </PremiumCard>
            </div>
          </div>
        </div>

        <Footer />
        <ThemeSwitcher />
      </div>
    </DashboardLayout>
  );
}