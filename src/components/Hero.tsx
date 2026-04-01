"use client";

import { motion } from "framer-motion";

export default function Hero({
  onOpenCalendar,
}: {
  onOpenCalendar: () => void;
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0">
        <img
          src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?fit=1920%2C1281&ssl=1"
          alt="Cary Pilates Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-8 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p
            className="text-[#c9b5d0] text-xs md:text-sm tracking-[0.35em] uppercase mb-10"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Boutique Pilates Studio - Cary, NC
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-light mb-6"
          style={{ lineHeight: 1.15 }}
        >
          Find Your{" "}
          <span className="italic text-[#c9b5d0]">Strength.</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-light mb-6"
          style={{ lineHeight: 1.15 }}
        >
          Move with{" "}
          <span className="italic text-[#c9b5d0]">Grace.</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-light mb-14"
          style={{ lineHeight: 1.15 }}
        >
          Live in{" "}
          <span className="italic text-[#c9b5d0]">Balance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: "easeOut" }}
          className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-14"
          style={{ fontFamily: "var(--font-inter)", lineHeight: 1.9 }}
        >
          A boutique Pilates studio providing a personalized fitness experience
          in a supportive environment. Small group classes limited to just 5
          participants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-[#c9b5d0] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
