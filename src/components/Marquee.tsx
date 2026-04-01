"use client";

const items = [
  "5-Star Rated on Google",
  "Classes Limited to 5 People",
  "Premium Balanced Body Equipment",
  "Licensed Physical Therapist on Staff",
  "Serving Cary, Apex & Morrisville",
  "New Client Special Available",
  "Nationally Certified Instructors",
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div
      style={{
        background: "#2d1b2d",
        padding: "16px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to right, #2d1b2d, transparent)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to left, #2d1b2d, transparent)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "48px",
          whiteSpace: "nowrap",
          animation: "marqueeScroll 30s linear infinite",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.78rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 500,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#8b7093",
                flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
