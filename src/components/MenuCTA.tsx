import React from 'react';
import { motion } from 'framer-motion';

const MenuCTA = () => {
  return (
    <section id="menu" className="relative py-32 bg-muted overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Taste the <br /><span className="text-primary">Extraordinary.</span></h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-lg">
                Explore our full culinary curation, from chilled raw bar selections to our signature wood-fired Wagyu flights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-5 bg-primary text-primary-foreground font-bold tracking-widest uppercase hover:bg-primary/90 transition-all flex items-center justify-between group">
                    Dinner Menu
                    <span className="ml-4 group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button className="px-10 py-5 bg-accent text-accent-foreground font-bold tracking-widest uppercase hover:bg-accent/90 transition-all flex items-center justify-between group">
                    Drinks & Spirits
                    <span className="ml-4 group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div 
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="aspect-square bg-card overflow-hidden shadow-2xl"
            >
                <img src="/images/wagyu-raw.png" className="w-full h-full object-cover" alt="Wagyu Marbling" />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="aspect-square bg-card mt-12 overflow-hidden shadow-2xl"
            >
                <img src="/images/cocktail.png" className="w-full h-full object-cover" alt="Japanese Cocktail" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCTA;
