"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function ExperienceCard({ item, index }: { item: typeof experiences[0]; index: number }) {
  const isLast = index === experiences.length - 1;

  return (
    <motion.div variants={fadeInUp} className="relative flex gap-6 md:gap-10">
      {/* Timeline connector */}
      <div className="flex flex-col items-center shrink-0">
        {/* Dot */}
        <div className="relative z-10">
          <div className="w-4 h-4 rounded-full bg-neon-cyan border-4 border-bg-primary shadow-[0_0_15px_rgba(0,240,255,0.4)]" />
          {index === 0 && (
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-neon-cyan animate-ping opacity-30" />
          )}
        </div>
        {/* Line */}
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-neon-cyan/30 to-transparent min-h-[40px]" />
        )}
      </div>

      {/* Card */}
      <div className="pb-12 flex-1 -mt-1">
        <div className="bg-bg-card border border-white/5 rounded-2xl p-6 md:p-8 hover:border-neon-cyan/10 transition-all duration-500 group">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <i className={`fas ${item.icon} text-neon-cyan text-sm`} />
                {item.role}
              </h3>
              <span className="text-white/30 text-sm font-mono">{item.company}</span>
            </div>
            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-neon-cyan/5 text-neon-cyan border border-neon-cyan/10 shrink-0 w-fit">
              {item.period}
            </span>
          </div>

          {/* Highlights */}
          <ul className="space-y-3">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-white/45 text-sm leading-relaxed">
                <span className="text-neon-cyan/50 mt-0.5 text-xs">&#9656;</span>
                <span className="group-hover:text-white/60 transition-colors">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="Professional Journey"
          subtitle="My career progression and key accomplishments"
        />

        <motion.div
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.role} item={exp} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
