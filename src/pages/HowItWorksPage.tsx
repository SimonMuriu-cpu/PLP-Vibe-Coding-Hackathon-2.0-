import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  UserCheck, 
  Calendar, 
  CreditCard, 
  Star, 
  CheckCircle,
  Users,
  FileText,
  Smartphone,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Play
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const HowItWorksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'client' | 'fundi'>('client');

  const clientSteps = [
    {
      step: 1,
      icon: <Search className="h-8 w-8" />,
      title: 'Search & Browse',
      description: 'Find skilled fundis in your area by browsing categories or searching for specific services.',
      details: [
        'Browse by service category (electrical, plumbing, cleaning, etc.)',
        'Filter by location, price range, and ratings',
        'View detailed profiles with photos and reviews',
        'Compare different fundis and their offerings'
      ]
    },
    {
      step: 2,
      icon: <UserCheck className="h-8 w-8" />,
      title: 'Choose Your Fundi',
      description: 'Select the right professional based on their skills, ratings, and availability.',
      details: [
        'Read verified reviews from previous clients',
        'Check ratings and completed job history',
        'View portfolio photos of previous work',
        'Contact fundis directly for questions'
      ]
    },
    {
      step: 3,
      icon: <Calendar className="h-8 w-8" />,
      title: 'Book & Schedule',
      description: 'Choose your preferred date and time, then provide service details.',
      details: [
        'Select from available time slots',
        'Provide detailed service requirements',
        'Add your location and contact information',
        'Get instant booking confirmation'
      ]
    },
    {
      step: 4,
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Secure Payment',
      description: 'Pay safely using M-Pesa with our secure payment system.',
      details: [
        'Transparent pricing with no hidden fees',
        'Secure M-Pesa STK Push payment',
        'Payment held securely until job completion',
        'Automatic receipt and transaction history'
      ]
    },
    {
      step: 5,
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Service Delivery',
      description: 'Your fundi arrives on time and completes the work professionally.',
      details: [
        'Real-time updates on fundi arrival',
        'Direct communication during service',
        'Quality assurance and support',
        'Completion confirmation and documentation'
      ]
    },
    {
      step: 6,
      icon: <Star className="h-8 w-8" />,
      title: 'Rate & Review',
      description: 'Share your experience to help other clients and improve our community.',
      details: [
        'Rate the service quality and professionalism',
        'Leave detailed feedback for future clients',
        'Upload photos of completed work',
        'Help maintain our quality standards'
      ]
    }
  ];

  const fundiSteps = [
    {
      step: 1,
      icon: <Users className="h-8 w-8" />,
      title: 'Create Your Profile',
      description: 'Sign up and build a compelling profile that showcases your skills and experience.',
      details: [
        'Upload professional photos and portfolio',
        'List your skills and certifications',
        'Set your service areas and availability',
        'Complete identity verification process'
      ]
    },
    {
      step: 2,
      icon: <FileText className="h-8 w-8" />,
      title: 'List Your Services',
      description: 'Create detailed service listings with clear descriptions and competitive pricing.',
      details: [
        'Add service categories and descriptions',
        'Set competitive and fair pricing',
        'Upload before/after photos of your work',
        'Specify tools and materials included'
      ]
    },
    {
      step: 3,
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Receive Bookings',
      description: 'Get notified instantly when clients book your services through the platform.',
      details: [
        'Real-time booking notifications',
        'Review client requirements and location',
        'Accept or decline based on availability',
        'Communicate directly with clients'
      ]
    },
    {
      step: 4,
      icon: <Shield className="h-8 w-8" />,
      title: 'Deliver Quality Service',
      description: 'Arrive on time and provide excellent service to build your reputation.',
      details: [
        'Follow safety protocols and best practices',
        'Maintain professional communication',
        'Document work progress with photos',
        'Ensure client satisfaction before completion'
      ]
    },
    {
      step: 5,
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Get Paid Instantly',
      description: 'Receive payment directly to your M-Pesa account upon job completion.',
      details: [
        'Automatic payment release after completion',
        'Transparent fee structure (90% to you)',
        'Instant M-Pesa transfer to your account',
        'Detailed earnings and transaction history'
      ]
    },
    {
      step: 6,
      icon: <Award className="h-8 w-8" />,
      title: 'Build Your Reputation',
      description: 'Earn positive reviews and grow your business through excellent service.',
      details: [
        'Collect 5-star reviews from satisfied clients',
        'Build a portfolio of completed projects',
        'Increase your visibility in search results',
        'Access premium features and benefits'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Verified Professionals',
      description: 'All fundis undergo identity verification and skill assessment'
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Secure Payments',
      description: 'M-Pesa integration ensures safe and instant transactions'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for any issues'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Quality Guarantee',
      description: 'Rating system ensures consistent service quality'
    }
  ];

  const faqs = [
    {
      question: 'How do I know if a fundi is reliable?',
      answer: 'All fundis on our platform are verified through ID checks and skill assessments. You can also read reviews from previous clients and check their ratings and completed job history.'
    },
    {
      question: 'What if I\'m not satisfied with the service?',
      answer: 'We have a quality guarantee policy. If you\'re not satisfied, contact our support team within 24 hours and we\'ll work to resolve the issue, including potential refunds or re-service.'
    },
    {
      question: 'How much does it cost to use FundiConnect?',
      answer: 'For clients, there are no platform fees - you only pay the service cost. For fundis, we charge a small commission (10%) on completed jobs to maintain the platform.'
    },
    {
      question: 'Is my payment secure?',
      answer: 'Yes, all payments are processed through M-Pesa\'s secure system. Your payment is held safely until the service is completed to your satisfaction.'
    },
    {
      question: 'Can I cancel a booking?',
      answer: 'Yes, you can cancel bookings up to 2 hours before the scheduled time. Cancellations made with less notice may incur a small fee to compensate the fundi.'
    },
    {
      question: 'How do fundis get paid?',
      answer: 'Fundis receive payment directly to their M-Pesa account immediately after job completion and client confirmation. We deduct a 10% platform fee from the total amount.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">How It Works</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Connecting clients with skilled fundis has never been easier. 
              Follow these simple steps to get started.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full"></div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('client')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'client'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Clients
              </button>
              <button
                onClick={() => setActiveTab('fundi')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === 'fundi'
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Fundis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {activeTab === 'client' ? 'How to Book a Service' : 'How to Start Earning'}
            </h2>
            <p className="text-xl text-gray-600">
              {activeTab === 'client' 
                ? 'Get your service needs met in 6 simple steps'
                : 'Start your journey as a professional fundi'
              }
            </p>
          </div>

          <div className="space-y-12">
            {(activeTab === 'client' ? clientSteps : fundiSteps).map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connection Line */}
                {index < (activeTab === 'client' ? clientSteps : fundiSteps).length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-blue-200 to-emerald-200 hidden md:block"></div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <Card className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`${
                          activeTab === 'client' 
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700' 
                            : 'bg-gradient-to-r from-emerald-600 to-emerald-700'
                        } text-white p-3 rounded-lg mr-4`}>
                          {step.icon}
                        </div>
                        <div>
                          <Badge className="mb-2">Step {step.step}</Badge>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                  
                  <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="relative">
                      <img
                        src={`https://images.pexels.com/photos/${
                          activeTab === 'client' 
                            ? ['3184291', '3184292', '3184293', '3184294', '3184295', '3184296'][index]
                            : ['3184297', '3184298', '3184299', '3184300', '3184301', '3184302'][index]
                        }/pexels-photo-${
                          activeTab === 'client' 
                            ? ['3184291', '3184292', '3184293', '3184294', '3184295', '3184296'][index]
                            : ['3184297', '3184298', '3184299', '3184300', '3184301', '3184302'][index]
                        }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                        alt={step.title}
                        className="rounded-xl shadow-lg w-full h-64 object-cover"
                      />
                      <div className={`absolute -bottom-4 -right-4 ${
                        activeTab === 'client' 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700' 
                          : 'bg-gradient-to-r from-emerald-600 to-emerald-700'
                      } text-white p-4 rounded-lg shadow-lg`}>
                        <div className="text-2xl font-bold">0{step.step}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FundiConnect?</h2>
            <p className="text-xl text-gray-600">We provide a safe, reliable, and efficient platform for everyone</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-3 rounded-lg inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our platform</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied users who trust FundiConnect for their service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?role=client">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Find a Fundi
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/register?role=fundi">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Become a Fundi
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};