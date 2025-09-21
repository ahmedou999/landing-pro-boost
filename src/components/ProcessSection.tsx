import { Phone, FileText, Palette, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Découverte",
      description: "Call de 15 minutes pour comprendre votre business, vos objectifs et votre audience cible.",
      duration: "15 min"
    },
    {
      number: "02", 
      icon: FileText,
      title: "Brief simple",
      description: "Questionnaire rapide pour cerner vos besoins : couleurs, style, contenu, intégrations souhaitées.",
      duration: "5 min"
    },
    {
      number: "03",
      icon: Palette,
      title: "Création & révisions",
      description: "Nous créons votre landing page et vous la présentons. 3 révisions incluses pour l'ajuster.",
      duration: "5-6 jours"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Livraison sous 7 jours",
      description: "Site livré clé en main avec tous les accès et la documentation. Prêt à convertir !",
      duration: "Jour 7"
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              Notre processus en 4 étapes simples
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              De la première discussion à la mise en ligne : un processus rodé pour des résultats garantis.
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