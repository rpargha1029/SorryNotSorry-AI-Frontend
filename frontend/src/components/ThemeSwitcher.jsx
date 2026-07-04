import { useState } from "react";
import { FaPalette, FaCheck } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const themeList = [
  {
    id: "midnight",
    name: "Midnight",
    color: "#06b6d4",
  },
  {
    id: "sakura",
    name: "Sakura",
    color: "#ec4899",
  },
  {
    id: "emerald",
    name: "Emerald",
    color: "#10b981",
  },
  {
    id: "sunset",
    name: "Sunset",
    color: "#f97316",
  },
  {
    id: "royal",
    name: "Royal",
    color: "#8b5cf6",
  },
  {
    id: "light",
    name: "Light",
    color: "#e5e7eb",
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    color: "#facc15",
  },
  {
    id: "nord",
    name: "Nord",
    color: "#88c0d0",
  },
  {
    id: "rosegold",
    name: "Rose Gold",
    color: "#fda4af",
  },
  {
    id: "ocean",
    name: "Ocean",
    color: "#38bdf8",
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white text-xl transition hover:scale-110"
        style={{ background: "var(--primary)" }}
      >
        <FaPalette />
      </button>

      {open && (
        <div
          className="absolute bottom-16 right-0 w-64 rounded-2xl p-4 shadow-2xl"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
        >
          <h3 className="font-bold mb-4 text-lg">
            Select Theme
          </h3>

          <div className="space-y-3">
            {themeList.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setTheme(item.id);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between rounded-xl p-3 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full"
                    style={{
                      background: item.color,
                    }}
                  />

                  {item.name}
                </div>

                {theme === item.id && (
                  <FaCheck />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}