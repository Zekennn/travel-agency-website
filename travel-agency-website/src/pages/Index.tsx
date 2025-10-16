import { Button } from "@/components/ui/button";
import DestinationCard from "@/components/DestinationCard";
import TourPackageCard from "@/components/TourPackageCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Search, Plane, Globe, Headphones, ArrowRight } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import santoriniImg from "@/assets/santorini.jpg";
import baliImg from "@/assets/bali.jpg";
import maldivesImg from "@/assets/maldives.jpg";

const Index = () => {
  const destinations = [
    {
      name: "Santorini",
      country: "Greece",
      image: santoriniImg,
      rating: 4.9,
      price: "1,299",
      type: "Beach & Culture"
    },
    {
      name: "Bali",
      country: "Indonesia",
      image: baliImg,
      rating: 4.8,
      price: "899",
      type: "Adventure"
    },
    {
      name: "Maldives",
      country: "Indian Ocean",
      image: maldivesImg,
      rating: 5.0,
      price: "2,199",
      type: "Luxury Resort"
    }
  ];

  const packages = [
    {
      title: "European Escape",
      duration: "10 Days",
      groupSize: "4-8",
      price: "2,499",
      includes: ["5-star hotels", "All meals", "Guided tours", "Airport transfers"],
      featured: false
    },
    {
      title: "Tropical Paradise",
      duration: "7 Days",
      groupSize: "2-6",
      price: "1,899",
      includes: ["Beach resort", "Water sports", "Spa treatments", "Private excursions"],
      featured: true
    },
    {
      title: "Cultural Journey",
      duration: "14 Days",
      groupSize: "6-12",
      price: "3,299",
      includes: ["Boutique stays", "Cultural experiences", "Local cuisine", "Professional guide"],
      featured: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "WanderLux made our dream honeymoon to the Maldives absolutely perfect. Every detail was thoughtfully planned!"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "The European tour exceeded all expectations. Professional guides and stunning destinations. Highly recommend!"
    },
    {
      name: "Emma Davis",
      location: "London, UK",
      rating: 5,
      text: "From booking to the final day, everything was seamless. Can't wait to book our next adventure with WanderLux!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                WanderLux
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#destinations" className="text-foreground hover:text-primary transition-smooth">
                Destinations
              </a>
              <a href="#packages" className="text-foreground hover:text-primary transition-smooth">
                Packages
              </a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-smooth">
                Reviews
              </a>
              <Button variant="hero" size="sm">
                Book Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src={heroBeach}
            alt="Tropical paradise beach at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 drop-shadow-lg">
            Your Personal Gateway<br />to the World
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Discover breathtaking destinations and create unforgettable memories with expertly curated travel experiences
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group">
              Explore Destinations
              <ArrowRight className="group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button variant="hero-outline" size="lg">
              <Search className="w-5 h-5" />
              Find Your Trip
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hand-picked paradise locations that will take your breath away
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section id="packages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Popular Tour Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully designed itineraries for every type of traveler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TourPackageCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Travelers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our happy adventurers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  WanderLux
                </span>
              </div>
              <p className="text-muted-foreground">
                Your trusted partner for unforgettable travel experiences around the globe.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#destinations" className="hover:text-primary transition-smooth">Destinations</a></li>
                <li><a href="#packages" className="hover:text-primary transition-smooth">Tour Packages</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-smooth">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Travel Guide</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Headphones className="w-4 h-4" />
                  <span>24/7 Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  <span>info@wanderlux.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 WanderLux Travels. Making dreams come true, one journey at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
