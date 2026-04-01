"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "5", label: "Max Class Size" },
  { number: "50", label: "Min Sessions" },
  { number: "5", label: "Instructors" },
  { number: "100%", label: "Satisfaction" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="cp-section" style={{ background: "#faf8fb" }} ref={ref}>
      <div className="cp-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cp-header"
        >
          <p className="cp-tag">Our Studio</p>
          <h2 className="cp-title">Where Wellness Meets Community</h2>
          <p className="cp-desc">
            A space where you are seen, supported, and challenged to grow.
          </p>
        </motion.div>

        <div className="cp-grid-2" style={{ alignItems: "center", marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{ fontSize: "1.02rem", color: "#5a4a5a", lineHeight: 1.8, marginBottom: "20px" }}>
              Cary Pilates is more than a studio - it is a space where you are
              seen, supported, and challenged to grow. Founded with a passion for
              mindful movement, we believe Pilates is for every body, at every
              stage of life.
            </p>
            <p style={{ fontSize: "1.02rem", color: "#5a4a5a", lineHeight: 1.8, marginBottom: "20px" }}>
              Our intimate class sizes of just five people mean you will never be
              lost in a crowd. Every session is guided by expert instructors on
              premium Balanced Body equipment, ensuring you receive the
              personalized attention you deserve.
            </p>
            <p style={{ fontSize: "1.02rem", color: "#5a4a5a", lineHeight: 1.8, marginBottom: "32px" }}>
              Whether you are recovering from injury, building strength, or
              seeking balance in your daily life, we meet you exactly where you
              are and help you move forward with confidence.
            </p>
            <a
              href="https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414"
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn cp-btn--primary"
            >
              New Client Special
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <img
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Chair.jpg?w=1200&q=90&ssl=1"
              alt="Pilates chair exercise at Cary Pilates"
              style={{
                width: "100%",
                aspectRatio: "1",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(139, 58, 139, 0.1)",
              }}
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="cp-grid-4"
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "48px 32px",
            boxShadow: "0 2px 20px rgba(139,58,139,0.04)",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 600,
                  color: "#8b7093",
                  marginBottom: "8px",
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#998a99",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
