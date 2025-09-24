import { useLanguage } from "@/contexts/LanguageContext";
const Footer = () => {
  const {
    language,
    t
  } = useLanguage();
  return <footer className="bg-background border-t border-border py-8 md:py-12">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Logo & Description */}
            <div className="space-y-3 md:space-y-4">
              <div className="font-display font-bold text-xl md:text-2xl text-primary">BoostLandings</div>
              <p className="text-sm md:text-base text-muted-foreground">
                {language === 'fr' ? 'Spécialiste en landing pages haute conversion pour entrepreneurs, freelances et petites entreprises.' : 'High-conversion landing page specialist for entrepreneurs, freelancers and small businesses.'}
              </p>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-muted-foreground">
                  <strong>Email :</strong> {t('footer.email')}
                </p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-display font-semibold text-base md:text-lg text-primary">
                {language === 'fr' ? 'Liens rapides' : 'Quick Links'}
              </h4>
              <div className="flex flex-col space-y-2">
                <button onClick={() => document.getElementById('advantages')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors text-left">
                  {t('nav.advantages')}
                </button>
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors text-left">
                  {t('nav.offer')}
                </button>
                <button onClick={() => document.getElementById('process')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors text-left">
                  {t('nav.process')}
                </button>
                <button onClick={() => document.getElementById('faq')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors text-left">
                  {t('nav.faq')}
                </button>
              </div>
            </div>
            
            {/* Contact CTA */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-display font-semibold text-base md:text-lg text-primary">
                {language === 'fr' ? 'Prêt à démarrer ?' : 'Ready to start?'}
              </h4>
              <div className="space-y-3">
                <button onClick={() => window.open(`https://wa.me/33123456789?text=${language === 'fr' ? 'Bonjour, je souhaite obtenir des informations sur vos landing pages' : 'Hello, I would like information about your landing pages'}`, '_blank')} className="btn-whatsapp w-full text-sm md:text-base py-2 md:py-3">
                  {language === 'fr' ? 'Contactez-nous' : 'Contact us'}
                </button>
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  {language === 'fr' ? 'Réponse sous 2h en moyenne' : 'Average response within 2h'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <p className="text-muted-foreground text-xs md:text-sm">
                © 2025 LandingPro. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
              </p>
              
              {/* Legal Links */}
              <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm">
                <a href="#mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.legal')}
                </a>
                <a href="#cgv" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.terms')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;