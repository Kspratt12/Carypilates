"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const classes = [
  {
    title: "Group Reformer",
    description:
      "Small group classes for just 5 participants. Personalized attention, premium Balanced Body reformers, chairs, and towers.",
    image: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-013-SQ.jpg?fit=1080%2C1080&ssl=1",
    level: "All Levels",
    duration: "50 min",
    cta: "3 Classes / $96",
    link: "https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414",
  },
  {
    title: "Private Sessions",
    description:
      "One-on-one Pilates tailored to your unique fitness needs. Perfect for beginners or those seeking a customized approach.",
    image: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-060-SQ.jpg?fit=800%2C800&ssl=1",
    level: "Personalized",
    duration: "50 min",
    cta: "Intro Session / $60",
    link: "https://momence.com/u/cary-pilates-ddAsiW",
  },
  {
    title: "Physical Therapy",
    description:
      "Pilates-based PT focusing on recovery and wellness. A holistic approach that addresses root causes of pain.",
    image: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-096-1.jpg?fit=1080%2C720&ssl=1",
    level: "Therapeutic",
    duration: "50 min",
    cta: "PT Eval / $150",
    link: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636",
  },
];

export default function Classes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="classes" className="py-28 md:py-36 bg-[#faf8fb]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#8b7093] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "var(--font-inter)" }}>
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1d1d22] mb-6">
            Our <span className="italic text-[#8b7093]">Services</span>
          </h2>
          <p className="text-[#6c6c89] text-base max-w-md mx-auto" style={{ fontFamily: "var(--font-inter)", lineHeight: 2 }}>
            Every session is designed to challenge, restore, and transform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img src={cls.image} alt={cls.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-[#1d1d22] px-3 py-1.5 rounded-full text-xs font-medium" style={{ fontFamily: "var(--font-inter)" }}>{cls.level}</span>
                  <span className="bg-[#8b7093]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium" style={{ fontFamily: "var(--font-inter)" }}>{cls.duration}</span>
                </div>
              </div>

              <div className="p-7 md:p-8">
                <h3 className="text-xl md:text-2xl font-light text-[#1d1d22] mb-4">{cls.title}</h3>
                <p className="text-[#6c6c89] text-sm mb-8" style={{ fontFamily: "var(--font-inter)", lineHeight: 1.9 }}>{cls.description}</p>
                <a
                  href={cls.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8b7093] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#7a6082] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {cls.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
