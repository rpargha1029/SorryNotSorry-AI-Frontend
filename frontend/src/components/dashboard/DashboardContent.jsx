import { motion } from "framer-motion";

import PremiumCard from "../PremiumCard";

import ExcuseForm from "../ExcuseForm";
import ExcuseCard from "../ExcuseCard";
import HistoryPanel from "../HistoryPanel";

export default function DashboardContent({

  loadingAI,

  loadingSteps,

  step,

  responses,

  refreshHistory,

  setResponses,

  setDisplayedResponses,

  generateExcuse,

  copyExcuse,

  regenerateExcuse,

  favorites = [],

  onFavorite,

}) {

  const cardVariants = {

    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
      },
    },

  };
    return (

    <motion.div

      initial="hidden"

      animate="visible"

      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}

      className="grid xl:grid-cols-12 gap-6 mt-10 items-stretch"

    >

      {/* =========================
          HISTORY
      ========================= */}

      <motion.div
        variants={cardVariants}
        className="xl:col-span-3 flex"
      >

        <PremiumCard className="flex-1 min-h-[720px]">

          <HistoryPanel
            refresh={refreshHistory}
            onSelect={(item) => {

              if (item.responses) {

                setResponses(item.responses);

                setDisplayedResponses(item.responses);

              }

            }}
          />

        </PremiumCard>

      </motion.div>

      {/* =========================
          FORM
      ========================= */}

      <motion.div
        variants={cardVariants}
        className="xl:col-span-5 flex"
      >

        <PremiumCard className="flex-1 min-h-[720px]">

          <ExcuseForm
            onGenerate={generateExcuse}
          />

        </PremiumCard>

      </motion.div>

      {/* =========================
          AI RESPONSE
      ========================= */}

      <motion.div
        variants={cardVariants}
        className="xl:col-span-4 flex"
      >

        <PremiumCard className="flex-1 min-h-[720px]">
                  {loadingAI ? (

            <div className="h-full flex flex-col items-center justify-center text-center px-8">

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
                className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                style={{
                  background:
                    "linear-gradient(135deg,var(--primary),#8b5cf6)",
                }}
              >
                🤖
              </motion.div>

              <h2
                className="text-2xl font-bold mt-8"
                style={{
                  color: "var(--primary)",
                }}
              >
                AI is Thinking...
              </h2>

              <p
                className="mt-3"
                style={{
                  color: "var(--text)",
                  opacity: 0.75,
                }}
              >
                {loadingSteps[step]}
              </p>

              <div
                className="w-full h-2 rounded-full overflow-hidden mt-8"
                style={{
                  background: "rgba(255,255,255,.08)",
                }}
              >

                <motion.div
                  animate={{
                    width: [
                      "0%",
                      "25%",
                      "45%",
                      "70%",
                      "100%",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-full"
                  style={{
                    background: "var(--primary)",
                  }}
                />

              </div>

            </div>

          ) : (

            <ExcuseCard
              responses={responses}
              onCopy={copyExcuse}
              onRegenerate={regenerateExcuse}
              favorites={favorites}
              onFavorite={onFavorite}
            />

          )}

        </PremiumCard>

      </motion.div>

    </motion.div>

  );

}