import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CareerSection from "@/sections/CareerSection";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CareerSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
