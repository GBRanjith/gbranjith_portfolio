"use client";

interface GradientBlobProps {
  color?: string;
  size?: string;
  position?: string;
  delay?: string;
}

export default function GradientBlob({
  color = "bg-neon-cyan/5",
  size = "w-96 h-96",
  position = "top-0 left-0",
  delay = "0s",
}: GradientBlobProps) {
  return (
    <div
      className={`absolute ${position} ${size} ${color} rounded-full blur-3xl pointer-events-none`}
      style={{
        animationName: "blob-move",
        animationDuration: "20s",
        animationDelay: delay,
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out",
      }}
    />
  );
}
