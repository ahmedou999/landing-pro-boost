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
            
            <div className="bg-primary-foreground/10 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-whatsapp rounded-full"></div>
                  <span>{t('final.delivery')}</span>
                </div>
                <div className="w-px h-4 bg-primary-foreground/30"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-whatsapp rounded-full"></div>
                  <span>{t('final.revisions')}</span>
                </div>  
                <div className="w-px h-4 bg-primary-foreground/30"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-whatsapp rounded-full"></div>
                  <span>{t('final.support')}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground px-8 py-4 text-lg font-semibold w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-200" onClick={() => window.open(`https://wa.me/33123456789?text=${language === 'fr' ? 'Bonjour, je veux démarrer mon projet de landing page maintenant !' : 'Hello, I want to start my landing page project now!'}`, '_blank')}>
              <MessageCircle className="w-6 h-6" />
              {t('final.cta.primary')}
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-black bg-white text-black hover:bg-gray-100 hover:text-black px-8 py-4 text-lg w-full sm:w-auto" onClick={() => window.open('https://calendly.com/landingpro/consultation', '_blank')}>
              <Calendar className="w-6 h-6" />
              {t('final.cta.secondary')}
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