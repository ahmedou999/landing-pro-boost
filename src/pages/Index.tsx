import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemsSection />
        <AdvantagesSection />
        <PricingSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
