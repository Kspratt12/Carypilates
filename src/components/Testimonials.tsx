"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Purnima",
    text: "Lora is a brilliant, thoughtful, and kind Physical Therapist! I am so grateful for the work she has done with me. She has given me so much more confidence in the way that I can move.",
    rating: 5,
  },
  {
    name: "Jennifer W.",
    text: "The small class size makes all the difference. I actually get corrections and personalized attention in every session. My flexibility and core strength have improved dramatically since joining.",
    rating: 5,
  },
  {
    name: "Michelle T.",
    text: "As someone recovering from surgery, the Pilates-based PT program here changed my trajectory. The combination of physical therapy expertise and Pilates instruction is incredibly effective.",
    rating: 5,
  },
  {
    name: "David R.",
    text: "The instructors made me feel welcome from day one. The equipment is top-notch and the intimate setting means you really get to know your instructors and fellow members. Highly recommend!",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      className="py-28 md:py-36 bg-[#8b7093] relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12">
            What Our Clients are{" "}
            <span className="italic">Saying</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative text-center px-4 md:px-16">
            {/* Left Arrow */}
            <button
              onClick={() =>
                setActive(
                  active === 0 ? testimonials.length - 1 : active - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() =>
                setActive(
                  active === testimonials.length - 1 ? 0 : active + 1
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <p
              className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8 font-light italic"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              &ldquo;{testimonials[active].text}&rdquo;
            </p>

            <p
              className="text-white font-medium text-lg"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {testimonials[active].name}
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-white w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
