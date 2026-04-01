"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
    <section className="cp-section" style={{ background: "#fff" }} ref={ref} id="schedule">
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
            gap: "8px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              style={{
                padding: "10px 24px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.3s",
                background: activeDay === day ? "#8b7093" : "#f3eff4",
                color: activeDay === day ? "#fff" : "#6b5e6b",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => {
                if (activeDay !== day) e.currentTarget.style.background = "#e8dfe9";
              }}
              onMouseLeave={(e) => {
                if (activeDay !== day) e.currentTarget.style.background = "#f3eff4";
              }}
            >
              {day}
            </button>
          ))}
        </motion.div>

        {/* Class List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {classes.map((cls, i) => (
            <motion.a
              key={`${activeDay}-${cls.time}`}
              href="https://momence.com/u/cary-pilates-ddAsiW"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 28px",
                background: "#faf8fb",
                borderRadius: "16px",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                gap: "16px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f3eff4";
                e.currentTarget.style.transform = "translateX(6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#faf8fb";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flex: 1 }}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "0.95rem",
                    color: "#8b7093",
                    fontWeight: 600,
                    minWidth: "80px",
                  }}
                >
                  {cls.time}
                </span>
                <div>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#2d1b2d", marginBottom: "2px" }}>
                    {cls.name}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#998a99" }}>
                    with {cls.instructor}
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
                {/* Spot indicators */}
                <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: j < cls.spots ? "#8b7093" : "#e0d8e2",
                        transition: "background 0.3s",
                      }}
                    />
                  ))}
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: cls.spots === 0 ? "#e74c3c" : "#8b7093",
                      marginLeft: "8px",
                      fontWeight: 600,
                    }}
                  >
                    {cls.spots === 0 ? "Full" : `${cls.spots} left`}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: cls.spots === 0 ? "#998a99" : "#8b7093",
                    fontWeight: 600,
                    borderBottom: cls.spots > 0 ? "1px solid #8b7093" : "none",
                    paddingBottom: "2px",
                  }}
                >
                  {cls.spots === 0 ? "Waitlist" : "Reserve"}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

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
