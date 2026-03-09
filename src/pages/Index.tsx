import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FacilitiesSection />
    <ServicesSection />
    <PricingSection />
    <FooterSection />
  </div>
);

export default Index;
