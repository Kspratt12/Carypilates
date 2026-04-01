"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book Your Class",
    description: "Choose a group class, private session, or PT evaluation online. First time? Try our 3-Class Pack for $96.",
  },
  {
    number: "02",
    title: "Arrive 10 Min Early",
    description: "We will give you a tour, learn about your goals, and get you set up on your reformer. Wear comfortable, fitted clothing.",
  },
  {
    number: "03",
    title: "Your Session",
    description: "50 minutes of expert-guided movement with only 5 people max. Your instructor adjusts every exercise to your body.",
  },
  {
    number: "04",
    title: "Feel the Difference",
    description: "Walk out standing taller, feeling stronger, and already planning your next visit. Most clients are hooked after one session.",
  },
];

export default function FirstVisit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="cp-section" style={{ background: "#fff" }} ref={ref}>
      <div className="cp-container--narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cp-header"
        >
          <p className="cp-tag">New Here?</p>
          <h2 className="cp-title">Your First Visit</h2>
          <p className="cp-desc">
            Everything you need to know before your first session. No experience necessary.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "32px",
            top: "24px",
            bottom: "24px",
            width: "2px",
            background: "linear-gradient(to bottom, #c9b5d0, rgba(201,181,208,0.2))",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                style={{
                  display: "flex",
                  gap: "32px",
                  padding: "32px 0",
                  alignItems: "flex-start",
                }}
              >
                {/* Number circle */}
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "#faf8fb",
                  border: "2px solid #c9b5d0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                }}>
                  <span style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#8b7093",
                  }}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div style={{ paddingTop: "8px" }}>
                  <h3 style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.25rem",
                    color: "#2d1b2d",
                    marginBottom: "10px",
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: "0.95rem",
                    color: "#6b5e6b",
                    lineHeight: 1.8,
                    maxWidth: "500px",
                  }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <a
            href="https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414"
            target="_blank"
            rel="noopener noreferrer"
            className="cp-btn cp-btn--primary"
          >
            Book Your First Class
          </a>
        </motion.div>
      </div>
    </section>
  );
}
