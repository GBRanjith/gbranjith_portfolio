"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { ExperienceItem } from "@/types";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex ${isLeft ? "justify-start" : "justify-end"} mb-16`}>
      {/* Dot on timeline */}
      <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-neon-cyan border-4 border-bg-primary shadow-[0_0_15px_rgba(0,240,255,0.5)] z-10 hidden md:block" />

      <motion.div
        variants={isLeft ? fadeInLeft : fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={`w-full md:w-[45%] ${isLeft ? "md:pr-8" : "md:pl-8"}`}
      >
        <div className="glass rounded-2xl p-6 md:p-8 hover:border-neon-cyan/30 transition-all duration-300 group">
          <h3 className="text-xl font-bold text-neon-cyan flex items-center gap-3 mb-2">
            <i className={`fas ${item.icon}`} />
            {item.role}
          </h3>
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-white/80 bg-white/10 mb-5">
            {item.period} | {item.company}
          </div>
          <ul className="space-y-3">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-white/85 leading-relaxed">
                <span className="text-neon-cyan mt-1 text-sm">&#9656;</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
