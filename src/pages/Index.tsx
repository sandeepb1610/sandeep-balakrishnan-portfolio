import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import CoreSpecializations from "@/components/CoreSpecializations";
import TrustedBy from "@/components/TrustedBy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExecutiveSummary />
      <CoreSpecializations />
      <TrustedBy />
      <Footer />
    </div>
  );
};

export default Index;
