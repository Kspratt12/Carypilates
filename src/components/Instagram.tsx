"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const galleryImages = [
  {
    src: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-013-SQ.jpg?w=600&q=85&ssl=1",
    alt: "Group reformer class",
    link: "https://www.instagram.com/reel/CzJlUZQg3GZ/",
  },
  {
    src: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-060-SQ.jpg?w=600&q=85&ssl=1",
    alt: "Private pilates session",
    link: "https://www.instagram.com/reel/Cu48tWqAcGq/",
  },
  {
    src: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Chair.jpg?w=600&q=85&ssl=1",
    alt: "Pilates chair exercise",
    link: "https://www.instagram.com/reel/CuqMMqhASDt/",
  },
  {
    src: "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/CaryPilates-Hero.jpeg?w=600&q=85&ssl=1",
    alt: "Studio interior",
    link: "https://www.instagram.com/p/COQp4QsAXbj/",
  },
];

export default function Instagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="cp-section" style={{ background: "#faf8fb" }} ref={ref}>
      <div className="cp-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cp-header"
        >
          <p className="cp-tag">Follow Along</p>
          <h2 className="cp-title">See Us in Action</h2>
          <p className="cp-desc">
            Follow our journey and get a peek inside the studio.
          </p>
        </motion.div>

        {/* Clean image grid - no embed clutter */}
        <div className="cp-grid-4">
          {galleryImages.map((img, i) => (
            <motion.a
              key={i}
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                display: "block",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  const overlay = e.currentTarget.nextElementSibling as HTMLElement;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  const overlay = e.currentTarget.nextElementSibling as HTMLElement;
                  if (overlay) overlay.style.opacity = "0";
                }}
              />
              {/* Hover overlay with Instagram icon */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(139,112,147,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  pointerEvents: "none",
                }}
              >
                <svg
                  style={{ width: "32px", height: "32px", color: "#fff" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <a
            href="https://www.instagram.com/carypilates/"
            target="_blank"
            rel="noopener noreferrer"
            className="cp-btn cp-btn--dark-outline"
            style={{
              gap: "10px",
              fontSize: "0.78rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            <svg
              style={{ width: "16px", height: "16px" }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @carypilates
          </a>
        </motion.div>
      </div>
    </section>
  );
}
