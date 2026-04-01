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
    <section id="about" className="py-20 md:py-28 lg:py-36 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-4">
            Our Studio
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Where Wellness Meets Community
          </h2>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              className="text-[15px] text-gray-600 mb-6"
              style={{ lineHeight: "1.8" }}
            >
              Cary Pilates is more than a studio - it is a space where you are
              seen, supported, and challenged to grow. Founded with a passion for
              mindful movement, we believe Pilates is for every body, at every stage
              of life.
            </p>
            <p
              className="text-[15px] text-gray-600 mb-6"
              style={{ lineHeight: "1.8" }}
            >
              Our intimate class sizes of just five people mean you will never be
              lost in a crowd. Every session is guided by expert instructors on
              premium Balanced Body equipment, ensuring you receive the personalized
              attention you deserve.
            </p>
            <p
              className="text-[15px] text-gray-600 mb-8"
              style={{ lineHeight: "1.8" }}
            >
              Whether you are recovering from injury, building strength, or seeking
              balance in your daily life, we meet you exactly where you are and help
              you move forward with confidence.
            </p>
            <a
              href="https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3.5 bg-[#8b7093] text-white text-[12px] tracking-widest uppercase hover:bg-[#6b5674] transition-all duration-300 rounded-full hover:shadow-lg hover:-translate-y-0.5"
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
              className="w-full aspect-square object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#faf9fb] rounded-2xl p-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-4xl md:text-5xl text-[#8b7093] mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {stat.number}
              </p>
              <p className="text-[12px] tracking-[0.15em] uppercase text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
