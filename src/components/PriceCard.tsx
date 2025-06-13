
import React from 'react';

interface PriceCardProps {
  name: string;
  price: string;
  description?: string;
  featured?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ name, price, description, featured = false }) => {
  return (
    <div className={`p-6 rounded-lg border transition-all duration-200 hover:shadow-lg hover:scale-105 ${
      featured 
        ? 'border-rose bg-pale-pink shadow-md' 
        : 'border-gray-200 bg-white hover:border-sage'
    }`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-outfit font-bold text-lg text-rich-black">{name}</h3>
        <span className={`font-bold text-lg ${featured ? 'text-rose' : 'text-sage'}`}>
          {price}
        </span>
      </div>
      {description && (
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      )}
    </div>
  );
};

export default PriceCard;
