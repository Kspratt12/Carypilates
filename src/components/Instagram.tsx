"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const posts = [
  { url: "https://www.instagram.com/reel/CzJlUZQg3GZ/", id: "CzJlUZQg3GZ" },
  { url: "https://www.instagram.com/reel/Cu48tWqAcGq/", id: "Cu48tWqAcGq" },
  { url: "https://www.instagram.com/reel/CuqMMqhASDt/", id: "CuqMMqhASDt" },
  { url: "https://www.instagram.com/p/COQp4QsAXbj/", id: "COQp4QsAXbj" },
];

export default function Instagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const existing = document.querySelector(
          'script[src="https://www.instagram.com/embed.js"]'
        );
        if (!existing) {
          const script = document.createElement("script");
          script.src = "https://www.instagram.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        } else {
          (
            window as unknown as {
              instgrm?: { Embeds: { process: () => void } };
            }
          ).instgrm?.Embeds?.process();
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-4">
            Follow Along
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            See Us in Action
          </h2>
          <p
            className="text-[15px] text-gray-500 max-w-md mx-auto"
            style={{ lineHeight: "1.8" }}
          >
            Follow our journey and get a peek inside the studio.
          </p>
        </motion.div>

        {/* Horizontal Row - Pinterest Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-captioned={false}
                data-instgrm-permalink={`${post.url}?utm_source=ig_embed`}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  margin: 0,
                  maxWidth: "100%",
                  width: "100%",
                  padding: 0,
                }}
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 text-center text-sm text-[#8b7093]"
                >
                  View on Instagram
                </a>
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/carypilates/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-gray-300 text-gray-800 text-[12px] tracking-widest uppercase hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 rounded-full"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @carypilates
          </a>
        </motion.div>
      </div>
    </section>
  );
}
