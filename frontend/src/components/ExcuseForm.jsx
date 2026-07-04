import { useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import MagneticButton from "./MagneticButton";
import OptionCard from "./OptionCard";
import SectionTitle from "./SectionTitle";

export default function ExcuseForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    category: "",
    audience: "",
    tone: "Professional",
    length: "Medium",
  });

  const [loading, setLoading] = useState(false);

  const categories = [
    {
      icon: "🎓",
      label: "Missed Class",
      value: "Missed class",
    },
    {
      icon: "📚",
      label: "Missed Assignment",
      value: "Missed assignment",
    },
    {
      icon: "💼",
      label: "Late to Work",
      value: "Late to work",
    },
    {
      icon: "❤️",
      label: "Missed Date",
      value: "Missed date",
    },
    {
      icon: "🏋️",
      label: "Skipped Gym",
      value: "Skipped gym",
    },
    {
      icon: "✈️",
      label: "Travel Delay",
      value: "Travel delay",
    },
  ];

  const audiences = [
    "Professor",
    "Boss",
    "Friend",
    "Parent",
    "Partner",
  ];

  const tones = [
    "Funny",
    "Professional",
    "Believable",
    "Dramatic",
    "Emotional",
    "Serious",
  ];

  const lengths = [
    "Short",
    "Medium",
    "Long",
  ];

  const submit = async (e) => {
    e.preventDefault();

    if (!formData.category) {
      return alert("Please select a category.");
    }

    if (!formData.audience) {
      return alert("Please select an audience.");
    }

    setLoading(true);

    try {
      await onGenerate(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      id="generate-form"
      onSubmit={submit}
      className="space-y-8"
    >
      {/* Header */}

      <div className="text-center mb-2">

        <h2
          className="text-3xl font-black"
          style={{
            color: "var(--primary)",
          }}
        >
          Generate AI Excuse
        </h2>

        <p
          className="mt-2 text-sm"
          style={{
            color: "var(--text)",
            opacity: 0.6,
          }}
        >
          Tell us the situation and let AI do the rest.
        </p>

      </div>

      {/* Category */}

      <div>

        <SectionTitle title="Category" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">

          {categories.map((item) => (

            <OptionCard
              key={item.value}
              icon={item.icon}
              label={item.label}
              value={item.value}
              selected={formData.category === item.value}
              onClick={(value) =>
                setFormData({
                  ...formData,
                  category: value,
                })
              }
            />

          ))}

        </div>

      </div>

      {/* Audience */}

      <div>

        <SectionTitle title="Audience" />

        <div className="flex flex-wrap gap-2.5 mt-3">

          {audiences.map((audience) => (

            <MagneticButton
              key={audience}
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  audience,
                })
              }
              className="px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                background:
                  formData.audience === audience
                    ? "var(--primary)"
                    : "var(--card)",

                color:
                  formData.audience === audience
                    ? "#fff"
                    : "var(--text)",

                border:
                  "1px solid var(--border)",
              }}
            >
              {audience}
            </MagneticButton>

          ))}

        </div>

      </div>

      {/* Tone */}

      <div>

        <SectionTitle title="Tone" />

        <div className="flex flex-wrap gap-2.5 mt-3">

          {tones.map((tone) => (

            <MagneticButton
              key={tone}
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  tone,
                })
              }
              className="px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                background:
                  formData.tone === tone
                    ? "var(--primary)"
                    : "var(--card)",

                color:
                  formData.tone === tone
                    ? "#fff"
                    : "var(--text)",

                border:
                  "1px solid var(--border)",
              }}
            >
              {tone}
            </MagneticButton>

          ))}

        </div>

      </div>

      {/* Length */}

      <div>

        <SectionTitle title="Length" />

        <div className="flex flex-wrap gap-2.5 mt-3">

          {lengths.map((length) => (

            <MagneticButton
              key={length}
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  length,
                })
              }
              className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                background:
                  formData.length === length
                    ? "var(--primary)"
                    : "var(--card)",

                color:
                  formData.length === length
                    ? "#fff"
                    : "var(--text)",

                border:
                  "1px solid var(--border)",
              }}
            >
              {length}
            </MagneticButton>

          ))}

        </div>

      </div>

      {/* Submit */}

      <MagneticButton
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-60 flex justify-center items-center gap-3"
        style={{
          background: "linear-gradient(135deg, var(--primary), #8b5cf6)",
          color: "#fff",
          boxShadow: "0 4px 20px color-mix(in srgb, var(--primary) 30%, transparent)",
        }}
      >
        {loading ? (
          <>
            <span className="animate-spin">⚙️</span>
            AI is generating...
          </>
        ) : (
          <>
            <FaWandMagicSparkles />
            Generate AI Excuse
          </>
        )}
      </MagneticButton>

    </form>
  );
}