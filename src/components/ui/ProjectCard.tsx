"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-bg-card rounded-2xl overflow-hidden border border-border-glow gradient-border group"
    >
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border-b border-border-glow">
        <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
          <i className={`fas ${project.icon} text-neon-cyan`} />
          {project.title}
        </h3>
        <span className="text-sm text-text-secondary font-medium">{project.date}</span>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-text-secondary leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-neon-purple/10 text-neon-purple border border-neon-purple/20"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300"
        >
          <i className="fas fa-external-link-alt" /> View Project
        </a>
      </div>
    </motion.div>
  );
}
