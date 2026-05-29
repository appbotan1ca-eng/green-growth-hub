import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PitchVideoSection from "@/components/PitchVideoSection";
import WelcomeSection from "@/components/WelcomeSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import TeamSection from "@/components/TeamSection";
import ElevatorPitchSection from "@/components/ElevatorPitchSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PitchVideoSection />
      <WelcomeSection />
      <MissionVisionSection />
      <TeamSection />
      <ElevatorPitchSection />
      <Footer />
    </div>
  );
};

export default Index;
