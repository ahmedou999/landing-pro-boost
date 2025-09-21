import { Button } from "@/components/ui/button";
import { Check, Star, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="pricing" className="py-20 bg-surface">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              {t('pricing.title')}
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Landing Page Pack */}
            <div className="bg-card rounded-xl p-8 shadow-lg border-2 border-whatsapp/20 relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-whatsapp text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                <Star className="w-4 h-4 inline mr-1" />
                Populaire
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2">
                    {t('pricing.pack.title')}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-display font-bold text-4xl text-primary">{t('pricing.pack.price')}</span>
                    <span className="text-muted-foreground">{t('pricing.pack.subtitle')}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {[
                    t('pricing.pack.feature1'),
                    t('pricing.pack.feature2'),
                    t('pricing.pack.feature3'),
                    t('pricing.pack.feature4'),
                    t('pricing.pack.feature5'),
                    t('pricing.pack.feature6')
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className="btn-whatsapp w-full text-lg py-4"
                  onClick={() => window.open(`https://wa.me/33123456789?text=${language === 'fr' ? 'Bonjour, je souhaite commander le Pack Landing Page à 890€' : 'Hello, I would like to order the Complete Landing Page Package at €890'}`, '_blank')}
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('pricing.pack.cta')}
                </Button>
              </div>
            </div>
            
            {/* Monthly Subscription */}
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2">
                    {t('pricing.hosting.title')}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-display font-bold text-4xl text-primary">{t('pricing.hosting.price')}</span>
                    <span className="text-muted-foreground">{t('pricing.hosting.subtitle')}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {language === 'fr' ? 'Recommandé après la livraison' : 'Recommended after delivery'}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {[
                    t('pricing.hosting.feature1'),
                    t('pricing.hosting.feature2'),
                    t('pricing.hosting.feature3'),
                    t('pricing.hosting.feature4'),
                    t('pricing.hosting.feature5'),
                    t('pricing.hosting.feature6')
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="outline"
                  className="btn-secondary w-full text-lg py-4"
                  onClick={() => window.open(`https://wa.me/33123456789?text=${language === 'fr' ? 'Bonjour, je souhaite en savoir plus sur l\'abonnement mensuel' : 'Hello, I would like to know more about the monthly subscription'}`, '_blank')}
                >
                  {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Guarantee */}
          <div className="bg-gradient-to-r from-whatsapp/5 to-success/5 rounded-xl p-6 mt-12 text-center">
            <h4 className="font-display font-semibold text-lg text-primary mb-2">
              💡 Garantie qualité
            </h4>
            <p className="text-muted-foreground">
              Nous ne proposons pas de remboursement, mais <strong>trois révisions sont incluses</strong> pour s'assurer que la page corresponde parfaitement à vos attentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;