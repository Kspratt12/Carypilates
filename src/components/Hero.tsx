"use client";

import { motion } from "framer-motion";

export default function Hero({
  onOpenCalendar,
}: {
  onOpenCalendar: () => void;
}) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?fit=1920%2C1281&ssl=1"
          alt="Cary Pilates Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#8b7093]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8b7093]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p
            className="text-[#a990b0] text-sm md:text-base tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Boutique Pilates Studio - Cary, NC
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-4"
        >
          Find Your{" "}
          <span className="italic text-[#c9b5d0]">Strength.</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-4"
        >
          Move with{" "}
          <span className="italic text-[#c9b5d0]">Grace.</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-8"
        >
          Live in{" "}
          <span className="italic text-[#c9b5d0]">Balance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: "easeOut" }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          A boutique Pilates studio providing a personalized fitness experience
          in a supportive environment. Small group classes limited to just 5
          participants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onOpenCalendar}
            className="bg-[#8b7093] text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-[#7a6082] transition-all duration-300 hover:shadow-xl hover:shadow-[#8b7093]/30 hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Try an Intro Session
          </button>
          <a
            href="#classes"
            className="border border-white/30 text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
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
          <motion.div className="w-1.5 h-1.5 bg-[#a990b0] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
