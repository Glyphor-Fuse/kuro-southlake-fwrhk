import React from 'react';
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="bg-background py-24 overflow-hidden border-b border-border/20">
      <LampContainer className="pt-20">
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-foreground to-muted-foreground py-4 bg-clip-text text-center text-4xl font-display font-medium tracking-tight text-transparent md:text-7xl"
        >
          The Art of <br /> Earthy Umami
        </motion.h2>
      </LampContainer>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center -mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm bg-card"
        >
          <img 
            src="/images/chef-profile.png" 
            alt="Executive Chef" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 border-[15px] border-background/40 pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1 border border-primary text-primary text-xs tracking-widest uppercase">
            Culinary Heritage
          </div>
          <h3 className="text-4xl font-display font-bold leading-tight">
            Where Japanese Precision Meets Texas Fire.
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Led by Executive Chef Kenji Sato, Kuro Southlake is a celebration of the legendary Wagyu cattle. Our philosophy centers on 'Honmono'—the authentic pursuit of excellence. From the meticulous 45-day aging process to the theatrical Binchotan charcoal searing, every plate is a masterclass in texture and depth.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
              <span className="block text-2xl font-display font-bold text-accent">A5 Cert</span>
              <span className="text-xs uppercase tracking-tighter text-muted-foreground">Certified Wagyu</span>
            </div>
            <div>
              <span className="block text-2xl font-display font-bold text-accent">800°C</span>
              <span className="text-xs uppercase tracking-tighter text-muted-foreground">Binchotan Heat</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
