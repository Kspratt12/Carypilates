"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Purnima",
    text: "Lora is a brilliant, thoughtful, and kind Physical Therapist! I am so grateful for the work she has done with me. She has given me so much more confidence in the way that I can move.",
  },
  {
    name: "Jennifer W.",
    text: "The small class size makes all the difference. I actually get corrections and personalized attention in every session. My flexibility and core strength have improved dramatically.",
  },
  {
    name: "Michelle T.",
    text: "As someone recovering from surgery, the Pilates-based PT program here changed my trajectory. The combination of physical therapy expertise and Pilates instruction is incredibly effective.",
  },
  {
    name: "David R.",
    text: "The instructors made me feel welcome from day one. The equipment is top-notch and the intimate setting means you really get to know your instructors. Highly recommend!",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive(active === 0 ? testimonials.length - 1 : active - 1);
  const next = () => setActive(active === testimonials.length - 1 ? 0 : active + 1);

  return (
    <section id="testimonials" className="py-28 md:py-36 bg-[#8b7093] relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center gap-1.5 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-14">
            What Our Clients are <span className="italic">Saying</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-14"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <button onClick={prev} className="text-white/40 hover:text-white transition-colors flex-shrink-0" aria-label="Previous">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex-1 px-4">
              <p className="text-white/90 text-base md:text-lg font-light italic mb-10" style={{ fontFamily: "var(--font-inter)", lineHeight: 2.2 }}>
                &ldquo;{testimonials[active].text}&rdquo;
              </p>
              <p className="text-white font-medium text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                {testimonials[active].name}
              </p>
            </div>

            <button onClick={next} className="text-white/40 hover:text-white transition-colors flex-shrink-0" aria-label="Next">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? "bg-white w-8" : "bg-white/30 w-2.5 hover:bg-white/50"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
