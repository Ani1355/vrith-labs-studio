import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  dark?: boolean;
}

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular,
  dark,
}: PricingCardProps) => {
  const baseClasses = "rounded-3xl p-8 md:p-10 hover-lift relative";
  const colorClasses = dark
    ? "bg-card-dark text-card-dark-foreground"
    : "bg-card border border-border";

  return (
    <div className={`${baseClasses} ${colorClasses}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className={`text-sm mb-6 ${dark ? 'text-card-dark-foreground/70' : 'text-muted-foreground'}`}>
          {description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold">{price}</span>
          <span className={`text-lg ${dark ? 'text-card-dark-foreground/70' : 'text-muted-foreground'}`}>
            {period}
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${dark ? 'text-card-dark-foreground' : 'text-primary'}`} />
            <span className={dark ? 'text-card-dark-foreground/90' : 'text-foreground'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full rounded-full ${
          dark
            ? 'bg-card-dark-foreground text-card-dark hover:bg-card-dark-foreground/90'
            : ''
        }`}
        variant={dark ? 'default' : 'default'}
        size="lg"
      >
        {cta}
      </Button>
    </div>
  );
};

export default PricingCard;
