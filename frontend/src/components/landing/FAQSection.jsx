import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
} from "react-icons/fa";

const faqs = [
  {
    question: "Is SorryNotSorry free to use?",
    answer:
      "Yes. You can generate AI excuses completely free. Premium features such as advanced rewriting, favorites and AI personalization will be introduced in future updates.",
  },
  {
    question: "Which AI model powers the generator?",
    answer:
      "SorryNotSorry currently uses Google's Gemini AI to create natural, context-aware and believable excuses.",
  },
  {
    question: "Can I save my excuse history?",
    answer:
      "Absolutely. Every authenticated user has their own secure history stored privately within their account.",
  },
  {
    question: "Will Rewrite and Multiple Suggestions be available?",
    answer:
      "Yes. Rewrite, Favorites, Tone Switching and Smart Suggestions are already part of the roadmap.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Passwords are encrypted, authentication uses JWT, and every user's data remains completely private.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative max-w-5xl mx-auto px-6 py-32 overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="absolute -left-40 top-0 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(6,182,212,.10)",
        }}
      />

      <div
        className="absolute -right-40 bottom-0 w-[420px] h-[420px] rounded-full blur-[150px] -z-10"
        style={{
          background: "rgba(139,92,246,.12)",
        }}
      />

      {/* Header */}

      <div className="text-center">

        <span
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          ❓ Frequently Asked Questions
        </span>

        <h2
          className="text-5xl lg:text-6xl font-black mt-8"
          style={{
            color: "var(--text)",
          }}
        >
          Got

          <span
            style={{
              color: "var(--primary)",
            }}
          >
            {" "}Questions?
          </span>

        </h2>

        <p
          className="mt-8 max-w-3xl mx-auto text-lg leading-8"
          style={{
            color: "var(--text)",
            opacity: .72,
          }}
        >
          Everything you need to know before using
          SorryNotSorry AI.
        </p>

      </div>

      {/* FAQ */}

      <div className="mt-20 space-y-6">

        {faqs.map((faq, index) => {

          const active = open === index;

          return (

            <motion.div

              key={faq.question}

              layout

              whileHover={{
                y: -3,
              }}

              className="relative overflow-hidden rounded-[30px]"

              style={{
                background:
                  "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",
                border: "1px solid var(--border)",
                backdropFilter: "blur(25px)",
              }}

            >

              {/* Glow */}

              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[70px] opacity-20"
                style={{
                  background: "var(--primary)",
                }}
              />

              <button

                onClick={() =>
                  setOpen(active ? -1 : index)
                }

                className="w-full px-8 py-7 flex justify-between items-center text-left"

              >

                <div className="flex items-center gap-5">

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--primary),#8b5cf6)",
                      color: "#fff",
                    }}
                  >

                    <FaQuestionCircle />

                  </div>

                  <div>

                    <span
                      className="text-sm font-semibold"
                      style={{
                        color: "var(--primary)",
                      }}
                    >
                      QUESTION {index + 1}
                    </span>

                    <h3
                      className="text-xl font-bold mt-1"
                      style={{
                        color: "var(--text)",
                      }}
                    >
                      {faq.question}
                    </h3>

                  </div>

                </div>

                <motion.div

                  animate={{
                    rotate: active ? 180 : 0,
                  }}

                  transition={{
                    duration: .25,
                  }}

                  className="text-xl"

                  style={{
                    color: "var(--primary)",
                  }}

                >

                  {active ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}

                </motion.div>

              </button>

              <AnimatePresence>

                {active && (

                  <motion.div

                    initial={{
                      height: 0,
                      opacity: 0,
                    }}

                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}

                    exit={{
                      height: 0,
                      opacity: 0,
                    }}

                    transition={{
                      duration: .35,
                    }}

                  >

                    <p

                      className="px-8 pb-8 pl-[96px] leading-8"

                      style={{
                        color: "var(--text)",
                        opacity: .72,
                      }}

                    >

                      {faq.answer}

                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

              {/* Bottom Accent */}

              <motion.div

                animate={{
                  width: active ? "100%" : "0%",
                }}

                transition={{
                  duration: .35,
                }}

                className="h-1"

                style={{
                  background:
                    "linear-gradient(90deg,var(--primary),#8b5cf6)",
                }}

              />

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}