import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MessageSquare, Shield, CreditCard, RefreshCw } from 'lucide-react';

const AboutHelpScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I purchase a deal?",
      answer: "Simply browse our deals, click on one you like, and follow the checkout process. You'll receive a voucher via email with redemption instructions."
    },
    {
      question: "How long do I have to use my deal?",
      answer: "Each deal has an expiration date listed on the deal page. Most deals are valid for 3-6 months from the purchase date."
    },
    {
      question: "Can I get a refund?",
      answer: "We offer a 30-day money-back guarantee on all purchases. Contact our support team if you're not satisfied with your deal."
    },
    {
      question: "How do I redeem my voucher?",
      answer: "Show your voucher (printed or on your phone) to the merchant. They'll verify the code and provide the service or product."
    },
    {
      question: "What if the merchant is closed or unavailable?",
      answer: "Contact us immediately and we'll work to resolve the issue, including providing a full refund if necessary."
    },
    {
      question: "Can I share my deal with others?",
      answer: "Deals are non-transferable and must be used by the purchaser. However, some deals allow you to bring guests."
    },
    {
      question: "How do you ensure deal quality?",
      answer: "We carefully vet all merchants and deals before listing them. We also monitor customer reviews and feedback."
    },
    {
      question: "Do deals expire?",
      answer: "Yes, all deals have expiration dates. You can find this information on the deal page and in your purchase confirmation."
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri, 9AM-6PM EST",
      contact: "1-800-DEALHUB",
      action: "Call now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help within 24 hours",
      contact: "support@dealhub.com",
      action: "Send email"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      action: "Start chat"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-8">
              <button
                onClick={() => setActiveTab('about')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'about' 
                    ? 'border-teal-500 text-teal-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'faq' 
                    ? 'border-teal-500 text-teal-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contact' 
                    ? 'border-teal-500 text-teal-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => setActiveTab('policies')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'policies' 
                    ? 'border-teal-500 text-teal-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Policies
              </button>
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'about' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">About DealHub</h1>
                  <p className="text-lg text-gray-600 mb-6">
                    DealHub is your gateway to discovering amazing local deals and experiences. 
                    We connect customers with the best businesses in their area, offering 
                    incredible savings on everything from dining and entertainment to wellness and travel.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-teal-50 rounded-xl">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="text-teal-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To help people discover and enjoy the best their local community has to offer 
                      while supporting small businesses.
                    </p>
                  </div>

                  <div className="text-center p-6 bg-orange-50 rounded-xl">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="text-orange-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Promise</h3>
                    <p className="text-gray-600">
                      Every deal is carefully vetted to ensure quality, and we stand behind 
                      every purchase with our satisfaction guarantee.
                    </p>
                  </div>

                  <div className="text-center p-6 bg-purple-50 rounded-xl">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="text-purple-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Growth</h3>
                    <p className="text-gray-600">
                      Since 2020, we've helped over 1 million customers save money 
                      while discovering new favorite local spots.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 font-bold">
                        1
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Browse Deals</h3>
                      <p className="text-gray-600">
                        Discover amazing deals in your area across various categories.
                      </p>
                    </div>
                    <div>
                      <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 font-bold">
                        2
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Purchase Securely</h3>
                      <p className="text-gray-600">
                        Buy your deal with our secure payment system and get instant confirmation.
                      </p>
                    </div>
                    <div>
                      <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 font-bold">
                        3
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Redeem & Enjoy</h3>
                      <p className="text-gray-600">
                        Show your voucher to the merchant and enjoy your experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                          <span className="text-2xl text-gray-400">
                            {expandedFaq === index ? '−' : '+'}
                          </span>
                        </div>
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
                  <p className="text-lg text-gray-600">
                    We're here to help! Choose the best way to reach our support team.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                        <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="text-teal-600" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                        <p className="text-gray-600 mb-3">{method.description}</p>
                        <p className="font-medium text-gray-900 mb-4">{method.contact}</p>
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                          {method.action}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none">
                        <option>General Question</option>
                        <option>Deal Issue</option>
                        <option>Refund Request</option>
                        <option>Technical Support</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'policies' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Policies</h1>
                  <p className="text-lg text-gray-600">
                    Our commitment to transparency and your rights as a customer.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                    <p className="text-gray-600 mb-4">
                      We respect your privacy and are committed to protecting your personal data. 
                      We only collect information necessary to provide our services and never sell 
                      your data to third parties.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>We use your email only for order confirmations and opt-in marketing</li>
                      <li>Payment information is securely processed and not stored</li>
                      <li>Location data helps us show relevant local deals</li>
                      <li>You can delete your account and data at any time</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Terms of Service</h2>
                    <p className="text-gray-600 mb-4">
                      By using DealHub, you agree to our terms of service. Key points include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Deals are subject to merchant availability and terms</li>
                      <li>Vouchers are non-transferable and expire as stated</li>
                      <li>Refunds available within 30 days of purchase</li>
                      <li>Users must be 18+ or have parental consent</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Refund Policy</h2>
                    <p className="text-gray-600 mb-4">
                      We want you to be completely satisfied with your purchase:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>30-day money-back guarantee on all deals</li>
                      <li>Full refund if merchant closes or cancels service</li>
                      <li>Partial refunds considered for unsatisfactory experiences</li>
                      <li>Refunds processed within 5-7 business days</li>
                    </ul>
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

export default AboutHelpScreen;