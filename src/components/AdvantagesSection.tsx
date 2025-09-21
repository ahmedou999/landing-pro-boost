import { Smartphone, PenTool, Link, Server } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AdvantagesSection = () => {
  const { t } = useLanguage();
  
  const advantages = [
    {
      icon: Smartphone,
      title: t('advantages.advantage1.title'),
      description: t('advantages.advantage1.desc')
    },
    {
      icon: PenTool,
      title: t('advantages.advantage2.title'),
      description: t('advantages.advantage2.desc')
    },
    {
      icon: Link,
      title: t('advantages.advantage3.title'),
      description: t('advantages.advantage3.desc')
    },
    {
      icon: Server,
      title: t('advantages.advantage4.title'),
      description: t('advantages.advantage4.desc')
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              {t('advantages.title')}
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              {t('advantages.subtitle')}
            </p>
          </div>
          
          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="p-4 bg-whatsapp/10 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="w-8 h-8 text-whatsapp" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-3 text-primary">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-whatsapp/5 to-success/5 rounded-xl p-8">
              <h3 className="font-display font-semibold text-2xl text-primary mb-4">
                Prêt à booster vos conversions ?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Découvrez comment nous pouvons transformer votre business avec une landing page qui convertit.
              </p>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-whatsapp"
              >
                Voir nos tarifs et démarrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;