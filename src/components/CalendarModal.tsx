"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function CalendarModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-4 md:inset-10 lg:inset-16 z-[101] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-[#f0edf1]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#8b7093]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#8b7093]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-xl font-light text-[#1d1d22]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Book Your <span className="italic text-[#8b7093]">Session</span>
                  </h3>
                  <p
                    className="text-[#6c6c89] text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Choose a class or session that works for you
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-[#faf8fb] hover:bg-[#f0edf1] flex items-center justify-center transition-colors"
                aria-label="Close calendar"
              >
                <svg
                  className="w-5 h-5 text-[#6c6c89]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Momence Embed */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://momence.com/u/cary-pilates-ddAsiW"
                className="w-full h-full border-0"
                title="Book a session at Cary Pilates"
                allow="payment"
              />
            </div>

            {/* Footer */}
            <div className="px-6 md:px-8 py-4 border-t border-[#f0edf1] bg-[#faf8fb] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p
                className="text-[#6c6c89] text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Powered by Momence - Secure online booking
              </p>
              <div className="flex gap-3">
                <a
                  href="https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b7093] text-sm font-medium hover:underline"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  New Client Special
                </a>
                <span className="text-[#d1d1db]">|</span>
                <a
                  href="https://momence.com/appointments/appointment-reservation/38248?boardId=15636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b7093] text-sm font-medium hover:underline"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  PT Evaluation
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
