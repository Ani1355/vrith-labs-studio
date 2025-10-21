import PricingCard from "./PricingCard";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$1,299",
      period: "/month",
      description: "Perfect for validating your idea with a functional MVP",
      features: [
        "1 product per month",
        "Core feature development",
        "Basic design system",
        "Responsive web app",
        "2 weeks delivery",
        "Email support",
      ],
      cta: "Book a Call",
      popular: false,
      dark: false,
    },
    {
      name: "Pro",
      price: "$2,299",
      period: "/month",
      description: "Full-featured MVP with premium design and faster delivery",
      features: [
        "2 products per month",
        "Advanced features & integrations",
        "Custom design system",
        "Responsive web + mobile",
        "Priority development",
        "Dedicated support",
        "Launch assistance",
        "Post-launch updates (30 days)",
      ],
      cta: "Book a Call",
      popular: true,
      dark: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your startup journey. All plans include our proven 21-day delivery process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>All prices in USD. Custom enterprise solutions available upon request.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
