"use client";

interface SectionDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

export default function SectionDivider({
  from = "#faf8fb",
  to = "#fff",
  flip = false,
}: SectionDividerProps) {
  return (
    <div
      style={{
        width: "100%",
        lineHeight: 0,
        overflow: "hidden",
        marginTop: "-1px",
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "80px", display: "block" }}
      >
        <defs>
          <linearGradient id={`grad-${from}-${to}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L0,60 Q360,120 720,80 Q1080,40 1440,90 L1440,0 Z"
          fill={from}
        />
        <path
          d="M0,60 Q360,120 720,80 Q1080,40 1440,90 L1440,120 L0,120 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
