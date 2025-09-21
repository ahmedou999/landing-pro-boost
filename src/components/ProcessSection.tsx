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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border transform translate-x-4 z-0" />
                )}
                
                <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-whatsapp text-whatsapp-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {step.duration}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="p-3 bg-whatsapp/10 rounded-lg w-fit mb-4">
                    <step.icon className="w-6 h-6 text-whatsapp" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2 text-primary">
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
          <div className="text-center mt-16">
            <div className="bg-primary text-primary-foreground rounded-xl p-8">
              <h3 className="font-display font-bold text-2xl mb-4">
                Prêt à commencer votre projet ?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Démarrons par un call de 15 minutes pour définir ensemble votre landing page parfaite.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/33123456789?text=Bonjour, je souhaite démarrer mon projet de landing page', '_blank')}
                className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Démarrer mon projet maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;