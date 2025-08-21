import React, { useState } from 'react';
import { Plus, BarChart3, Users, DollarSign, Edit, Trash2 } from 'lucide-react';
import { mockDeals } from '../data/mockData';

const VendorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddDeal, setShowAddDeal] = useState(false);
  
  const vendorDeals = mockDeals.slice(0, 3); // Mock vendor deals
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'deals', label: 'My Deals', icon: DollarSign },
    { id: 'analytics', label: 'Analytics', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Vendor Dashboard</h1>
            <p className="text-gray-600">Manage your deals and track performance</p>
          </div>
          <button
            onClick={() => setShowAddDeal(true)}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Add New Deal</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <nav className="space-y-1">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-6 py-4 text-left hover:bg-gray-50 transition-colors ${
                        activeTab === tab.id 
                          ? 'bg-teal-50 border-r-4 border-teal-600 text-teal-600' 
                          : 'text-gray-700'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                        <p className="text-2xl font-bold text-gray-900">$12,458</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <DollarSign className="text-green-600" size={24} />
                      </div>
                    </div>
                    <p className="text-sm text-green-600 mt-2">+12% from last month</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Deals</p>
                        <p className="text-2xl font-bold text-gray-900">8</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <BarChart3 className="text-blue-600" size={24} />
                      </div>
                    </div>
                    <p className="text-sm text-blue-600 mt-2">2 expiring soon</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Customers</p>
                        <p className="text-2xl font-bold text-gray-900">1,234</p>
                      </div>
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Users className="text-orange-600" size={24} />
                      </div>
                    </div>
                    <p className="text-sm text-orange-600 mt-2">+8% from last month</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium text-gray-900">New purchase: Italian Fine Dining</p>
                        <p className="text-sm text-gray-600">2 hours ago</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">+$59</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium text-gray-900">Deal view: Spa Day Package</p>
                        <p className="text-sm text-gray-600">4 hours ago</p>
                      </div>
                      <span className="text-gray-500 text-sm">View</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium text-gray-900">Review added: 5 stars</p>
                        <p className="text-sm text-gray-600">6 hours ago</p>
                      </div>
                      <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'deals' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Manage Deals</h2>
                
                <div className="space-y-6">
                  {vendorDeals.map(deal => (
                    <div key={deal.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={deal.image} 
                            alt={deal.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-bold text-gray-900">{deal.title}</h3>
                            <p className="text-gray-600">{deal.category}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-600 hover:text-teal-600 transition-colors">
                            <Edit size={16} />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Price</p>
                          <p className="font-bold">${deal.discountedPrice}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Sold</p>
                          <p className="font-bold">{deal.purchaseCount}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Rating</p>
                          <p className="font-bold">{deal.rating}★</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Status</p>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Analytics</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-4">Top Performing Deals</h3>
                      <div className="space-y-3">
                        {vendorDeals.slice(0, 3).map(deal => (
                          <div key={deal.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <span className="font-medium">{deal.title}</span>
                            <span className="text-teal-600 font-bold">{deal.purchaseCount} sold</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-4">Customer Ratings</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>5 stars</span>
                          <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                          <span className="text-sm text-gray-600">75%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>4 stars</span>
                          <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '20%'}}></div>
                          </div>
                          <span className="text-sm text-gray-600">20%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>3 stars</span>
                          <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{width: '5%'}}></div>
                          </div>
                          <span className="text-sm text-gray-600">5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Add Deal Modal */}
        {showAddDeal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Add New Deal</h2>
                <button 
                  onClick={() => setShowAddDeal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deal Title</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="Enter deal title"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Original Price</label>
                    <input 
                      type="number" 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deal Price</label>
                    <input 
                      type="number" 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      placeholder="0"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea 
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="Describe your deal"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button 
                    type="button"
                    onClick={() => setShowAddDeal(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                  >
                    Create Deal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorDashboard;