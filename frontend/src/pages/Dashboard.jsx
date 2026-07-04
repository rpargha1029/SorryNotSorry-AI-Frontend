import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";

import api from "../services/api";

import DashboardLayout from "../layouts/DashboardLayout";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Background from "../components/Background";
import MouseGlow from "../components/MouseGlow";
import Particles from "../components/Particles";
import ThemeSwitcher from "../components/ThemeSwitcher";

import DashboardStats from "../components/dashboard/DashboardStats";
import DashboardContent from "../components/dashboard/DashboardContent";

import { getFavorites, saveFavorite, removeFavorite } from "../utils/favorites";


export default function Dashboard() {

  // ==========================
  // AI Responses
  // ==========================

  const [responses, setResponses] = useState([]);

  const [displayedResponses, setDisplayedResponses] = useState([]);

  const [loadingAI, setLoadingAI] = useState(false);

  const [lastFormData, setLastFormData] = useState(null);

  const [refreshHistory, setRefreshHistory] = useState(0);

  const [favorites, setFavorites] = useState([]);

  const typingRef = useRef(null);

  // ==========================
  // Dashboard Statistics
  // ==========================

  const [stats, setStats] = useState({

    generated: 0,

    favorites: 0,

    aiScore: 0,

    streak: 1,

  });

  // ==========================
  // Loading Steps
  // ==========================

  const loadingSteps = [

    "Understanding your request...",

    "Analyzing context...",

    "Selecting best response...",

    "Optimizing believability...",

    "Generating AI excuses...",

  ];

  const [step, setStep] = useState(0);
    // ==========================
  // Loading Animation
  // ==========================

  useEffect(() => {

    if (!loadingAI) return;

    let current = 0;

    const interval = setInterval(() => {

      current++;

      if (current >= loadingSteps.length) {
        current = loadingSteps.length - 1;
      }

      setStep(current);

    }, 500);

    return () => clearInterval(interval);

  }, [loadingAI]);

  // ==========================
  // Cleanup
  // ==========================

  useEffect(() => {

    return () => {

      if (typingRef.current) {
        clearInterval(typingRef.current);
      }

    };

  }, []);

  // ==========================
  // Favorites & Hash Effect
  // ==========================

  useEffect(() => {
    const favs = getFavorites();
    setFavorites(favs);
    setStats(prev => ({
      ...prev,
      favorites: favs.length,
    }));
  }, []);

  useEffect(() => {
    if (window.location.hash === "#generate") {
      const el = document.getElementById("generate-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [window.location.hash]);

  // ==========================
  // Typewriter Animation
  // ==========================

  const typeWriter = (responseList) => {

    if (!responseList?.length) return;

    if (typingRef.current) {
      clearInterval(typingRef.current);
    }

    const sorted = [...responseList].sort(
      (a, b) => b.believability - a.believability
    );

    const best = sorted[0];

    let index = 0;

    const animated = {
      ...best,
      text: "",
    };

    setDisplayedResponses([
      animated,
      ...sorted.slice(1),
    ]);

    typingRef.current = setInterval(() => {

      index++;

      animated.text = best.text.slice(0, index);

      setDisplayedResponses([
        { ...animated },
        ...sorted.slice(1),
      ]);

      if (index >= best.text.length) {

        clearInterval(typingRef.current);

      }

    }, 8);

  };
    // ==========================
  // Generate AI Excuses
  // ==========================

  const generateExcuse = async (formData) => {

    try {

      setLoadingAI(true);

      setStep(0);

      const { data } = await api.post(
        "/generate",
        formData
      );

      await new Promise(resolve =>
        setTimeout(resolve, 1200)
      );

      if (!data.responses || data.responses.length === 0) {

        toast.error("No AI responses received.");

        return;

      }

      const sortedResponses = [...data.responses].sort(
        (a, b) => b.believability - a.believability
      );

      setResponses(sortedResponses);

      typeWriter(sortedResponses);

      setLastFormData(formData);

      setRefreshHistory(prev => prev + 1);

      // ==========================
      // Update Dashboard Stats
      // ==========================

      const averageScore = Math.round(

        sortedResponses.reduce(

          (sum, item) => sum + item.believability,

          0

        ) / sortedResponses.length

      );

      setStats(prev => ({

        ...prev,

        generated: prev.generated + 1,

        aiScore: averageScore,

      }));

      toast.success(

        `${sortedResponses.length} AI excuses generated!`

      );

    }

    catch (error) {

      console.error(error);

      if (error.response) {

        toast.error(

          error.response.data?.detail ||

          error.response.data?.message ||

          "Server Error"

        );

      }

      else if (error.request) {

        toast.error(

          "Unable to connect to backend."

        );

      }

      else {

        toast.error(error.message);

      }

    }

    finally {

      setLoadingAI(false);

    }

  };

  // ==========================
  // Copy Excuse
  // ==========================

  const copyExcuse = async (text) => {

    if (!text) return;

    try {

      await navigator.clipboard.writeText(text);

      toast.success("Copied to clipboard!");

    }

    catch {

      toast.error("Copy failed.");

    }

  };

  // ==========================
  // Regenerate
  // ==========================

  const regenerateExcuse = () => {

    if (!lastFormData) {

      toast.error(

        "Generate an excuse first."

      );

      return;

    }

    generateExcuse(lastFormData);

  };

  // ==========================
  // Toggle Favorite
  // ==========================

  const handleFavorite = (excuse) => {
    const favs = getFavorites();
    const exists = favs.find(item => item.text === excuse.text);
    if (exists) {
      removeFavorite(exists.id);
      const updated = favs.filter(item => item.id !== exists.id);
      setFavorites(updated);
      setStats(prev => ({ ...prev, favorites: updated.length }));
      toast.success("Removed from favorites");
    } else {
      const excuseToSave = {
        id: excuse.id || Date.now().toString() + Math.random().toString(36).substr(2, 9),
        text: excuse.text,
        category: lastFormData?.category || "AI Excuse",
        audience: lastFormData?.audience || "Someone",
        tone: excuse.tone || lastFormData?.tone || "Casual",
        believability: excuse.believability || 85,
        created_at: new Date().toISOString(),
      };
      const success = saveFavorite(excuseToSave);
      if (success) {
        const updated = getFavorites();
        setFavorites(updated);
        setStats(prev => ({ ...prev, favorites: updated.length }));
        toast.success("Added to favorites!");
      }
    }
  };
    // ==========================
  // Render
  // ==========================

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

        {/* Main Content */}

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-16">

          {/* Hero */}

          <Hero />

          {/* Dashboard Statistics */}

          <DashboardStats
            generated={stats.generated}
            favorites={stats.favorites}
            aiScore={stats.aiScore}
            streak={stats.streak}
          />

          {/* Dashboard Content */}

          <DashboardContent
            loadingAI={loadingAI}
            loadingSteps={loadingSteps}
            step={step}

            responses={displayedResponses}

            refreshHistory={refreshHistory}

            setResponses={setResponses}
            setDisplayedResponses={setDisplayedResponses}

            generateExcuse={generateExcuse}
            copyExcuse={copyExcuse}
            regenerateExcuse={regenerateExcuse}
            favorites={favorites}
            onFavorite={handleFavorite}
          />

        </div>

        {/* Footer */}

        <Footer />

        {/* Floating Components */}

        <ThemeSwitcher />


      </div>

    </DashboardLayout>

  );

}