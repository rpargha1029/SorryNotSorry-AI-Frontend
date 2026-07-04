import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaRobot,
  FaCopy,
  FaCheck,
  FaRedo,
  FaShieldAlt,
  FaFire,
  FaExclamationTriangle,
  FaCrown,
  FaHeart,
} from "react-icons/fa";

export default function ExcuseCard({
  responses = [],
  onCopy,
  onFavorite,
  favorites = [],
  onRegenerate,
}) {

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (id, text) => {
    await onCopy(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  if (!responses.length) {

    return (

      <div className="h-full flex flex-col items-center justify-center text-center py-20 px-6">

        <motion.div
          animate={{
            rotate: [0, -8, 8, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6"
          style={{
            background: "linear-gradient(135deg, var(--card), color-mix(in srgb, var(--primary) 15%, var(--card)))",
            border: "1px solid var(--border)",
          }}
        >
          🤖
        </motion.div>

        <h2
          className="text-2xl font-bold"
          style={{
            color: "var(--primary)",
          }}
        >
          AI Responses
        </h2>

        <p
          className="mt-3 max-w-xs text-sm leading-6"
          style={{
            color: "var(--text)",
            opacity: .6,
          }}
        >
          Generate an excuse and the AI will create three
          different responses ranked by quality.
        </p>

      </div>

    );

  }

  return (

    <div className="space-y-5">

      {responses.map((response, index) => {

        const badge =
          index === 0
            ? "🏆 Best Choice"
            : index === 1
            ? "🥈 Alternative"
            : "🥉 Creative";

        const isFav = favorites.some(
          (item) => item.text === response.text
        );

        return (

          <motion.div
            key={response.id ?? index}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.12,
            }}
            className="rounded-2xl p-5"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >

            {/* Header */}

            <div className="flex items-center justify-between mb-4">

              <div className="flex items-center gap-3">

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--primary),#8b5cf6)",
                  }}
                >
                  {index === 0 ? (
                    <FaCrown className="text-white text-sm" />
                  ) : (
                    <FaRobot className="text-white text-sm" />
                  )}
                </div>

                <div>

                  <h2
                    className="text-base font-bold"
                    style={{
                      color: "var(--primary)",
                    }}
                  >
                    {badge}
                  </h2>

                  <p
                    className="text-xs"
                    style={{
                      color: "var(--text)",
                      opacity: .5,
                    }}
                  >
                    AI Generated Excuse
                  </p>

                </div>

              </div>

            </div>

            {/* Excuse */}

            <div
              className="rounded-xl p-4 mb-4"
              style={{
                background: "rgba(255,255,255,.03)",
                border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)",
              }}
            >

              <p
                className="text-[15px] leading-8 tracking-wide whitespace-pre-wrap"
                style={{
                  color: "var(--text)",
                  opacity: 0.9,
                }}
              >
                {response.text}
              </p>

            </div>

            {/* Metrics */}

            <div className="grid grid-cols-3 gap-3 mb-4">

              <div className="text-center py-2">
                <FaShieldAlt
                  className="mx-auto mb-1.5 text-xs"
                  style={{
                    color: "var(--primary)",
                  }}
                />
                <h3 className="font-bold text-sm">
                  {response.believability}%
                </h3>
                <p className="text-xs opacity-50 mt-0.5">
                  Believability
                </p>
              </div>

              <div className="text-center py-2">
                <FaFire
                  className="mx-auto mb-1.5 text-xs"
                  style={{
                    color: "#f97316",
                  }}
                />
                <h3 className="font-bold text-sm">
                  {response.drama}%
                </h3>
                <p className="text-xs opacity-50 mt-0.5">
                  Drama
                </p>
              </div>

              <div className="text-center py-2">
                <FaExclamationTriangle
                  className="mx-auto mb-1.5 text-xs"
                  style={{
                    color: "#ef4444",
                  }}
                />
                <h3 className="font-bold text-sm">
                  {response.risk}%
                </h3>
                <p className="text-xs opacity-50 mt-0.5">
                  Risk
                </p>
              </div>

            </div>

            {/* Actions */}

            <div className="flex gap-3">

              <button
                onClick={() =>
                  handleCopy(
                    response.id,
                    response.text
                  )
                }
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.03]"
                style={{
                  background: "var(--primary)",
                  color: "#fff",
                }}
              >
                {copiedId === response.id ? (
                  <>
                    <FaCheck />
                    Copied
                  </>
                ) : (
                  <>
                    <FaCopy />
                    Copy
                  </>
                )}
              </button>

              <button
                onClick={() => onFavorite(response)}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: isFav
                    ? "#ef4444"
                    : "rgba(255,255,255,0.05)",
                  border: "1px solid var(--border)",
                  color: isFav
                    ? "#fff"
                    : "var(--text)",
                }}
              >
                <FaHeart className="text-sm" />
              </button>

              {index === 0 && onRegenerate && (
                <button
                  onClick={onRegenerate}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.03]"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <FaRedo className="text-xs" />
                  Regenerate
                </button>
              )}

            </div>

          </motion.div>

        );

      })}

    </div>

  );

}