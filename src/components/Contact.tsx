"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#8b7093] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Visit Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1d1d22] mb-6">
            Get in <span className="italic text-[#8b7093]">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#faf8fb] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8b7093]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1d1d22] mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                    Studio Location
                  </h4>
                  <p className="text-[#6c6c89]" style={{ fontFamily: "var(--font-inter)" }}>
                    800 Gathering Park Circle,<br />Suite 106, Cary, NC 27519
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#faf8fb] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8b7093]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1d1d22] mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                    Phone
                  </h4>
                  <a href="tel:+19845009147" className="text-[#8b7093] hover:underline" style={{ fontFamily: "var(--font-inter)" }}>
                    984-500-9147
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#faf8fb] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8b7093]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1d1d22] mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                    Email
                  </h4>
                  <a href="mailto:Info@CaryPilates.com" className="text-[#8b7093] hover:underline" style={{ fontFamily: "var(--font-inter)" }}>
                    Info@CaryPilates.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-4">
              {["Facebook", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-[#faf8fb] rounded-2xl flex items-center justify-center text-[#8b7093] hover:bg-[#8b7093] hover:text-white transition-all duration-300"
                  aria-label={social}
                >
                  {social === "Instagram" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                  {social === "Facebook" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            {/* Join the Team */}
            <div className="mt-10 p-6 bg-[#faf8fb] rounded-2xl">
              <h4 className="text-lg font-light text-[#1d1d22] mb-2">
                Join Our <span className="italic text-[#8b7093]">Team</span>
              </h4>
              <p className="text-[#6c6c89] text-sm mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                Are you a passionate, certified Pilates instructor looking to be part of a supportive and growing studio?
              </p>
              <a
                href="mailto:Info@CaryPilates.com"
                className="text-[#8b7093] text-sm font-medium hover:underline"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Email us at Info@CaryPilates.com
              </a>
            </div>
          </motion.div>

          {/* Map + Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg h-[300px] bg-[#f7f7f8]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5!2d-78.87!3d35.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s800+Gathering+Park+Circle+Cary+NC+27519!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cary Pilates - 800 Gathering Park Circle, Suite 106, Cary, NC 27519"
              />
            </div>

            <div className="bg-[#faf8fb] rounded-3xl p-8">
              <h3 className="text-2xl font-light text-[#1d1d22] mb-6">
                Send a <span className="italic text-[#8b7093]">Message</span>
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl border border-[#d1d1db] bg-white text-[#1d1d22] placeholder:text-[#6c6c89]/60 focus:outline-none focus:border-[#8b7093] focus:ring-1 focus:ring-[#8b7093] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl border border-[#d1d1db] bg-white text-[#1d1d22] placeholder:text-[#6c6c89]/60 focus:outline-none focus:border-[#8b7093] focus:ring-1 focus:ring-[#8b7093] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-[#d1d1db] bg-white text-[#1d1d22] placeholder:text-[#6c6c89]/60 focus:outline-none focus:border-[#8b7093] focus:ring-1 focus:ring-[#8b7093] transition-colors text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#d1d1db] bg-white text-[#1d1d22] placeholder:text-[#6c6c89]/60 focus:outline-none focus:border-[#8b7093] focus:ring-1 focus:ring-[#8b7093] transition-colors text-sm resize-none"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
                <button
                  type="submit"
                  className="w-full bg-[#8b7093] text-white py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-[#7a6082] transition-all duration-300 hover:shadow-lg hover:shadow-[#8b7093]/25"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
