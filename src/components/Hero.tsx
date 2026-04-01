"use client";

import { motion } from "framer-motion";

export default function Hero({
  onOpenCalendar,
}: {
  onOpenCalendar: () => void;
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?fit=1920%2C1281&ssl=1"
          alt="Cary Pilates Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-6 md:px-12 lg:px-16 max-w-4xl mx-auto py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#c9b5d0] text-xs md:text-sm tracking-[0.35em] uppercase mb-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Boutique Pilates Studio - Cary, NC
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl text-white font-light leading-snug mb-5"
        >
          Find Your <span className="italic text-[#c9b5d0]">Strength.</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="text-4xl md:text-5xl lg:text-7xl text-white font-light leading-snug mb-5"
        >
          Move with <span className="italic text-[#c9b5d0]">Grace.</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-5xl lg:text-7xl text-white font-light leading-snug mb-12"
        >
          Live in <span className="italic text-[#c9b5d0]">Balance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-14"
          style={{ fontFamily: "var(--font-inter)", lineHeight: 1.9 }}
        >
          A boutique Pilates studio providing a personalized fitness experience
          in a supportive environment. Small group classes limited to just 5
          participants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onOpenCalendar}
            className="bg-[#8b7093] text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#7a6082] transition-all duration-300 hover:shadow-2xl hover:shadow-[#8b7093]/40 hover:-translate-y-1"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Try an Intro Session
          </button>
          <a
            href="#classes"
            className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white hover:text-[#1d1d22] transition-all duration-300 hover:-translate-y-1"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Explore Classes
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-[#c9b5d0] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
