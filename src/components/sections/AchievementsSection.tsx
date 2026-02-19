"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconColors = ["text-neon-cyan", "text-neon-purple", "text-neon-pink", "text-neon-green", "text-amber-400"];
const bgColors = ["bg-neon-cyan/10", "bg-neon-purple/10", "bg-neon-pink/10", "bg-neon-green/10", "bg-amber-400/10"];
const borderColors = ["border-neon-cyan/20", "border-neon-purple/20", "border-neon-pink/20", "border-neon-green/20", "border-amber-400/20"];

export default function AchievementsSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Achievements & Certifications"
          subtitle="Recognition and professional development milestones"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              variants={fadeInUp}
              whileHover={{ x: 4 }}
              className={`flex items-center gap-5 p-5 bg-bg-card border ${borderColors[i % borderColors.length]} rounded-2xl hover:border-opacity-50 transition-all duration-300 group cursor-default`}
            >
              <div className={`w-14 h-14 rounded-2xl ${bgColors[i % bgColors.length]} flex items-center justify-center shrink-0`}>
                <i className={`fas ${achievement.icon} text-xl ${iconColors[i % iconColors.length]}`} />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold text-base">{achievement.title}</h3>
                <p className={`${iconColors[i % iconColors.length]} text-sm font-medium truncate`}>{achievement.subtitle}</p>
                <p className="text-white/25 text-xs font-mono mt-0.5">{achievement.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
