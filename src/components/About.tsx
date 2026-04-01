"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "5", label: "Max Class Size", suffix: "" },
  { number: "50", label: "Minute Sessions", suffix: "min" },
  { number: "5", label: "Expert Instructors", suffix: "" },
  { number: "100", label: "Client Satisfaction", suffix: "%" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-36 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#8b7093] text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Welcome to Cary Pilates
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1d1d22] mb-8">
              More Than a <span className="italic text-[#8b7093]">Studio</span>
            </h2>

            <p className="text-[#6c6c89] text-base mb-6" style={{ fontFamily: "var(--font-inter)", lineHeight: 2 }}>
              Welcome to Cary Pilates, a boutique Pilates studio providing a
              personalized fitness experience in a supportive environment. Join
              our small group classes or opt for private sessions tailored to
              your unique needs.
            </p>

            <p className="text-[#6c6c89] text-base mb-10" style={{ fontFamily: "var(--font-inter)", lineHeight: 2 }}>
              Using Balanced Body Pilates reformers, chairs, towers, and other
              premium equipment, our sessions help build strength, improve
              flexibility, and enhance balance.
            </p>

            <a
              href="https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#8b7093] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-[#7a6082] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              New Client Special - 3 Classes/$96
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Chair.jpg?fit=1200%2C1200&ssl=1"
                alt="Pilates chair exercise at Cary Pilates"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 bg-[#faf8fb] rounded-3xl p-8 md:p-14"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-4">
              <p className="text-4xl md:text-5xl font-light text-[#8b7093] mb-3">
                {stat.number}
                <span className="text-xl">{stat.suffix}</span>
              </p>
              <p className="text-[#6c6c89] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
