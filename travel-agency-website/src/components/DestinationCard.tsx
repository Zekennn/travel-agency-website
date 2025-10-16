import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

interface DestinationCardProps {
  name: string;
  country: string;
  image: string;
  rating: number;
  price: string;
  type: string;
}

const DestinationCard = ({ name, country, image, rating, price, type }: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-smooth cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`${name}, ${country}`}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-40 group-hover:opacity-30 transition-smooth" />
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
          {type}
        </Badge>
      </div>
      <CardContent className="p-6 bg-gradient-card">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
            <div className="flex items-center text-muted-foreground gap-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{country}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-md">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-semibold text-foreground">{rating}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-primary">${price}</span>
            <span className="text-sm text-muted-foreground">per person</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
