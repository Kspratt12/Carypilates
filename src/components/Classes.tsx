"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const classes = [
  {
    title: "Group Reformer Classes",
    description:
      "Join our small group Pilates classes, designed for just 5 participants to ensure personalized attention and a strong sense of community. Using Balanced Body reformers, chairs, towers, and other premium equipment.",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-126-SQ-1.jpg?fit=1080%2C1080&ssl=1",
    level: "All Levels",
    duration: "50 min",
    cta: "New Client Special - 3 classes/$96",
    link: "https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Private Sessions",
    description:
      "Experience the benefits of personalized Pilates sessions designed to meet your unique fitness needs. Whether you're new to Pilates or seeking a customized approach, our expert instructors guide you every step.",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?fit=1920%2C1281&ssl=1",
    level: "Personalized",
    duration: "50 min",
    cta: "New Client Intro - $60",
    link: "https://momence.com/u/cary-pilates-ddAsiW",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Physical Therapy",
    description:
      "Our Pilates-based Physical Therapy focuses on enhancing recovery and overall wellness. We believe in a holistic approach that addresses the root causes of pain with empowered movement.",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-126-SQ-1.jpg?fit=1080%2C1080&ssl=1",
    level: "Therapeutic",
    duration: "50 min",
    cta: "Book a PT Evaluation - $150",
    link: "https://momence.com/appointments/appointment-reservation/38248?boardId=15636",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Holistic Healing",
    description: "We assess posture, mobility, and strength to promote effective healing.",
  },
  {
    title: "Empowered Movement",
    description: "Movement is essential for recovery, helping you regain strength and mobility.",
  },
  {
    title: "Duet Sessions",
    description: "Invite a friend, spouse, or partner for a customized duet session with personalized attention.",
  },
];

export default function Classes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="classes" className="py-28 md:py-36 bg-[#faf8fb]" ref={ref}>
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
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1d1d22] mb-6">
            Our <span className="italic text-[#8b7093]">Services</span>
          </h2>
          <p
            className="text-[#6c6c89] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Every session is designed to challenge, restore, and transform.
            Choose the format that fits your journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span
                    className="bg-white/90 backdrop-blur-sm text-[#1d1d22] px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {cls.level}
                  </span>
                  <span
                    className="bg-[#8b7093]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {cls.duration}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#8b7093]">{cls.icon}</div>
                  <h3 className="text-2xl font-light text-[#1d1d22]">
                    {cls.title}
                  </h3>
                </div>
                <p
                  className="text-[#6c6c89] leading-relaxed mb-8 min-h-[96px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {cls.description}
                </p>
                <a
                  href={cls.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8b7093] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[#7a6082] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
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

        {/* Features row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-10 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#faf8fb] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-[#8b7093]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="text-xl font-light text-[#1d1d22] mb-3">{f.title}</h4>
              <p className="text-[#6c6c89] text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                {f.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
