"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function FeaturedProject() {
  const project = projects[0]; // rVaaHna as featured
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mb-8"
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group">
        <div className="bg-bg-card border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden hover:border-neon-cyan/20 transition-all duration-500">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                  Featured
                </span>
                <span className="text-white/30 text-sm font-mono">{project.date}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-neon-cyan transition-colors">
                <i className={`fas ${project.icon} mr-3 text-neon-cyan`} />
                {project.title}
              </h3>
              <p className="text-white/40 text-lg leading-relaxed mb-6 max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 text-white/50 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/30 transition-all">
              <i className="fas fa-arrow-right text-white/30 group-hover:text-neon-cyan transition-colors text-xl" />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function TiltProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

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
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group h-full">
        <div className="bg-bg-card border border-white/5 rounded-2xl p-6 h-full flex flex-col hover:border-white/10 transition-all duration-300">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center">
              <i className={`fas ${project.icon} text-neon-purple text-sm`} />
            </div>
            <i className="fas fa-external-link-alt text-white/10 group-hover:text-neon-cyan/50 transition-colors text-xs" />
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>
          <span className="text-white/20 text-xs font-mono mb-3">{project.date}</span>
          <p className="text-white/35 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white/[0.03] text-white/30 border border-white/5">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-white/20">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Showcasing my best work and technical expertise"
        />

        {/* Featured */}
        <FeaturedProject />

        {/* Grid of remaining */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {projects.slice(1).map((project) => (
            <TiltProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
