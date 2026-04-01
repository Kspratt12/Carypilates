"use client";

export default function GradientOrbs() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,181,208,0.15) 0%, transparent 70%)",
          animation: "orbFloat1 20s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-8%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,112,147,0.1) 0%, transparent 70%)",
          animation: "orbFloat2 25s ease-in-out infinite",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "30%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,181,208,0.12) 0%, transparent 70%)",
          animation: "orbFloat3 22s ease-in-out infinite",
          filter: "blur(45px)",
        }}
      />

      <style jsx>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -40px); }
          66% { transform: translate(-20px, 30px); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-40px, 30px); }
          66% { transform: translate(20px, -50px); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(50px, 20px); }
          66% { transform: translate(-30px, -40px); }
        }
      `}</style>
    </div>
  );
}
