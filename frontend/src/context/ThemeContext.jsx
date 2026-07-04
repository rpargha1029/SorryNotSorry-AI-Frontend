import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
  midnight: {
    "--bg": "#020617",
    "--card": "#0f172a",
    "--border": "#334155",
    "--primary": "#06b6d4",
    "--text": "#ffffff",
  },

  sakura: {
    "--bg": "#4a044e",
    "--card": "#831843",
    "--border": "#be185d",
    "--primary": "#ec4899",
    "--text": "#ffffff",
  },

  emerald: {
    "--bg": "#022c22",
    "--card": "#064e3b",
    "--border": "#10b981",
    "--primary": "#34d399",
    "--text": "#ffffff",
  },

  sunset: {
    "--bg": "#431407",
    "--card": "#7c2d12",
    "--border": "#ea580c",
    "--primary": "#fb923c",
    "--text": "#ffffff",
  },

  royal: {
    "--bg": "#2e1065",
    "--card": "#4c1d95",
    "--border": "#7c3aed",
    "--primary": "#a855f7",
    "--text": "#ffffff",
  },

  light: {
    "--bg": "#f8fafc",
    "--card": "#ffffff",
    "--border": "#cbd5e1",
    "--primary": "#2563eb",
    "--text": "#0f172a",
  },

  cyberpunk: {
    "--bg": "#0a0a0f",
    "--card": "#161124",
    "--border": "#ff007f",
    "--primary": "#facc15",
    "--text": "#ffffff",
  },

  nord: {
    "--bg": "#2e3440",
    "--card": "#3b4252",
    "--border": "#4c566a",
    "--primary": "#88c0d0",
    "--text": "#eceff4",
  },

  rosegold: {
    "--bg": "#1c1917",
    "--card": "#292524",
    "--border": "#f43f5e",
    "--primary": "#fda4af",
    "--text": "#f2f2f2",
  },

  ocean: {
    "--bg": "#082f49",
    "--card": "#0c4a6e",
    "--border": "#0284c7",
    "--primary": "#38bdf8",
    "--text": "#f0f9ff",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "midnight"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const root = document.documentElement;

    Object.entries(themes[theme]).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}