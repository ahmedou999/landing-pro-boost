import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const FinalCTA = () => {
  const { language, t } = useLanguage();
  
  return <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-whatsapp/20 to-transparent"></div>
      </div>
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main CTA Content */}
          <div className="space-y-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight">
              {t('final.title')}
            </h2>
            
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              {t('final.subtitle')}
            </p>
            
            <div className="bg-primary-foreground/10 rounded-xl p-4 md:p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-primary-foreground/80 text-sm md:text-base">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-whatsapp rounded-full flex-shrink-0"></div>
                  <span className="text-center">{t('final.delivery')}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-whatsapp rounded-full flex-shrink-0"></div>
                  <span className="text-center">{t('final.revisions')}</span>
                </div>  
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-whatsapp rounded-full flex-shrink-0"></div>
                  <span className="text-center">{t('final.support')}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full max-w-sm sm:max-w-md shadow-lg hover:shadow-xl transition-all duration-200" 
              onClick={() => window.open(`https://wa.me/33123456789?text=${language === 'fr' ? 'Bonjour, je veux démarrer mon projet de landing page maintenant !' : 'Hello, I want to start my landing page project now!'}`, '_blank')}
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span className="text-center">{t('final.cta.primary')}</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            </Button>
          </div>
          
          {/* Trust Elements */}
          <div className="pt-8 border-t border-primary-foreground/20">
            
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTA;