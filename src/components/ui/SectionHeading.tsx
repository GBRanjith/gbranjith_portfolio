"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-16"
    >
      <h2
        className={`text-4xl md:text-5xl font-extrabold mb-4 gradient-underline ${
          light ? "text-white" : "text-neon-cyan neon-text"
        }`}
      >
        {title}
      </h2>
      <p className={`text-lg max-w-2xl mx-auto mt-6 ${light ? "text-white/80" : "text-text-secondary"}`}>
        {subtitle}
      </p>
    </motion.div>
  );
}
