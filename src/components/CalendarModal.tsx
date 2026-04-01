"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
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
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-4 md:inset-10 lg:inset-16 z-[101] bg-white shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
              <div>
                <h3
                  className="text-xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Book Your Session
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Choose a class or session that works for you
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer border-none"
                aria-label="Close calendar"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
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
            <div className="px-8 py-4 border-t border-gray-100 bg-[#faf9fb] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-gray-500 text-sm">
                Powered by Momence - Secure online booking
              </p>
              <div className="flex gap-4">
                <a
                  href="https://momence.com/Cary-Pilates/membership/New-Client-Special---Try-3-Classes/306414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b7093] text-sm font-medium hover:text-[#6b5674] transition-colors"
                >
                  New Client Special
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://momence.com/appointments/appointment-reservation/38248?boardId=15636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b7093] text-sm font-medium hover:text-[#6b5674] transition-colors"
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
