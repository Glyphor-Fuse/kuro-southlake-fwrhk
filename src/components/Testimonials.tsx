import React from 'react';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The marbling on the A5 was unlike anything I've experienced. Southlake finally has a true theatrical dining destination that matches the quality of Tokyo.",
      name: "Marcus Sterling",
      designation: "Fine Dining Enthusiast",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      quote: "Beyond the steak, the cocktail program is revolutionary. The Kuro Martini is a masterpiece of savory and sweet balance.",
      name: "Elena Rodriguez",
      designation: "Southlake Local",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    {
      quote: "Chef Sato's philosophy of Earthy Umami is evident in every bite. The forest green accents and warm wood create such a grounding atmosphere.",
      name: "Julian Vane",
      designation: "Food Critic",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-background py-32 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-4">Guest Perspectives</h2>
          <h3 className="text-5xl font-display font-bold">Resonating Excellence</h3>
      </div>
      <div className="px-6">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default Testimonials;
