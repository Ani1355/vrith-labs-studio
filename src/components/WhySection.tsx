import { Zap, Users, Rocket, Code } from "lucide-react";

const WhySection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Move at Startup Speed",
      description: "Fast iterations with AI-powered development that doesn't compromise on quality.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Work directly with founder-led experts who understand your vision.",
    },
    {
      icon: Code,
      title: "Product-First Engineering",
      description: "Clean, scalable code built with modern best practices from day one.",
    },
    {
      icon: Rocket,
      title: "Launch Ready",
      description: "From MVP to market in 21 days with everything you need to succeed.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Benefits List */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
              Why Vrith Labs?
            </h2>
            
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Dark Feature Card */}
          <div className="bg-card-dark text-card-dark-foreground rounded-3xl p-8 md:p-12 flex flex-col justify-center hover-lift">
            <div className="text-6xl md:text-7xl font-bold mb-6 opacity-20">21</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              From Zero to Launch in Three Weeks
            </h3>
            <p className="text-card-dark-foreground/70 text-lg leading-relaxed">
              Our proven process combines AI efficiency with human expertise to deliver production-ready MVPs that founders love. No compromise on quality, no months of waiting.
            </p>
            <div className="mt-8 pt-8 border-t border-card-dark-foreground/10">
              <div className="text-sm text-card-dark-foreground/50 mb-2">Average project timeline</div>
              <div className="text-4xl font-bold">21 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
