import HeroSection from "./components/HeroSection";
import TechStackSection from "./components/TechStackSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import AwardsSection from "./components/AwardSection";
import HitMeUpSection from "./components/HitMeUpSection";
import { FaArrowDownLong } from "react-icons/fa6";

const Home = () => {
  return (
    <main className="bg-black flex flex-col min-h-screen">
      <div className="container mt-24 mx-auto px-4 py-4">
        <HeroSection />
        <FaArrowDownLong className="text-white text-4xl mx-auto my-32 animate-bounce w-6 h-6" />
        <TechStackSection />
        <ProjectSection />
        <ExperienceSection />
        <AwardsSection />
        <HitMeUpSection />
      </div>
    </main>
  );
};

export default Home;
