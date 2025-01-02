import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Monitor, Cpu, HardDrive } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="pt-20 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Construisez votre PC idéal</span>
              <span className="block text-primary">avec PC Builder Pro</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Configurez votre ordinateur sur mesure avec notre outil intuitif. Sélectionnez des composants compatibles et créez la machine de vos rêves.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/configure">
                  <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium">
                    Commencer la configuration
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                <Monitor className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Interface intuitive</h3>
              <p className="text-gray-300">
                Une expérience utilisateur fluide et agréable pour configurer votre PC facilement.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Vérification de compatibilité</h3>
              <p className="text-gray-300">
                Assurez-vous que tous vos composants fonctionnent parfaitement ensemble.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                <HardDrive className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Large choix de composants</h3>
              <p className="text-gray-300">
                Accédez à une vaste sélection de composants de qualité pour votre configuration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
