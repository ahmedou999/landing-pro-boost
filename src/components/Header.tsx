import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="section-container py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-display font-bold text-lg md:text-xl text-primary flex-shrink-0">
            LandingPro
          </div>
          
          {/* Navigation Links - Hidden on mobile, optimized for tablet */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors text-sm"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('advantages')}
              className="text-foreground hover:text-primary transition-colors text-sm"
            >
              {t('nav.advantages')}
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-foreground hover:text-primary transition-colors text-sm"
            >
              {t('nav.process')}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors text-sm"
            >
              {t('nav.offer')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors text-sm"
            >
              {t('nav.faq')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors text-sm"
            >
              {t('nav.contact')}
            </button>
          </div>
          
          {/* Language Selector & CTA Buttons - Optimized for tablet */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Selector */}
            <div className="flex items-center bg-background border border-border rounded-md overflow-hidden">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 md:px-3 py-1 text-xs md:text-sm font-medium transition-colors ${
                  language === 'fr' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                FR
              </button>
              <div className="w-px h-3 md:h-4 bg-border"></div>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 md:px-3 py-1 text-xs md:text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                EN
              </button>
            </div>
            
            <Button
              className="btn-whatsapp text-xs md:text-sm px-2 md:px-3 py-1.5 md:py-2"
              onClick={() => window.open(`https://wa.me/33123456789?text=${language === 'fr' ? 'Bonjour, je souhaite obtenir une landing page haute conversion' : 'Hello, I would like to get a high-conversion landing page'}`, '_blank')}
            >
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="hidden sm:inline">{t('cta.whatsapp')}</span>
              <span className="sm:hidden">{t('cta.whatsapp.short')}</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;