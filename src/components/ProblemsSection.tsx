import { AlertTriangle, Users, Clock, Target } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: Users,
      title: "Trop de visiteurs mais peu de clients",
      description: "Votre site attire du trafic mais ne convertit pas vos visiteurs en clients payants."
    },
    {
      icon: AlertTriangle,
      title: "Pas de crédibilité en ligne",
      description: "Votre présence digitale ne reflète pas le professionnalisme de votre expertise."
    },
    {
      icon: Clock,
      title: "Trop de temps perdu à expliquer",
      description: "Vous passez des heures à expliquer votre offre au lieu de vendre."
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              Ces problèmes vous empêchent de développer votre business
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              Sans une landing page optimisée, vous perdez des opportunités chaque jour.
            </p>
          </div>
          
          {/* Problems Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-destructive/10 rounded-lg flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2 text-primary">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Solution */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <div className="max-w-3xl mx-auto space-y-4">
              <Target className="w-12 h-12 mx-auto mb-4 text-whatsapp" />
              <h3 className="font-display font-bold text-2xl md:text-3xl">
                La solution : une landing page claire et optimisée conversion
              </h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Transformez vos visiteurs en clients avec une page qui vend 24h/24, 7j/7, 
                sans que vous ayez besoin d'être présent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;