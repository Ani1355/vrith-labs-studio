import { Target, Code2, Layers, Zap } from "lucide-react";

const WhySection = () => {
  const traditionalPoints = [
    "Hire full engineering team",
    "3-6 months development time",
    "$100K+ upfront investment",
    "Technical debt and pivots",
  ];

  const vrithLabsPoints = [
    "Startup-ready products in record time",
    "AI-driven, production-grade development",
    "Transparent, founder-first pricing",
    "Rapid iteration and support",
  ];

  const features = [
    {
      icon: Target,
      title: "Founder-First Approach",
      description: "We understand startup challenges and build with your vision in mind.",
    },
    {
      icon: Code2,
      title: "Production-Grade Code",
      description: "Enterprise-quality code that scales with your business.",
    },
    {
      icon: Layers,
      title: "Modern Tech Stack",
      description: "Latest technologies for performance and maintainability.",
    },
    {
      icon: Zap,
      title: "Rapid Iteration",
      description: "Quick pivots and updates based on user feedback.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Vrith Labs?
          </h2>
          <p className="text-muted-foreground text-lg">
            Move faster than the competition with our founder-first approach.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Traditional Approach */}
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6">
              <div className="w-6 h-6 rounded-full border-2 border-foreground/20"></div>
            </div>
            <h3 className="text-2xl font-bold mb-6">Traditional Approach</h3>
            <ul className="space-y-4">
              {traditionalPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0 mt-0.5"></div>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vrith Labs Way */}
          <div className="bg-card-dark text-card-dark-foreground rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <div className="w-6 h-6 rounded-full bg-white"></div>
            </div>
            <h3 className="text-2xl font-bold mb-6">Vrith Labs Way</h3>
            <ul className="space-y-4">
              {vrithLabsPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-white flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-card-dark-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 border border-border hover-lift">
              <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
