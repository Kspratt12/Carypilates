"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "5", label: "Max Class Size" },
    { number: "50", label: "Min Sessions" },
    { number: "5", label: "Instructors" },
    { number: "100%", label: "Satisfaction" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-5">
            Our Studio
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Where Wellness Meets Community
          </h2>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              className="text-[15px] text-gray-600 mb-8"
              style={{ lineHeight: "1.9" }}
            >
              Cary Pilates is more than a studio - it is a space where you are
              seen, supported, and challenged to grow. Founded with a passion for
              mindful movement, we believe Pilates is for every body, at every stage
              of life.
            </p>
            <p
              className="text-[15px] text-gray-600 mb-8"
              style={{ lineHeight: "1.9" }}
            >
              Our intimate class sizes of just five people mean you will never be
              lost in a crowd. Every session is guided by expert instructors on
              premium Balanced Body equipment, ensuring you receive the personalized
              attention you deserve.
            </p>
            <p
              className="text-[15px] text-gray-600 mb-10"
              style={{ lineHeight: "1.9" }}
            >
              Whether you are recovering from injury, building strength, or seeking
              balance in your daily life, we meet you exactly where you are and help
              you move forward with confidence.
            </p>
            <a
              href="https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#8b7093] text-white text-[13px] tracking-widest uppercase hover:bg-[#6b5674] transition-all duration-300"
            >
              New Client Special
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <img
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Chair.jpg?w=1200&q=90&ssl=1"
              alt="Pilates chair exercise at Cary Pilates"
              className="w-full aspect-square object-cover"
            />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-4xl md:text-5xl text-[#8b7093] mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {stat.number}
              </p>
              <p className="text-[13px] tracking-[0.15em] uppercase text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
