import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-steak.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Southlake's Premier Wagyu Destination
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-foreground leading-tight mb-8">
            FIRE. MARBLE. <br />
            <span className="italic text-accent">SOUL.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <a 
              href="#menu"
              className="group relative px-12 py-5 bg-primary text-primary-foreground font-bold tracking-widest uppercase overflow-hidden"
            >
              <span className="relative z-10">Explore the Menu</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a 
              href="#location"
              className="px-12 py-5 border border-foreground/20 hover:bg-foreground/5 text-foreground font-bold tracking-widest uppercase transition-colors"
            >
              Book Your Table
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
