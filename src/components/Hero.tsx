"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onOpenCalendar: () => void;
}

export default function Hero({ onOpenCalendar }: HeroProps) {
  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.25, duration: 0.8, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?w=1920&q=90&ssl=1"
          alt="Cary Pilates studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          {[
            { text: "Find Your ", accent: "Strength." },
            { text: "Move with ", accent: "Grace." },
            { text: "Live in ", accent: "Balance." },
          ].map((line, i) => (
            <motion.h1
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="text-4xl md:text-6xl lg:text-7xl text-white mb-8 font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {line.text}
              <em className="text-[#c9b5d0] italic">{line.accent}</em>
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-white/80 text-base md:text-lg mb-16 max-w-xl mx-auto"
          style={{ lineHeight: "1.9" }}
        >
          A boutique Pilates studio in Cary, NC offering intimate group classes,
          private sessions, and Pilates-based physical therapy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <button
            onClick={onOpenCalendar}
            className="px-8 py-4 bg-[#8b7093] text-white text-[13px] tracking-widest uppercase hover:bg-[#6b5674] transition-all duration-300 cursor-pointer border-none"
          >
            Try an Intro Session
          </button>
          <a
            href="#classes"
            className="px-8 py-4 border border-white/40 text-white text-[13px] tracking-widest uppercase hover:bg-white/10 transition-all duration-300 text-center"
          >
            Explore Classes
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-[11px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
