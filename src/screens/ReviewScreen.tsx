import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { mockDeals, mockReviews } from '../data/mockData';
import { useAuth } from '../hooks/useAuth';

const ReviewScreen: React.FC = () => {
  const { dealId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: ''
  });

  const deal = mockDeals.find(d => d.id === dealId);
  const reviews = mockReviews.filter(r => r.dealId === dealId);

  if (!deal) {
    return <div>Deal not found</div>;
  }

  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission
    setShowWriteReview(false);
    setNewReview({ rating: 0, comment: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to deal</span>
        </button>

        {/* Deal Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4">
            <img 
              src={deal.image} 
              alt={deal.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{deal.title}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star}
                      size={20}
                      className={star <= deal.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{deal.rating}</span>
                <span className="text-gray-600">({deal.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
                {isAuthenticated && (
                  <button
                    onClick={() => setShowWriteReview(true)}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                  >
                    Write Review
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {reviews.map(review => (
                  <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
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
                        <p className="text-gray-600 mb-3">{review.comment}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{new Date(review.date).toLocaleDateString()}</span>
                          <button className="flex items-center space-x-1 hover:text-teal-600">
                            <ThumbsUp size={14} />
                            <span>Helpful (3)</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {reviews.length === 0 && (
                  <div className="text-center py-12">
                    <Star className="mx-auto text-gray-400 mb-4" size={48} />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
                    <p className="text-gray-600">Be the first to share your experience!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h3 className="font-bold text-gray-900 mb-4">Rating Breakdown</h3>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">{deal.rating}</div>
                <div className="flex items-center justify-center mb-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star}
                      size={20}
                      className={star <= deal.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{deal.reviewCount} total reviews</p>
              </div>

              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center space-x-2">
                    <span className="text-sm w-8">{rating}</span>
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width: `${reviews.length > 0 ? (ratingDistribution[rating as keyof typeof ratingDistribution] / reviews.length) * 100 : 0}%`
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">
                      {ratingDistribution[rating as keyof typeof ratingDistribution]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Write Review Modal */}
        {showWriteReview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-lg w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Write a Review</h2>
                <button 
                  onClick={() => setShowWriteReview(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Rating
                  </label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="text-2xl focus:outline-none"
                      >
                        <Star 
                          className={star <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 hover:text-yellow-200'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea 
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="Share your experience with this deal..."
                    required
                  />
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button 
                    type="button"
                    onClick={() => setShowWriteReview(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={newReview.rating === 0}
                    className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Review
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

export default ReviewScreen;