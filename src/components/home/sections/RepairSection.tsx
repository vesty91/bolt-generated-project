import React from 'react';
      import { Settings, ShieldCheck, Home, Users } from 'lucide-react';

      const RepairSection = () => {
        const testimonials = [
          {
            name: 'John Doe',
            text: 'Excellent service! My computer was fixed quickly and at a great price.',
          },
          {
            name: 'Jane Smith',
            text: 'I highly recommend Restor-PC. They are professional and reliable.',
          },
        ];

        return (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Votre ordinateur est prêté, en panne ou ne s'allume plus ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Restor-PC est là pour vous ! Nous offrons un dépannage rapide et efficace, des techniciens experts, et des prix abordables.
              </p>
              <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg flex items-center gap-8">
                <img
                  src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80"
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

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Ce que nos clients disent</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-700 rounded-xl p-6 shadow-lg">
                    <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                    <p className="text-gray-400 text-right">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mt-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Formulaire de Contact</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nom</label>
                  <input type="text" className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full p-2 border rounded-lg h-32"></textarea>
                </div>
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        );
      };

      export default RepairSection;
