"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  onOpenCalendar: () => void;
}

const heroImages = [
  "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?w=3840&q=100&ssl=1",
  "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero1.jpg?w=3840&q=100&ssl=1",
  "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero2.jpg?w=3840&q=100&ssl=1",
  "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero3.jpeg?w=3840&q=100&ssl=1",
  "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-055-Hero-1920.jpg?w=3840&q=100&ssl=1",
];

export default function Hero({ onOpenCalendar }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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

      {/* Rotating Background Images */}
      <div style={{ position: "absolute", inset: 0 }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            alt="Cary Pilates studio"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.05) saturate(1.1)",
            }}
          />
        </AnimatePresence>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.55) 100%), linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%)",
            zIndex: 1,
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
        <div style={{ marginBottom: "40px" }}>
          {[
            { text: "Find Your ", accent: "Strength." },
            { text: "Move with ", accent: "Grace." },
            { text: "Live in ", accent: "Balance." },
          ].map((line, i) => (
            <div key={i} style={{ overflow: "hidden", marginBottom: "8px" }}>
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
                <em style={{ color: "#c9b5d0", fontStyle: "italic" }}>
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

      {/* Image indicator dots */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 10,
        }}
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            style={{
              width: i === currentImage ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              border: "none",
              background: i === currentImage ? "#c9b5d0" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.4s",
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.6rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "30px",
              background: "linear-gradient(to bottom, rgba(201,181,208,0.5), transparent)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
