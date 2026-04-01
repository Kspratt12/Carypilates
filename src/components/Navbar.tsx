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
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: scrolled ? "8px 0" : "16px 0",
          background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 1px 20px rgba(139,112,147,0.06)" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
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
              style={{
                height: scrolled ? "28px" : "32px",
                width: "auto",
                transition: "all 0.3s",
                filter: scrolled ? "none" : "brightness(0) invert(1)",
              }}
            />
          </a>

          {/* Desktop Nav */}
          <div
            className="cp-nav-desktop"
            style={{ alignItems: "center", gap: "32px", display: "none" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.3px",
                  color: scrolled ? "#2d1b2d" : "#fff",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#8b7093";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? "#2d1b2d" : "#fff";
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onOpenCalendar}
              className="cp-btn cp-btn--primary"
              style={{ padding: "10px 24px", fontSize: "0.82rem" }}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="cp-nav-mobile"
            style={{
              flexDirection: "column",
              gap: "5px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  borderRadius: "2px",
                  background: scrolled ? "#2d1b2d" : "#fff",
                  transition: "all 0.3s",
                  transform:
                    mobileOpen && i === 0
                      ? "rotate(45deg) translateY(7px)"
                      : mobileOpen && i === 2
                      ? "rotate(-45deg) translateY(-7px)"
                      : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
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
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 45,
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "28px",
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                fontSize: "28px",
                color: "#2d1b2d",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Close menu"
            >
              &times;
            </button>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  color: "#2d1b2d",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onOpenCalendar(); }}
              className="cp-btn cp-btn--primary"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
