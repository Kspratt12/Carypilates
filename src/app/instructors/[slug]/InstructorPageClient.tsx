"use client";

import { motion } from "framer-motion";
import type { Instructor } from "@/data/instructors";

export default function InstructorPageClient({
  instructor,
}: {
  instructor: Instructor;
}) {
  return (
    <main style={{ background: "#faf8fb" }}>
      {/* Navigation Bar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 1px 20px rgba(139,112,147,0.06)",
          padding: "12px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="/">
            <img
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2024/08/CaryPilates.png?fit=400%2C110&ssl=1"
              alt="Cary Pilates"
              style={{ height: "28px", width: "auto" }}
            />
          </a>
          <a
            href="/#instructors"
            style={{
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "#8b7093",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg
              style={{ width: "16px", height: "16px" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Team
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "60px 24px 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
          className="instructor-hero-grid"
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(139,58,139,0.1)",
            }}
          >
            <img
              src={instructor.heroImage}
              alt={instructor.name}
              style={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
              }}
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ paddingTop: "20px" }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#8b7093",
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              {instructor.role}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#2d1b2d",
                marginBottom: "8px",
                lineHeight: 1.2,
              }}
            >
              {instructor.name}
            </h1>
            {instructor.credentials && (
              <p
                style={{
                  fontSize: "1rem",
                  color: "#8b7093",
                  marginBottom: "32px",
                  fontWeight: 500,
                }}
              >
                {instructor.credentials}
              </p>
            )}

            {/* Bio */}
            {instructor.fullBio.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontSize: "0.98rem",
                  color: "#5a4a5a",
                  lineHeight: 1.85,
                  marginBottom: "18px",
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* CTA */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "32px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://momence.com/u/cary-pilates-ddAsiW"
                target="_blank"
                rel="noopener noreferrer"
                className="cp-btn cp-btn--primary"
              >
                Book with {instructor.name.split(" ")[0]}
              </a>
              <a href="/#contact" className="cp-btn cp-btn--dark-outline">
                Contact Studio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
          className="instructor-details-grid"
        >
          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "36px",
              boxShadow: "0 2px 20px rgba(139,58,139,0.04)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "1.3rem",
                color: "#2d1b2d",
                marginBottom: "24px",
              }}
            >
              Specialties
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {instructor.specialties.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "50px",
                    background: "#f3eff4",
                    color: "#6b5674",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "36px",
              boxShadow: "0 2px 20px rgba(139,58,139,0.04)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "1.3rem",
                color: "#2d1b2d",
                marginBottom: "24px",
              }}
            >
              Certifications
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {instructor.certifications.map((c) => (
                <div
                  key={c}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#8b7093",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.92rem",
                      color: "#5a4a5a",
                      lineHeight: 1.6,
                    }}
                  >
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            background: "linear-gradient(135deg, #8b7093, #6b5674)",
            borderRadius: "20px",
            padding: "48px",
            marginTop: "48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            Beyond the Studio
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.8,
              maxWidth: "600px",
              margin: "0 auto",
              fontStyle: "italic",
            }}
          >
            {instructor.personal}
          </p>
          {instructor.instagram && (
            <a
              href={`https://instagram.com/${instructor.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "24px",
                color: "#c9b5d0",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              <svg
                style={{ width: "16px", height: "16px" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              {instructor.instagram}
            </a>
          )}
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section
        style={{
          background: "#fff",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#2d1b2d",
            marginBottom: "12px",
          }}
        >
          Ready to train with {instructor.name.split(" ")[0]}?
        </p>
        <p
          style={{
            fontSize: "1rem",
            color: "#6b5e6b",
            marginBottom: "32px",
            lineHeight: 1.8,
          }}
        >
          Book your session and experience the Cary Pilates difference.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://momence.com/u/cary-pilates-ddAsiW"
            target="_blank"
            rel="noopener noreferrer"
            className="cp-btn cp-btn--primary"
          >
            Book a Session
          </a>
          <a href="/" className="cp-btn cp-btn--dark-outline">
            Back to Home
          </a>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .instructor-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .instructor-details-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
