"use client";

import { motion } from "framer-motion";
import { appStoreStats, appBadges } from "@/data/appStore";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function BigCounter({ icon, count, label }: { icon: string; count: number; label: string }) {
  const { ref, display } = useCountUp(count, 1500);

  return (
    <motion.div variants={fadeInUp} className="text-center">
      <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
        <i className={`fab ${icon} text-3xl text-white/80`} />
      </div>
      <span ref={ref} className="block text-7xl md:text-8xl font-black text-white tracking-tighter">
        {display}
      </span>
      <span className="text-white/30 font-mono text-sm uppercase tracking-widest mt-2 block">{label}</span>
    </motion.div>
  );
}

export default function AppStoreSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Mini heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-neon-cyan" />
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Deployment Record</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">App Deployment Success</h2>
          <p className="text-white/30 max-w-lg mx-auto text-sm">
            Successfully deployed 7 applications across major app stores
          </p>
        </motion.div>

        {/* Big counters */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-16 md:gap-24 mb-16"
        >
          {appStoreStats.map((stat) => (
            <BigCounter key={stat.label} icon={stat.icon} count={stat.count} label={stat.label} />
          ))}
        </motion.div>

        {/* Badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {appBadges.map((badge) => (
            <motion.div
              key={badge.text}
              variants={fadeInUp}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/5 text-sm"
            >
              <i className={`fas ${badge.icon} text-neon-cyan text-xs`} />
              <span className="text-white/50 font-medium">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
