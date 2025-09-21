const Footer = () => {
  return <footer className="bg-background border-t border-border py-12">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="font-display font-bold text-2xl text-primary">
                LandingPro
              </div>
              <p className="text-muted-foreground max-w-md">
                Spécialiste en landing pages haute conversion pour entrepreneurs, 
                freelances et petites entreprises.
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Email :</strong> contact@landingpro.fr
                </p>
                
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-primary">
                Liens rapides
              </h4>
              <div className="flex flex-col space-y-2">
                <button onClick={() => document.getElementById('advantages')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-muted-foreground hover:text-primary transition-colors text-left">
                  Nos avantages
                </button>
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-muted-foreground hover:text-primary transition-colors text-left">
                  Tarifs
                </button>
                <button onClick={() => document.getElementById('process')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-muted-foreground hover:text-primary transition-colors text-left">
                  Notre processus
                </button>
                <button onClick={() => document.getElementById('faq')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-muted-foreground hover:text-primary transition-colors text-left">
                  FAQ
                </button>
              </div>
            </div>
            
            {/* Contact CTA */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-primary">
                Prêt à démarrer ?
              </h4>
              <div className="space-y-3">
                <button onClick={() => window.open('https://wa.me/33123456789?text=Bonjour, je souhaite obtenir des informations sur vos landing pages', '_blank')} className="btn-whatsapp w-full">
                  Contactez-nous
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Réponse sous 2h en moyenne
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <p className="text-muted-foreground text-sm">© 2025 LandingPro. Tous droits réservés.</p>
              
              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <a href="#mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
                  Mentions légales
                </a>
                <a href="#cgv" className="text-muted-foreground hover:text-primary transition-colors">
                  CGV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;