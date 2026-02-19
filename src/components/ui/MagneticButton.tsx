"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "accent";
  className?: string;
  download?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  download,
}: MagneticButtonProps) {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } = useMagnetic(0.3);

  const baseStyles =
    "inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 cursor-pointer";

  const variantStyles = {
    primary:
      "bg-neon-cyan text-bg-primary hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]",
    outline:
      "border-2 border-neon-cyan/40 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10",
    accent:
      "bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:shadow-[0_0_30px_rgba(180,74,255,0.4)]",
  };

  const Component = href ? "a" : "button";

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div style={{ x: springX, y: springY }}>
        <Component
          href={href}
          onClick={onClick}
          {...(href && download ? { download } : {})}
          className={cn(baseStyles, variantStyles[variant], className)}
        >
          {children}
        </Component>
      </motion.div>
    </div>
  );
}
