import { Smartphone, PenTool, Link, Server } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Smartphone,
      title: "Design responsive (mobile-first)",
      description: "Parfaitement optimisé pour tous les écrans. 70% de vos visiteurs sont sur mobile, votre page sera donc conçue en priorité pour eux."
    },
    {
      icon: PenTool,
      title: "Copywriting orienté résultats",
      description: "Textes persuasifs basés sur la psychologie de la vente. Chaque mot est choisi pour inciter à l'action."
    },
    {
      icon: Link,
      title: "Intégration simple",
      description: "WhatsApp, Calendly, email marketing... Tous vos outils connectés en quelques clics pour automatiser vos ventes."
    },
    {
      icon: Server,
      title: "Hébergement + gestion inclus",
      description: "Plus de tracas techniques. Nous nous occupons de tout : sécurité, mises à jour, sauvegardes pour seulement 25 €/mois."
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              Pourquoi choisir nos landing pages ?
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              Nous combinons design moderne, copywriting persuasif et technologie pour maximiser vos conversions.
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