import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, MapPin } from 'lucide-react';
import { Deal } from '../types';

interface DealCardProps {
  deal: Deal;
  onFavorite?: (dealId: string) => void;
  isFavorite?: boolean;
}

const DealCard: React.FC<DealCardProps> = ({ deal, onFavorite, isFavorite = false }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={deal.image} 
          alt={deal.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{deal.discount}%
          </span>
        </div>
        {onFavorite && (
          <button 
            onClick={() => onFavorite(deal.id)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <Heart 
              size={20} 
              className={isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'} 
            />
          </button>
        )}
        {deal.featured && (
          <div className="absolute top-4 right-16">
            <span className="bg-teal-500 text-white px-2 py-1 rounded text-xs font-bold">
              FEATURED
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-teal-600 font-medium">{deal.category}</span>
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{deal.rating}</span>
            <span className="text-sm text-gray-400">({deal.reviewCount})</span>
          </div>
        </div>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
          {deal.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {deal.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin size={14} className="mr-1" />
          <span>{deal.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${deal.discountedPrice}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${deal.originalPrice}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            {deal.purchaseCount} bought
          </span>
        </div>
        
        <Link 
          to={`/deal/${deal.id}`}
          className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors text-center block"
        >
          View Deal
        </Link>
      </div>
    </div>
  );
};

export default DealCard;