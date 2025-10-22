import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance">
            Launch Your MVP in 21 Days
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 mx-auto max-w-3xl">
            Founder-led, AI-powered, done-for-you MVPs and landing pages. From idea to launch, Vrith Labs moves at startup speed.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button 
              size="lg" 
              className="rounded-full text-base px-8 font-semibold h-12 shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.23)] hover:scale-105 transition-all"
            >
              Book Your Consultation
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="rounded-full text-base px-8 hover:scale-105 transition-transform"
            >
              See Pricing Plans
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-muted-foreground">
            Trusted by 20+ founders | 40+ MVP launches | $2M+ raised | 4.95 rating
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
