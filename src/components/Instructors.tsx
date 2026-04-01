"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const instructors = [
  {
    name: "Lora Guerra, MPT, NCPT",
    role: "Studio Owner, Physical Therapist, Pilates Instructor",
    bio: "A brilliant, thoughtful, and kind Physical Therapist who gives clients confidence in the way they move. Lora's expertise in both PT and Pilates creates a unique, holistic approach to wellness.",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    certifications: ["MPT", "NCPT", "Studio Owner"],
  },
  {
    name: "Jessica Satterlee, NCPT",
    role: "Pilates Instructor, Nutrition Coach",
    bio: "Combining Pilates expertise with nutrition coaching, Jessica provides a comprehensive approach to wellness that goes beyond the studio walls.",
    image:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=400&q=80",
    certifications: ["NCPT", "Nutrition Coach"],
  },
  {
    name: "Grace Wilson",
    role: "Pilates Instructor",
    bio: "Grace brings energy and precision to every session, helping clients discover new levels of strength and flexibility through mindful movement.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    certifications: ["Pilates Certified"],
  },
  {
    name: "Breanna McLane",
    role: "Pilates Instructor",
    bio: "Breanna's passion for Pilates shines through in her teaching, creating challenging yet accessible classes that help clients push their boundaries.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    certifications: ["Pilates Certified"],
  },
  {
    name: "Sophia Saylor",
    role: "Pilates Instructor",
    bio: "Sophia is dedicated to helping clients build strength and confidence through precise, intentional movement and a supportive teaching style.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    certifications: ["Pilates Certified"],
  },
];

export default function Instructors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="instructors" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#8b7093] text-sm tracking-[0.3em] uppercase mb-4"
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
            helping you achieve your fitness and wellness goals. Each member
            brings unique expertise and a commitment to creating a supportive,
            empowering environment.
          </p>
        </motion.div>

        {/* Featured - Lora */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16 bg-[#faf8fb] rounded-3xl p-8 md:p-12"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[500px]">
            <img
              src={instructors[0].image}
              alt={instructors[0].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {instructors[0].certifications.map((cert) => (
                <span
                  key={cert}
                  className="bg-[#8b7093]/10 text-[#8b7093] px-3 py-1 rounded-full text-xs font-medium"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {cert}
                </span>
              ))}
            </div>
            <h3 className="text-3xl font-light text-[#1d1d22] mb-2">
              {instructors[0].name}
            </h3>
            <p
              className="text-[#8b7093] font-medium mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {instructors[0].role}
            </p>
            <p
              className="text-[#6c6c89] text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {instructors[0].bio}
            </p>
          </div>
        </motion.div>

        {/* Other Instructors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.slice(1).map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              className="group text-center"
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
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
