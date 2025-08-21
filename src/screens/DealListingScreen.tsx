import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import DealCard from '../components/DealCard';
import { mockDeals, categories } from '../data/mockData';
import { Deal, FilterOptions } from '../types';

const DealListingScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const [deals, setDeals] = useState<Deal[]>(mockDeals);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: category,
    minPrice: 0,
    maxPrice: 500,
    distance: 25,
    rating: 0
  });

  useEffect(() => {
    let filteredDeals = mockDeals;

    if (filters.category) {
      filteredDeals = filteredDeals.filter(deal => 
        deal.category === filters.category
      );
    }

    if (filters.minPrice > 0) {
      filteredDeals = filteredDeals.filter(deal => 
        deal.discountedPrice >= filters.minPrice
      );
    }

    if (filters.maxPrice < 500) {
      filteredDeals = filteredDeals.filter(deal => 
        deal.discountedPrice <= filters.maxPrice
      );
    }

    if (filters.rating > 0) {
      filteredDeals = filteredDeals.filter(deal => 
        deal.rating >= filters.rating
      );
    }

    setDeals(filteredDeals);
  }, [filters]);

  const handleFilterChange = (key: keyof FilterOptions, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {category ? `${category} Deals` : 'All Deals'}
            </h1>
            <p className="text-gray-600">
              {deals.length} deals found in your area
            </p>
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="mt-4 md:mt-0 flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <SlidersHorizontal size={20} />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Min Price: ${filters.minPrice}
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Price: ${filters.maxPrice}
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Min Rating: {filters.rating}★
                </label>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setFilters({
                  category: '',
                  minPrice: 0,
                  maxPrice: 500,
                  distance: 25,
                  rating: 0
                })}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        {/* Deal Grid */}
        {deals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.map(deal => (
              <DealCard 
                key={deal.id} 
                deal={deal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No deals found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or browse all categories
            </p>
            <button
              onClick={() => setFilters({
                category: '',
                minPrice: 0,
                maxPrice: 500,
                distance: 25,
                rating: 0
              })}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Show All Deals
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealListingScreen;