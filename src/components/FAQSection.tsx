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
                  <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 text-left font-display font-medium text-sm md:text-base text-primary hover:text-whatsapp">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 pb-3 md:pb-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Additional Support */}
          <div className="text-center mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-whatsapp/5 to-success/5 rounded-xl p-4 md:p-6">
              <h3 className="font-display font-semibold text-base md:text-lg text-primary mb-2">
                {language === 'fr' ? 'Une autre question ?' : 'Another question?'}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                {language === 'fr' ? 'Notre équipe est là pour vous aider et répondre à toutes vos interrogations.' : 'Our team is here to help and answer all your questions.'}
              </p>
              <button 
                onClick={() => window.open(`https://wa.me/33123456789?text=${language === 'fr' ? 'Bonjour, j\'ai une question sur vos landing pages' : 'Hello, I have a question about your landing pages'}`, '_blank')}
                className="btn-whatsapp text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
              >
                {language === 'fr' ? 'Contactez-nous sur WhatsApp' : 'Contact us on WhatsApp'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;