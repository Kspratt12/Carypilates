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
      className="py-24 md:py-32 lg:py-40 bg-white"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-5">
            Meet the Team
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Our Instructors
          </h2>
          <p
            className="text-base text-gray-500 max-w-lg mx-auto"
            style={{ lineHeight: "1.9" }}
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
          className="grid md:grid-cols-2 gap-16 items-center mb-24"
        >
          <div className="overflow-hidden">
            <img
              src={featuredInstructor.image}
              alt={featuredInstructor.name}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-5">
              {featuredInstructor.role}
            </p>
            <h3
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {featuredInstructor.name}
            </h3>
            {featuredInstructor.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-[15px] text-gray-600 mb-7"
                style={{ lineHeight: "1.9" }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Other Instructors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h4
                className="text-xl mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {instructor.name}
              </h4>
              <p className="text-xs tracking-[0.15em] uppercase text-[#8b7093] mb-4">
                {instructor.role}
              </p>
              <p
                className="text-[14px] text-gray-500"
                style={{ lineHeight: "1.8" }}
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
