"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Best Pilates studio in the Triangle. The small class sizes make ALL the difference. After 6 months here, my back pain is gone and I feel 10 years younger.",
    time: "2 weeks ago",
  },
  {
    name: "Purnima S.",
    rating: 5,
    text: "Lora is a brilliant, thoughtful, and kind Physical Therapist! She has given me so much more confidence in the way that I can move.",
    time: "1 month ago",
  },
  {
    name: "Rachel M.",
    rating: 5,
    text: "Nothing compares to Cary Pilates. The instructors actually know your name and your body. Incredible changes in my posture in just a few months.",
    time: "3 weeks ago",
  },
  {
    name: "David K.",
    rating: 5,
    text: "After years of back pain, I finally found relief through the physical therapy program. The combination of clinical knowledge and Pilates has given me my life back.",
    time: "1 month ago",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "It feels like a sanctuary. Every instructor brings such warmth and expertise. This has become the highlight of my week.",
    time: "2 months ago",
  },
  {
    name: "Mark T.",
    rating: 5,
    text: "I was skeptical about Pilates but my wife dragged me here. Now I am hooked. The private sessions completely changed how I move on the golf course.",
    time: "3 weeks ago",
  },
];

export default function GoogleReviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="cp-section" style={{ background: "#faf8fb" }} ref={ref}>
      <div className="cp-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          {/* Google badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "#fff",
            padding: "14px 28px",
            borderRadius: "50px",
            boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
            marginBottom: "32px",
          }}>
            <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#2d1b2d" }}>5.0</span>
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} style={{ width: "16px", height: "16px", color: "#fbbf24" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: "0.85rem", color: "#6b5e6b" }}>on Google</span>
            </div>
          </div>

          <h2 className="cp-title">Loved by Our Community</h2>
        </motion.div>

        {/* Reviews carousel - 3 visible */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div className="cp-grid-3">
            {[0, 1, 2].map((offset) => {
              const idx = (activeIndex + offset) % reviews.length;
              const review = reviews[idx];
              return (
                <AnimatePresence mode="wait" key={offset}>
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    style={{
                      background: "#fff",
                      borderRadius: "20px",
                      padding: "32px",
                      boxShadow: "0 2px 20px rgba(139,58,139,0.04)",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "220px",
                    }}
                  >
                    {/* Stars */}
                    <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} style={{ width: "14px", height: "14px", color: "#fbbf24" }} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p style={{
                      fontSize: "0.92rem",
                      color: "#5a4a5a",
                      lineHeight: 1.8,
                      flex: 1,
                      fontStyle: "italic",
                    }}>
                      &ldquo;{review.text}&rdquo;
                    </p>

                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginTop: "20px",
                      paddingTop: "16px",
                      borderTop: "1px solid #f0edf1",
                    }}>
                      {/* Avatar */}
                      <div style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #c9b5d0, #8b7093)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                      }}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2d1b2d" }}>{review.name}</p>
                        <p style={{ fontSize: "0.72rem", color: "#998a99" }}>{review.time}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>

          {/* Progress dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "32px" }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: i === activeIndex ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  background: i === activeIndex ? "#8b7093" : "#d8cdd8",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
