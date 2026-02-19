"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile, social } from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { copyToClipboard } from "@/lib/utils";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState("");

  const handleCopy = async (text: string, label: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "6d5cbab6-ef8e-4d7b-b7f5-42d93d327707",
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSent(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const inputBase = "w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/20 focus:border-neon-cyan/30 focus:outline-none focus:bg-white/[0.05] transition-all font-mono";

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Ready to bring your mobile app ideas to life"
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Left - Contact cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            {/* Email */}
            <motion.div
              variants={fadeInLeft}
              onClick={() => handleCopy(profile.email, "email")}
              className="bg-bg-card border border-white/5 rounded-2xl p-5 cursor-pointer hover:border-neon-cyan/20 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                    <i className="fas fa-envelope text-neon-cyan text-sm" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs font-mono uppercase tracking-wider">Email</div>
                    <div className="text-white font-medium text-sm">{profile.email}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neon-green">
                  {copied === "email" ? "COPIED!" : "CLICK TO COPY"}
                </span>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={fadeInLeft}
              onClick={() => window.open(`tel:${profile.phone}`)}
              className="bg-bg-card border border-white/5 rounded-2xl p-5 cursor-pointer hover:border-neon-purple/20 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                  <i className="fas fa-phone text-neon-purple text-sm" />
                </div>
                <div>
                  <div className="text-white/30 text-xs font-mono uppercase tracking-wider">Phone</div>
                  <div className="text-white font-medium text-sm">{profile.phone}</div>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeInLeft}
              className="bg-bg-card border border-white/5 rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-neon-pink/10 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-neon-pink text-sm" />
                </div>
                <div>
                  <div className="text-white/30 text-xs font-mono uppercase tracking-wider">Location</div>
                  <div className="text-white font-medium text-sm">{profile.location}</div>
                </div>
              </div>
            </motion.div>

            {/* Social links row */}
            <motion.div variants={fadeInLeft} className="flex gap-3">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-bg-card border border-white/5 rounded-2xl p-4 flex items-center justify-center gap-2 hover:border-neon-cyan/20 transition-all text-white/40 hover:text-neon-cyan"
              >
                <i className="fab fa-linkedin text-lg" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-bg-card border border-white/5 rounded-2xl p-4 flex items-center justify-center gap-2 hover:border-white/20 transition-all text-white/40 hover:text-white"
              >
                <i className="fab fa-github text-lg" />
                <span className="text-xs font-mono">GitHub</span>
              </a>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={fadeInLeft}
              className="bg-neon-green/5 border border-neon-green/10 rounded-2xl p-4 flex items-center gap-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse" />
              <span className="text-neon-green text-sm font-medium">Open to Remote & On-Site Opportunities</span>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-bg-card border border-white/5 rounded-2xl p-8 space-y-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-neon-cyan" />
                <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Send Message</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/25 text-xs font-mono mb-1.5 block uppercase tracking-wider">Name</label>
                  <input type="text" required placeholder="Your name" value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={inputBase} />
                </div>
                <div>
                  <label className="text-white/25 text-xs font-mono mb-1.5 block uppercase tracking-wider">Email</label>
                  <input type="email" required placeholder="you@email.com" value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={inputBase} />
                </div>
              </div>

              <div>
                <label className="text-white/25 text-xs font-mono mb-1.5 block uppercase tracking-wider">Subject</label>
                <input type="text" required placeholder="What's this about?" value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className={inputBase} />
              </div>

              <div>
                <label className="text-white/25 text-xs font-mono mb-1.5 block uppercase tracking-wider">Message</label>
                <textarea required rows={5} placeholder="Tell me about your project..." value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className={inputBase + " resize-none"} />
              </div>

              {error && (
                <div className="text-red-400 text-xs font-mono bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">
                  {error}
                </div>
              )}

              {sent && (
                <div className="text-neon-green text-xs font-mono bg-neon-green/10 border border-neon-green/20 rounded-lg px-4 py-2">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.01, boxShadow: "0 0 30px rgba(0,240,255,0.2)" }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={sending}
                className="w-full py-4 rounded-xl font-bold text-sm font-mono uppercase tracking-wider bg-neon-cyan text-bg-primary hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all cursor-pointer disabled:opacity-50"
              >
                {sending ? "Sending..." : sent ? "Sent ✓" : "Send Message →"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
