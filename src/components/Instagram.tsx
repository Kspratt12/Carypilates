"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reels = [
  { url: "https://www.instagram.com/reel/CzJlUZQg3GZ/", id: "CzJlUZQg3GZ" },
  { url: "https://www.instagram.com/reel/Cu48tWqAcGq/", id: "Cu48tWqAcGq" },
  { url: "https://www.instagram.com/reel/CuqMMqhASDt/", id: "CuqMMqhASDt" },
  { url: "https://www.instagram.com/p/COQp4QsAXbj/", id: "COQp4QsAXbj" },
];

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-40 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#8b7093] text-xs tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Follow Along
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1d1d22] mb-8"
            style={{ lineHeight: 1.2 }}
          >
            See Us in <span className="italic text-[#8b7093]">Action</span>
          </h2>
        </motion.div>

        {/* Pinterest-style masonry grid - no captions, clean visual */}
        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {reels.map((reel, i) => (
            <motion.a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="block rounded-2xl overflow-hidden bg-[#faf8fb] group relative break-inside-avoid"
              style={{ height: i % 2 === 0 ? "320px" : "260px" }}
            >
              {/* Thumbnail from Instagram CDN */}
              <img
                src={`https://www.instagram.com/p/${reel.id}/media/?size=l`}
                alt="Cary Pilates"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback gradient if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.style.background = "linear-gradient(135deg, #e8e0eb 0%, #d4c5d9 100%)";
                }}
              />
              {/* Hover overlay with play icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-12 h-12 text-white drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com/carypilates/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[#1d1d22] text-[#1d1d22] px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-[#1d1d22] hover:text-white transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @carypilates
          </a>
        </motion.div>
      </div>
    </section>
  );
}
