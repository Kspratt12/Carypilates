"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const instructors = [
  {
    name: "Lora Guerra, MPT, NCPT",
    role: "Studio Owner, Physical Therapist, Pilates Instructor",
    bio: "A brilliant, thoughtful, and kind Physical Therapist who gives clients confidence in the way they move. Lora's expertise in both PT and Pilates creates a unique, holistic approach to wellness.",
    image: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Lora-SQ.jpg?w=500&ssl=1",
    certifications: ["MPT", "NCPT", "Owner"],
  },
  {
    name: "Jessica Satterlee, NCPT",
    role: "Pilates Instructor, Nutrition Coach",
    bio: "Combining Pilates expertise with nutrition coaching for a comprehensive approach to wellness.",
    image: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Jessica-SQ-1.jpg?w=500&ssl=1",
  },
  {
    name: "Grace Wilson",
    role: "Pilates Instructor",
    bio: "Brings energy and precision to every session, helping clients discover new levels of strength.",
    image: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Grace-SQ-1.jpg?w=500&ssl=1",
  },
  {
    name: "Breanna McLane",
    role: "Pilates Instructor",
    bio: "Creates challenging yet accessible classes that help clients push their boundaries safely.",
    image: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/Breanna-SQ.jpg?w=500&ssl=1",
  },
  {
    name: "Sophia Saylor",
    role: "Pilates Instructor",
    bio: "Dedicated to helping clients build strength and confidence through precise, intentional movement.",
    image: "https://i0.wp.com/carypilates.com/wp-content/uploads/2026/01/Sophia.jpg?w=1002&ssl=1",
  },
];

export default function Instructors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="instructors" className="py-28 md:py-36 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#8b7093] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "var(--font-inter)" }}>
            Meet the Team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1d1d22] mb-6">
            Your <span className="italic text-[#8b7093]">Instructors</span>
          </h2>
          <p className="text-[#6c6c89] text-base max-w-md mx-auto" style={{ fontFamily: "var(--font-inter)", lineHeight: 2 }}>
            Our dedicated team brings unique expertise and a commitment to creating a supportive, empowering environment.
          </p>
        </motion.div>

        {/* Featured - Lora */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-[#faf8fb] rounded-3xl p-8 md:p-12 mb-14"
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="rounded-2xl overflow-hidden aspect-square max-w-md mx-auto md:max-w-none">
              <img src={instructors[0].image} alt={instructors[0].name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {instructors[0].certifications?.map((cert) => (
                  <span key={cert} className="bg-[#8b7093]/10 text-[#8b7093] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>{cert}</span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-[#1d1d22] mb-2">{instructors[0].name}</h3>
              <p className="text-[#8b7093] font-medium mb-6 text-sm" style={{ fontFamily: "var(--font-inter)" }}>{instructors[0].role}</p>
              <p className="text-[#6c6c89] text-base mb-8" style={{ fontFamily: "var(--font-inter)", lineHeight: 2 }}>{instructors[0].bio}</p>
              <a
                href="https://momence.com/u/cary-pilates-ddAsiW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#8b7093] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#7a6082] transition-all duration-300 hover:shadow-lg"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Book with Lora
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other Instructors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {instructors.slice(1).map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="rounded-2xl overflow-hidden aspect-square mb-5">
                <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-base md:text-lg font-light text-[#1d1d22] mb-1">{instructor.name}</h3>
              <p className="text-[#8b7093] text-xs font-medium tracking-wide uppercase mb-3" style={{ fontFamily: "var(--font-inter)" }}>{instructor.role}</p>
              <p className="text-[#6c6c89] text-xs md:text-sm" style={{ fontFamily: "var(--font-inter)", lineHeight: 1.8 }}>{instructor.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
