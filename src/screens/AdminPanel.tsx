import React, { useState } from 'react';
import { Users, Package, DollarSign, TrendingUp, Eye, Ban, Check } from 'lucide-react';
import { mockDeals, mockUser } from '../data/mockData';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'deals', label: 'Deal Management', icon: Package },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'payments', label: 'Payments', icon: DollarSign }
  ];

  const stats = [
    { label: 'Total Users', value: '12,456', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Active Deals', value: '89', change: '+5%', icon: Package, color: 'green' },
    { label: 'Total Revenue', value: '$45,678', change: '+18%', icon: DollarSign, color: 'purple' },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.5%', icon: TrendingUp, color: 'orange' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor platform performance and manage operations</p>
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
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          </div>
                          <div className={`bg-${stat.color}-100 p-3 rounded-full`}>
                            <Icon className={`text-${stat.color}-600`} size={24} />
                          </div>
                        </div>
                        <p className={`text-sm text-${stat.color}-600 mt-2`}>{stat.change} from last month</p>
                      </div>
                    );
                  })}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Platform Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Check className="text-green-600" size={16} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">New vendor approved</p>
                          <p className="text-sm text-gray-600">Bella Vista Restaurant</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Package className="text-blue-600" size={16} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Deal submitted for review</p>
                          <p className="text-sm text-gray-600">Adventure Kayaking Tour</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">4 hours ago</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-red-100 p-2 rounded-full">
                          <Ban className="text-red-600" size={16} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">User account suspended</p>
                          <p className="text-sm text-gray-600">Policy violation</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">6 hours ago</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'deals' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Deal Management</h2>
                  <div className="flex space-x-2">
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none">
                      <option>All Statuses</option>
                      <option>Pending</option>
                      <option>Active</option>
                      <option>Rejected</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Deal</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Vendor</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Price</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockDeals.slice(0, 5).map(deal => (
                        <tr key={deal.id} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <img src={deal.image} alt={deal.title} className="w-12 h-12 rounded-lg object-cover" />
                              <div>
                                <p className="font-medium text-gray-900">{deal.title}</p>
                                <p className="text-sm text-gray-600">{deal.category}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-700">{deal.vendor}</td>
                          <td className="py-4 px-4 text-gray-700">${deal.discountedPrice}</td>
                          <td className="py-4 px-4">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex space-x-2">
                              <button className="p-1 text-gray-600 hover:text-teal-600 transition-colors">
                                <Eye size={16} />
                              </button>
                              <button className="p-1 text-gray-600 hover:text-red-600 transition-colors">
                                <Ban size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">User Management</h2>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none">
                    <option>All Users</option>
                    <option>Customers</option>
                    <option>Vendors</option>
                    <option>Suspended</option>
                  </select>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-700">User</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Role</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Joined</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                              <span className="font-medium text-teal-600">{mockUser.name[0]}</span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{mockUser.name}</p>
                              <p className="text-sm text-gray-600">{mockUser.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm capitalize">
                            {mockUser.role}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-700">Jan 2024</td>
                        <td className="py-4 px-4">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <button className="p-1 text-gray-600 hover:text-teal-600 transition-colors">
                              <Eye size={16} />
                            </button>
                            <button className="p-1 text-gray-600 hover:text-red-600 transition-colors">
                              <Ban size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Management</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-medium text-green-900 mb-2">Today's Revenue</h3>
                    <p className="text-2xl font-bold text-green-900">$1,234</p>
                    <p className="text-sm text-green-600">+15% from yesterday</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-medium text-blue-900 mb-2">Pending Payouts</h3>
                    <p className="text-2xl font-bold text-blue-900">$5,678</p>
                    <p className="text-sm text-blue-600">12 vendors</p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="font-medium text-orange-900 mb-2">Processing</h3>
                    <p className="text-2xl font-bold text-orange-900">$890</p>
                    <p className="text-sm text-orange-600">3 transactions</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium text-gray-900 mb-4">Recent Transactions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium text-gray-900">Payment to Bella Vista Restaurant</p>
                        <p className="text-sm text-gray-600">Commission payout</p>
                      </div>
                      <span className="font-bold text-red-600">-$125</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium text-gray-900">Customer purchase</p>
                        <p className="text-sm text-gray-600">Italian Fine Dining</p>
                      </div>
                      <span className="font-bold text-green-600">+$59</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;