import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, MapPin } from 'lucide-react';
import { mockServices, mockFundis } from '../../services/mockData';
import { ServiceCard } from '../../components/services/ServiceCard';
import { BookingModal } from '../../components/booking/BookingModal';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { SERVICE_CATEGORIES } from '../../utils/constants';
import { Service, User } from '../../types';

export const ServicesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedFundi, setSelectedFundi] = useState<User | null>(null);

  const filteredServices = useMemo(() => {
    return mockServices.filter(service => {
      const fundi = mockFundis.find(f => f.id === service.fundiId);
      if (!fundi) return false;

      const matchesSearch = !searchQuery || 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fundi.name.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !selectedCategory || service.category === selectedCategory;
      
      const matchesLocation = !selectedLocation || 
        service.location.toLowerCase().includes(selectedLocation.toLowerCase());

      return matchesSearch && matchesCategory && matchesLocation && service.isActive;
    });
  }, [searchQuery, selectedCategory, selectedLocation]);

  const handleBookNow = (service: Service) => {
    const fundi = mockFundis.find(f => f.id === service.fundiId);
    if (fundi) {
      setSelectedService(service);
      setSelectedFundi(fundi);
      setIsBookingOpen(true);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (selectedCategory) params.set('category', selectedCategory);
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Services</h1>
          <p className="text-gray-600">Connect with skilled professionals in your area</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Search services or professionals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search className="h-4 w-4 text-gray-500" />}
              />
              
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {SERVICE_CATEGORIES.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.icon} {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <Input
                placeholder="Location..."
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                icon={<MapPin className="h-4 w-4 text-gray-500" />}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {selectedCategory && (
                  <Badge>
                    {SERVICE_CATEGORIES.find(c => c.value === selectedCategory)?.label}
                    <button
                      onClick={() => setSelectedCategory('')}
                      className="ml-2 text-xs hover:text-red-600"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedLocation && (
                  <Badge>
                    {selectedLocation}
                    <button
                      onClick={() => setSelectedLocation('')}
                      className="ml-2 text-xs hover:text-red-600"
                    >
                      ×
                    </button>
                  </Badge>
                )}
              </div>

              <Button type="submit">
                <Filter className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </form>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => {
              const fundi = mockFundis.find(f => f.id === service.fundiId);
              if (!fundi) return null;
              
              return (
                <ServiceCard
                  key={service.id}
                  service={service}
                  fundi={fundi}
                  onBookNow={() => handleBookNow(service)}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('');
                setSelectedLocation('');
                setSearchParams({});
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Booking Modal */}
        {selectedService && selectedFundi && (
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            service={selectedService}
            fundi={selectedFundi}
            onBookingConfirmed={() => {
              setIsBookingOpen(false);
              // Could redirect to bookings page or show success message
            }}
          />
        )}
      </div>
    </div>
  );
};