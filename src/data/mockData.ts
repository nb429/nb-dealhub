import { Deal, User, Review } from '../types';

export const categories = [
  'Restaurants',
  'Beauty & Spas',
  'Activities',
  'Travel',
  'Shopping',
  'Health & Fitness',
  'Automotive',
  'Home Services'
];

export const mockDeals: Deal[] = [
  {
    id: '1',
    title: 'Italian Fine Dining Experience',
    description: 'Authentic Italian cuisine with wine pairing in the heart of downtown',
    originalPrice: 120,
    discountedPrice: 59,
    discount: 51,
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    vendor: 'Bella Vista Restaurant',
    category: 'Restaurants',
    location: 'Downtown',
    zipCode: '10001',
    rating: 4.8,
    reviewCount: 324,
    purchaseCount: 1250,
    expiryDate: '2024-12-31',
    terms: ['Valid for dinner only', 'Reservation required', 'Cannot be combined with other offers'],
    featured: true
  },
  {
    id: '2',
    title: 'Spa Day Package',
    description: 'Full body massage, facial, and access to spa facilities',
    originalPrice: 200,
    discountedPrice: 99,
    discount: 51,
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
    vendor: 'Serenity Spa',
    category: 'Beauty & Spas',
    location: 'Midtown',
    zipCode: '10001',
    rating: 4.9,
    reviewCount: 156,
    purchaseCount: 890,
    expiryDate: '2024-12-31',
    terms: ['Advance booking required', 'Valid for 6 months', 'Non-transferable'],
    featured: true
  },
  {
    id: '3',
    title: 'Adventure Kayaking Tour',
    description: 'Guided kayaking tour through scenic waterways with equipment included',
    originalPrice: 80,
    discountedPrice: 39,
    discount: 51,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
    vendor: 'Adventure Outfitters',
    category: 'Activities',
    location: 'Harbor District',
    zipCode: '10002',
    rating: 4.7,
    reviewCount: 89,
    purchaseCount: 245,
    expiryDate: '2024-11-30',
    terms: ['Weather dependent', 'Must be 16+ years old', 'Swimming ability required'],
    featured: false
  },
  {
    id: '4',
    title: 'Weekend Getaway Package',
    description: '2-night stay at luxury resort with breakfast and spa credit',
    originalPrice: 400,
    discountedPrice: 199,
    discount: 50,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    vendor: 'Mountain View Resort',
    category: 'Travel',
    location: 'Mountain View',
    zipCode: '10003',
    rating: 4.6,
    reviewCount: 278,
    purchaseCount: 567,
    expiryDate: '2024-12-31',
    terms: ['Subject to availability', 'Valid weekends only', 'Advance booking required'],
    featured: true
  },
  {
    id: '5',
    title: 'Fitness Bootcamp Classes',
    description: '10-class pass for high-intensity fitness bootcamp sessions',
    originalPrice: 150,
    discountedPrice: 75,
    discount: 50,
    image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800',
    vendor: 'FitZone Studio',
    category: 'Health & Fitness',
    location: 'Sports Complex',
    zipCode: '10001',
    rating: 4.5,
    reviewCount: 145,
    purchaseCount: 423,
    expiryDate: '2024-12-31',
    terms: ['Valid for 3 months', 'Classes must be booked in advance', 'Non-refundable'],
    featured: false
  },
  {
    id: '6',
    title: 'Premium Car Detailing',
    description: 'Complete interior and exterior car detailing service',
    originalPrice: 100,
    discountedPrice: 49,
    discount: 51,
    image: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=800',
    vendor: 'Auto Care Pro',
    category: 'Automotive',
    location: 'Service Center',
    zipCode: '10002',
    rating: 4.4,
    reviewCount: 67,
    purchaseCount: 234,
    expiryDate: '2024-11-30',
    terms: ['Appointment required', 'Additional charges for oversized vehicles', 'Valid for standard vehicles only'],
    featured: false
  }
];

export const mockUser: User = {
  id: '1',
  email: 'john.doe@example.com',
  name: 'John Doe',
  role: 'user',
  zipCode: '10001',
  favorites: ['1', '2'],
  purchases: [
    {
      id: 'p1',
      dealId: '1',
      purchaseDate: '2024-01-15',
      quantity: 1,
      totalAmount: 59,
      status: 'active',
      code: 'DEAL-001-ABC'
    }
  ]
};

export const mockReviews: Review[] = [
  {
    id: '1',
    dealId: '1',
    userId: '1',
    userName: 'John Doe',
    rating: 5,
    comment: 'Amazing dining experience! The food was exceptional and the service was perfect.',
    date: '2024-01-20'
  },
  {
    id: '2',
    dealId: '1',
    userId: '2',
    userName: 'Sarah Smith',
    rating: 4,
    comment: 'Great value for money. The atmosphere was lovely and the wine pairing was excellent.',
    date: '2024-01-18'
  },
  {
    id: '3',
    dealId: '2',
    userId: '3',
    userName: 'Mike Johnson',
    rating: 5,
    comment: 'Best spa experience I\'ve had! Very relaxing and professional staff.',
    date: '2024-01-16'
  }
];