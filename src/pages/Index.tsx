import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <WhySection />
        <ProcessSection />
        <PricingSection />
        <TestimonialSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
