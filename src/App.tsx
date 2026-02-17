import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import WagyuGallery from "@/components/WagyuGallery";
import MenuCTA from "@/components/MenuCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground font-body selection:bg-primary/30 selection:text-primary">
          <Navbar />
          <Hero />
          <Philosophy />
          <WagyuGallery />
          <MenuCTA />
          <Testimonials />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
