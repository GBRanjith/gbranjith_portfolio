"use client";

import { social } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-border-glow py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-neon-cyan transition-colors"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-xl" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-neon-cyan transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-xl" />
          </a>
        </div>
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} Boopathy Ranjith. All rights reserved.
        </p>
        <p className="text-text-secondary/60 text-xs mt-1">
          <i className="fas fa-mobile-alt" /> Flutter Developer |{" "}
          <i className="fas fa-rocket" /> Innovation Enthusiast
        </p>
      </div>
    </footer>
  );
}
