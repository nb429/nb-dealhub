import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';
import DealCard from '../components/DealCard';
import SearchBar from '../components/SearchBar';
import { mockDeals } from '../data/mockData';
import { Deal } from '../types';

const SearchResultsScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Deal[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [distance, setDistance] = useState(25);

  useEffect(() => {
    if (query) {
      const filtered = mockDeals.filter(deal =>
        deal.title.toLowerCase().includes(query.toLowerCase()) ||
        deal.description.toLowerCase().includes(query.toLowerCase()) ||
        deal.category.toLowerCase().includes(query.toLowerCase()) ||
        deal.vendor.toLowerCase().includes(query.toLowerCase())
      );
      
      let sorted = [...filtered];
      switch (sortBy) {
        case 'price-low':
          sorted.sort((a, b) => a.discountedPrice - b.discountedPrice);
          break;
        case 'price-high':
          sorted.sort((a, b) => b.discountedPrice - a.discountedPrice);
          break;
        case 'rating':
          sorted.sort((a, b) => b.rating - a.rating);
          break;
        case 'discount':
          sorted.sort((a, b) => b.discount - a.discount);
          break;
        default:
          // Keep original order for relevance
          break;
      }
      
      setResults(sorted);
    }
  }, [query, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="mb-4">
            <SearchBar placeholder="Search for deals..." />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Search Results for "{query}"
              </h1>
              <p className="text-gray-600">
                {results.length} deals found
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">Within {distance} miles</span>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Best Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <SlidersHorizontal size={20} className="text-gray-600" />
            <h2 className="font-semibold text-gray-900">Filters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="flex-1"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Distance: {distance} miles
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="flex items-end">
              <button
                onClick={() => {
                  setPriceRange([0, 500]);
                  setDistance(25);
                  setSortBy('relevance');
                }}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map(deal => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              Try searching with different keywords or browse our categories
            </p>
            <button
              onClick={() => window.location.href = '/deals'}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Browse All Deals
            </button>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Search for Deals</h3>
            <p className="text-gray-600">
              Enter keywords to find the perfect deals for you
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsScreen;