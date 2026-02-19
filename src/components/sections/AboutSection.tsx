"use client";

import { motion } from "framer-motion";
import { profile, personalDetails } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeInUp, staggerContainer, glowHover } from "@/lib/animations";

const stats = [
  { icon: "fa-mobile-alt", value: 3, suffix: "+", label: "Years Flutter", color: "neon-cyan" },
  { icon: "fa-cubes", value: 7, suffix: "+", label: "Apps Built", color: "neon-purple" },
  { icon: "fa-project-diagram", value: 10, suffix: "+", label: "Projects Done", color: "neon-pink" },
  { icon: "fa-globe", value: 1, suffix: "", label: "Global Project", color: "neon-green" },
];

function BentoStat({ icon, value, suffix, label, color }: { icon: string; value: number; suffix: string; label: string; color: string }) {
  const { ref, display } = useCountUp(value, 2000, suffix);
  const colorMap: Record<string, string> = {
    "neon-cyan": "text-neon-cyan",
    "neon-purple": "text-neon-purple",
    "neon-pink": "text-neon-pink",
    "neon-green": "text-neon-green",
  };
  const bgMap: Record<string, string> = {
    "neon-cyan": "bg-neon-cyan/10",
    "neon-purple": "bg-neon-purple/10",
    "neon-pink": "bg-neon-pink/10",
    "neon-green": "bg-neon-green/10",
  };

  return (
    <motion.div variants={fadeInUp} whileHover={glowHover} className="bg-bg-card border border-white/5 rounded-2xl p-5 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl ${bgMap[color]} flex items-center justify-center shrink-0`}>
        <i className={`fas ${icon} ${colorMap[color]}`} />
      </div>
      <div>
        <span ref={ref} className={`block text-2xl font-black ${colorMap[color]}`}>{display}</span>
        <span className="text-white/40 text-xs font-mono uppercase tracking-wider">{label}</span>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="Passionate developer with expertise in building scalable mobile applications"
        />

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
        >
          {/* Bio card - spans 3 cols */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-3 bg-bg-card border border-white/5 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-neon-cyan" />
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Who I Am</span>
            </div>
            {profile.aboutParagraphs.map((p, i) => (
              <p key={i} className="text-white/50 leading-relaxed mb-3 last:mb-0 text-sm">
                {p.split(/<highlight>|<\/highlight>/).map((part, j) =>
                  j % 2 === 1 ? (
                    <span key={j} className="text-neon-cyan font-semibold">{part}</span>
                  ) : (
                    part
                  )
                )}
              </p>
            ))}
          </motion.div>

          {/* Location card */}
          <motion.div
            variants={fadeInUp}
            className="bg-bg-card border border-white/5 rounded-2xl p-5 flex flex-col justify-between"
          >
            <div className="text-3xl mb-3">
              <i className="fas fa-map-marker-alt text-neon-pink" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">{profile.location}</div>
              <div className="text-white/30 text-sm font-mono">base.location</div>
            </div>
          </motion.div>

          {/* Stats - grid spanning 3 cols */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {stats.map((s) => (
              <BentoStat key={s.label} {...s} />
            ))}
          </motion.div>

          {/* Personal details - spans 1 col */}
          <motion.div
            variants={fadeInUp}
            className="bg-bg-card border border-white/5 rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-neon-purple" />
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Details</span>
            </div>
            <div className="space-y-2.5">
              {personalDetails.slice(0, 4).map((d) => (
                <div key={d.label} className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-mono text-xs">{d.label}</span>
                  <span className="text-white/70 font-medium text-xs">{d.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech marquee card - full width */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 lg:col-span-4 bg-bg-card border border-white/5 rounded-2xl p-4 overflow-hidden"
          >
            <div className="flex items-center gap-6 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
              {["Flutter", "Dart", "Swift", "Java", "Firebase", "Node.js", "BLoC", "GetX", "REST APIs", "iOS", "Android", "Git", "Flutter", "Dart", "Swift", "Java", "Firebase", "Node.js"].map((tech, i) => (
                <span key={i} className="text-white/20 font-mono text-sm font-bold uppercase tracking-widest">
                  {tech}
                  <span className="text-neon-cyan/30 mx-4">&#x2022;</span>
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
