import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Users, Zap, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Configurez vos produits sur mesure
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Créez des ensembles personnalisés adaptés à vos besoins spécifiques,
              étape par étape, en toute simplicité.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90"
              onClick={() => navigate('/configurator')}
            >
              Commencer la configuration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Pourquoi choisir ConfigMaster Pro ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <Settings className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Configuration intuitive</h3>
              <p className="text-gray-300 text-center">
                Interface simple et guidée pour une expérience utilisateur optimale
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Performance garantie</h3>
              <p className="text-gray-300 text-center">
                Des composants de qualité pour des configurations performantes
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Fiabilité assurée</h3>
              <p className="text-gray-300 text-center">
                Vérification automatique de la compatibilité des composants
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Support expert</h3>
              <p className="text-gray-300 text-center">
                Une équipe dédiée pour vous accompagner dans vos choix
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Choisissez vos composants</h3>
              <p className="text-gray-300">Sélectionnez les éléments qui correspondent à vos besoins</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Personnalisez</h3>
              <p className="text-gray-300">Ajustez les options selon vos préférences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Commandez</h3>
              <p className="text-gray-300">Validez votre configuration et recevez votre produit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Prêt à créer votre configuration ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Commencez dès maintenant et créez le produit qui correspond exactement à vos besoins.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate('/configurator')}
          >
            Lancer le configurateur
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
