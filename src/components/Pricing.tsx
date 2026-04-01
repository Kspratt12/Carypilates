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
      { name: "PT Evaluation", price: "$150", description: "50 min evaluation of pain, mobility, and goals", link: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636" },
      { name: "PT Follow-up", price: "$115", description: "50 min follow-up with hands-on techniques", link: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636" },
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openCategory, setOpenCategory] = useState(0);

  return (
    <section id="pricing" className="py-28 md:py-36 bg-[#faf8fb]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#8b7093] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "var(--font-inter)" }}>
            Investment in You
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1d1d22] mb-6">
            Our <span className="italic text-[#8b7093]">Pricing</span>
          </h2>
          <p className="text-[#6c6c89] text-base max-w-sm mx-auto" style={{ fontFamily: "var(--font-inter)", lineHeight: 2 }}>
            Providing value without compromising quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm"
        >
          {categories.map((cat, catIndex) => (
            <div key={cat.name} className="border-b border-[#f0edf1] last:border-b-0">
              <button
                onClick={() => setOpenCategory(openCategory === catIndex ? -1 : catIndex)}
                className="w-full flex items-center justify-between p-6 md:p-7 hover:bg-[#faf8fb]/50 transition-colors text-left"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-sm md:text-base font-medium text-[#1d1d22]">{cat.name}</span>
                <motion.svg
                  animate={{ rotate: openCategory === catIndex ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-[#8b7093] flex-shrink-0 ml-4"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
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
                    <div className="px-6 md:px-7 pb-6 space-y-3">
                      {cat.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 md:p-5 rounded-xl bg-[#faf8fb] hover:bg-[#f0edf1] transition-colors group"
                        >
                          <div className="flex-1 mr-4">
                            <h4 className="font-semibold text-sm text-[#1d1d22] mb-1" style={{ fontFamily: "var(--font-inter)" }}>{item.name}</h4>
                            <p className="text-[#6c6c89] text-xs" style={{ fontFamily: "var(--font-inter)" }}>{item.description}</p>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="text-xl font-light text-[#8b7093]">{item.price}</span>
                            <svg className="w-4 h-4 text-[#8b7093] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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
