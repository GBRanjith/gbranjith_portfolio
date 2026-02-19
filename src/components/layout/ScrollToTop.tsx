"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0,240,255,0.5)" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-neon-cyan/20 border border-neon-cyan/40 text-neon-cyan flex items-center justify-center z-50 cursor-pointer backdrop-blur-sm hover:bg-neon-cyan/30 transition-colors"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
