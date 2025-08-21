import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-3 py-2 rounded-lg font-bold text-xl">
              DealHub
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 cursor-pointer">
              <MapPin size={16} />
              <span>{user?.zipCode || '10001'}</span>
            </div>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/favorites" className="text-gray-600 hover:text-teal-600 transition-colors">
                  <Heart size={20} />
                </Link>
                <Link to="/dashboard" className="text-gray-600 hover:text-teal-600 transition-colors">
                  <ShoppingBag size={20} />
                </Link>
                <div className="relative">
                  <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center space-x-1 text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    <User size={20} />
                    <span>{user?.name}</span>
                  </button>
                  
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border">
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      {user?.role === 'vendor' && (
                        <Link 
                          to="/vendor-dashboard" 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Vendor Dashboard
                        </Link>
                      )}
                      {user?.role === 'admin' && (
                        <Link 
                          to="/admin" 
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Admin Panel
                        </Link>
                      )}
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/auth" 
                  className="text-gray-600 hover:text-teal-600 transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link 
                  to="/auth?mode=signup" 
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={16} />
                <span>{user?.zipCode || '10001'}</span>
              </div>
              
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="block text-gray-600 hover:text-teal-600">
                    Dashboard
                  </Link>
                  <Link to="/favorites" className="block text-gray-600 hover:text-teal-600">
                    Favorites
                  </Link>
                  {user?.role === 'vendor' && (
                    <Link to="/vendor-dashboard" className="block text-gray-600 hover:text-teal-600">
                      Vendor Dashboard
                    </Link>
                  )}
                  {user?.role === 'admin' && (
                    <Link to="/admin" className="block text-gray-600 hover:text-teal-600">
                      Admin Panel
                    </Link>
                  )}
                  <button 
                    onClick={handleLogout}
                    className="block text-gray-600 hover:text-teal-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/auth" className="block text-gray-600 hover:text-teal-600">
                    Sign In
                  </Link>
                  <Link to="/auth?mode=signup" className="block text-gray-600 hover:text-teal-600">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;