import React, { useState } from 'react';
    import { Component } from '../../types';
    import { useBuildContext } from '../../context/BuildContext';
    import ComponentSpecs from './ComponentSpecs';
    import ComponentImage from './ComponentImage';
    import StockStatus from './StockStatus';
    import { Check } from 'lucide-react';
    import ComponentModal from './ComponentModal';
    import { useCart } from '../../context/CartContext';

    interface ComponentCardProps {
      component: Component;
    }

    const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
      const { selectComponent, selectedComponents } = useBuildContext();
      const isSelected = selectedComponents[component.category]?.id === component.id;
      const [isModalOpen, setIsModalOpen] = React.useState(false);
      const { addToCart } = useCart();
      const [quantity, setQuantity] = useState(1);
      const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

      const handleCardClick = () => {
        setIsModalOpen(true);
      };

      const handleSelect = (e: React.MouseEvent) => {
        e.stopPropagation();
        selectComponent(component);
      };

      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        const prebuiltConfig = {
          id: component.id,
          name: component.name,
          category: component.category,
          price: component.price,
          imageUrl: component.imageUrl,
          highlights: component.specs,
        };
        addToCart(prebuiltConfig);
        setConfirmationMessage('Added to cart!');
        setTimeout(() => setConfirmationMessage(null), 2000);
      };

      return (
        <>
          <div 
            className={`
              p-4 rounded-lg border transition-all cursor-pointer
              ${isSelected 
                ? 'border-cyan-500 bg-cyan-50 shadow-md' 
                : 'border-gray-200 bg-white hover:border-cyan-300 hover:shadow-md'
              }
            `}
            onClick={handleCardClick}
          >
            <div className="flex items-start gap-4">
              <ComponentImage imageUrl={component.imageUrl} name={component.name} />
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{component.name}</h3>
                    <p className="text-sm text-gray-600">{component.brand}</p>
                  </div>
                  <StockStatus stock={component.stock} />
                </div>

                <ComponentSpecs component={component} />

                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold text-cyan-600">€{component.price}</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-16 p-1 border rounded-md text-sm text-gray-700"
                    />
                    <button
                      onClick={handleAddToCart}
                      className={`
                        px-3 py-1 rounded text-sm font-medium transition-all flex items-center gap-1
                        ${isSelected
                          ? 'bg-cyan-600 text-white'
                          : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                        }
                      `}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-4 h-4" />
                          Selected
                        </>
                      ) : (
                        'Select'
                      )}
                    </button>
                  </div>
                </div>
                {confirmationMessage && (
                  <div className="mt-2 text-green-600 text-sm">
                    {confirmationMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
          <ComponentModal isOpen={isModalOpen} onClose={handleCloseModal} component={component} />
        </>
      );
    };

    export default ComponentCard;
