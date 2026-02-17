import React from 'react';
import { MapPin, Clock, Car, Phone, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="location" className="bg-card pt-24 pb-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-3xl font-display font-bold tracking-[0.2em] text-foreground">KURO</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Modern Wagyu Steakhouse & Fine Dining. An exploration of Japanese fire-grilling and sophisticated organic luxury.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">IG</a>
               <a href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">FB</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Location
            </h4>
            <div className="text-muted-foreground text-sm space-y-1">
                <p>1234 Park Village Blvd</p>
                <p>Southlake, TX 76092</p>
            </div>
            <h4 className="text-sm font-bold tracking-widest uppercase flex items-center gap-2 pt-4">
                <Car className="w-4 h-4 text-primary" /> Parking
            </h4>
            <p className="text-muted-foreground text-sm">
                Complimentary valet service available daily. Reserved self-parking in the rear lot.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Hours
            </h4>
            <div className="text-muted-foreground text-sm space-y-2">
                <div className="flex justify-between">
                    <span>Tue - Thu</span>
                    <span>5 PM - 10 PM</span>
                </div>
                <div className="flex justify-between">
                    <span>Fri - Sat</span>
                    <span>5 PM - 11 PM</span>
                </div>
                <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>5 PM - 9 PM</span>
                </div>
                <div className="flex justify-between text-accent font-semibold">
                    <span>Monday</span>
                    <span>Closed</span>
                </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" /> Holiday Schedule
            </h4>
            <div className="text-muted-foreground text-sm space-y-2">
                <p>Closed for Thanksgiving & Christmas Day.</p>
                <p className="text-primary font-bold">New Year's Eve: Special Omakase Only.</p>
            </div>
            <div className="pt-6">
                <a href="tel:5550123" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" /> (555) 123-4567
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground tracking-widest uppercase">
            <span>© 2024 Kuro Southlake. All Rights Reserved.</span>
            <div className="flex gap-6">
                <a href="#" className="hover:text-foreground">Privacy Policy</a>
                <a href="#" className="hover:text-foreground">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
