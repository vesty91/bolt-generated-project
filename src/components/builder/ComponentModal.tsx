import React from 'react';
    import { Component } from '../../types';
    import { X } from 'lucide-react';

    interface ComponentModalProps {
      isOpen: boolean;
      onClose: () => void;
      component: Component;
    }

    const ComponentModal: React.FC<ComponentModalProps> = ({ isOpen, onClose, component }) => {
      if (!isOpen) return null;

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-2xl w-full relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{component.name}</h2>
            <div className="flex gap-6">
              <img
                src={component.imageUrl}
                alt={component.name}
                className="w-48 h-48 object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Brand:</span> {component.brand}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Category:</span> {component.category}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Price:</span> ${component.price}
                </p>
                <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Specifications:</h3>
                <ul className="space-y-1">
                  {Object.entries(component.specs).map(([key, value]) => (
                    <li key={key} className="text-gray-600">
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
                    </li>
                  ))}
                </ul>
                {component.category === 'CPU' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Limitations:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Requires a compatible motherboard with the same socket type.
                      </li>
                      <li>
                        May require a high-end cooler for optimal performance.
                      </li>
                    </ul>
                  </div>
                )}
                {component.category === 'MOTHERBOARD' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Limitations:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Only compatible with CPUs that have the same socket type.
                      </li>
                      <li>
                        Limited by the number of RAM slots and maximum supported memory.
                      </li>
                    </ul>
                  </div>
                )}
                {component.category === 'RAM' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Limitations:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Must be compatible with the motherboard's memory type (DDR4, DDR5).
                      </li>
                      <li>
                        Speed and timing must be supported by the motherboard and CPU.
                      </li>
                    </ul>
                  </div>
                )}
                {component.category === 'GPU' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Limitations:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Requires a power supply with sufficient wattage.
                      </li>
                      <li>
                        May be limited by the case's maximum GPU length.
                      </li>
                    </ul>
                  </div>
                )}
                {component.category === 'STORAGE' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Limitations:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Must be compatible with the motherboard's storage interface (SATA, NVMe).
                      </li>
                      <li>
                        May be limited by the number of available storage slots.
                      </li>
                    </ul>
                  </div>
                )}
                {component.category === 'PSU' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Limitations:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Must provide sufficient wattage for all components.
                      </li>
                      <li>
                        May be limited by the case's PSU form factor.
                      </li>
                    </ul>
                  </div>
                )}
                {component.category === 'CASE' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Limitations:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Must be compatible with the motherboard's form factor (ATX, Micro-ATX, Mini-ITX).
                      </li>
                      <li>
                        Limited by the maximum GPU length and CPU cooler height.
                      </li>
                    </ul>
                  </div>
                )}
                {component.category === 'COOLING' && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Limitations:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Must be compatible with the CPU socket.
                      </li>
                      <li>
                        May be limited by the case's CPU cooler height.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default ComponentModal;
