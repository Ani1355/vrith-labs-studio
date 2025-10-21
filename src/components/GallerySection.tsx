const GallerySection = () => {
  const projects = [
    { id: "1460925895917-afdab827c52f", alt: "E-commerce dashboard" },
    { id: "1551288049-1bf046b4a6b2", alt: "Mobile app interface" },
    { id: "1551033406-611cf9a28f67", alt: "Analytics platform" },
    { id: "1557853197-aefb550b6a62", alt: "Social platform" },
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-card-dark text-card-dark-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block text-8xl md:text-9xl font-black opacity-5 mb-8">2024</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Recent Launches
          </h2>
          <p className="text-lg text-card-dark-foreground/70 max-w-2xl mx-auto">
            A glimpse at the MVPs we've helped launch this year. Each one built in 21 days or less.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl overflow-hidden bg-card-dark-foreground/5 hover-lift cursor-pointer group"
            >
              <img
                src={`https://images.unsplash.com/photo-${project.id}?auto=format&fit=crop&w=600&q=80`}
                alt={project.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
