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
    <section id="pricing" className="cp-section" style={{ background: "#fff" }} ref={ref}>
      <div className="cp-container--narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cp-header"
        >
          <p className="cp-tag">Investment in You</p>
          <h2 className="cp-title">Our Pricing</h2>
          <p className="cp-desc">
            Transparent pricing. Save more when you commit to your practice.
          </p>
        </motion.div>

        {/* Intro Offer Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="cp-grid-2"
          style={{ marginBottom: "56px" }}
        >
          {introOffers.map((offer) => (
            <a
              key={offer.name}
              href={offer.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "48px 32px",
                textAlign: "center",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                borderRadius: "20px",
                background: offer.popular ? "linear-gradient(135deg, #8b7093 0%, #6b5674 100%)" : "#fff",
                color: offer.popular ? "#fff" : "#2d1b2d",
                boxShadow: offer.popular
                  ? "0 8px 40px rgba(139,112,147,0.25)"
                  : "0 2px 20px rgba(139,58,139,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = offer.popular
                  ? "0 16px 50px rgba(139,112,147,0.35)"
                  : "0 12px 40px rgba(139,58,139,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = offer.popular
                  ? "0 8px 40px rgba(139,112,147,0.25)"
                  : "0 2px 20px rgba(139,58,139,0.06)";
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  color: offer.popular ? "rgba(255,255,255,0.7)" : "#8b7093",
                  fontWeight: 600,
                }}
              >
                {offer.popular ? "Most Popular" : "New Client"}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "3.5rem",
                  marginBottom: "12px",
                  fontWeight: 600,
                }}
              >
                ${offer.price}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.15rem",
                  marginBottom: "12px",
                }}
              >
                {offer.name}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                  color: offer.popular ? "rgba(255,255,255,0.7)" : "#6b5e6b",
                }}
              >
                {offer.description}
              </p>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  borderBottom: "1px solid",
                  borderColor: offer.popular ? "rgba(255,255,255,0.4)" : "#8b7093",
                  paddingBottom: "4px",
                  fontWeight: 600,
                  color: offer.popular ? "#fff" : "#8b7093",
                }}
              >
                Get Started
              </span>
            </a>
          ))}
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            background: "#faf8fb",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {categories.map((cat, catIndex) => (
            <div
              key={cat.name}
              style={{
                borderBottom:
                  catIndex < categories.length - 1
                    ? "1px solid rgba(139,112,147,0.1)"
                    : "none",
              }}
            >
              <button
                onClick={() =>
                  setOpenCategory(openCategory === catIndex ? -1 : catIndex)
                }
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "24px 32px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(139,112,147,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#2d1b2d",
                  }}
                >
                  {cat.name}
                </span>
                <motion.svg
                  animate={{
                    rotate: openCategory === catIndex ? 45 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#8b7093",
                    flexShrink: 0,
                    marginLeft: "16px",
                  }}
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
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        padding: "0 32px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {cat.items.map((item) => (
                        <a
                          key={item.name}
                          href="https://momence.com/u/cary-pilates-ddAsiW"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "18px 20px",
                            background: "#fff",
                            borderRadius: "12px",
                            transition: "all 0.3s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#f5f0f6";
                            e.currentTarget.style.transform = "translateX(4px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#fff";
                            e.currentTarget.style.transform = "translateX(0)";
                          }}
                        >
                          <div>
                            <h4
                              style={{
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                color: "#2d1b2d",
                                marginBottom: "4px",
                              }}
                            >
                              {item.name}
                            </h4>
                            <p
                              style={{
                                fontSize: "0.82rem",
                                color: "#998a99",
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                          <span
                            style={{
                              fontFamily:
                                "var(--font-playfair), Georgia, serif",
                              fontSize: "1.2rem",
                              color: "#8b7093",
                              flexShrink: 0,
                              marginLeft: "24px",
                              fontWeight: 600,
                            }}
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
