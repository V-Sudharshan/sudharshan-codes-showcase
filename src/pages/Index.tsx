import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import InternshipsSection from "@/components/portfolio/InternshipsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is applied on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header isDark={theme === "dark"} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <EducationSection />
        <InternshipsSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
