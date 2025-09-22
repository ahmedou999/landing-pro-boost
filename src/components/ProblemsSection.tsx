import { AlertTriangle, Users, Clock, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemsSection = () => {
  const { t } = useLanguage();
  
  const problems = [
    {
      icon: Users,
      title: t('problems.problem1.title'),
      description: t('problems.problem1.desc')
    },
    {
      icon: AlertTriangle,
      title: t('problems.problem2.title'),
      description: t('problems.problem2.desc')
    },
    {
      icon: Clock,
      title: t('problems.problem3.title'),
      description: t('problems.problem3.desc')
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              {t('problems.title')}
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              {t('problems.subtitle')}
            </p>
          </div>
          
          {/* Problems Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {problems.map((problem, index) => (
              <div key={index} className="bg-card rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-destructive/10 rounded-lg flex-shrink-0">
                    <problem.icon className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base md:text-lg mb-2 text-primary">
                      {problem.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Solution */}
          <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8 text-center">
            <div className="max-w-3xl mx-auto space-y-4">
              <Target className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-whatsapp" />
              <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl">
                {t('problems.solution.title')}
              </h3>
              <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
                {t('problems.solution.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;