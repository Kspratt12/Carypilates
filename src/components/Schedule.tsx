"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const schedule: Record<string, { time: string; name: string; instructor: string; spots: number }[]> = {
  Mon: [
    { time: "6:00 AM", name: "Reformer Flow", instructor: "Jessica", spots: 2 },
    { time: "9:00 AM", name: "Core & Restore", instructor: "Lora", spots: 3 },
    { time: "12:00 PM", name: "Lunch Express", instructor: "Grace", spots: 4 },
    { time: "5:30 PM", name: "After Work Burn", instructor: "Breanna", spots: 1 },
  ],
  Tue: [
    { time: "6:00 AM", name: "Rise & Reform", instructor: "Breanna", spots: 3 },
    { time: "9:00 AM", name: "Reformer Basics", instructor: "Sophia", spots: 5 },
    { time: "4:30 PM", name: "Stretch & Strengthen", instructor: "Grace", spots: 2 },
    { time: "6:00 PM", name: "Power Reformer", instructor: "Jessica", spots: 0 },
  ],
  Wed: [
    { time: "6:00 AM", name: "Reformer Flow", instructor: "Jessica", spots: 1 },
    { time: "9:00 AM", name: "Total Body", instructor: "Lora", spots: 4 },
    { time: "12:00 PM", name: "Lunch Express", instructor: "Grace", spots: 3 },
    { time: "5:30 PM", name: "After Work Burn", instructor: "Sophia", spots: 2 },
  ],
  Thu: [
    { time: "6:00 AM", name: "Rise & Reform", instructor: "Breanna", spots: 2 },
    { time: "9:00 AM", name: "Core & Restore", instructor: "Lora", spots: 5 },
    { time: "4:30 PM", name: "Stretch & Strengthen", instructor: "Jessica", spots: 3 },
    { time: "6:00 PM", name: "Power Reformer", instructor: "Grace", spots: 1 },
  ],
  Fri: [
    { time: "6:00 AM", name: "Reformer Flow", instructor: "Sophia", spots: 4 },
    { time: "9:00 AM", name: "Total Body", instructor: "Lora", spots: 2 },
    { time: "12:00 PM", name: "Lunch Express", instructor: "Breanna", spots: 5 },
  ],
  Sat: [
    { time: "8:00 AM", name: "Weekend Warrior", instructor: "Lora", spots: 1 },
    { time: "9:30 AM", name: "Reformer Basics", instructor: "Jessica", spots: 3 },
    { time: "11:00 AM", name: "Stretch & Flow", instructor: "Grace", spots: 4 },
  ],
};

export default function Schedule() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDay, setActiveDay] = useState("Mon");

  const classes = schedule[activeDay] || [];

  return (
    <section className="cp-section" style={{ background: "#faf8fb" }} ref={ref} id="schedule">
      <div className="cp-container--narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="cp-header"
        >
          <p className="cp-tag">This Week</p>
          <h2 className="cp-title">Class Schedule</h2>
          <p className="cp-desc">
            Reserve your spot - classes are limited to 5 people for
            personalized attention.
          </p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4px",
            marginBottom: "36px",
            flexWrap: "nowrap",
            background: "#fff",
            padding: "5px",
            borderRadius: "50px",
            boxShadow: "0 2px 12px rgba(139,112,147,0.08)",
            maxWidth: "480px",
            margin: "0 auto 36px",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              style={{
                padding: "10px 18px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                fontSize: "0.82rem",
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                background: activeDay === day ? "#8b7093" : "transparent",
                color: activeDay === day ? "#fff" : "#6b5e6b",
                letterSpacing: "0.5px",
                flex: 1,
                minWidth: "52px",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (activeDay !== day) e.currentTarget.style.background = "rgba(139,112,147,0.08)";
              }}
              onMouseLeave={(e) => {
                if (activeDay !== day) e.currentTarget.style.background = "transparent";
              }}
            >
              {day}
            </button>
          ))}
        </motion.div>

        {/* Class List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              background: "#fff",
              borderRadius: "20px",
              padding: "8px",
              boxShadow: "0 2px 20px rgba(139,112,147,0.06)",
            }}
          >
            {/* Table header - hidden on mobile via CSS */}
            <div className="schedule-header-row">
              <div className="schedule-header-left">
                <span style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#998a99",
                  minWidth: "80px",
                }}>
                  Time
                </span>
                <span style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#998a99",
                }}>
                  Class
                </span>
              </div>
              <span style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#998a99",
                flexShrink: 0,
              }}>
                Availability
              </span>
            </div>

            {/* Divider - hidden on mobile via CSS */}
            <div className="schedule-header-row" style={{ padding: 0, margin: "0 16px" }}>
              <div style={{ height: "1px", background: "#f3eff4", width: "100%" }} />
            </div>

            {classes.map((cls, i) => (
              <motion.a
                key={`${activeDay}-${cls.time}`}
                href="https://momence.com/u/cary-pilates-ddAsiW"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="schedule-class-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 20px",
                  background: "transparent",
                  borderRadius: "14px",
                  transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                  gap: "12px",
                  textDecoration: "none",
                  borderBottom: i < classes.length - 1 ? "1px solid #f8f5f9" : "none",
                  flexWrap: "wrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#faf8fb";
                  e.currentTarget.style.borderBottom = "1px solid transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderBottom = i < classes.length - 1 ? "1px solid #f8f5f9" : "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "0.92rem",
                      color: "#8b7093",
                      fontWeight: 600,
                      minWidth: "72px",
                      flexShrink: 0,
                    }}
                  >
                    {cls.time}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#2d1b2d", marginBottom: "2px" }}>
                      {cls.name}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "#998a99" }}>
                      with {cls.instructor}
                    </p>
                  </div>
                </div>
                <div className="schedule-row-right">
                  {/* Spots bar */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    background: "#faf8fb",
                    padding: "6px 10px",
                    borderRadius: "20px",
                  }}>
                    {[...Array(5)].map((_, j) => (
                      <span
                        key={j}
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: j < cls.spots ? "#8b7093" : "#e0d8e2",
                          transition: "background 0.3s",
                        }}
                      />
                    ))}
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: cls.spots === 0 ? "#e74c3c" : "#8b7093",
                        marginLeft: "6px",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {cls.spots === 0 ? "Full" : `${cls.spots} left`}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: cls.spots === 0 ? "#998a99" : "#8b7093",
                      fontWeight: 600,
                      padding: "6px 14px",
                      borderRadius: "20px",
                      border: cls.spots > 0 ? "1.5px solid #c9b5d0" : "1.5px solid #e0d8e2",
                      transition: "all 0.25s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cls.spots === 0 ? "Waitlist" : "Reserve"}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <a
            href="https://momence.com/u/cary-pilates-ddAsiW"
            target="_blank"
            rel="noopener noreferrer"
            className="cp-btn cp-btn--primary"
          >
            View Full Schedule
          </a>
        </motion.div>
      </div>
    </section>
  );
}
