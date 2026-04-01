"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 md:py-40 bg-[#faf8fb]" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="text-[#8b7093] text-xs tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Visit Us
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1d1d22]"
            style={{ lineHeight: 1.2 }}
          >
            Get in <span className="italic text-[#8b7093]">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {[
              {
                label: "Studio Location",
                value: "800 Gathering Park Circle,\nSuite 106, Cary, NC 27519",
                icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
              },
              {
                label: "Phone",
                value: "984-500-9147",
                href: "tel:+19845009147",
                icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
              },
              {
                label: "Email",
                value: "Info@CaryPilates.com",
                href: "mailto:Info@CaryPilates.com",
                icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#8b7093]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h4
                    className="font-medium text-[#1d1d22] mb-2 text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.label}
                  </h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#8b7093] hover:underline text-sm"
                      style={{ fontFamily: "var(--font-inter)", lineHeight: 1.8 }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-[#6c6c89] text-sm whitespace-pre-line"
                      style={{ fontFamily: "var(--font-inter)", lineHeight: 1.8 }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {["Facebook", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8b7093] hover:bg-[#8b7093] hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={social}
                >
                  {social === "Instagram" ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5!2d-78.87!3d35.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s800+Gathering+Park+Circle+Cary+NC+27519!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Cary Pilates Location"
              />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-light text-[#1d1d22] mb-8" style={{ lineHeight: 1.3 }}>
                Send a <span className="italic text-[#8b7093]">Message</span>
              </h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-5 py-3.5 rounded-xl border border-[#e8e0eb] bg-[#faf8fb] text-[#1d1d22] placeholder:text-[#6c6c89]/50 focus:outline-none focus:border-[#8b7093] focus:ring-1 focus:ring-[#8b7093] transition-colors text-sm" style={{ fontFamily: "var(--font-inter)" }} />
                  <input type="text" placeholder="Last Name" className="w-full px-5 py-3.5 rounded-xl border border-[#e8e0eb] bg-[#faf8fb] text-[#1d1d22] placeholder:text-[#6c6c89]/50 focus:outline-none focus:border-[#8b7093] focus:ring-1 focus:ring-[#8b7093] transition-colors text-sm" style={{ fontFamily: "var(--font-inter)" }} />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-5 py-3.5 rounded-xl border border-[#e8e0eb] bg-[#faf8fb] text-[#1d1d22] placeholder:text-[#6c6c89]/50 focus:outline-none focus:border-[#8b7093] focus:ring-1 focus:ring-[#8b7093] transition-colors text-sm" style={{ fontFamily: "var(--font-inter)" }} />
                <textarea placeholder="Your Message" rows={3} className="w-full px-5 py-3.5 rounded-xl border border-[#e8e0eb] bg-[#faf8fb] text-[#1d1d22] placeholder:text-[#6c6c89]/50 focus:outline-none focus:border-[#8b7093] focus:ring-1 focus:ring-[#8b7093] transition-colors text-sm resize-none" style={{ fontFamily: "var(--font-inter)" }} />
                <button type="submit" className="w-full bg-[#8b7093] text-white py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-[#7a6082] transition-all duration-300" style={{ fontFamily: "var(--font-inter)" }}>
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
