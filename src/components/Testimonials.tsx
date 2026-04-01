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
    <section
      style={{
        background: "linear-gradient(135deg, #8b7093 0%, #6b5674 100%)",
        padding: "100px 0",
      }}
      ref={ref}
    >
      <div className="cp-container--narrow" style={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Stars */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4px",
              marginBottom: "40px",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                style={{ width: "18px", height: "18px", color: "#fbbf24" }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <div
            style={{
              minHeight: "260px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p
                  style={{
                    fontSize: "1.15rem",
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 2.2,
                    fontStyle: "italic",
                    marginBottom: "40px",
                    maxWidth: "700px",
                    margin: "0 auto 40px",
                  }}
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "0.85rem",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  {testimonials[current].name}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {testimonials[current].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              marginTop: "48px",
            }}
          >
            <button
              onClick={prev}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "transparent",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
              aria-label="Previous testimonial"
            >
              <svg
                style={{ width: "16px", height: "16px" }}
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

            <div style={{ display: "flex", gap: "8px" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    height: "8px",
                    width: i === current ? "24px" : "8px",
                    borderRadius: "4px",
                    border: "none",
                    background:
                      i === current ? "#fff" : "rgba(255,255,255,0.4)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.3)",
                background: "transparent",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
              aria-label="Next testimonial"
            >
              <svg
                style={{ width: "16px", height: "16px" }}
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
