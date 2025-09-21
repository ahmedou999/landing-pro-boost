import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { language, t } = useLanguage();
  
  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q7'),
      answer: t('faq.a7')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5')
    },
    {
      question: t('faq.q6'),
      answer: t('faq.a6')
    }
  ];

  return (
    <section id="faq" className="py-20 bg-surface">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">
              {t('faq.title')}
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              {t('faq.subtitle')}
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