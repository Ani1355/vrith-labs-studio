import { Timeline } from "@/components/ui/timeline";

const GallerySection = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            Launched multiple SaaS products and e-commerce platforms. Built with modern stack and deployed in record time.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
              alt="Analytics dashboard"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-1bf046b4a6b2?auto=format&fit=crop&w=600&q=80"
              alt="Mobile interface"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=600&q=80"
              alt="E-commerce platform"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1557853197-aefb550b6a62?auto=format&fit=crop&w=600&q=80"
              alt="Social platform"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Q3 2024",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            Helped startups bring their vision to life with rapid prototyping and iterative development.
          </p>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            From fintech solutions to healthcare platforms, we've delivered MVPs that scale.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
              alt="Team collaboration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Product development"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80"
              alt="Design sprint"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80"
              alt="Launch day"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Recent",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Latest launches and product updates
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ AI-powered analytics platform
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ Real-time collaboration tool
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ Customer engagement dashboard
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ Automated workflow system
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ Multi-tenant SaaS platform
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80"
              alt="Product showcase"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80"
              alt="Analytics dashboard"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
              alt="Workspace"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
              alt="Code review"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg hover-lift"
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <Timeline data={timelineData} />
    </section>
  );
};

export default GallerySection;
