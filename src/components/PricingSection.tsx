import PricingCards from "./ui/pricing-component";

const PricingSection = () => {
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

        <PricingCards />

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>All prices in USD. Custom enterprise solutions available upon request.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
