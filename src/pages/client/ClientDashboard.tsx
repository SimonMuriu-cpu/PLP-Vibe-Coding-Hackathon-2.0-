import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Star, Clock, CreditCard, Search, MessageCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockBookings } from '../../services/mockData';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { BOOKING_STATUS_LABELS, PAYMENT_STATUS_LABELS } from '../../utils/constants';
import { format } from 'date-fns';

export const ClientDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'history'>('overview');

  const userBookings = mockBookings.filter(booking => booking.clientId === 'client1');
  const activeBookings = userBookings.filter(booking => 
    ['pending', 'confirmed', 'in_progress'].includes(booking.status)
  );
  const completedBookings = userBookings.filter(booking => 
    booking.status === 'completed'
  );

  const stats = [
    {
      title: 'Active Bookings',
      value: activeBookings.length,
      icon: <Calendar className="h-6 w-6" />,
      color: 'text-blue-600'
    },
    {
      title: 'Completed Jobs',
      value: completedBookings.length,
      icon: <Star className="h-6 w-6" />,
      color: 'text-green-600'
    },
    {
      title: 'Total Spent',
      value: `KES ${userBookings.reduce((sum, booking) => sum + booking.price, 0).toLocaleString()}`,
      icon: <CreditCard className="h-6 w-6" />,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Manage your bookings and find new services</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/services">
            <Card hover className="text-center p-6">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg inline-block mb-4">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Find Services</h3>
              <p className="text-gray-600 text-sm">Browse and book new services</p>
            </Card>
          </Link>

          <Card hover className="text-center p-6">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg inline-block mb-4">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Messages</h3>
            <p className="text-gray-600 text-sm">Chat with your fundis</p>
          </Card>

          <Card hover className="text-center p-6">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg inline-block mb-4">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Reviews</h3>
            <p className="text-gray-600 text-sm">Rate completed services</p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <div className="flex items-center">
                <div className={`${stat.color} mr-4`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'bookings', label: 'Active Bookings' },
                { id: 'history', label: 'History' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Recent Bookings */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
                <Button variant="outline" size="sm" onClick={() => setActiveTab('bookings')}>
                  View All
                </Button>
              </div>
              
              {userBookings.length > 0 ? (
                <div className="space-y-4">
                  {userBookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">Service Booking #{booking.id.slice(-4)}</h4>
                        <p className="text-sm text-gray-600">
                          {format(booking.scheduledDate, 'MMM dd, yyyy')} at {booking.scheduledTime}
                        </p>
                        <p className="text-sm text-gray-500">{booking.location}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={BOOKING_STATUS_LABELS[booking.status].color}>
                          {BOOKING_STATUS_LABELS[booking.status].label}
                        </Badge>
                        <p className="text-sm font-medium text-gray-900 mt-1">
                          KES {booking.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
                  <p className="text-gray-600 mb-4">Start by finding a service you need</p>
                  <Link to="/services">
                    <Button>Browse Services</Button>
                  </Link>
                </div>
              )}
            </Card>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="space-y-4">
            {activeBookings.length > 0 ? (
              activeBookings.map((booking) => (
                <Card key={booking.id}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            Booking #{booking.id.slice(-4)}
                          </h3>
                          <p className="text-gray-600">{booking.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {format(booking.scheduledDate, 'MMM dd, yyyy')}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {booking.scheduledTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="space-y-2">
                        <Badge className={BOOKING_STATUS_LABELS[booking.status].color}>
                          {BOOKING_STATUS_LABELS[booking.status].label}
                        </Badge>
                        <Badge className={PAYMENT_STATUS_LABELS[booking.paymentStatus].color}>
                          {PAYMENT_STATUS_LABELS[booking.paymentStatus].label}
                        </Badge>
                      </div>
                      <p className="text-lg font-semibold text-gray-900 mt-2">
                        KES {booking.price.toLocaleString()}
                      </p>
                      <div className="flex space-x-2 mt-2">
                        <Button size="sm" variant="outline">
                          Contact Fundi
                        </Button>
                        {booking.status === 'completed' && (
                          <Button size="sm">
                            Leave Review
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <Card>
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No active bookings</h3>
                  <p className="text-gray-600 mb-4">Book a service to get started</p>
                  <Link to="/services">
                    <Button>Find Services</Button>
                  </Link>
                </div>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4">
            {completedBookings.length > 0 ? (
              completedBookings.map((booking) => (
                <Card key={booking.id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Booking #{booking.id.slice(-4)}
                      </h3>
                      <p className="text-gray-600">{booking.description}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Completed on {booking.completedAt ? format(booking.completedAt, 'MMM dd, yyyy') : 'N/A'}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant="success">Completed</Badge>
                      <p className="text-lg font-semibold text-gray-900 mt-2">
                        KES {booking.price.toLocaleString()}
                      </p>
                      <Button size="sm" variant="outline" className="mt-2">
                        Leave Review
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <Card>
                <div className="text-center py-12">
                  <Star className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No completed bookings</h3>
                  <p className="text-gray-600">Your booking history will appear here</p>
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};