"use client";

import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Background from "@/components/layout/Background";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import AppStoreSection from "@/components/sections/AppStoreSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Background />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ExperienceSection />
        <ContactSection />
        <AppStoreSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
