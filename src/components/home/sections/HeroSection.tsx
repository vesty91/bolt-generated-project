import React from 'react';
    import { Link } from 'react-router-dom';
    import { Settings, ShieldCheck, Home, Users } from 'lucide-react';

    const HeroSection = () => {
      const handleBuildClick = () => {
        const builderSection = document.getElementById('builder-section');
        if (builderSection) {
          builderSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <div className="relative overflow-hidden text-white dynamic-gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                Build Your Dream PC with Ease
              </h1>
              <p className="text-xl md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Nous sommes ravis de vous accueillir sur notre site.
                <br />
                Restaurer-PC ,
                <br />
                Que vous ayez besoin d'une réparation, d'un conseil, ou d'une intervention à domicile, nous mettons notre expertise à votre service. Découvrez nos prestations et profitez d'un accompagnement personnalisé.
                <br />
                Votre satisfaction est notre priorité !
                <br />
                N'hésitez pas à nous contacter pour toute question ou demande. Bonne visite sur notre site !
              </p>
              <button
                onClick={handleBuildClick}
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium px-8 py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
              >
                Start Building Now
              </button>
            </div>
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Nos Configurations Vedettes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <img
                    src="https://i.ibb.co/BgPGcLc/IMG-5234.jpg"
                    alt="PC Build 1"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      PC Gamer Ultime
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Un PC gaming avec un éclairage RGB personnalisable.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <img
                    src="https://i.ibb.co/1rLrJmd/IMG-5235.jpg"
                    alt="PC Build 2"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      PC Streaming Pro
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Un PC optimisé pour le streaming et la création de contenu.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <img
                    src="https://i.ibb.co/Rh93QxZ/IMG-5236.jpg"
                    alt="PC Build 3"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      PC Performance
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Un PC puissant pour les jeux les plus exigeants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Votre ordinateur est prêté, en panne ou ne s'allume plus ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Restor-PC est là pour vous !
              </p>
              <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg flex items-center gap-8">
                <img
                  src="https://i.ibb.co/1Mj45gR/IMG-5237.jpg"
                  alt="Laptop with Gears"
                  className="w-48 h-auto rounded-md"
                />
                <div className="flex-1">
                  <p className="text-gray-300 mb-6">
                    Nous sommes spécialisés dans le dépannage et la réparation informatique, prêts à résoudre tous vos problèmes techniques, quels qu'ils soient. Que ce soit pour réparer votre ordinateur, optimiser ses performances, ou sauvegarder vos données importantes, vous pouvez compter sur notre expertise.
                  </p>
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Settings className="w-6 h-6 text-purple-400" /> Pourquoi choisir Restor-PC ?
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-purple-400" />
                        Dépannage rapide et efficace pour tous types de pannes.
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        Accompagnement personnalisé pour vos achats, réparations et sauvegardes.
                      </li>
                      <li className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-purple-400" />
                        Interventions à domicile pour plus de confort si vous ne pouvez pas vous déplacer.
                      </li>
                      <li className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-purple-400" />
                        Nous nous déplaçons sur les communes de : Brunoy, Montgeron, Crosne et les environs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
                Faites confiance à Restor-PC pour redonner vie à votre ordinateur !
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 opacity-70 z-0"></div>
        </div>
      );
    };

    export default HeroSection;
