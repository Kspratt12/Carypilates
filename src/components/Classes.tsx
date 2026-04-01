"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ClassesProps {
  onOpenCalendar: () => void;
}

const classes = [
  {
    id: "classes",
    title: "Group Reformer",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-013-SQ.jpg?w=1080&q=90&ssl=1",
    description:
      "Small group classes limited to just 5 people on premium Balanced Body reformers. Every session is a full-body experience tailored to your level.",
    cta: "View Schedule",
    href: "https://momence.com/u/cary-pilates-ddAsiW",
  },
  {
    id: "private-sessions",
    title: "Private Sessions",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-060-SQ.jpg?w=800&q=90&ssl=1",
    description:
      "One-on-one sessions designed around your unique goals, body, and pace. Perfect for deepening your practice or addressing specific needs.",
    cta: "Book Private",
    href: "https://momence.com/u/cary-pilates-ddAsiW",
  },
  {
    id: "physical-therapy",
    title: "Physical Therapy",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-096-1.jpg?w=1080&q=90&ssl=1",
    description:
      "Pilates-based physical therapy combining clinical expertise with mindful movement. Recover stronger and move with confidence.",
    cta: "Schedule Evaluation",
    href: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636",
  },
];

export default function Classes({ onOpenCalendar }: ClassesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="cp-section" style={{ background: "#fff" }} ref={ref}>
      <div className="cp-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cp-header"
        >
          <p className="cp-tag">What We Offer</p>
          <h2 className="cp-title">Our Classes</h2>
          <p className="cp-desc">
            Three distinct paths to help you find the movement practice that
            fits your life.
          </p>
        </motion.div>

        <div className="cp-grid-3">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.id}
              id={cls.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="cp-card"
              style={{ cursor: "default" }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  src={cls.image}
                  alt={cls.title}
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
              <div style={{ padding: "32px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.3rem",
                    marginBottom: "12px",
                    color: "#2d1b2d",
                  }}
                >
                  {cls.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#6b5e6b",
                    lineHeight: 1.8,
                    marginBottom: "24px",
                  }}
                >
                  {cls.description}
                </p>
                <a
                  href={cls.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#8b7093",
                    borderBottom: "1px solid #8b7093",
                    paddingBottom: "4px",
                    transition: "color 0.3s",
                    fontWeight: 600,
                  }}
                >
                  {cls.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
