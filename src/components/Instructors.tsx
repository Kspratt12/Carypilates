"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const featuredInstructor = {
  slug: "lora",
  name: "Lora Guerra, MPT, NCPT",
  role: "Studio Owner, Physical Therapist & Pilates Instructor",
  image:
    "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-151-SQ.jpg?w=1200&q=100&ssl=1",
  bio: [
    "Lora founded Cary Pilates with a simple vision: to create a space where every person feels welcomed, challenged, and empowered through movement.",
    "As both a licensed Physical Therapist and nationally certified Pilates instructor, Lora brings a rare combination of clinical expertise and movement mastery to every session.",
    "Her teaching philosophy centers on meeting each person where they are - whether recovering from injury or chasing new fitness goals - and guiding them toward strength, flexibility, and confidence.",
  ],
};

const instructors = [
  {
    slug: "jessica",
    name: "Jessica Satterlee, NCPT",
    role: "Pilates Instructor & Nutrition Coach",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Jessica-SQ-1.jpg?w=800&q=100&ssl=1",
    bio: "Teaching since 2008 with 950+ hours of advanced training. Precision, detail, and nutrition expertise in every class.",
  },
  {
    slug: "grace",
    name: "Grace Wilson",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/08/GraceW_sq.jpg?w=800&q=100&ssl=1",
    bio: "Teaching movement since 2013. Balanced Body certified with a gift for mindful, pain-free movement.",
  },
  {
    slug: "breanna",
    name: "Breanna McLane",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/Breanna-SQ.jpg?w=800&q=100&ssl=1",
    bio: "Dynamic energy that makes challenging workouts feel accessible and fun for every level.",
  },
  {
    slug: "sophia",
    name: "Sophia Saylor",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2026/01/Sophia.jpg?w=800&q=100&ssl=1",
    bio: "Classical technique meets modern approaches for a well-rounded, alignment-focused practice.",
  },
];

export default function Instructors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="instructors" className="cp-section" style={{ background: "#faf8fb" }} ref={ref}>
      <div className="cp-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cp-header"
        >
          <p className="cp-tag">Meet the Team</p>
          <h2 className="cp-title">Our Instructors</h2>
          <p className="cp-desc">
            Passionate, certified professionals dedicated to guiding your
            Pilates journey.
          </p>
        </motion.div>

        {/* Featured: Lora */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="cp-grid-2"
          style={{ alignItems: "center", marginBottom: "80px" }}
        >
          <a
            href={`/instructors/${featuredInstructor.slug}`}
            style={{ overflow: "hidden", borderRadius: "20px", display: "block" }}
          >
            <img
              src={featuredInstructor.image}
              alt={featuredInstructor.name}
              style={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
                transition: "transform 0.6s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            />
          </a>
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#8b7093",
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              {featuredInstructor.role}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                marginBottom: "24px",
                color: "#2d1b2d",
              }}
            >
              {featuredInstructor.name}
            </h3>
            {featuredInstructor.bio.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontSize: "0.95rem",
                  color: "#6b5e6b",
                  lineHeight: 1.8,
                  marginBottom: "16px",
                }}
              >
                {paragraph}
              </p>
            ))}
            <a
              href={`/instructors/${featuredInstructor.slug}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.82rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#8b7093",
                fontWeight: 600,
                borderBottom: "1px solid #8b7093",
                paddingBottom: "4px",
                marginTop: "8px",
                transition: "color 0.3s",
              }}
            >
              Full Profile
              <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Other Instructors */}
        <div className="cp-grid-4">
          {instructors.map((instructor, i) => (
            <motion.a
              key={instructor.name}
              href={`/instructors/${instructor.slug}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              style={{
                textAlign: "center",
                display: "block",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  marginBottom: "20px",
                  borderRadius: "16px",
                }}
              >
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    objectFit: "cover",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.1rem",
                  marginBottom: "4px",
                  color: "#2d1b2d",
                }}
              >
                {instructor.name}
              </h4>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#8b7093",
                  marginBottom: "10px",
                  fontWeight: 500,
                }}
              >
                {instructor.role}
              </p>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#6b5e6b",
                  lineHeight: 1.7,
                  marginBottom: "12px",
                }}
              >
                {instructor.bio}
              </p>
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#8b7093",
                  fontWeight: 600,
                  borderBottom: "1px solid #8b7093",
                  paddingBottom: "2px",
                }}
              >
                View Profile
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
