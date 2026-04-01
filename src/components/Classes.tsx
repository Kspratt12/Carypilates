"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ClassesProps {
  onOpenCalendar: () => void;
}

const classes = [
  {
    id: "classes",
    title: "Group Reformer",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-013-SQ.jpg?w=1080&q=90&ssl=1",
    description:
      "Small group classes limited to just 5 people on premium Balanced Body reformers. Every session is a full-body experience tailored to your level.",
    cta: "View Schedule",
    href: "https://momence.com/u/cary-pilates-ddAsiW",
  },
  {
    id: "private-sessions",
    title: "Private Sessions",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-060-SQ.jpg?w=800&q=90&ssl=1",
    description:
      "One-on-one sessions designed around your unique goals, body, and pace. Perfect for deepening your practice or addressing specific needs.",
    cta: "Book Private",
    href: "https://momence.com/u/cary-pilates-ddAsiW",
  },
  {
    id: "physical-therapy",
    title: "Physical Therapy",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-096-1.jpg?w=1080&q=90&ssl=1",
    description:
      "Pilates-based physical therapy combining clinical expertise with mindful movement. Recover stronger and move with confidence.",
    cta: "Schedule Evaluation",
    href: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636",
  },
];

export default function Classes({ onOpenCalendar }: ClassesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-[#faf9fb]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-4">
            What We Offer
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Our Classes
          </h2>
          <p
            className="text-[15px] text-gray-500 max-w-md mx-auto"
            style={{ lineHeight: "1.8" }}
          >
            Three distinct paths to help you find the movement practice that fits
            your life.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.id}
              id={cls.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="bg-white overflow-hidden group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {cls.title}
                </h3>
                <p
                  className="text-[14px] text-gray-500 mb-6"
                  style={{ lineHeight: "1.7" }}
                >
                  {cls.description}
                </p>
                <a
                  href={cls.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[12px] tracking-[0.15em] uppercase text-[#8b7093] border-b border-[#8b7093] pb-1 hover:text-[#6b5674] hover:border-[#6b5674] transition-colors duration-300"
                >
                  {cls.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
