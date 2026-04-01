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
      <div className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto">
        <div className="mb-12">
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
              className="text-3xl md:text-5xl lg:text-[3.5rem] text-white mb-4 font-normal"
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
          className="text-white/75 text-[15px] md:text-base mb-12 max-w-md mx-auto"
          style={{ lineHeight: "1.8" }}
        >
          A boutique Pilates studio in Cary, NC offering intimate group classes,
          private sessions, and Pilates-based physical therapy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onOpenCalendar}
            className="px-7 py-3.5 bg-[#8b7093] text-white text-[12px] tracking-widest uppercase hover:bg-[#6b5674] transition-all duration-300 cursor-pointer border-none rounded-full hover:shadow-lg hover:-translate-y-0.5"
          >
            Try an Intro Session
          </button>
          <a
            href="#classes"
            className="px-7 py-3.5 border border-white/30 text-white text-[12px] tracking-widest uppercase hover:bg-white/10 transition-all duration-300 text-center rounded-full"
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
