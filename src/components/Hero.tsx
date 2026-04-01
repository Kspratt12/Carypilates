"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onOpenCalendar: () => void;
}

export default function Hero({ onOpenCalendar }: HeroProps) {
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
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #8b7093, #c9b5d0, #8b7093)",
          zIndex: 30,
          transformOrigin: "left",
        }}
      />

      {/* Background Image with Ken Burns */}
      <div style={{ position: "absolute", inset: 0 }}>
        <motion.img
          src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?w=3840&q=100&ssl=1"
          alt="Cary Pilates studio"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
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
              "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.55) 100%), linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%)",
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
          maxWidth: "750px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Headline lines with clip-path reveal */}
        <div style={{ marginBottom: "40px" }}>
          {[
            { text: "Find Your ", accent: "Strength." },
            { text: "Move with ", accent: "Grace." },
            { text: "Live in ", accent: "Balance." },
          ].map((line, i) => (
            <div
              key={i}
              style={{
                overflow: "hidden",
                marginBottom: "8px",
              }}
            >
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  delay: 0.4 + i * 0.2,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.2,
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                  letterSpacing: "0.5px",
                }}
              >
                {line.text}
                <em
                  style={{
                    color: "#c9b5d0",
                    fontStyle: "italic",
                  }}
                >
                  {line.accent}
                </em>
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "60px",
            height: "2px",
            background: "#c9b5d0",
            margin: "0 auto 32px",
            transformOrigin: "center",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "1.08rem",
            lineHeight: 1.8,
            maxWidth: "520px",
            margin: "0 auto 44px",
            textShadow: "0 1px 6px rgba(0,0,0,0.4)",
            fontWeight: 300,
            letterSpacing: "0.3px",
          }}
        >
          A boutique Pilates studio in Cary, NC offering intimate group classes,
          private sessions, and Pilates-based physical therapy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
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
        transition={{ delay: 2.2, duration: 0.8 }}
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
              fontSize: "0.65rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "50px",
              background: "linear-gradient(to bottom, rgba(201,181,208,0.6), transparent)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
