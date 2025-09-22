import { Phone, FileText, Palette, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { language, t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
      duration: "15 min"
    },
    {
      number: "02", 
      icon: FileText,
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
      duration: "5 min"
    },
    {
      number: "03",
      icon: Palette,
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
      duration: language === 'fr' ? '5-6 jours' : '5-6 days'
    },
    {
      number: "04",
      icon: Rocket,
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
      duration: language === 'fr' ? 'Jour 7' : 'Day 7'
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              {t('process.title')}
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line (hidden on mobile and tablet) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border transform translate-x-4 z-0" />
                )}
                
                <div className="bg-card rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-whatsapp text-whatsapp-foreground rounded-full flex items-center justify-center font-bold text-base md:text-lg">
                      {step.number}
                    </div>
                    <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {step.duration}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="p-2 md:p-3 bg-whatsapp/10 rounded-lg w-fit mb-3 md:mb-4">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-whatsapp" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-display font-semibold text-base md:text-lg mb-2 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8">
              <h3 className="font-display font-bold text-xl md:text-2xl mb-3 md:mb-4">
                {language === 'fr' ? 'Prêt à commencer votre projet ?' : 'Ready to start your project?'}
              </h3>
              <p className="text-base md:text-lg text-primary-foreground/90 mb-4 md:mb-6 max-w-2xl mx-auto">
                {language === 'fr' ? 'Démarrons par un échange de 15 minutes pour définir ensemble votre landing page parfaite.' : 'Let\'s start with a 15-minute conversation to define your perfect landing page together.'}
              </p>
              <button 
                onClick={() => window.open(`https://wa.me/33123456789?text=${language === 'fr' ? 'Bonjour, je souhaite démarrer mon projet de landing page' : 'Hello, I want to start my landing page project'}`, '_blank')}
                className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium text-sm md:text-base transition-colors"
              >
                {language === 'fr' ? 'Démarrer mon projet maintenant' : 'Start my project now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;