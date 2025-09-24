import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.advantages': 'Avantages',
    'nav.process': 'Processus',
    'nav.offer': 'Offre',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'cta.whatsapp': 'Discuter sur WhatsApp',
    'cta.whatsapp.short': 'WhatsApp',
    'cta.call': 'Réserver un appel',
    
    // Hero
    'hero.title': 'Votre site doit vendre, pas seulement exister.',
    'hero.subtitle': 'Obtenez une landing page clé en main, prête en 7 jours, conçue pour transformer vos visiteurs en clients fidèles.',
    'hero.cta.primary': 'Démarrer maintenant sur WhatsApp',
    'hero.cta.secondary': 'Réserver un appel gratuit',
    'hero.guarantee.delivery': 'Livraison garantie en 7 jours',
    'hero.guarantee.revisions': '3 révisions offertes',
    'hero.guarantee.hosting': 'Hébergement à 25 €/mois inclus',
    
    // Problems
    'problems.title': 'Pourquoi votre site actuel ne génère pas assez de clients ?',
    'problems.subtitle': 'La plupart des sites web sont beaux mais inefficaces. Voici les erreurs qui vous coûtent des clients chaque jour.',
    'problems.problem1.title': 'Trop de visiteurs, peu de clients',
    'problems.problem1.desc': 'Votre trafic est là mais les conversions manquent. Sans optimisation, 97% de vos visiteurs repartent sans agir.',
    'problems.problem2.title': 'Manque de crédibilité',
    'problems.problem2.desc': 'Un site amateur fait fuir les prospects. Vous perdez des clients avant même qu\'ils découvrent votre offre.',
    'problems.problem3.title': 'Message confus',
    'problems.problem3.desc': 'Si vos visiteurs ne comprennent pas votre offre en 5 secondes, ils partiront chez la concurrence.',
    'problems.solution.title': 'Notre solution',
    'problems.solution.desc': 'Une landing page laser-focus, optimisée conversion, qui transforme vos visiteurs en clients payants dès le premier jour.',
    
    // Advantages
    'advantages.title': 'Pourquoi choisir LandingPro ?',
    'advantages.subtitle': 'Une approche éprouvée qui génère des résultats mesurables pour votre business.',
    'advantages.advantage1.title': 'Design qui convertit',
    'advantages.advantage1.desc': 'Design responsive mobile-first avec une hiérarchie visuelle optimisée pour guider vos prospects vers l\'action.',
    'advantages.advantage2.title': 'Copywriting orienté résultats',
    'advantages.advantage2.desc': 'Textes persuasifs basés sur la psychologie de vente pour maximiser vos conversions.',
    'advantages.advantage3.title': 'Intégrations essentielles',
    'advantages.advantage3.desc': 'WhatsApp, Google Analytics, Facebook Pixel et tous vos outils favoris intégrés nativement.',
    'advantages.advantage4.title': 'Hébergement premium inclus',
    'advantages.advantage4.desc': 'Hébergement rapide et sécurisé à 25€/mois avec maintenance et petites améliorations incluses.',
    
    // Pricing
    'pricing.title': 'Une offre simple et transparente',
    'pricing.subtitle': 'Tout ce dont vous avez besoin pour lancer une landing page qui génère des revenus.',
    'pricing.pack.title': 'Pack Landing Page Complète',
    'pricing.pack.price': '890€',
    'pricing.pack.subtitle': 'Paiement unique',
    'pricing.pack.feature1': 'Landing page complète et responsive',
    'pricing.pack.feature2': 'Design premium sur-mesure',
    'pricing.pack.feature3': 'Copywriting orienté conversion',
    'pricing.pack.feature4': 'Intégration WhatsApp native',
    'pricing.pack.feature5': '3 révisions incluses',
    'pricing.pack.feature6': 'Livraison garantie en 7 jours',
    'pricing.pack.cta': 'Commencer maintenant',
    'pricing.hosting.title': 'Hébergement & Maintenance',
    'pricing.hosting.price': '25€',
    'pricing.hosting.subtitle': 'Par mois',
    'pricing.hosting.feature1': 'Hébergement haute performance',
    'pricing.hosting.feature2': 'Sauvegardes automatiques',
    'pricing.hosting.feature3': 'Sécurité renforcée',
    'pricing.hosting.feature4': 'Maintenance technique',
    'pricing.hosting.feature5': 'Petites améliorations incluses',
    'pricing.hosting.feature6': 'Support prioritaire',
    
    // Process
    'process.title': 'Notre processus en 4 étapes simples',
    'process.subtitle': 'De l\'idée à la mise en ligne, nous gérons tout pour vous.',
    'process.step1.title': 'Découverte',
    'process.step1.desc': 'Appel de 15 minutes pour comprendre votre activité, vos objectifs et votre audience cible.',
    'process.step2.title': 'Brief & Stratégie',
    'process.step2.desc': 'Nous analysons votre marché et créons une stratégie de conversion personnalisée.',
    'process.step3.title': 'Création & Révisions',
    'process.step3.desc': 'Design et développement de votre landing page avec 3 tours de révisions inclus.',
    'process.step4.title': 'Livraison',
    'process.step4.desc': 'Mise en ligne sous 7 jours avec formation pour gérer votre page en autonomie.',
    
    // FAQ
    'faq.title': 'Questions fréquentes',
    'faq.subtitle': 'Tout ce que vous devez savoir avant de commencer.',
    'faq.q1': 'Combien de temps pour livrer ma landing page ?',
    'faq.a1': 'Nous livrons votre landing page complète en 7 jours ouvrés maximum après validation du brief initial.',
    'faq.q2': 'Puis-je modifier ma page après livraison ?',
    'faq.a2': 'Oui, nous vous fournissons un accès complet pour modifier les textes et images. Pour des modifications plus complexes, notre abonnement maintenance couvre les petites améliorations.',
    'faq.q3': 'Que couvre exactement l\'abonnement de 25€/mois ?',
    'faq.a3': 'L\'hébergement haute performance, les sauvegardes automatiques, la sécurité, la maintenance technique et les petites améliorations (modifications de texte, ajout d\'éléments simples, optimisations).',
    'faq.q4': 'Que se passe-t-il si j\'arrête l\'abonnement ?',
    'faq.a4': 'Vous récupérez tous les fichiers de votre landing page et pouvez transférer votre domaine où vous le souhaitez. Aucune dépendance technique.',
    'faq.q5': 'Pouvez-vous intégrer mes outils existants ?',
    'faq.a5': 'Oui, nous intégrons facilement les outils les plus utilisés comme WhatsApp, Google Analytics, Facebook Pixel ou encore Mailchimp. Pour d\'autres intégrations spécifiques, nous étudions la faisabilité au cas par cas.',
    'faq.q6': 'Qu\'est-ce qui est inclus dans le copywriting ?',
    'faq.a6': 'Rédaction complète de tous les textes : titre accrocheur, arguments de vente, descriptions des offres, témoignages optimisés et call-to-actions persuasifs.',
    'faq.q7': 'Offrez-vous une garantie de remboursement ?',
    'faq.a7': 'Nous ne proposons pas de remboursement, mais trois révisions sont incluses pour s\'assurer que la page corresponde parfaitement à vos attentes.',
    
    // Final CTA
    'final.title': 'Prêt à convertir vos visiteurs en clients ?',
    'final.subtitle': 'Ne laissez plus vos concurrents prendre vos clients. Obtenez dès aujourd\'hui une landing page qui vend vraiment.',
    'final.delivery': 'Livraison en 7 jours',
    'final.revisions': '3 révisions incluses',
    'final.support': 'Support premium',
    'final.cta.primary': 'Démarrer maintenant sur WhatsApp',
    'final.cta.secondary': 'Réserver un appel gratuit',
    
    // Footer
    'footer.email': 'contact@boostlandings.com',
    'footer.legal': 'Mentions légales',
    'footer.terms': 'CGV'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.advantages': 'Benefits',
    'nav.process': 'Process',
    'nav.offer': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.whatsapp.short': 'WhatsApp',
    'cta.call': 'Book a Call',
    
    // Hero
    'hero.title': 'Your website should sell, not just exist.',
    'hero.subtitle': 'Get a turnkey landing page, delivered in 7 days, designed to transform your visitors into loyal customers.',
    'hero.cta.primary': 'Start Now on WhatsApp',
    'hero.cta.secondary': 'Book a Free Call',
    'hero.guarantee.delivery': '7-day guaranteed delivery',
    'hero.guarantee.revisions': '3 revisions included',
    'hero.guarantee.hosting': 'Hosting at €25/month included',
    
    // Problems
    'problems.title': 'Why your current website isn\'t generating enough customers?',
    'problems.subtitle': 'Most websites look good but are ineffective. Here are the mistakes costing you customers every day.',
    'problems.problem1.title': 'High traffic, low conversions',
    'problems.problem1.desc': 'Your traffic is there but conversions are missing. Without optimization, 97% of your visitors leave without taking action.',
    'problems.problem2.title': 'Lack of credibility',
    'problems.problem2.desc': 'An amateur website drives prospects away. You lose customers before they even discover your offer.',
    'problems.problem3.title': 'Confusing message',
    'problems.problem3.desc': 'If your visitors don\'t understand your offer in 5 seconds, they\'ll go to your competition.',
    'problems.solution.title': 'Our solution',
    'problems.solution.desc': 'A laser-focused landing page, conversion-optimized, that transforms your visitors into paying customers from day one.',
    
    // Advantages
    'advantages.title': 'Why choose LandingPro?',
    'advantages.subtitle': 'A proven approach that generates measurable results for your business.',
    'advantages.advantage1.title': 'Conversion-focused design',
    'advantages.advantage1.desc': 'Mobile-first responsive design with optimized visual hierarchy to guide your prospects to action.',
    'advantages.advantage2.title': 'Results-driven copywriting',
    'advantages.advantage2.desc': 'Persuasive copy based on sales psychology to maximize your conversions.',
    'advantages.advantage3.title': 'Essential integrations',
    'advantages.advantage3.desc': 'WhatsApp, Google Analytics, Facebook Pixel and all your favorite tools integrated natively.',
    'advantages.advantage4.title': 'Premium hosting included',
    'advantages.advantage4.desc': 'Fast and secure hosting at €25/month with maintenance and minor improvements included.',
    
    // Pricing
    'pricing.title': 'Simple and transparent pricing',
    'pricing.subtitle': 'Everything you need to launch a revenue-generating landing page.',
    'pricing.pack.title': 'Complete Landing Page Package',
    'pricing.pack.price': '€890',
    'pricing.pack.subtitle': 'One-time payment',
    'pricing.pack.feature1': 'Complete responsive landing page',
    'pricing.pack.feature2': 'Premium custom design',
    'pricing.pack.feature3': 'Conversion-focused copywriting',
    'pricing.pack.feature4': 'Native WhatsApp integration',
    'pricing.pack.feature5': '3 revisions included',
    'pricing.pack.feature6': '7-day guaranteed delivery',
    'pricing.pack.cta': 'Get Started Now',
    'pricing.hosting.title': 'Hosting & Maintenance',
    'pricing.hosting.price': '€25',
    'pricing.hosting.subtitle': 'Per month',
    'pricing.hosting.feature1': 'High-performance hosting',
    'pricing.hosting.feature2': 'Automatic backups',
    'pricing.hosting.feature3': 'Enhanced security',
    'pricing.hosting.feature4': 'Technical maintenance',
    'pricing.hosting.feature5': 'Minor improvements included',
    'pricing.hosting.feature6': 'Priority support',
    
    // Process
    'process.title': 'Our simple 4-step process',
    'process.subtitle': 'From idea to launch, we handle everything for you.',
    'process.step1.title': 'Discovery',
    'process.step1.desc': '15-minute call to understand your business, goals, and target audience.',
    'process.step2.title': 'Brief & Strategy',
    'process.step2.desc': 'We analyze your market and create a personalized conversion strategy.',
    'process.step3.title': 'Creation & Revisions',
    'process.step3.desc': 'Design and development of your landing page with 3 revision rounds included.',
    'process.step4.title': 'Delivery',
    'process.step4.desc': 'Live within 7 days with training to manage your page independently.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know before getting started.',
    'faq.q1': 'How long does it take to deliver my landing page?',
    'faq.a1': 'We deliver your complete landing page within 7 business days maximum after initial brief validation.',
    'faq.q2': 'Can I modify my page after delivery?',
    'faq.a2': 'Yes, we provide you with full access to modify texts and images. For more complex modifications, our maintenance subscription covers minor improvements.',
    'faq.q3': 'What exactly does the €25/month subscription cover?',
    'faq.a3': 'High-performance hosting, automatic backups, security, technical maintenance, and minor improvements (text modifications, simple element additions, optimizations).',
    'faq.q4': 'What happens if I cancel the subscription?',
    'faq.a4': 'You get all your landing page files and can transfer your domain wherever you want. No technical dependencies.',
    'faq.q5': 'Can you integrate my existing tools?',
    'faq.a5': 'Yes, we easily integrate the most used tools like WhatsApp, Google Analytics, Facebook Pixel, and Mailchimp. For other specific integrations, we study feasibility case by case.',
    'faq.q6': 'What\'s included in the copywriting?',
    'faq.a6': 'Complete writing of all texts: catchy headlines, sales arguments, offer descriptions, optimized testimonials, and persuasive call-to-actions.',
    'faq.q7': 'Do you offer a money-back guarantee?',
    'faq.a7': 'We don\'t offer refunds, but three revisions are included to ensure the page perfectly matches your expectations.',
    
    // Final CTA
    'final.title': 'Ready to convert your visitors into customers?',
    'final.subtitle': 'Don\'t let your competitors steal your customers anymore. Get a landing page that truly sells today.',
    'final.delivery': '7-day delivery',
    'final.revisions': '3 revisions included',
    'final.support': 'Premium support',
    'final.cta.primary': 'Start Now on WhatsApp',
    'final.cta.secondary': 'Book a Free Call',
    
    // Footer
    'footer.email': 'contact@boostlandings.com',
    'footer.legal': 'Legal Notice',
    'footer.terms': 'Terms'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};