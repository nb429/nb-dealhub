import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Percent, Clock, Star } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import DealCard from '../components/DealCard';
import { mockDeals, categories } from '../data/mockData';

const HomeScreen: React.FC = () => {
  const featuredDeals = mockDeals.filter(deal => deal.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Discover Amazing Local Deals
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Save up to 70% on restaurants, activities, beauty & wellness, and more in your area
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar />
            </div>
            
            {/* Location */}
            <div className="flex items-center justify-center space-x-2 text-lg">
              <MapPin size={20} />
              <span>Currently showing deals for ZIP: 10001</span>
              <Link to="/location" className="underline hover:no-underline ml-2">
                Change
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <Percent className="mx-auto mb-4 text-orange-600" size={48} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">70%</h3>
              <p className="text-gray-600">Average Savings</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
              <Clock className="mx-auto mb-4 text-teal-600" size={48} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Deal Discovery</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <Star className="mx-auto mb-4 text-yellow-600" size={48} />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category}
                to={`/deals?category=${encodeURIComponent(category)}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                  index % 4 === 0 ? 'from-teal-500 to-teal-600' :
                  index % 4 === 1 ? 'from-orange-500 to-orange-600' :
                  index % 4 === 2 ? 'from-purple-500 to-purple-600' :
                  'from-indigo-500 to-indigo-600'
                } flex items-center justify-center`}>
                  <span className="text-2xl">
                    {category === 'Restaurants' ? '🍽️' :
                     category === 'Beauty & Spas' ? '💆' :
                     category === 'Activities' ? '🎯' :
                     category === 'Travel' ? '✈️' :
                     category === 'Shopping' ? '🛍️' :
                     category === 'Health & Fitness' ? '💪' :
                     category === 'Automotive' ? '🚗' : '🏠'}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Deals</h2>
            <Link 
              to="/deals" 
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              View All Deals →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDeals.map(deal => (
              <DealCard 
                key={deal.id} 
                deal={deal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of happy customers discovering great local deals every day.
          </p>
          <Link 
            to="/auth?mode=signup"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors inline-block"
          >
            Sign Up for Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;