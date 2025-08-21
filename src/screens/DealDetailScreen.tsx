import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Star, MapPin, Clock, Users, Shield, ArrowLeft } from 'lucide-react';
import { mockDeals, mockReviews } from '../data/mockData';
import { useAuth } from '../hooks/useAuth';

const DealDetailScreen: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const deal = mockDeals.find(d => d.id === id);
  const reviews = mockReviews.filter(r => r.dealId === id);

  if (!deal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Deal not found</h1>
          <Link to="/deals" className="text-teal-600 hover:text-teal-700">
            Browse all deals
          </Link>
        </div>
      </div>
    );
  }

  const handlePurchase = () => {
    if (!isAuthenticated) {
      navigate('/auth?redirect=/deal/' + id);
      return;
    }
    navigate('/checkout', { state: { deal, quantity } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to deals</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src={deal.image} 
                alt={deal.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-6 left-6 flex space-x-2">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{deal.discount}% OFF
                </span>
                {deal.featured && (
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </span>
                )}
              </div>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-6 right-6 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <Heart 
                  size={24} 
                  className={isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'} 
                />
              </button>
            </div>

            {/* Deal Info */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {deal.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="font-medium">{deal.rating}</span>
                  <span className="text-gray-500">({deal.reviewCount} reviews)</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {deal.title}
              </h1>

              <p className="text-lg text-gray-600 mb-6">
                {deal.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin size={20} />
                  <span>{deal.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock size={20} />
                  <span>Expires {new Date(deal.expiryDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users size={20} />
                  <span>{deal.purchaseCount} bought</span>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-900 mb-4">Terms & Conditions</h3>
                <ul className="space-y-2">
                  {deal.terms.map((term, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Shield size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews */}
            {reviews.length > 0 && (
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  {reviews.map(review => (
                    <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{review.userName}</span>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star 
                                key={star}
                                size={14}
                                className={star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Purchase Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    ${deal.discountedPrice}
                  </span>
                  <span className="text-2xl text-gray-500 line-through">
                    ${deal.originalPrice}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  You save ${deal.originalPrice - deal.discountedPrice} ({deal.discount}% off)
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <select 
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total:</span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${(deal.discountedPrice * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                className="w-full bg-teal-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors mb-4"
              >
                {isAuthenticated ? 'Buy Now' : 'Sign In to Purchase'}
              </button>

              <div className="text-center text-sm text-gray-500">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Shield size={16} />
                  <span>Secure payment processing</span>
                </div>
                <p>30-day money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetailScreen;