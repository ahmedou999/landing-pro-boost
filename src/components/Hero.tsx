import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, CheckCircle, Clock, RotateCcw, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-subtle pt-20">
      <div className="section-container py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4 animate-in fade-in duration-700">
            <h1 className="hero-title">
              {t('hero.title')}
            </h1>
            
            <p className="subtitle max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex justify-center animate-in slide-in-from-bottom-4 duration-700">
            <Button
              className="btn-whatsapp text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full max-w-sm sm:max-w-md"
              onClick={() => window.open(`https://wa.me/33123456789?text=${language === 'fr' ? 'Bonjour, je souhaite obtenir une landing page haute conversion' : 'Hello, I would like to get a high-conversion landing page'}`, '_blank')}
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-center">{t('hero.cta.primary')}</span>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto pt-8 md:pt-12 animate-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-center space-x-2 md:space-x-3 text-muted-foreground text-sm md:text-base">
              <div className="p-1.5 md:p-2 bg-success/10 rounded-full flex-shrink-0">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success" />
              </div>
              <span className="font-medium text-center">{t('hero.guarantee.delivery')}</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 md:space-x-3 text-muted-foreground text-sm md:text-base">
              <div className="p-1.5 md:p-2 bg-success/10 rounded-full flex-shrink-0">
                <RotateCcw className="w-4 h-4 md:w-5 md:h-5 text-success" />
              </div>
              <span className="font-medium text-center">{t('hero.guarantee.revisions')}</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 md:space-x-3 text-muted-foreground text-sm md:text-base sm:col-span-2 lg:col-span-1">
              <div className="p-1.5 md:p-2 bg-success/10 rounded-full flex-shrink-0">
                <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-success" />
              </div>
              <span className="font-medium text-center">{t('hero.guarantee.hosting')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;