import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';
    import { ComponentCategory, Component } from '../../types';
    import { mockComponents } from '../../data/mockComponents';
    import { Star } from 'lucide-react';

    const ComponentCategoryPage = () => {
      const { category } = useParams();
      const [components, setComponents] = useState<Component[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      // Convert the category parameter to the enum
      const categoryEnum = Object.values(ComponentCategory).find(
        (cat) => cat.toLowerCase().replace(/ /g, '-') === category
      ) as ComponentCategory;

      useEffect(() => {
        const fetchComponents = async () => {
          setLoading(true);
          setError(null);
          try {
            // Simulate a fetch with a delay
            await new Promise(resolve => setTimeout(resolve, 500));
            const filteredComponents = mockComponents.filter(c => c.category === categoryEnum);
            setComponents(filteredComponents);
          } catch (err) {
            setError('Failed to load components.');
          } finally {
            setLoading(false);
          }
        };

        if (categoryEnum) {
          fetchComponents();
        } else {
          setComponents([]);
          setLoading(false);
        }
      }, [categoryEnum]);

      if (loading) {
        return (
          <div className="text-center text-gray-500 mt-8">
            Loading components...
          </div>
        );
      }

      if (error) {
        return (
          <div className="text-center text-red-500 mt-8">
            {error}
          </div>
        );
      }

      return (
        <div className="max-w-7xl mx-auto px-4 py-8 flex">
          <aside className="w-64 bg-gray-100 p-4 rounded-md mr-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">FILTRER LES PRODUITS :</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 text-sm">CHERCHER UNE RÉFÉRENCE</label>
                <div className="relative">
                  <input type="text" placeholder="Désignation, modèle ..." className="w-full p-2 border rounded-md text-sm" />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">MARQUE</label>
                <select className="w-full p-2 border rounded-md text-sm">
                  <option>Sélectionner</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">PRIX</label>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="55" className="w-1/2 p-2 border rounded-md text-sm" />
                  <span className="text-gray-500">En €</span>
                  <input type="number" placeholder="13000" className="w-1/2 p-2 border rounded-md text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">MODÈLE DE PROCESSEUR</label>
                <select className="w-full p-2 border rounded-md text-sm">
                  <option>Sélectionner</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">SUPPORT DU PROCESSEUR</label>
                <select className="w-full p-2 border rounded-md text-sm">
                  <option>Sélectionner</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">PLATEFORME (PROC.)</label>
                <select className="w-full p-2 border rounded-md text-sm">
                  <option>Sélectionner</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm">FRÉQUENCE CPU (GHz)</label>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="2" className="w-1/2 p-2 border rounded-md text-sm" />
                  <input type="number" placeholder="5" className="w-1/2 p-2 border rounded-md text-sm" />
                </div>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm">+ DE FILTRES</button>
            </div>
          </aside>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                {components.length} PRODUITS CORRESPONDENT
              </h2>
              <select className="border border-gray-300 rounded-md p-2 text-sm">
                <option>Trier par</option>
              </select>
            </div>
            <div className="space-y-4">
              {components.map(component => (
                <div key={component.id} className="bg-white rounded-xl shadow-md p-4 flex gap-4">
                  <img src={component.imageUrl} alt={component.name} className="w-24 h-24 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{component.name}</h3>
                    <p className="text-gray-600 text-sm">{Object.entries(component.specs).map(([key, value]) => `${key}: ${value}`).join(', ')}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="text-gray-500 text-sm ml-1">10 avis</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div>
                        <p className="text-gray-600 text-sm">DISPO Web</p>
                        <p className="text-green-600 text-sm font-medium">EN STOCK</p>
                        <p className="text-gray-500 text-sm">Dispo dans 2 boutiques</p>
                      </div>
                      <span className="text-xl font-bold text-cyan-600">${component.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default ComponentCategoryPage;
