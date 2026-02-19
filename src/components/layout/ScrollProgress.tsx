"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan origin-left z-[9999] shadow-[0_0_10px_rgba(0,240,255,0.5)]"
    />
  );
}
