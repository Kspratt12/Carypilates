"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const introOffers = [
  {
    name: "Private Intro",
    price: "60",
    description: "1 x 50 min private session - perfect for first-timers",
    link: "https://momence.com/u/cary-pilates-ddAsiW",
  },
  {
    name: "3-Class Pack",
    price: "96",
    description: "3 x 50 min group classes to experience the studio",
    link: "https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414",
    popular: true,
  },
];

const categories = [
  {
    name: "Group Pilates Classes",
    items: [
      { name: "Single Class", price: "$37", description: "Drop-in - 1 x 50 min" },
      { name: "5 Classes", price: "$170", description: "$34 / class" },
      { name: "10 Classes", price: "$320", description: "$32 / class" },
    ],
  },
  {
    name: "Private Sessions",
    items: [
      { name: "Single Private", price: "$92", description: "1 x 50 min" },
      { name: "5 Privates", price: "$435", description: "$87 each" },
      { name: "10 Privates", price: "$820", description: "$82 each" },
      { name: "Single Duet", price: "$110", description: "$55 / person" },
      { name: "5 Duets", price: "$520", description: "$52 / person" },
      { name: "10 Duets", price: "$960", description: "$48 / person" },
    ],
  },
  {
    name: "Physical Therapy",
    items: [
      { name: "PT Evaluation", price: "$150", description: "50 min comprehensive evaluation" },
      { name: "PT Follow-up", price: "$115", description: "50 min treatment session" },
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openCategory, setOpenCategory] = useState(0);

  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-36 bg-[#faf9fb]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-4">
            Investment in You
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Our Pricing
          </h2>
          <p
            className="text-[15px] text-gray-500 max-w-md mx-auto"
            style={{ lineHeight: "1.8" }}
          >
            Transparent pricing. Save more when you commit to your practice.
          </p>
        </motion.div>

        {/* Intro Offer Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-6 mb-14"
        >
          {introOffers.map((offer) => (
            <a
              key={offer.name}
              href={offer.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-10 text-center transition-all duration-500 hover:-translate-y-1 rounded-2xl ${
                offer.popular
                  ? "bg-[#8b7093] text-white hover:shadow-xl"
                  : "bg-white text-gray-900 hover:shadow-lg shadow-sm"
              }`}
            >
              <p className={`text-xs tracking-[0.3em] uppercase mb-4 ${offer.popular ? "text-white/70" : "text-[#8b7093]"}`}>
                {offer.popular ? "Most Popular" : "New Client"}
              </p>
              <p
                className="text-5xl mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                ${offer.price}
              </p>
              <p className={`text-lg mb-3 ${offer.popular ? "text-white" : "text-gray-900"}`}
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {offer.name}
              </p>
              <p className={`text-[14px] mb-8 ${offer.popular ? "text-white/70" : "text-gray-500"}`}
                style={{ lineHeight: "1.8" }}
              >
                {offer.description}
              </p>
              <span className={`inline-block text-[12px] tracking-[0.2em] uppercase pb-1 border-b ${
                offer.popular ? "text-white border-white/40" : "text-[#8b7093] border-[#8b7093]"
              }`}>
                Get Started
              </span>
            </a>
          ))}
        </motion.div>

        {/* Accordion for full pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white overflow-hidden rounded-2xl shadow-sm"
        >
          {categories.map((cat, catIndex) => (
            <div key={cat.name} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => setOpenCategory(openCategory === catIndex ? -1 : catIndex)}
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
                    <div className="px-8 pb-6 space-y-3">
                      {cat.items.map((item) => (
                        <a
                          key={item.name}
                          href="https://momence.com/u/cary-pilates-ddAsiW"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-5 bg-[#faf9fb] hover:bg-[#f0edf1] transition-colors group rounded-xl"
                        >
                          <div>
                            <h4 className="text-[15px] font-medium text-gray-900 mb-1">{item.name}</h4>
                            <p className="text-[13px] text-gray-500">{item.description}</p>
                          </div>
                          <span
                            className="text-xl text-[#8b7093] flex-shrink-0 ml-6"
                            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                          >
                            {item.price}
                          </span>
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
