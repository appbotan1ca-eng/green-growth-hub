import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PitchVideoSection from "@/components/PitchVideoSection";
import AboutProjectSection from "@/components/AboutProjectSection";
import WelcomeSection from "@/components/WelcomeSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import TeamSection from "@/components/TeamSection";
import ImplementationSection from "@/components/ImplementationSection";
import MultimediaSection from "@/components/MultimediaSection";
import LibrarySection from "@/components/LibrarySection";
import EnvironmentalImpactSection from "@/components/EnvironmentalImpactSection";
import ManagementSection from "@/components/ManagementSection";
import CommunitySection from "@/components/CommunitySection";
import ElevatorPitchSection from "@/components/ElevatorPitchSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PitchVideoSection />
      <AboutProjectSection />
      <WelcomeSection />
      <MissionVisionSection />
      <TeamSection />
      <ImplementationSection />
      <MultimediaSection />
      <LibrarySection />
      <EnvironmentalImpactSection />
      <ManagementSection />
      <CommunitySection />
      <ElevatorPitchSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
