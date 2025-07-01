import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CreditCard } from 'lucide-react';
import { Service, User } from '../../types';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useAuth } from '../../context/AuthContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
  fundi: User;
  onBookingConfirmed: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  service,
  fundi,
  onBookingConfirmed
}) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'booking' | 'payment' | 'success'>('booking');
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    description: '',
    phone: user?.phone || ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate booking creation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStep('payment');
    setLoading(false);
  };

  const handlePayment = async () => {
    setLoading(true);
    
    // Simulate M-Pesa payment
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStep('success');
    setLoading(false);
  };

  const handleClose = () => {
    if (step === 'success') {
      onBookingConfirmed();
    }
    setStep('booking');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            {step === 'booking' && 'Book Service'}
            {step === 'payment' && 'Payment'}
            {step === 'success' && 'Booking Confirmed'}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'booking' && (
            <>
              {/* Service Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={fundi.avatar}
                    alt={fundi.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{fundi.name}</h3>
                    <p className="text-sm text-gray-600">{service.title}</p>
                  </div>
                </div>
                <div className="text-lg font-semibold text-blue-600">
                  KES {service.price.toLocaleString()}
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="date"
                    label="Preferred Date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    icon={<Calendar className="h-4 w-4 text-gray-500" />}
                  />
                  <Input
                    type="time"
                    label="Preferred Time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    required
                    icon={<Clock className="h-4 w-4 text-gray-500" />}
                  />
                </div>

                <Input
                  label="Service Location"
                  placeholder="Enter your address"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  required
                  icon={<MapPin className="h-4 w-4 text-gray-500" />}
                />

                <Input
                  label="Your Phone Number"
                  placeholder="+254 700 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Description
                  </label>
                  <textarea
                    placeholder="Describe what you need help with..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={3}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  loading={loading}
                  className="w-full"
                >
                  Continue to Payment
                </Button>
              </form>
            </>
          )}

          {step === 'payment' && (
            <div className="text-center">
              <div className="bg-green-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pay with M-Pesa
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Service Cost:</span>
                  <span className="font-medium">KES {service.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Platform Fee:</span>
                  <span className="font-medium">KES {Math.round(service.price * 0.1).toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold text-blue-600">
                      KES {Math.round(service.price * 1.1).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                You will receive an M-Pesa prompt on <strong>{formData.phone}</strong>
              </p>

              <Button
                onClick={handlePayment}
                loading={loading}
                className="w-full"
              >
                {loading ? 'Processing Payment...' : 'Pay Now'}
              </Button>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center">
              <div className="bg-green-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <div className="text-green-600 text-2xl">✓</div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Booking Confirmed!
              </h3>
              
              <p className="text-gray-600 mb-6">
                Your booking has been confirmed. {fundi.name} will contact you shortly to confirm the details.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-medium text-blue-900 mb-2">Booking Details:</h4>
                <div className="space-y-1 text-sm text-blue-800">
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                  <p><strong>Location:</strong> {formData.location}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                </div>
              </div>

              <Button
                onClick={handleClose}
                className="w-full"
              >
                View My Bookings
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};