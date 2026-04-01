"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const featuredInstructor = {
  name: "Lora Guerra, MPT, NCPT",
  role: "Studio Owner, Physical Therapist & Pilates Instructor",
  image:
    "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Lora-SQ.jpg?w=1000&ssl=1",
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
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Jessica-SQ-1.jpg?w=1000&ssl=1",
    bio: "Jessica brings energy, precision, and nutrition expertise to every class.",
  },
  {
    name: "Grace Wilson",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Grace-SQ-1.jpg?w=1000&ssl=1",
    bio: "Grace specializes in mindful movement, creating a calm and focused atmosphere.",
  },
  {
    name: "Breanna McLane",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/Breanna-SQ.jpg?w=1000&ssl=1",
    bio: "Breanna's dynamic teaching style makes challenging workouts feel accessible.",
  },
  {
    name: "Sophia Saylor",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2026/01/Sophia.jpg?w=1002&ssl=1",
    bio: "Sophia combines classical technique with modern approaches for every client.",
  },
];

export default function Instructors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="instructors"
      className="py-20 md:py-28 lg:py-36 bg-white"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-4">
            Meet the Team
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Our Instructors
          </h2>
          <p
            className="text-[15px] text-gray-500 max-w-md mx-auto"
            style={{ lineHeight: "1.8" }}
          >
            Passionate, certified professionals dedicated to guiding your Pilates
            journey.
          </p>
        </motion.div>

        {/* Featured: Lora */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src={featuredInstructor.image}
              alt={featuredInstructor.name}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-4">
              {featuredInstructor.role}
            </p>
            <h3
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {featuredInstructor.name}
            </h3>
            {featuredInstructor.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-[14px] text-gray-500 mb-5"
                style={{ lineHeight: "1.8" }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Other Instructors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="text-center group"
            >
              <div className="overflow-hidden mb-5 rounded-xl">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4
                className="text-lg mb-1"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {instructor.name}
              </h4>
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#8b7093] mb-3">
                {instructor.role}
              </p>
              <p
                className="text-[13px] text-gray-500"
                style={{ lineHeight: "1.7" }}
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
