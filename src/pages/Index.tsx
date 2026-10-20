import Navbar from "@/components/Navbar";
import ScrollScene from "@/components/ScrollScene";
import MissionVisionSection from "@/components/MissionVisionSection";
import TeamSection from "@/components/TeamSection";
import ElevatorPitchSection from "@/components/ElevatorPitchSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollScene />
      <MissionVisionSection />
      <TeamSection />
      <ElevatorPitchSection />
      <Footer />
    </div>
  );
};

export default Index;
