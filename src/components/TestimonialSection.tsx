import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Vrith Labs turned our rough idea into a fully functional MVP in just 3 weeks. The quality exceeded our expectations.",
      author: "Sarah Chen",
      role: "Founder, TechStart",
      avatar: "1494790108377-be9c29b29330",
    },
    {
      quote: "The AI-powered development process was mind-blowing. Fast iterations without compromising on code quality.",
      author: "Michael Rodriguez",
      role: "CTO, DataFlow",
      avatar: "1472099645785-5658abf4ff4e",
    },
    {
      quote: "Best investment we made. The team understood our vision and delivered beyond what we imagined.",
      author: "Emily Watson",
      role: "CEO, GrowthLab",
      avatar: "1438761681033-6461ffad8d80",
    },
    {
      quote: "From concept to launch in 21 days. We raised our seed round thanks to the MVP Vrith Labs built.",
      author: "David Kim",
      role: "Founder, FinanceAI",
      avatar: "1500648767791-00a87b8f602f",
    },
    {
      quote: "The attention to detail and modern tech stack gave us a competitive edge from day one.",
      author: "Lisa Anderson",
      role: "Product Lead, CloudSync",
      avatar: "1534528741775-53994a69daeb",
    },
    {
      quote: "Exceptional communication, transparent process, and a product that our users love. Highly recommend.",
      author: "James Thompson",
      role: "Founder, UserMetrics",
      avatar: "1506794778202-cad84cf45f1d",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Loved by Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the growing community of successful founders who launched their MVPs with Vrith Labs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
