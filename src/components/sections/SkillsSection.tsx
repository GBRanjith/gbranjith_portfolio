"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const colorPalette = [
  { border: "border-neon-cyan/30", text: "text-neon-cyan", bg: "bg-neon-cyan/5", glow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]" },
  { border: "border-neon-purple/30", text: "text-neon-purple", bg: "bg-neon-purple/5", glow: "hover:shadow-[0_0_30px_rgba(180,74,255,0.15)]" },
  { border: "border-neon-green/30", text: "text-neon-green", bg: "bg-neon-green/5", glow: "hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]" },
  { border: "border-neon-pink/30", text: "text-neon-pink", bg: "bg-neon-pink/5", glow: "hover:shadow-[0_0_30px_rgba(255,45,149,0.15)]" },
  { border: "border-amber-400/30", text: "text-amber-400", bg: "bg-amber-400/5", glow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]" },
  { border: "border-emerald-400/30", text: "text-emerald-400", bg: "bg-emerald-400/5", glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]" },
  { border: "border-sky-400/30", text: "text-sky-400", bg: "bg-sky-400/5", glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]" },
  { border: "border-rose-400/30", text: "text-rose-400", bg: "bg-rose-400/5", glow: "hover:shadow-[0_0_30px_rgba(251,113,133,0.15)]" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Tech Stack & Skills"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {skills.map((category, idx) => {
            const colors = colorPalette[idx % colorPalette.length];
            return (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className={`bg-bg-card border ${colors.border} rounded-2xl p-6 ${colors.glow} transition-all duration-500 group`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Label */}
                  <div className="flex items-center gap-3 md:w-72 shrink-0">
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <i className={`fas ${category.icon} ${colors.text}`} />
                    </div>
                    <h3 className={`font-bold ${colors.text} text-sm font-mono uppercase tracking-wide`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-8 bg-white/10" />

                  {/* Skills chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium ${colors.bg} ${colors.text} border ${colors.border} cursor-default transition-colors`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
