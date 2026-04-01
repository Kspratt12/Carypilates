"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "New Client Introductory Specials",
    items: [
      {
        name: "Single Private Session",
        price: "$60",
        description: "Try us out! 1 x 50 min Private Pilates session",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "3 Pilates Equipment Classes",
        price: "$96",
        description: "3 x 50 min Group Classes",
        link: "https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414",
      },
    ],
  },
  {
    name: "Group Pilates Classes",
    items: [
      {
        name: "Single Class",
        price: "$37",
        description: "Drop-in Rate. 1 x 50 min Group Class",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "5 Classes",
        price: "$170",
        description: "5 x 50 min Group Classes - $34 / Class",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "10 Classes",
        price: "$320",
        description: "10 x 50 min Group Classes - $32 / Class",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
    ],
  },
  {
    name: "Private Pilates Sessions",
    items: [
      {
        name: "Single Private",
        price: "$92",
        description: "1 x 50 min private session",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "5 Privates",
        price: "$435",
        description: "5 x 50 min sessions - $87 each",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "10 Privates",
        price: "$820",
        description: "10 x 50 min sessions - $82 each",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "Single Duet",
        price: "$110",
        description: "1 x 50 min for two - $55 / person",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "5 Duets",
        price: "$520",
        description: "5 x 50 min for two - $52 / person",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "10 Duets",
        price: "$960",
        description: "10 x 50 min for two - $48 / person",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
    ],
  },
  {
    name: "Physical Therapy",
    items: [
      {
        name: "PT Evaluation",
        price: "$150",
        description: "50 min evaluation of pain, mobility, and goals",
        link: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636",
      },
      {
        name: "PT Follow-up",
        price: "$115",
        description: "50 min follow-up with hands-on techniques",
        link: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636",
      },
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openCategory, setOpenCategory] = useState(0);

  return (
    <section id="pricing" className="py-24 md:py-32 lg:py-40 bg-[#faf9fb]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-5">
            Investment in You
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Our Pricing
          </h2>
          <p
            className="text-base text-gray-500 max-w-lg mx-auto"
            style={{ lineHeight: "1.9" }}
          >
            Transparent pricing for every path. Save more when you commit to your
            practice.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white overflow-hidden"
        >
          {categories.map((cat, catIndex) => (
            <div
              key={cat.name}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                onClick={() =>
                  setOpenCategory(openCategory === catIndex ? -1 : catIndex)
                }
                className="w-full flex items-center justify-between px-8 py-6 hover:bg-gray-50/50 transition-colors text-left bg-transparent border-none cursor-pointer"
              >
                <span
                  className="text-[15px] font-medium text-gray-900"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {cat.name}
                </span>
                <motion.svg
                  animate={{ rotate: openCategory === catIndex ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-[#8b7093] flex-shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openCategory === catIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 space-y-3">
                      {cat.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-5 bg-[#faf9fb] hover:bg-[#f0edf1] transition-colors group"
                        >
                          <div className="flex-1 mr-4">
                            <h4 className="text-[15px] font-medium text-gray-900 mb-1">
                              {item.name}
                            </h4>
                            <p
                              className="text-[13px] text-gray-500"
                              style={{ lineHeight: "1.6" }}
                            >
                              {item.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span
                              className="text-xl text-[#8b7093]"
                              style={{
                                fontFamily:
                                  "var(--font-playfair), Georgia, serif",
                              }}
                            >
                              {item.price}
                            </span>
                            <svg
                              className="w-4 h-4 text-[#8b7093] opacity-0 group-hover:opacity-100 transition-opacity"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
