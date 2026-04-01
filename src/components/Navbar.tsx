"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Group Classes", href: "#classes" },
  { name: "Private Sessions", href: "#private" },
  { name: "Physical Therapy", href: "#therapy" },
  { name: "Instructors", href: "#instructors" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({
  onOpenCalendar,
}: {
  onOpenCalendar: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2024/08/CaryPilates.png?fit=400%2C110&ssl=1"
              alt="Cary Pilates"
              className={`h-10 w-auto transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#8b7093] ${
                  scrolled ? "text-[#1d1d22]" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenCalendar}
              className="bg-[#8b7093] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#7a6082] transition-all duration-300 hover:shadow-lg hover:shadow-[#8b7093]/25"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Book Now
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "rotate-45 translate-y-2 bg-[#1d1d22]"
                  : scrolled
                  ? "bg-[#1d1d22]"
                  : "bg-white"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-[#1d1d22]"
                  : "bg-white"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-2 bg-[#1d1d22]"
                  : scrolled
                  ? "bg-[#1d1d22]"
                  : "bg-white"
              }`}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-medium text-[#1d1d22] hover:text-[#8b7093] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenCalendar();
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-[#8b7093] text-white px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-[#7a6082] transition-colors mt-4"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
