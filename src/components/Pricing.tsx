"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const categories = [
  {
    name: "New Client Introductory Specials",
    items: [
      { name: "Single Private Session", price: "$60", description: "Try us out! 1 x 50 min Private Pilates session", link: "https://momence.com/u/cary-pilates-ddAsiW" },
      { name: "3 Pilates Equipment Classes", price: "$96", description: "3 x 50 min Group Classes", link: "https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414" },
    ],
  },
  {
    name: "Group Pilates Classes",
    items: [
      { name: "Single Class", price: "$37", description: "Drop-in Rate. 1 x 50 min Group Class", link: "https://momence.com/u/cary-pilates-ddAsiW" },
      { name: "5 Classes", price: "$170", description: "5 x 50 min Group Classes - $34 / Class", link: "https://momence.com/u/cary-pilates-ddAsiW" },
      { name: "10 Classes", price: "$320", description: "10 x 50 min Group Classes - $32 / Class", link: "https://momence.com/u/cary-pilates-ddAsiW" },
    ],
  },
  {
    name: "Private Pilates Sessions",
    items: [
      { name: "Single Private", price: "$92", description: "1 x 50 min private session", link: "https://momence.com/u/cary-pilates-ddAsiW" },
      { name: "5 Privates", price: "$435", description: "5 x 50 min sessions - $87 each", link: "https://momence.com/u/cary-pilates-ddAsiW" },
      { name: "10 Privates", price: "$820", description: "10 x 50 min sessions - $82 each", link: "https://momence.com/u/cary-pilates-ddAsiW" },
      { name: "Single Duet", price: "$110", description: "1 x 50 min for two - $55 / person", link: "https://momence.com/u/cary-pilates-ddAsiW" },
      { name: "5 Duets", price: "$520", description: "5 x 50 min for two - $52 / person", link: "https://momence.com/u/cary-pilates-ddAsiW" },
      { name: "10 Duets", price: "$960", description: "10 x 50 min for two - $48 / person", link: "https://momence.com/u/cary-pilates-ddAsiW" },
    ],
  },
  {
    name: "Physical Therapy",
    items: [
      { name: "PT Evaluation", price: "$150", description: "50 min in-depth evaluation of pain, mobility, and goals", link: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636" },
      { name: "PT Follow-up", price: "$115", description: "50 min follow-up with hands-on techniques and exercises", link: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636" },
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openCategory, setOpenCategory] = useState(0);

  return (
    <section id="pricing" className="py-32 md:py-40 bg-[#faf8fb]" ref={ref}>
      <div className="max-w-3xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="text-[#8b7093] text-xs tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Investment in You
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1d1d22] mb-8"
            style={{ lineHeight: 1.2 }}
          >
            Our <span className="italic text-[#8b7093]">Pricing</span>
          </h2>
          <p
            className="text-[#6c6c89] text-base max-w-md mx-auto"
            style={{ fontFamily: "var(--font-inter)", lineHeight: 2 }}
          >
            Providing value without compromising quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm"
        >
          {categories.map((cat, catIndex) => (
            <div key={cat.name} className="border-b border-[#f0edf1] last:border-b-0">
              <button
                onClick={() => setOpenCategory(openCategory === catIndex ? -1 : catIndex)}
                className="w-full flex items-center justify-between p-7 md:p-8 hover:bg-[#faf8fb]/50 transition-colors text-left"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-base font-medium text-[#1d1d22]">
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
                    <div className="px-7 md:px-8 pb-8 space-y-4">
                      {cat.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-5 rounded-xl bg-[#faf8fb] hover:bg-[#f0edf1] transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4
                              className="font-semibold text-sm text-[#1d1d22]"
                              style={{ fontFamily: "var(--font-inter)" }}
                            >
                              {item.name}
                            </h4>
                            <span className="text-xl font-light text-[#8b7093] ml-4">
                              {item.price}
                            </span>
                          </div>
                          <p
                            className="text-[#6c6c89] text-xs"
                            style={{ fontFamily: "var(--font-inter)", lineHeight: 1.8 }}
                          >
                            {item.description}
                          </p>
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
