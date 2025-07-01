import { Service, Booking, User } from '../types';

export const mockFundis: User[] = [
  {
    id: 'fundi1',
    name: 'John Mwangi',
    email: 'john@example.com',
    phone: '+254701234567',
    role: 'fundi',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    location: 'Nairobi, Kenya',
    bio: 'Professional electrician with 5+ years of experience. Specialized in residential and commercial electrical work.',
    rating: 4.8,
    completedJobs: 127,
    isSubscribed: true,
    subscriptionExpiry: new Date('2024-12-31'),
    createdAt: new Date('2022-01-15')
  },
  {
    id: 'fundi2',
    name: 'Mary Wanjiku',
    email: 'mary@example.com',
    phone: '+254702345678',
    role: 'fundi',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    location: 'Mombasa, Kenya',
    bio: 'Expert cleaner and housekeeper. Providing thorough cleaning services for homes and offices.',
    rating: 4.9,
    completedJobs: 203,
    isSubscribed: true,
    subscriptionExpiry: new Date('2024-11-30'),
    createdAt: new Date('2021-08-20')
  },
  {
    id: 'fundi3',
    name: 'Peter Kimani',
    email: 'peter@example.com',
    phone: '+254703456789',
    role: 'fundi',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    location: 'Kisumu, Kenya',
    bio: 'Experienced mechanic specializing in car repairs and maintenance. Mobile service available.',
    rating: 4.7,
    completedJobs: 89,
    isSubscribed: true,
    subscriptionExpiry: new Date('2024-10-15'),
    createdAt: new Date('2022-03-10')
  }
];

export const mockServices: Service[] = [
  {
    id: 'service1',
    fundiId: 'fundi1',
    title: 'Electrical Installation & Repairs',
    description: 'Complete electrical services including wiring, installations, repairs, and maintenance for residential and commercial properties.',
    category: 'electrical',
    skills: ['Wiring', 'Circuit Installation', 'Electrical Repairs', 'Lighting'],
    price: 2500,
    priceType: 'per_service',
    location: 'Nairobi, Kenya',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    images: ['https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800'],
    rating: 4.8,
    reviews: [],
    isActive: true,
    createdAt: new Date('2024-01-15')
  },
  {
    id: 'service2',
    fundiId: 'fundi2',
    title: 'Professional House Cleaning',
    description: 'Thorough house cleaning services including deep cleaning, regular maintenance, and move-in/move-out cleaning.',
    category: 'cleaning',
    skills: ['Deep Cleaning', 'Regular Cleaning', 'Carpet Cleaning', 'Window Cleaning'],
    price: 1500,
    priceType: 'per_service',
    location: 'Mombasa, Kenya',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    images: ['https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800'],
    rating: 4.9,
    reviews: [],
    isActive: true,
    createdAt: new Date('2024-01-20')
  },
  {
    id: 'service3',
    fundiId: 'fundi3',
    title: 'Car Repair & Maintenance',
    description: 'Professional automotive repair services including engine repair, brake service, oil changes, and general maintenance.',
    category: 'mechanics',
    skills: ['Engine Repair', 'Brake Service', 'Oil Change', 'Diagnostics'],
    price: 3000,
    priceType: 'per_service',
    location: 'Kisumu, Kenya',
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    images: ['https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800'],
    rating: 4.7,
    reviews: [],
    isActive: true,
    createdAt: new Date('2024-01-25')
  }
];

export const mockBookings: Booking[] = [
  {
    id: 'booking1',
    clientId: 'client1',
    fundiId: 'fundi1',
    serviceId: 'service1',
    status: 'confirmed',
    scheduledDate: new Date('2024-02-15'),
    scheduledTime: '10:00',
    location: 'Westlands, Nairobi',
    description: 'Need electrical wiring for new house extension',
    price: 2500,
    paymentStatus: 'paid',
    paymentId: 'pay123',
    createdAt: new Date('2024-02-10')
  },
  {
    id: 'booking2',
    clientId: 'client1',
    fundiId: 'fundi2',
    serviceId: 'service2',
    status: 'pending',
    scheduledDate: new Date('2024-02-20'),
    scheduledTime: '14:00',
    location: 'Kilifi, Mombasa',
    description: 'Weekly house cleaning service',
    price: 1500,
    paymentStatus: 'pending',
    createdAt: new Date('2024-02-12')
  }
];