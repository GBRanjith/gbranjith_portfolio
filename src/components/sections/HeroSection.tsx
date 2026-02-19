"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/personal";
import ParticleField from "@/components/effects/ParticleField";
import MagneticButton from "@/components/ui/MagneticButton";

const roles = ["Flutter Developer", "Mobile App Architect", "iOS Developer", "Cross-Platform Specialist"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleField />

      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-neon-purple/[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-neon-pink/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center min-h-screen py-28">
          {/* Left: Main content - takes most space */}
          <div className="max-w-3xl">
            {/* Status bar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse" />
              <span className="text-neon-green text-sm font-mono font-medium tracking-wide">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Name - huge */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-6"
            >
              <span className="text-white">{profile.firstName}</span>
              <br />
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                {profile.lastName}
              </span>
            </motion.h1>

            {/* Cycling role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-10 mb-8 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl md:text-2xl font-mono text-neon-cyan font-medium"
                >
                  {`> ${roles[roleIndex]}_`}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl"
            >
              {profile.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton href="#projects" variant="primary">
                <i className="fas fa-arrow-right" /> Explore Work
              </MagneticButton>
              <MagneticButton
                href={profile.resumeUrl}
                variant="outline"
                download="Boopathy-Ranjith-Resume.pdf"
              >
                <i className="fas fa-download" /> Resume
              </MagneticButton>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex gap-8 mt-16 pt-8 border-t border-white/5"
            >
              {[
                { num: "3+", label: "Yrs Flutter" },
                { num: "10+", label: "Projects" },
                { num: "7+", label: "Apps Live" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-black text-white">{s.num}</div>
                  <div className="text-xs text-white/30 font-mono uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal-style card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full lg:w-[340px]"
            style={{ perspective: 1000 }}
          >
            <div className="bg-bg-card/90 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-white/30 text-xs font-mono ml-2">profile.dart</span>
              </div>

              {/* Profile image */}
              <div className="p-6 pb-4">
                <div className="w-24 h-24 rounded-2xl mx-auto overflow-hidden border-2 border-neon-cyan/20 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Code-style info */}
              <div className="px-5 pb-5 font-mono text-sm space-y-2">
                <div>
                  <span className="text-neon-purple">const</span>{" "}
                  <span className="text-neon-cyan">dev</span>{" "}
                  <span className="text-white/40">=</span>{" "}
                  <span className="text-white/40">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-neon-green">name</span>
                  <span className="text-white/30">: </span>
                  <span className="text-amber-400">&quot;{profile.name}&quot;</span>
                  <span className="text-white/30">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neon-green">role</span>
                  <span className="text-white/30">: </span>
                  <span className="text-amber-400">&quot;{profile.role}&quot;</span>
                  <span className="text-white/30">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neon-green">loc</span>
                  <span className="text-white/30">: </span>
                  <span className="text-amber-400">&quot;{profile.location}&quot;</span>
                  <span className="text-white/30">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-neon-green">stack</span>
                  <span className="text-white/30">: </span>
                  <span className="text-white/40">[</span>
                  <span className="text-amber-400">&quot;Flutter&quot;</span>
                  <span className="text-white/30">, </span>
                  <span className="text-amber-400">&quot;Swift&quot;</span>
                  <span className="text-white/40">]</span>
                  <span className="text-white/30">,</span>
                </div>
                <div>
                  <span className="text-white/40">{"}"}</span>
                  <span className="text-white/30">;</span>
                </div>
              </div>

              {/* Links row */}
              <div className="flex border-t border-white/5">
                <a href="#contact" className="flex-1 py-3 text-center text-xs font-mono text-neon-cyan hover:bg-neon-cyan/5 transition-colors border-r border-white/5">
                  <i className="fas fa-envelope mr-1" /> contact()
                </a>
                <a href={`https://github.com/GBRanjith`} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 text-center text-xs font-mono text-white/50 hover:text-white hover:bg-white/5 transition-colors">
                  <i className="fab fa-github mr-1" /> github
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-neon-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
