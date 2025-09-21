import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Combien de temps pour livrer ma landing page ?",
      answer: "Nous garantissons une livraison en 7 jours maximum. Notre processus optimisé nous permet de respecter ce délai tout en maintenant une qualité élevée."
    },
    {
      question: "Puis-je modifier la page après livraison ?",
      answer: "Oui, absolument ! Nous vous fournissons tous les accès nécessaires. De plus, avec l'abonnement mensuel à 25€, les petites modifications sont incluses."
    },
    {
      question: "Que couvre exactement l'abonnement de 25€/mois ?",
      answer: "L'abonnement inclut : hébergement haute performance, certificat SSL, sauvegardes automatiques, mises à jour de sécurité, support technique et petites améliorations (changement de texte, couleurs, etc.)."
    },
    {
      question: "Que se passe-t-il si j'arrête l'abonnement ?",
      answer: "Aucun problème ! Nous vous transférons votre nom de domaine et tous les fichiers du site. Vous gardez la propriété complète de votre landing page."
    },
    {
      question: "Offrez-vous un remboursement si je ne suis pas satisfait ?",
      answer: "Nous ne proposons pas de remboursement, mais trois révisions sont incluses pour s'assurer que la page corresponde parfaitement à vos attentes. Notre processus de validation étape par étape garantit votre satisfaction."
    },
    {
      question: "Ma landing page sera-t-elle optimisée pour mobile ?",
      answer: "Bien sûr ! Toutes nos landing pages sont conçues en mobile-first. Elles s'adaptent parfaitement à tous les écrans : smartphone, tablette et desktop."
    },
    {
      question: "Pouvez-vous intégrer mes outils existants ?",
      answer: "Oui, nous intégrons facilement les outils les plus utilisés comme WhatsApp, Calendly, Google Analytics, Facebook Pixel ou encore Mailchimp. Pour d'autres intégrations spécifiques, nous étudions la faisabilité au cas par cas."
    },
    {
      question: "Qu'est-ce qui est inclus dans le copywriting ?",
      answer: "Nous rédigeons tous les textes de votre page : titre principal, sous-titres, descriptions d'offres, call-to-actions, et contenus de conversion optimisés selon les meilleures pratiques."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-surface">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              Questions fréquentes
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur nos landing pages haute conversion.
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="bg-card rounded-xl shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="px-6 py-4 text-left font-display font-medium text-primary hover:text-whatsapp">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Additional Support */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-whatsapp/5 to-success/5 rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg text-primary mb-2">
                Une autre question ?
              </h3>
              <p className="text-muted-foreground mb-4">
                Notre équipe est là pour vous aider et répondre à toutes vos interrogations.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/33123456789?text=Bonjour, j\'ai une question sur vos landing pages', '_blank')}
                className="btn-whatsapp"
              >
                Contactez-nous sur WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;