import ProcessStep from "./ProcessStep";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We dive deep into your vision, target market, and business goals. Together, we map out the core features that will make your MVP successful.",
      imageAlt: "Consultation meeting with founder",
    },
    {
      number: "02",
      title: "Strategy & Design",
      description: "Our team creates a detailed product roadmap, user flows, and high-fidelity designs. You'll see exactly what we're building before we write a single line of code.",
      imageAlt: "Strategy and design process",
    },
    {
      number: "03",
      title: "Development",
      description: "AI-powered development meets human expertise. We build your MVP with clean, scalable code using modern frameworks and best practices.",
      imageAlt: "Development workspace",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We don't just deliver code—we help you launch successfully. From deployment to user feedback integration, we're with you every step.",
      imageAlt: "Product launch celebration",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Move at Startup Speed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process gets you from idea to launch in 21 days, with full transparency every step of the way.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              imageAlt={step.imageAlt}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
