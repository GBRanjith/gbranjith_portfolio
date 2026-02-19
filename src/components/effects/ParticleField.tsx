"use client";

export default function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-neon-cyan/40"
          style={{
            left: `${Math.random() * 100}%`,
            animationName: "float-particle",
            animationDuration: `${Math.random() * 8 + 6}s`,
            animationDelay: `${Math.random() * 5}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}
    </div>
  );
}
