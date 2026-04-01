"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const instructors = [
  {
    name: "Lora Guerra, MPT, NCPT",
    role: "Studio Owner, Physical Therapist, Pilates Instructor",
    bio: "A brilliant, thoughtful, and kind Physical Therapist who gives clients confidence in the way they move. Lora's expertise in both PT and Pilates creates a unique, holistic approach to wellness.",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-126-SQ-1.jpg?fit=1080%2C1080&ssl=1",
    certifications: ["MPT", "NCPT", "Studio Owner"],
    featured: true,
  },
  {
    name: "Jessica Satterlee, NCPT",
    role: "Pilates Instructor, Nutrition Coach",
    bio: "Combining Pilates expertise with nutrition coaching for a comprehensive approach to wellness.",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?fit=1920%2C1281&ssl=1",
    certifications: ["NCPT", "Nutrition Coach"],
    featured: false,
  },
  {
    name: "Grace Wilson",
    role: "Pilates Instructor",
    bio: "Brings energy and precision to every session, helping clients discover new levels of strength.",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-126-SQ-1.jpg?fit=1080%2C1080&ssl=1",
    certifications: ["Pilates Certified"],
    featured: false,
  },
  {
    name: "Breanna McLane",
    role: "Pilates Instructor",
    bio: "Creates challenging yet accessible classes that help clients push their boundaries safely.",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?fit=1920%2C1281&ssl=1",
    certifications: ["Pilates Certified"],
    featured: false,
  },
  {
    name: "Sophia Saylor",
    role: "Pilates Instructor",
    bio: "Dedicated to helping clients build strength and confidence through precise, intentional movement.",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-126-SQ-1.jpg?fit=1080%2C1080&ssl=1",
    certifications: ["Pilates Certified"],
    featured: false,
  },
];

export default function Instructors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = instructors[0];
  const others = instructors.slice(1);

  return (
    <section id="instructors" className="py-28 md:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="text-[#8b7093] text-sm tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Meet the Team
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1d1d22] mb-6">
            Your <span className="italic text-[#8b7093]">Instructors</span>
          </h2>
          <p
            className="text-[#6c6c89] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our dedicated and experienced instructors are passionate about
            helping you achieve your fitness and wellness goals.
          </p>
        </motion.div>

        {/* Featured Instructor - Lora */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid md:grid-cols-5 gap-12 items-center mb-20 bg-[#faf8fb] rounded-3xl p-8 md:p-14"
        >
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden aspect-square">
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8b7093]/20 to-transparent" />
          </div>
          <div className="md:col-span-3">
            <div className="flex flex-wrap gap-2 mb-5">
              {featured.certifications.map((cert) => (
                <span
                  key={cert}
                  className="bg-[#8b7093]/10 text-[#8b7093] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {cert}
                </span>
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-light text-[#1d1d22] mb-3">
              {featured.name}
            </h3>
            <p
              className="text-[#8b7093] font-medium mb-5 text-lg"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {featured.role}
            </p>
            <p
              className="text-[#6c6c89] text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {featured.bio}
            </p>
            <a
              href="https://momence.com/u/cary-pilates-ddAsiW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8b7093] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#7a6082] transition-all duration-300 hover:shadow-lg"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Book with Lora
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Other Instructors */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {others.map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              className="group text-center"
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square bg-[#faf8fb]">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8b7093]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-light text-[#1d1d22] mb-1">
                {instructor.name}
              </h3>
              <p
                className="text-[#8b7093] text-sm font-medium mb-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {instructor.role}
              </p>
              <p
                className="text-[#6c6c89] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
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
