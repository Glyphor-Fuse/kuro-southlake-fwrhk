import React from 'react';
import { motion } from 'framer-motion';
import { FocusCards } from '@/components/ui/focus-cards';

const WagyuGallery = () => {
  const cards = [
    {
      title: "Hokkaido A5 Ribeye",
      src: "/images/wagyu-raw.png",
      description: "BMS 12 marbling, melt-in-your-mouth texture with truffle salt.",
    },
    {
      title: "The Smokehouse Platter",
      src: "/images/wagyu-plated.png",
      description: "Chef's selection of three cuts, finished tableside with cherry wood smoke.",
    },
    {
      title: "The Kuro Martini",
      src: "/images/cocktail.png",
      description: "Japanese Gin infused with nori, garnished with a single frozen grape.",
    },
    {
      title: "Interior Sanctuary",
      src: "/images/interior.png",
      description: "An intimate escape of reclaimed wood and emerald silk.",
    },
  ];

  return (
    <section id="gallery" className="bg-card py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase mb-4">The Collection</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold">Wagyu Marble & Smoke</h3>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Hover to focus on the intricate details of our signature offerings. Each dish is a symphony of fat, fire, and fermentation.
          </p>
        </div>

        <FocusCards cards={cards} />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 border border-border bg-background hover:border-primary transition-all group"
            >
                <h4 className="text-xl font-display font-bold mb-4 group-hover:text-primary">Marbling Score</h4>
                <p className="text-sm text-muted-foreground">We exclusively source A5 grade beef with a Marbling Score of 10 or higher for peak richness.</p>
            </motion.div>
            <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 border border-border bg-background hover:border-primary transition-all group"
            >
                <h4 className="text-xl font-display font-bold mb-4 group-hover:text-primary">Sake Pairing</h4>
                <p className="text-sm text-muted-foreground">Our Sommelier-curated list features rare Junmai Daiginjo labels from artisanal breweries.</p>
            </motion.div>
            <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 border border-border bg-background hover:border-primary transition-all group"
            >
                <h4 className="text-xl font-display font-bold mb-4 group-hover:text-primary">Tableside Service</h4>
                <p className="text-sm text-muted-foreground">Experience the ritual of our charcoal finishing service, bringing the kitchen to your seat.</p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WagyuGallery;
