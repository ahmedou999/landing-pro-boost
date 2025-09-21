import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, CheckCircle, Clock, RotateCcw, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-subtle pt-20">
      <div className="section-container py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4 animate-in fade-in duration-700">
            <h1 className="hero-title">
              Votre site doit <span className="text-whatsapp">vendre</span>,<br />
              pas seulement exister.
            </h1>
            
            <p className="subtitle max-w-2xl mx-auto">
              Obtenez une landing page clé en main, prête en 7 jours, conçue pour transformer vos visiteurs en clients fidèles.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-4 duration-700">
            <Button
              className="btn-whatsapp text-lg px-8 py-4 w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/33123456789?text=Bonjour, je souhaite obtenir une landing page haute conversion', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </Button>
            
            <Button
              variant="outline"
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/landingpro/consultation', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              Réserver un appel
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-12 animate-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <div className="p-2 bg-success/10 rounded-full">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <span className="font-medium">Livraison garantie en 7 jours</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <div className="p-2 bg-success/10 rounded-full">
                <RotateCcw className="w-5 h-5 text-success" />
              </div>
              <span className="font-medium">3 révisions offertes</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-muted-foreground">
              <div className="p-2 bg-success/10 rounded-full">
                <CreditCard className="w-5 h-5 text-success" />
              </div>
              <span className="font-medium">Abonnement à 25 €/mois</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;