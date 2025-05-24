import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CursorFollower from "@/components/CursorFollower";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <CursorFollower />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
