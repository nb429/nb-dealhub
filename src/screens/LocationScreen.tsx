import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, ArrowLeft } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const LocationScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [zipCode, setZipCode] = useState(user?.zipCode || '');
  const [searchTerm, setSearchTerm] = useState('');

  const popularLocations = [
    { zip: '10001', city: 'New York', state: 'NY', deals: 124 },
    { zip: '90210', city: 'Beverly Hills', state: 'CA', deals: 89 },
    { zip: '60601', city: 'Chicago', state: 'IL', deals: 156 },
    { zip: '33101', city: 'Miami', state: 'FL', deals: 78 },
    { zip: '02101', city: 'Boston', state: 'MA', deals: 92 },
    { zip: '98101', city: 'Seattle', state: 'WA', deals: 103 },
  ];

  const filteredLocations = popularLocations.filter(location =>
    location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.zip.includes(searchTerm)
  );

  const handleUpdateLocation = (newZipCode: string) => {
    if (user) {
      updateUser({ zipCode: newZipCode });
    }
    navigate('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode) {
      handleUpdateLocation(zipCode);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="text-center mb-8">
          <MapPin className="mx-auto text-teal-600 mb-4" size={48} />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Set Your Location
          </h1>
          <p className="text-gray-600">
            Find the best local deals in your area
          </p>
        </div>

        {/* ZIP Code Input */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Enter ZIP Code</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter your ZIP code"
                className="w-full text-lg px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                maxLength={5}
                pattern="[0-9]{5}"
              />
            </div>
            <button
              type="submit"
              disabled={!zipCode}
              className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Update Location
            </button>
          </form>
        </div>

        {/* Popular Locations */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Locations</h2>
          
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search cities..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
          </div>

          {/* Location Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLocations.map((location) => (
              <button
                key={location.zip}
                onClick={() => handleUpdateLocation(location.zip)}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 text-left group"
              >
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-teal-700">
                    {location.city}, {location.state}
                  </h3>
                  <p className="text-sm text-gray-600">ZIP: {location.zip}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-teal-600">
                    {location.deals} deals
                  </p>
                  <p className="text-xs text-gray-500">available</p>
                </div>
              </button>
            ))}
          </div>

          {filteredLocations.length === 0 && searchTerm && (
            <div className="text-center py-8">
              <Search className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No locations found</h3>
              <p className="text-gray-600">Try searching for a different city or state</p>
            </div>
          )}
        </div>

        {/* Current Location */}
        {user?.zipCode && (
          <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <MapPin className="text-teal-600" size={24} />
              <div>
                <p className="font-medium text-teal-900">Current Location</p>
                <p className="text-teal-700">ZIP Code: {user.zipCode}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationScreen;