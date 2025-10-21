interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialCard = ({ quote, author, role, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover-lift">
      <p className="text-foreground/90 mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3">
        <img
          src={`https://images.unsplash.com/photo-${avatar}?auto=format&fit=crop&w=80&h=80&q=80`}
          alt={author}
          className="w-12 h-12 rounded-full object-cover grayscale"
          loading="lazy"
        />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
