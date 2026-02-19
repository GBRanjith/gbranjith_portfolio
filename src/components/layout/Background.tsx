"use client";

import GridBackground from "@/components/effects/GridBackground";
import GradientBlob from "@/components/effects/GradientBlob";

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <GridBackground />
      <GradientBlob color="bg-neon-cyan/5" size="w-[500px] h-[500px]" position="-top-48 -left-48" delay="0s" />
      <GradientBlob color="bg-neon-purple/5" size="w-[400px] h-[400px]" position="top-1/3 -right-48" delay="5s" />
      <GradientBlob color="bg-neon-pink/3" size="w-[350px] h-[350px]" position="bottom-0 left-1/4" delay="10s" />
    </div>
  );
}
