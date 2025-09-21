import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-display font-bold text-xl text-primary">
            LandingPro
          </div>
          
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('advantages')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Avantages
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Processus
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Offre
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              className="btn-whatsapp text-sm"
              onClick={() => window.open('https://wa.me/33123456789?text=Bonjour, je souhaite obtenir une landing page haute conversion', '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Discuter sur WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
            
            <Button
              variant="outline"
              className="btn-secondary text-sm hidden sm:inline-flex"
              onClick={() => window.open('https://calendly.com/landingpro/consultation', '_blank')}
            >
              <Calendar className="w-4 h-4" />
              Réserver un appel
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;