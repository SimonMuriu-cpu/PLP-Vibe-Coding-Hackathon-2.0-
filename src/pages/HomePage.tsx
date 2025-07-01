import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Search, Star, Shield, Clock, Wrench, Zap, Car, Paintbrush } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SERVICE_CATEGORIES } from '../utils/constants';

export const HomePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate(user.role === 'fundi' ? '/fundi' : '/client');
    } else {
      navigate('/register');
    }
  };

  const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Find Skilled Fundis',
      description: 'Browse verified professionals in your area'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Payments',
      description: 'Pay safely with M-Pesa integration'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Rated & Reviewed',
      description: 'Choose based on real customer feedback'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Get help whenever you need it'
    }
  ];

  const popularCategories = SERVICE_CATEGORIES.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Skilled
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Local Fundis
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Connect with verified local professionals for all your service needs. 
              From repairs to cleaning, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100"
              >
                {user ? 'Go to Dashboard' : 'Get Started'}
              </Button>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Browse Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-emerald-400 opacity-20 rounded-full"></div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600">Find the right professional for your needs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularCategories.map((category) => (
              <Link
                key={category.value}
                to={`/services?category=${category.value}`}
                className="group"
              >
                <Card hover className="text-center p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.label}
                  </h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FundiConnect?</h2>
            <p className="text-xl text-gray-600">We make finding and hiring local professionals simple and secure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-3 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get your service needs met in just a few steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Search & Browse</h3>
              <p className="text-gray-600">Find qualified fundis in your area based on your service needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book & Pay</h3>
              <p className="text-gray-600">Schedule your service and pay securely through M-Pesa</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Service Done</h3>
              <p className="text-gray-600">Your fundi arrives on time and completes the work professionally</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust FundiConnect for their service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!user && (
              <>
                <Link to="/register?role=client">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Find a Fundi
                  </Button>
                </Link>
                <Link to="/register?role=fundi">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Become a Fundi
                  </Button>
                </Link>
              </>
            )}
            {user && (
              <Button size="lg" onClick={handleGetStarted} className="bg-white text-blue-600 hover:bg-gray-100">
                Go to Your Dashboard
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};