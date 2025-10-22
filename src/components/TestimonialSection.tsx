import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Vrith Labs turned our rough idea into a fully functional MVP in just 3 weeks. The quality exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      name: "Sarah Chen",
      role: "Founder, TechStart",
    },
    {
      text: "The AI-powered development process was mind-blowing. Fast iterations without compromising on code quality.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
      name: "Michael Rodriguez",
      role: "CTO, DataFlow",
    },
    {
      text: "Best investment we made. The team understood our vision and delivered beyond what we imagined.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
      name: "Emily Watson",
      role: "CEO, GrowthLab",
    },
    {
      text: "From concept to launch in 21 days. We raised our seed round thanks to the MVP Vrith Labs built.",
      image: "https://images.unsplash.com/photo-1500648767791-00a87b8f602f?w=80&h=80&fit=crop",
      name: "David Kim",
      role: "Founder, FinanceAI",
    },
    {
      text: "The attention to detail and modern tech stack gave us a competitive edge from day one.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
      name: "Lisa Anderson",
      role: "Product Lead, CloudSync",
    },
    {
      text: "Exceptional communication, transparent process, and a product that our users love. Highly recommend.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop",
      name: "James Thompson",
      role: "Founder, UserMetrics",
    },
  ];

  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section className="py-20 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mt-5">
            Loved by Founders
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            Join the growing community of successful founders who launched their MVPs with Vrith Labs.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
