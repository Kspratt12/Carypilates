"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactItems = [
  {
    title: "Studio Location",
    content: (
      <>
        800 Gathering Park Circle,
        <br />
        Suite 106, Cary, NC 27519
      </>
    ),
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    ),
  },
  {
    title: "Phone",
    content: (
      <a
        href="tel:+19845009147"
        style={{ color: "#8b7093", transition: "color 0.3s" }}
      >
        984-500-9147
      </a>
    ),
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
  },
  {
    title: "Email",
    content: (
      <a
        href="mailto:Info@CaryPilates.com"
        style={{ color: "#8b7093", transition: "color 0.3s" }}
      >
        Info@CaryPilates.com
      </a>
    ),
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
  },
  {
    title: "Studio Hours",
    content: (
      <>
        Monday - Friday: 6:00 AM - 7:00 PM
        <br />
        Saturday: 8:00 AM - 12:00 PM
      </>
    ),
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="cp-section" style={{ background: "#faf8fb" }} ref={ref}>
      <div className="cp-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cp-header"
        >
          <p className="cp-tag">Visit Us</p>
          <h2 className="cp-title">Get in Touch</h2>
          <p className="cp-desc">
            We would love to hear from you. Stop by, call, or send us a message.
          </p>
        </motion.div>

        <div className="cp-grid-2" style={{ gap: "48px" }}>
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "36px" }}
          >
            {contactItems.map((item) => (
              <div
                key={item.title}
                style={{ display: "flex", gap: "20px" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "#fff",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 2px 12px rgba(139,58,139,0.06)",
                  }}
                >
                  <svg
                    style={{ width: "20px", height: "20px", color: "#8b7093" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1.1rem",
                      marginBottom: "8px",
                      color: "#2d1b2d",
                    }}
                  >
                    {item.title}
                  </h4>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#6b5e6b",
                      lineHeight: 1.9,
                    }}
                  >
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right - Map + Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {/* Map */}
            <div style={{ overflow: "hidden", height: "240px", borderRadius: "20px" }}>
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
            <div
              style={{
                background: "#fff",
                padding: "36px",
                borderRadius: "20px",
                boxShadow: "0 2px 20px rgba(139,58,139,0.06)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "1.5rem",
                  marginBottom: "28px",
                  color: "#2d1b2d",
                }}
              >
                Send a Message
              </h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <input
                    type="text"
                    placeholder="First Name"
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      border: "1px solid #e8e0e8",
                      borderRadius: "10px",
                      background: "#faf8fb",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "border-color 0.3s",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#8b7093"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#e8e0e8"; }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      border: "1px solid #e8e0e8",
                      borderRadius: "10px",
                      background: "#faf8fb",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "border-color 0.3s",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#8b7093"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#e8e0e8"; }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "1px solid #e8e0e8",
                    borderRadius: "10px",
                    background: "#faf8fb",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.3s",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#8b7093"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#e8e0e8"; }}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    border: "1px solid #e8e0e8",
                    borderRadius: "10px",
                    background: "#faf8fb",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.3s",
                    resize: "none",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#8b7093"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#e8e0e8"; }}
                />
                <button
                  type="submit"
                  className="cp-btn cp-btn--primary"
                  style={{ width: "100%" }}
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
