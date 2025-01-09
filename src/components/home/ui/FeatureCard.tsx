import React from 'react';

      interface FeatureCardProps {
        icon: React.ReactNode;
        title: string;
        description: string;
      }

      const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
        return (
          <div className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow opacity-0 animate-fade-in">
            <div className="text-purple-400 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-300">{description}</p>
          </div>
        );
      };

      export default FeatureCard;
