export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'client' | 'fundi' | 'admin';
  avatar?: string;
  location?: string;
  bio?: string;
  isSubscribed?: boolean;
  subscriptionExpiry?: Date;
  rating?: number;
  completedJobs?: number;
  createdAt: Date;
}

export interface Service {
  id: string;
  fundiId: string;
  title: string;
  description: string;
  category: ServiceCategory;
  skills: string[];
  price: number;
  priceType: 'hourly' | 'fixed' | 'per_service';
  location: string;
  availability: string[];
  images: string[];
  rating: number;
  reviews: Review[];
  isActive: boolean;
  createdAt: Date;
}

export interface Booking {
  id: string;
  clientId: string;
  fundiId: string;
  serviceId: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  scheduledDate: Date;
  scheduledTime: string;
  location: string;
  description: string;
  price: number;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentId?: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  mpesaCode: string;
  phone: string;
  status: 'pending' | 'success' | 'failed';
  platformFee: number;
  fundiAmount: number;
  createdAt: Date;
}

export interface Review {
  id: string;
  clientId: string;
  fundiId: string;
  bookingId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'booking' | 'payment' | 'review' | 'subscription';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

export type ServiceCategory = 
  | 'repairs'
  | 'cleaning'
  | 'tutoring'
  | 'mechanics'
  | 'electrical'
  | 'plumbing'
  | 'carpentry'
  | 'gardening'
  | 'beauty'
  | 'fitness'
  | 'other';