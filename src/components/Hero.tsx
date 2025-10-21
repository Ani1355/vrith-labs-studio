import { Button } from "@/components/ui/button";
import StatCard from "./StatCard";

const Hero = () => {
  const stats = [
    { value: "21", label: "Days", color: "blue" },
    { value: "40+", label: "Products Launched", color: "purple" },
    { value: "$2M+", label: "Funds Raised", color: "amber" },
    { value: "4.95", label: "Avg Rating", color: "blue" },
  ];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <div className="md:col-span-7 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance">
              Launch Your MVP in 21 Days
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Founder-led, AI-powered, done-for-you MVPs and landing pages. From idea to launch, Vrith Labs moves at startup speed.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="rounded-full text-base px-8 hover:scale-105 transition-transform">
                Book Your Consultation
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-base px-8 hover:scale-105 transition-transform">
                See Pricing Plans
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="text-sm text-muted-foreground">
              Trusted by 20+ founders | 40+ MVP launches | $2M+ raised | 4.95 rating
            </div>
          </div>

          {/* Stat Cards */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4 animate-slide-up">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                color={stat.color as "blue" | "purple" | "amber"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
