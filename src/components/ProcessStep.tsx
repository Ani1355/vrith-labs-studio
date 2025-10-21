interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  imageAlt: string;
  reversed?: boolean;
}

const ProcessStep = ({ number, title, description, imageAlt, reversed }: ProcessStepProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${reversed ? 'md:grid-flow-col-dense' : ''}`}>
      {/* Content */}
      <div className={`${reversed ? 'md:col-start-2' : ''} space-y-4`}>
        <div className="text-6xl md:text-7xl font-bold text-muted-foreground/20">{number}</div>
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Image */}
      <div className={`${reversed ? 'md:col-start-1 md:row-start-1' : ''}`}>
        <div className="aspect-[4/3] rounded-2xl bg-secondary/50 overflow-hidden hover-lift">
          <img
            src={`https://images.unsplash.com/photo-${getImageId(number)}?auto=format&fit=crop&w=800&q=80`}
            alt={imageAlt}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

// Helper function to get different images for each step
const getImageId = (number: string): string => {
  const imageIds: Record<string, string> = {
    "01": "1553877522-6e6544f80b60", // meeting/consultation
    "02": "1586717799252-bd134ad9b3c4", // design/planning
    "03": "1555066931-4365d14bab8c", // coding/development
    "04": "1�517836357463-6b0a50a1f22e", // launch/celebration
  };
  return imageIds[number] || "1553877522-6e6544f80b60";
};

export default ProcessStep;
