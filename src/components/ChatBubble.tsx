"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "bot" | "user";
  text: string;
}

const quickQuestions = [
  "What classes do you offer?",
  "How much does it cost?",
  "Do you offer physical therapy?",
  "What's the new client special?",
  "Where are you located?",
  "What are your hours?",
];

const answers: Record<string, string> = {
  "what classes do you offer?":
    "We offer three types of sessions: Group Reformer classes (limited to just 5 people), Private one-on-one sessions, and Pilates-based Physical Therapy. All sessions are 50 minutes on premium Balanced Body equipment.",
  "how much does it cost?":
    "Drop-in group class is $37. Our most popular intro offer is the 3-Class Pack for $96. Private sessions start at $92. We also offer 5 and 10-class packs with savings. Check our Pricing section for full details!",
  "do you offer physical therapy?":
    "Yes! Our founder Lora Guerra is a licensed Physical Therapist (MPT) and nationally certified Pilates instructor. We offer PT evaluations ($150) and follow-up sessions ($115). It's Pilates-based PT that combines clinical expertise with mindful movement.",
  "what's the new client special?":
    "We have two intro offers: a Private Intro session for $60 (one 50-min private session), or our most popular 3-Class Pack for $96 (three 50-min group classes). Perfect way to experience the studio!",
  "where are you located?":
    "We're at 800 Gathering Park Circle, Suite 106, Cary, NC 27519. We serve Cary, Morrisville, Apex, and the surrounding Triangle area.",
  "what are your hours?":
    "Monday through Friday: 6:00 AM - 7:00 PM, Saturday: 8:00 AM - 12:00 PM. We're closed on Sundays.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const [key, val] of Object.entries(answers)) {
    if (lower.includes(key.split(" ").slice(0, 3).join(" ")) || key.includes(lower.split(" ").slice(0, 3).join(" "))) {
      return val;
    }
  }
  if (lower.includes("class") || lower.includes("group") || lower.includes("reformer")) {
    return answers["what classes do you offer?"];
  }
  if (lower.includes("cost") || lower.includes("price") || lower.includes("how much") || lower.includes("pricing")) {
    return answers["how much does it cost?"];
  }
  if (lower.includes("therapy") || lower.includes("pt") || lower.includes("physical")) {
    return answers["do you offer physical therapy?"];
  }
  if (lower.includes("special") || lower.includes("new client") || lower.includes("intro") || lower.includes("first")) {
    return answers["what's the new client special?"];
  }
  if (lower.includes("where") || lower.includes("location") || lower.includes("address") || lower.includes("directions")) {
    return answers["where are you located?"];
  }
  if (lower.includes("hour") || lower.includes("open") || lower.includes("when") || lower.includes("time")) {
    return answers["what are your hours?"];
  }
  if (lower.includes("book") || lower.includes("schedule") || lower.includes("sign up") || lower.includes("register")) {
    return "You can book classes and sessions through our Momence booking system. Click the 'Book Now' button in the navigation or visit the Pricing section to get started!";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hi there! Welcome to Cary Pilates. I can help you with information about our classes, pricing, location, and more. What would you like to know?";
  }
  return "Great question! For the most accurate answer, I'd recommend reaching out to us directly at Info@CaryPilates.com or calling 984-500-9147. Is there anything else I can help with about our classes, pricing, or location?";
}

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'm the Cary Pilates assistant. Ask me anything about our classes, pricing, or schedule!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMobile) inputRef.current?.focus();
  }, [isOpen, isMobile]);

  // Lock body scroll on mobile when open
  useEffect(() => {
    if (isOpen && isMobile) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen, isMobile]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(text);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Chat FAB - hidden when open on mobile */}
      <AnimatePresence>
        {!(isOpen && isMobile) && (
          <motion.button
            initial={false}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className="chat-fab"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Pulse ring */}
      {!isOpen && <div className="chat-pulse" />}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop on mobile */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                style={{
                  position: "fixed",
                  inset: 0,
                  background: "rgba(0,0,0,0.3)",
                  zIndex: 40,
                }}
              />
            )}
            <motion.div
              initial={isMobile ? { y: "100%" } : { opacity: 0, y: 20, scale: 0.95 }}
              animate={isMobile ? { y: 0 } : { opacity: 1, y: 0, scale: 1 }}
              exit={isMobile ? { y: "100%" } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={isMobile ? { type: "spring", damping: 30, stiffness: 300 } : { duration: 0.3 }}
              className={isMobile ? "chat-window chat-window--mobile" : "chat-window"}
            >
              {/* Header */}
              <div className="chat-header">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="https://i0.wp.com/carypilates.com/wp-content/uploads/2024/12/cropped-CP-Monogram-Small.png?fit=32%2C32&ssl=1"
                      alt=""
                      style={{ width: "24px", height: "24px", borderRadius: "50%" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, fontSize: "0.95rem" }}>Cary Pilates</p>
                    <p style={{ fontSize: "0.72rem", opacity: 0.7 }}>
                      <span
                        style={{
                          display: "inline-block",
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#4ade80",
                          marginRight: "6px",
                          verticalAlign: "middle",
                        }}
                      />
                      Online now
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="chat-close-btn"
                    aria-label="Close chat"
                  >
                    <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="chat-messages">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                      maxWidth: "85%",
                    }}
                  >
                    <div
                      style={{
                        padding: "12px 16px",
                        borderRadius:
                          msg.role === "user"
                            ? "16px 16px 4px 16px"
                            : "16px 16px 16px 4px",
                        background:
                          msg.role === "user" ? "#8b7093" : "#f3eff4",
                        color: msg.role === "user" ? "#fff" : "#2d1b2d",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        wordBreak: "break-word",
                      }}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div
                    style={{
                      alignSelf: "flex-start",
                      padding: "12px 16px",
                      borderRadius: "16px 16px 16px 4px",
                      background: "#f3eff4",
                      display: "flex",
                      gap: "4px",
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="chat-typing-dot"
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#8b7093",
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length <= 2 && (
                <div className="chat-quick-questions">
                  {quickQuestions.slice(0, 4).map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="chat-quick-btn"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="chat-input-form"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="chat-input"
                />
                <button
                  type="submit"
                  className="chat-send-btn"
                  aria-label="Send message"
                >
                  <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
