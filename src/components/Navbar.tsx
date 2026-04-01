"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenCalendar: () => void;
}

const navLinks = [
  { label: "Group Classes", href: "#classes" },
  { label: "Private Sessions", href: "#private-sessions" },
  { label: "Physical Therapy", href: "#physical-therapy" },
  { label: "Instructors", href: "#instructors" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenCalendar }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2024/08/CaryPilates.png?fit=400%2C110&ssl=1"
              alt="Cary Pilates"
              className={`h-6 md:h-7 w-auto transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 bg-transparent border-none cursor-pointer ${
                  scrolled
                    ? "text-gray-700 hover:text-[#8b7093]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onOpenCalendar}
              className={`ml-4 px-6 py-2.5 text-[11px] tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer border-none ${
                scrolled
                  ? "bg-[#8b7093] text-white hover:bg-[#6b5674]"
                  : "bg-white/20 text-white border border-white/40 hover:bg-white/30 backdrop-blur-sm"
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                scrolled ? "bg-gray-800" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                scrolled ? "bg-gray-800" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                scrolled ? "bg-gray-800" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-3xl text-gray-800 bg-transparent border-none cursor-pointer"
              aria-label="Close menu"
            >
              &times;
            </button>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-lg tracking-widest uppercase text-gray-800 hover:text-[#8b7093] transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenCalendar();
              }}
              className="mt-4 px-8 py-4 bg-[#8b7093] text-white text-sm tracking-widest uppercase cursor-pointer border-none"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
