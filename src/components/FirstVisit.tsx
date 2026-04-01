"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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

function StepCircle({ number, index }: { number: string; index: number }) {
  const circleRef = useRef(null);
  const inView = useInView(circleRef, { once: true, margin: "-50px" });

  return (
    <div ref={circleRef} style={{ position: "relative", zIndex: 1 }}>
      {/* Outer pulse ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: [0, 1.4, 1], opacity: [0, 0.3, 0] } : {}}
        transition={{ duration: 1.2, delay: 0.1 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          inset: "-8px",
          borderRadius: "50%",
          border: "2px solid #c9b5d0",
          pointerEvents: "none",
        }}
      />
      {/* Second pulse ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: [0, 1.6, 1], opacity: [0, 0.15, 0] } : {}}
        transition={{ duration: 1.4, delay: 0.25 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          inset: "-14px",
          borderRadius: "50%",
          border: "1.5px solid #c9b5d0",
          pointerEvents: "none",
        }}
      />
      {/* Main circle */}
      <motion.div
        className="fv-circle"
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: index * 0.2,
        }}
        style={{
          width: "68px",
          height: "68px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #faf8fb 0%, #f3eff4 100%)",
          border: "2px solid #c9b5d0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 4px 20px rgba(139,112,147,0.15)",
        }}
      >
        <motion.span
          className="fv-circle-number"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#8b7093",
          }}
        >
          {number}
        </motion.span>
      </motion.div>
    </div>
  );
}

export default function FirstVisit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

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
          {/* Static track */}
          <div className="fv-timeline-track" style={{
            position: "absolute",
            left: "34px",
            top: "24px",
            bottom: "24px",
            width: "2px",
            background: "rgba(201,181,208,0.2)",
          }} />
          {/* Animated progress line */}
          <motion.div className="fv-timeline-progress" style={{
            position: "absolute",
            left: "34px",
            top: "24px",
            width: "2px",
            height: lineHeight,
            background: "linear-gradient(to bottom, #8b7093, #c9b5d0)",
            maxHeight: "calc(100% - 48px)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="fv-step"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "flex",
                  gap: "32px",
                  padding: "32px 0",
                  alignItems: "flex-start",
                }}
              >
                {/* Number circle with scroll animation */}
                <StepCircle number={step.number} index={i} />

                {/* Content */}
                <div style={{ paddingTop: "10px", flex: 1, minWidth: 0 }}>
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
