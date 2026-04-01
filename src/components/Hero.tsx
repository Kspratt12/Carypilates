"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onOpenCalendar: () => void;
}

export default function Hero({ onOpenCalendar }: HeroProps) {
  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.25,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "#8b7093",
          zIndex: 30,
        }}
      />

      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?w=1920&q=90&ssl=1"
          alt="Cary Pilates studio"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.05) saturate(1.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%), linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "700px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          {[
            { text: "Find Your ", accent: "Strength." },
            { text: "Move with ", accent: "Grace." },
            { text: "Live in ", accent: "Balance." },
          ].map((line, i) => (
            <motion.h1
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "12px",
                lineHeight: 1.15,
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                letterSpacing: "1px",
              }}
            >
              {line.text}
              <em style={{ color: "#c9b5d0", fontStyle: "italic" }}>
                {line.accent}
              </em>
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: "520px",
            margin: "0 auto 40px",
            textShadow: "0 1px 6px rgba(0,0,0,0.4)",
            fontWeight: 300,
          }}
        >
          A boutique Pilates studio in Cary, NC offering intimate group classes,
          private sessions, and Pilates-based physical therapy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button onClick={onOpenCalendar} className="cp-btn cp-btn--primary">
            Book a Class
          </button>
          <a href="#classes" className="cp-btn cp-btn--outline">
            Explore Classes
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.7rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(to bottom, #8b7093, transparent)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
