"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToElement } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.href.slice(1)), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToElement(href.slice(1));
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="text-2xl font-extrabold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent"
        >
          BR
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative text-sm font-medium transition-colors duration-300 py-1 ${
                  activeSection === item.href.slice(1)
                    ? "text-neon-cyan"
                    : "text-white/80 hover:text-neon-cyan"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-7 h-0.5 bg-white rounded-full block"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-7 h-0.5 bg-white rounded-full block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-7 h-0.5 bg-white rounded-full block"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border-glow overflow-hidden"
          >
            <ul className="py-4 px-6 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-neon-cyan bg-neon-cyan/10"
                        : "text-white/80 hover:text-neon-cyan hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
