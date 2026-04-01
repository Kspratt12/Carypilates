"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

/*
  Images sourced from WP media library - ALL unique, none duplicated elsewhere on site.
  Videos are downloaded reels playing inline.
*/

function VideoCell({ src, alt }: { src: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleMouseEnter = useCallback(() => { videoRef.current?.play().catch(() => {}); }, []);
  const handleMouseLeave = useCallback(() => {
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{
        position: "absolute", bottom: "10px", left: "10px",
        width: "30px", height: "30px", borderRadius: "50%",
        background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg style={{ width: "12px", height: "12px", color: "#fff", marginLeft: "2px" }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

function ImageCell({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
    />
  );
}

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
          <h2 className="cp-title">Inside the Studio</h2>
          <p className="cp-desc">
            Hover to preview videos. Real sessions, real clients, real results.
          </p>
        </motion.div>

        {/* Bento Grid - all unique assets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "220px 220px 220px",
            gap: "6px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {/* Row 1, Col 1 - Tall video spanning 2 rows */}
          <div style={{ gridRow: "1 / 3", overflow: "hidden" }}>
            <VideoCell src="/videos/reel1.mp4" alt="Reformer class in action" />
          </div>

          {/* Row 1, Col 2 - Group class (unique: CaryPilates-126) */}
          <div style={{ overflow: "hidden" }}>
            <ImageCell
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-126-SQ-1.jpg?w=800&q=95&ssl=1"
              alt="Group reformer class"
            />
          </div>

          {/* Row 1, Col 3 - Private session (unique: CaryPilates-042-45) */}
          <div style={{ overflow: "hidden" }}>
            <ImageCell
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-042-45-1.jpg?w=800&q=95&ssl=1"
              alt="Private pilates session"
            />
          </div>

          {/* Row 2, Col 2 - Studio reformers (unique: CaryPilates-151) */}
          <div style={{ overflow: "hidden" }}>
            <ImageCell
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-151-SQ.jpg?w=800&q=95&ssl=1"
              alt="Studio reformer room"
            />
          </div>

          {/* Row 2, Col 3 - Video reel 2 */}
          <div style={{ overflow: "hidden" }}>
            <VideoCell src="/videos/reel2.mp4" alt="Private session demo" />
          </div>

          {/* Row 3, Col 1 - PT session (unique: CaryPilates-098-45) */}
          <div style={{ overflow: "hidden" }}>
            <ImageCell
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-098-45.jpg?w=800&q=95&ssl=1"
              alt="Physical therapy session"
            />
          </div>

          {/* Row 3, Col 2 - Video reel 3 */}
          <div style={{ overflow: "hidden" }}>
            <VideoCell src="/videos/reel3.mp4" alt="Pilates movement" />
          </div>

          {/* Row 3, Col 3 - Studio wide shot (unique: CaryPilates-055-Hero) */}
          <div style={{ overflow: "hidden" }}>
            <ImageCell
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-055-Hero-1920.jpg?w=800&q=95&ssl=1"
              alt="Cary Pilates studio"
            />
          </div>
        </motion.div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <a
            href="https://www.instagram.com/carypilates/"
            target="_blank"
            rel="noopener noreferrer"
            className="cp-btn cp-btn--dark-outline"
            style={{ gap: "10px", fontSize: "0.78rem", letterSpacing: "2px", textTransform: "uppercase" }}
          >
            <svg style={{ width: "16px", height: "16px" }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @carypilates
          </a>
        </motion.div>
      </div>
    </section>
  );
}
