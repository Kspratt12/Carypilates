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
    <section id="about" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-[#8b7093] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Welcome to Cary Pilates
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1d1d22] leading-tight mb-6">
              More Than a{" "}
              <span className="italic text-[#8b7093]">Studio</span>
            </h2>
            <p
              className="text-[#6c6c89] text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Welcome to Cary Pilates, a boutique Pilates studio providing a
              personalized fitness experience in a supportive environment. Join
              our small group classes or opt for private sessions tailored to
              your unique needs.
            </p>
            <p
              className="text-[#6c6c89] text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Using Balanced Body Pilates reformers, chairs, towers, and other
              premium Pilates equipment, our sessions help build strength,
              improve flexibility, and enhance balance. Enjoy a supportive
              atmosphere where you can grow and progress at your own pace.
            </p>
            <a
              href="https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8b7093] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#7a6082] transition-all duration-300 hover:shadow-lg hover:shadow-[#8b7093]/25"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              New Client Special - 3 Classes/$96
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80"
                alt="Small group Pilates class on reformers"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-[#8b7093] text-white p-8 rounded-2xl shadow-xl"
            >
              <p className="text-3xl font-light mb-1">Serving</p>
              <p className="text-lg italic" style={{ fontFamily: "var(--font-inter)" }}>
                Cary, Morrisville, Apex
              </p>
              <p className="text-lg italic" style={{ fontFamily: "var(--font-inter)" }}>
                & surrounding areas
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#faf8fb] rounded-3xl p-10 md:p-14"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-light text-[#8b7093] mb-2">
                {stat.number}
                <span className="text-2xl">{stat.suffix}</span>
              </p>
              <p
                className="text-[#6c6c89] text-sm tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
