"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36 bg-[#faf9fb]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b7093] mb-4">
            Visit Us
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Get in Touch
          </h2>
          <p
            className="text-[15px] text-gray-500 max-w-md mx-auto"
            style={{ lineHeight: "1.8" }}
          >
            We would love to hear from you. Stop by, call, or send us a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Location */}
            <div className="flex gap-5">
              <div className="w-11 h-11 bg-white flex items-center justify-center flex-shrink-0 shadow-sm rounded-xl">
                <svg
                  className="w-5 h-5 text-[#8b7093]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h4
                  className="text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Studio Location
                </h4>
                <p
                  className="text-[15px] text-gray-600"
                  style={{ lineHeight: "1.9" }}
                >
                  800 Gathering Park Circle,
                  <br />
                  Suite 106, Cary, NC 27519
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="w-11 h-11 bg-white flex items-center justify-center flex-shrink-0 shadow-sm rounded-xl">
                <svg
                  className="w-5 h-5 text-[#8b7093]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <h4
                  className="text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Phone
                </h4>
                <a
                  href="tel:+19845009147"
                  className="text-[15px] text-[#8b7093] hover:text-[#6b5674] transition-colors"
                >
                  984-500-9147
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5">
              <div className="w-11 h-11 bg-white flex items-center justify-center flex-shrink-0 shadow-sm rounded-xl">
                <svg
                  className="w-5 h-5 text-[#8b7093]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h4
                  className="text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Email
                </h4>
                <a
                  href="mailto:Info@CaryPilates.com"
                  className="text-[15px] text-[#8b7093] hover:text-[#6b5674] transition-colors"
                >
                  Info@CaryPilates.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5">
              <div className="w-11 h-11 bg-white flex items-center justify-center flex-shrink-0 shadow-sm rounded-xl">
                <svg
                  className="w-5 h-5 text-[#8b7093]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4
                  className="text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Studio Hours
                </h4>
                <p
                  className="text-[15px] text-gray-600"
                  style={{ lineHeight: "1.9" }}
                >
                  Monday - Friday: 6:00 AM - 7:00 PM
                  <br />
                  Saturday: 8:00 AM - 12:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Map + Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="overflow-hidden h-[250px] rounded-2xl">
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

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3
                className="text-2xl mb-8"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Send a Message
              </h3>
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-5 py-3.5 border border-gray-200 bg-[#faf9fb] text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#8b7093] transition-colors rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-5 py-3.5 border border-gray-200 bg-[#faf9fb] text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#8b7093] transition-colors rounded-lg"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3.5 border border-gray-200 bg-[#faf9fb] text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#8b7093] transition-colors rounded-lg"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-5 py-3.5 border border-gray-200 bg-[#faf9fb] text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#8b7093] transition-colors resize-none rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full px-7 py-3.5 bg-[#8b7093] text-white text-[12px] tracking-widest uppercase hover:bg-[#6b5674] transition-all duration-300 cursor-pointer border-none rounded-full hover:shadow-lg"
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
