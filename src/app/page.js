import HeroSection from "@/es/components/HeroSection";
import Navbar from "@/es/components/Navbar";
import AboutSection from "@/es/components/AboutSection";
import ProjectsSection from "@/es/components/ProjectsSection";
import EmailSection from "@/es/components/EmailSection";
import Footer from "@/components/Footer";
import AchievementsSection from "@/es/components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <Navbar />
      <div className="container mt-14 mx-auto px-6 py-4 overflow-hidden">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
