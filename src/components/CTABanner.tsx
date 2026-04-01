"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CTABannerProps {
  onOpenCalendar: () => void;
}

export default function CTABanner({ onOpenCalendar }: CTABannerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ padding: "80px 0" }}>
      <div className="cp-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cta-banner-inner"
          style={{
            borderRadius: "28px",
            padding: "64px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background image with purple tint */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/grey.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }} />
          {/* Purple overlay tint */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(139,112,147,0.88) 0%, rgba(107,86,116,0.92) 50%, rgba(74,58,82,0.95) 100%)",
            zIndex: 1,
          }} />

          {/* Decorative circles */}
          <div style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            pointerEvents: "none",
            zIndex: 2,
          }} />
          <div style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.06)",
            pointerEvents: "none",
            zIndex: 2,
          }} />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 3 }}>
            <p style={{
              fontSize: "0.72rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "16px",
              fontWeight: 600,
            }}>
              Ready to Start?
            </p>
            <h2 style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "#fff",
              marginBottom: "16px",
              fontWeight: 600,
              lineHeight: 1.2,
            }}>
              Your Transformation Begins Here
            </h2>
            <p style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "460px",
              margin: "0 auto 36px",
              lineHeight: 1.8,
            }}>
              Try 3 classes for just $96. No commitments. No pressure.
              Just movement that changes everything.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  background: "#fff",
                  color: "#8b7093",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  transition: "all 0.3s",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Claim 3-Class Pack - $96
              </a>
              <button
                onClick={onOpenCalendar}
                className="cp-btn cp-btn--outline"
              >
                View Schedule
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
