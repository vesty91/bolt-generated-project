import React from 'react';
    import { Package2 } from 'lucide-react';

    interface ComponentImageProps {
      imageUrl?: string;
      name: string;
    }

    const ComponentImage: React.FC<ComponentImageProps> = ({ imageUrl, name }) => {
      if (imageUrl) {
        return (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-24 h-24 object-cover rounded"
            loading="lazy"
            srcset={`${imageUrl} 200w, ${imageUrl} 100w`}
            sizes="(max-width: 600px) 100px, 200px"
          />
        );
      }

      return (
        <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center">
          <Package2 className="w-8 h-8 text-gray-400" />
        </div>
      );
    };

    export default ComponentImage;
