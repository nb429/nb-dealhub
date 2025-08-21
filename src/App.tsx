import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import DealListingScreen from './screens/DealListingScreen';
import DealDetailScreen from './screens/DealDetailScreen';
import CheckoutScreen from './screens/CheckoutScreen';

// Lazy load other screens for better performance
const SearchResultsScreen = React.lazy(() => import('./screens/SearchResultsScreen'));
const UserDashboard = React.lazy(() => import('./screens/UserDashboard'));
const VendorDashboard = React.lazy(() => import('./screens/VendorDashboard'));
const AdminPanel = React.lazy(() => import('./screens/AdminPanel'));
const ReviewScreen = React.lazy(() => import('./screens/ReviewScreen'));
const LocationScreen = React.lazy(() => import('./screens/LocationScreen'));
const AboutHelpScreen = React.lazy(() => import('./screens/AboutHelpScreen'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <React.Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/auth" element={<AuthScreen />} />
              <Route path="/deals" element={<DealListingScreen />} />
              <Route path="/deal/:id" element={<DealDetailScreen />} />
              <Route path="/checkout" element={<CheckoutScreen />} />
              <Route path="/search" element={<SearchResultsScreen />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/vendor-dashboard" element={<VendorDashboard />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/reviews/:dealId" element={<ReviewScreen />} />
              <Route path="/location" element={<LocationScreen />} />
              <Route path="/about" element={<AboutHelpScreen />} />
              <Route path="/help" element={<AboutHelpScreen />} />
              <Route path="/favorites" element={<UserDashboard />} />
            </Routes>
          </React.Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;