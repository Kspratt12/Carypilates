"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const featuredInstructor = {
  name: "Lora Guerra, MPT, NCPT",
  role: "Studio Owner, Physical Therapist & Pilates Instructor",
  image:
    "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Lora-SQ.jpg?w=3840&q=100&ssl=1",
  bio: [
    "Lora founded Cary Pilates with a simple vision: to create a space where every person feels welcomed, challenged, and empowered through movement.",
    "As both a licensed Physical Therapist and nationally certified Pilates instructor, Lora brings a rare combination of clinical expertise and movement mastery to every session.",
    "Her teaching philosophy centers on meeting each person where they are - whether recovering from injury or chasing new fitness goals - and guiding them toward strength, flexibility, and confidence.",
  ],
};

const instructors = [
  {
    name: "Jessica Satterlee, NCPT",
    role: "Pilates Instructor & Nutrition Coach",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Jessica-SQ-1.jpg?w=3840&q=100&ssl=1",
    bio: "Jessica brings energy, precision, and nutrition expertise to every class.",
  },
  {
    name: "Grace Wilson",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Grace-SQ-1.jpg?w=3840&q=100&ssl=1",
    bio: "Grace specializes in mindful movement, creating a calm and focused atmosphere.",
  },
  {
    name: "Breanna McLane",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/Breanna-SQ.jpg?w=3840&q=100&ssl=1",
    bio: "Breanna's dynamic teaching style makes challenging workouts feel accessible.",
  },
  {
    name: "Sophia Saylor",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2026/01/Sophia.jpg?w=3840&q=100&ssl=1",
    bio: "Sophia combines classical technique with modern approaches for every client.",
  },
];

export default function Instructors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="instructors" className="cp-section" style={{ background: "#faf8fb" }} ref={ref}>
      <div className="cp-container">
        {/* Section Header */}
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
          <div style={{ overflow: "hidden", borderRadius: "20px" }}>
            <img
              src={featuredInstructor.image}
              alt={featuredInstructor.name}
              style={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
              }}
            />
          </div>
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
          </div>
        </motion.div>

        {/* Other Instructors */}
        <div className="cp-grid-4">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              style={{ textAlign: "center" }}
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
                }}
              >
                {instructor.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
