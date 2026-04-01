"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

interface ClassesProps {
  onOpenCalendar: () => void;
}

const classes = [
  {
    id: "classes",
    title: "Group Reformer",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Class.jpg?w=1200&q=100&ssl=1",
    description:
      "Small group classes limited to just 5 people on premium Balanced Body reformers. Every session is a full-body experience tailored to your level.",
    cta: "View Schedule",
    href: "https://momence.com/u/cary-pilates-ddAsiW",
  },
  {
    id: "private-sessions",
    title: "Private Sessions",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Private-Appts.jpg?w=1200&q=100&ssl=1",
    description:
      "One-on-one sessions designed around your unique goals, body, and pace. Perfect for deepening your practice or addressing specific needs.",
    cta: "Book Private",
    href: "https://momence.com/u/cary-pilates-ddAsiW",
  },
  {
    id: "physical-therapy",
    title: "Physical Therapy",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-PT.jpg?w=1200&q=100&ssl=1",
    description:
      "Pilates-based physical therapy combining clinical expertise with mindful movement. Recover stronger and move with confidence.",
    cta: "Schedule Evaluation",
    href: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636",
  },
];

function TiltCard({ children, className, style, id }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  }, []);

  return (
    <div
      ref={cardRef}
      id={id}
      className={className}
      style={{
        ...style,
        transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

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
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              <TiltCard
                id={cls.id}
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
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
