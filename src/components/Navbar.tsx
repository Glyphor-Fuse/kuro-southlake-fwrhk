import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <div className="flex items-center gap-8">
        <span className="text-2xl font-display font-bold tracking-[0.2em] text-foreground">KURO</span>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Experience</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#location" className="hover:text-primary transition-colors">Visit</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a 
          href="#menu" 
          className="px-6 py-2 bg-primary text-primary-foreground font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-opacity rounded-none"
        >
          View Menu
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
