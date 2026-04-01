"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do I need Pilates experience to start?",
    answer: "Not at all! We welcome complete beginners. Our instructors modify every exercise to your level, and with only 5 people per class, you get the attention you need. Many of our most dedicated clients started with zero experience.",
  },
  {
    question: "What should I wear?",
    answer: "Comfortable, fitted clothing that allows you to move freely. Think leggings and a fitted top. Avoid loose or baggy clothing as it can get caught in the equipment. Grip socks are recommended but not required - we have pairs available for purchase.",
  },
  {
    question: "How is this different from a big box gym?",
    answer: "Night and day. Big gyms pack 20+ people into a class with one instructor. Here, you will never share a class with more than 4 other people. Your instructor corrects your form in real time, knows your injuries, and progresses your practice over time. It is truly personalized.",
  },
  {
    question: "Can Pilates help with my back pain?",
    answer: "Absolutely. Our founder Lora is a licensed Physical Therapist who specializes in this. Many of our clients come to us specifically for back pain, post-surgery recovery, or injury rehabilitation. We offer dedicated PT sessions as well as Pilates-based therapy.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "We ask for at least 12 hours notice for cancellations. With only 5 spots per class, a late cancellation means someone else misses out. Late cancellations or no-shows will be charged for the session.",
  },
  {
    question: "Do you accept insurance for physical therapy?",
    answer: "We operate as an out-of-network provider. We can provide you with a superbill that you can submit to your insurance for potential reimbursement. Many of our PT clients find this process straightforward.",
  },
  {
    question: "How often should I come?",
    answer: "We recommend 2-3 times per week for the best results. Many clients see noticeable changes in posture, strength, and flexibility within the first month at this frequency. Even once a week makes a meaningful difference.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="cp-section" style={{ background: "#fff" }} ref={ref}>
      <div className="cp-container--narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cp-header"
        >
          <p className="cp-tag">Questions?</p>
          <h2 className="cp-title">Frequently Asked</h2>
          <p className="cp-desc">
            Everything you want to know before your first visit.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              style={{
                borderBottom: i < faqs.length - 1 ? "1px solid #f0edf1" : "none",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "24px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "16px",
                }}
              >
                <span style={{
                  fontSize: "1.02rem",
                  fontWeight: 500,
                  color: openIndex === i ? "#8b7093" : "#2d1b2d",
                  transition: "color 0.3s",
                  lineHeight: 1.4,
                }}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ flexShrink: 0, color: "#8b7093" }}
                >
                  <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{
                      fontSize: "0.92rem",
                      color: "#6b5e6b",
                      lineHeight: 1.8,
                      paddingBottom: "24px",
                      maxWidth: "640px",
                    }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
