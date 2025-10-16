import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const TestimonialCard = ({ name, location, rating, text }: TestimonialCardProps) => {
  return (
    <Card className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-card">
      <CardContent className="p-6 space-y-4">
        <Quote className="w-8 h-8 text-accent opacity-50" />
        <p className="text-muted-foreground italic leading-relaxed">{text}</p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
