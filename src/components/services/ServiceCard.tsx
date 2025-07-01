import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Phone } from 'lucide-react';
import { Service, User } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SERVICE_CATEGORIES } from '../../utils/constants';

interface ServiceCardProps {
  service: Service;
  fundi: User;
  onBookNow?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, fundi, onBookNow }) => {
  const category = SERVICE_CATEGORIES.find(cat => cat.value === service.category);

  return (
    <Card hover className="overflow-hidden">
      <div className="relative">
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="info">
            {category?.icon} {category?.label}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="success">
            KES {service.price.toLocaleString()}
          </Badge>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

        {/* Fundi Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={fundi.avatar}
            alt={fundi.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-900">{fundi.name}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span>{fundi.rating} ({fundi.completedJobs} jobs)</span>
            </div>
          </div>
        </div>

        {/* Location and Availability */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {service.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            Available {service.availability.length} days/week
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {service.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} size="sm" className="text-xs">
              {skill}
            </Badge>
          ))}
          {service.skills.length > 3 && (
            <Badge size="sm" className="text-xs">
              +{service.skills.length - 3} more
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            onClick={onBookNow}
            className="flex-1"
            size="sm"
          >
            Book Now
          </Button>
          <Link to={`/services/${service.id}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
          <a href={`tel:${fundi.phone}`}>
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
};