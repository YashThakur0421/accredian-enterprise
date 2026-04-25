import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProgramsSection from "@/components/ProgramsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <ProgramsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
