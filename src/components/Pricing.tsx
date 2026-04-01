"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

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
        description: "Familiar with Pilates and want to try out some classes? 3 x 50 min Group Classes",
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
        description: "Package includes 5 x 50 min Group Classes - $34 / Class",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "10 Classes",
        price: "$320",
        description: "Package includes 10 x 50 min Group Classes - $32 / Class",
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
        description: "1 x 50 min private session with a certified Pilates instructor",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "5 Privates",
        price: "$435",
        description: "Package includes 5 x 50 min private sessions - $87 / session",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "10 Privates",
        price: "$820",
        description: "Package includes 10 x 50 min private sessions - $82 / session",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "Single Duet",
        price: "$110",
        description: "1 x 50 min private session for two people - $55 / person",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "5 Duets",
        price: "$520",
        description: "5 x 50 min private sessions for two people - $52 / person",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
      {
        name: "10 Duets",
        price: "$960",
        description: "10 x 50 min private sessions for two people - $48 / person",
        link: "https://momence.com/u/cary-pilates-ddAsiW",
      },
    ],
  },
  {
    name: "Physical Therapy",
    items: [
      {
        name: "Physical Therapy Evaluation",
        price: "$150",
        description: "A 50 minute PT evaluation begins with an in-depth discussion about your pain, discomfort, and history of injury or illness.",
        link: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636",
      },
      {
        name: "Physical Therapy Follow-up Session",
        price: "$115",
        description: "A 50 minute PT follow-up session based on your evaluation and treatment plan. May include hands-on techniques, Pilates-based exercises, and postural re-education.",
        link: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636",
      },
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openCategory, setOpenCategory] = useState(0);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#faf8fb]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#8b7093] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Investment in You
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1d1d22] mb-6">
            Explore Our Competitive{" "}
            <span className="italic text-[#8b7093]">Pricing</span>
          </h2>
          <p
            className="text-[#6c6c89] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            At Cary Pilates, we believe in providing value without compromising
            quality.
          </p>
        </motion.div>

        {/* Accordion Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm"
        >
          {categories.map((cat, catIndex) => (
            <div key={cat.name} className="border-b border-[#f0edf1] last:border-b-0">
              <button
                onClick={() =>
                  setOpenCategory(openCategory === catIndex ? -1 : catIndex)
                }
                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-[#faf8fb]/50 transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-lg font-medium text-[#1d1d22]">
                  {cat.name}
                </span>
                <motion.svg
                  animate={{ rotate: openCategory === catIndex ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-[#8b7093]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
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
                    <div className="px-6 md:px-8 pb-8 space-y-6">
                      {cat.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-5 rounded-2xl bg-[#faf8fb] hover:bg-[#f5f0f6] transition-colors group"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-1">
                              <h4
                                className="font-semibold text-[#1d1d22]"
                                style={{ fontFamily: "var(--font-inter)" }}
                              >
                                {item.name}
                              </h4>
                              <div className="hidden md:block flex-1 border-b border-dotted border-[#d1d1db]" />
                              <span className="text-2xl font-light text-[#8b7093]">
                                {item.price}
                              </span>
                            </div>
                            <p
                              className="text-[#6c6c89] text-sm"
                              style={{ fontFamily: "var(--font-inter)" }}
                            >
                              {item.description}
                            </p>
                          </div>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#8b7093] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            Book Now
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </a>
                        </div>
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
