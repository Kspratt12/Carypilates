"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Lora is a brilliant, thoughtful, and kind Physical Therapist! I am so grateful for the work she has done with me. She has given me so much more confidence in the way that I can move.",
    name: "Purnima S.",
    detail: "Physical Therapy Client",
  },
  {
    quote:
      "I have tried Pilates at several studios, but nothing compares to Cary Pilates. The small class size means the instructors actually know your name and your body. I have seen incredible changes in my posture and core strength in just a few months.",
    name: "Rachel M.",
    detail: "Group Reformer Client",
  },
  {
    quote:
      "After years of back pain, I finally found relief through the physical therapy program here. The combination of clinical knowledge and Pilates-based movement has given me my life back. I cannot recommend this studio highly enough.",
    name: "David K.",
    detail: "Physical Therapy Client",
  },
  {
    quote:
      "The atmosphere at Cary Pilates is unlike any other studio. It feels like a sanctuary. Every instructor brings such warmth and expertise. I look forward to every single session - it has become the highlight of my week.",
    name: "Jennifer L.",
    detail: "Group Reformer Client",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#8b7093]" ref={ref}>
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-10">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <div className="min-h-[280px] md:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p
                  className="text-lg text-white/90 mb-10 italic"
                  style={{ lineHeight: "2.2" }}
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <p className="text-white text-sm tracking-[0.2em] uppercase mb-2">
                  {testimonials[current].name}
                </p>
                <p className="text-white/60 text-xs tracking-[0.15em] uppercase">
                  {testimonials[current].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation - Inline arrows with dots */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer bg-transparent"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-none ${
                    i === current ? "bg-white w-6" : "bg-white/40 w-2"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer bg-transparent"
              aria-label="Next testimonial"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
