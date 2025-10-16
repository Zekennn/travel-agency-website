import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock } from "lucide-react";

interface TourPackageCardProps {
  title: string;
  duration: string;
  groupSize: string;
  price: string;
  includes: string[];
  featured?: boolean;
}

const TourPackageCard = ({ 
  title, 
  duration, 
  groupSize, 
  price, 
  includes, 
  featured = false 
}: TourPackageCardProps) => {
  return (
    <Card className={`relative overflow-hidden border-0 shadow-soft hover:shadow-strong transition-smooth ${
      featured ? 'bg-gradient-card ring-2 ring-accent' : 'bg-card'
    }`}>
      {featured && (
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground z-10">
          Popular
        </Badge>
      )}
      <CardHeader className="pb-4">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span className="text-sm">{groupSize}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Flexible</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Includes:</p>
          <ul className="space-y-1">
            {includes.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4 border-t border-border space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">${price}</span>
            <span className="text-sm text-muted-foreground">per person</span>
          </div>
          <Button className="w-full" variant={featured ? "hero" : "default"}>
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TourPackageCard;
