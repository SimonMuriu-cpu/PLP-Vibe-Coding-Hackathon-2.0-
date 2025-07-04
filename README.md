# FundiConnect Platform

A comprehensive freelance marketplace platform connecting local service providers (Fundis) with clients in need of various services. Built for the PLP Vibe Coding Hackathon 2.0.

## 🌐 Live Demo

**Deployment Link**: [https://handyworks-ke.netlify.app/](https://handyworks-ke.netlify.app/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Core Functionality](#core-functionality)
- [API & Data Models](#api--data-models)
- [Authentication & Authorization](#authentication--authorization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

## 🎯 Overview

FundiConnect is a modern web application that bridges the gap between local service providers (Fundis) and clients seeking professional services. The platform facilitates secure booking, payment processing, and service management for various categories including repairs, cleaning, tutoring, mechanics, electrical work, plumbing, carpentry, gardening, beauty services, and fitness training.

### Key Benefits

- **For Clients**: Easy access to verified local professionals, secure payments, and transparent pricing
- **For Fundis**: Expanded market reach, streamlined booking management, and reliable payment processing
- **For Platform**: Scalable marketplace with comprehensive service coverage

## ✨ Features

### 🏠 **Homepage & Landing**
- Responsive hero section with clear value proposition
- Popular service categories showcase
- Feature highlights and benefits
- How-it-works process explanation
- Call-to-action sections for user registration

### 🔐 **Authentication System**
- User registration with role selection (Client/Fundi)
- Secure login/logout functionality
- Role-based access control
- Protected routes for different user types
- Local storage for session management

### 👥 **User Management**
- **Client Features**:
  - Browse and search services
  - Book appointments with fundis
  - Track booking status
  - Payment processing via M-Pesa
  - Review and rate completed services
  - Dashboard for booking history

- **Fundi Features**:
  - Service profile creation and management
  - Booking request handling
  - Availability scheduling
  - Earnings tracking
  - Client communication
  - Rating and review management

- **Admin Features**:
  - Platform oversight and management
  - User verification and moderation
  - Service category management
  - Analytics and reporting

### 🛠️ **Service Management**
- **Service Categories**:
  - General Repairs
  - Cleaning Services
  - Tutoring
  - Auto Mechanics
  - Electrical Work
  - Plumbing
  - Carpentry
  - Gardening
  - Beauty Services
  - Fitness Training
  - Other Services

- **Service Features**:
  - Detailed service descriptions
  - Pricing models (hourly, fixed, per-service)
  - Location-based availability
  - Image galleries
  - Skill tags and specializations
  - Rating and review system

### 💳 **Payment & Booking System**
- M-Pesa integration for secure payments
- Booking status tracking (pending, confirmed, in-progress, completed, cancelled)
- Payment status management (pending, paid, failed, refunded)
- Automated payment processing
- Platform fee calculation and distribution

### 📱 **Responsive Design**
- Mobile-first responsive design
- Cross-browser compatibility
- Progressive Web App (PWA) ready
- Optimized for all device sizes

## 🛠️ Technology Stack

### **Frontend**
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 5.4.2** - Fast build tool and development server
- **React Router DOM 6.22.0** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixing

### **UI Components & Icons**
- **Lucide React 0.344.0** - Beautiful, customizable icons
- **CLSX 2.1.0** - Conditional CSS class names
- **Date-fns 3.3.1** - Modern date utility library

### **Development Tools**
- **ESLint 9.9.1** - Code linting and formatting
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules
- **React Hooks ESLint Plugin** - Hooks-specific linting rules

### **Build & Deployment**
- **Vite** - Fast build tool with hot module replacement
- **Netlify** - Global CDN hosting with CI/CD pipeline

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (Button, Card, etc.)
│   ├── layout/          # Layout components (Header, Footer)
│   ├── services/        # Service-related components
│   └── booking/         # Booking-related components
├── pages/               # Page components
│   ├── auth/            # Authentication pages
│   ├── client/          # Client dashboard pages
│   ├── services/        # Service listing and details
│   └── ProtectedRoute.tsx
├── context/             # React Context providers
│   └── AuthContext.tsx  # Authentication state management
├── hooks/               # Custom React hooks
├── services/            # API services and data
│   └── mockData.ts      # Mock data for development
├── types/               # TypeScript type definitions
│   └── index.ts         # Core type interfaces
├── utils/               # Utility functions
│   └── constants.ts     # Application constants
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SimonMuriu-cpu/PLP-Vibe-Coding-Hackathon-2.0-.git
   cd PLP-Vibe-Coding-Hackathon-2.0-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates a production build in the `dist` folder |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Runs ESLint to check code quality |

## 🔧 Core Functionality

### Authentication Flow
- **Registration**: Users can register as either clients or fundis
- **Login**: Secure authentication with role-based access
- **Session Management**: Persistent login state using localStorage
- **Protected Routes**: Role-specific access control

### Service Discovery
- **Category-based browsing**: Organized service categories
- **Location-based search**: Find fundis in specific areas
- **Filtering and sorting**: By rating, price, availability
- **Service details**: Comprehensive service information

### Booking System
- **Service selection**: Choose from available services
- **Scheduling**: Pick date and time for service
- **Payment processing**: Secure M-Pesa integration
- **Status tracking**: Real-time booking status updates

## 📊 API & Data Models

### Core Types

```typescript
// User Management
interface User {
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

// Service Management
interface Service {
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

// Booking System
interface Booking {
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
```

## 🔐 Authentication & Authorization

### User Roles
- **Client**: Can browse services, make bookings, and manage their account
- **Fundi**: Can create service profiles, manage bookings, and track earnings
- **Admin**: Platform management and oversight capabilities

### Security Features
- Role-based route protection
- Secure session management
- Input validation and sanitization
- Protected API endpoints

## 🚀 Deployment

### Netlify Deployment
The application is deployed on Netlify with the following features:
- **Global CDN**: Fast loading times worldwide
- **Automatic builds**: Triggered on Git push
- **Preview deployments**: For testing before production
- **HTTPS**: Secure connections by default

### Build Process
1. **Development**: `npm run dev` for local development
2. **Build**: `npm run build` creates optimized production build
3. **Preview**: `npm run preview` tests production build locally
4. **Deploy**: Automatic deployment to Netlify on Git push

## 🤝 Contributing

We welcome contributions to improve FundiConnect! Please follow these guidelines:

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use ESLint for code quality
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 👥 Contributors

This project was developed by the following team members:

### **Simon Muriu Mbugua**
- **Email**: muriumsimon6@gmail.com
- **Role**: Lead Developer & Project Coordinator

### **Dennis Amutsa**
- **Email**: amutsadennis@gmail.com
- **Role**: Frontend Development & UI/UX

### **Hannah Machocho**
- **Email**: hannahmachocho3@gmail.com
- **Role**: Backend Integration & API Development

### **Liwa Watson**
- **Email**: watsonliwa@yahoo.com
- **Role**: Database Design & Data Management

### **Cynthia Ongwenyi**
- **Email**: ongwenyicynthia@gmail.com
- **Role**: Testing & Quality Assurance

### **Mutwiri Gachanja**
- **Email**: mutwirigachanja1@gmail.com
- **Role**: Testing & Quality Assurance

---

## 📄 License

This project is developed for the PLP Vibe Coding Hackathon 2.0. All rights reserved.

## 🙏 Acknowledgments

- **PLP (Power Learn Project)** for organizing the hackathon
- **Netlify** for providing free hosting and CI/CD services
- **Vite** team for the excellent build tool
- **Tailwind CSS** for the utility-first CSS framework
- **React** community for the amazing ecosystem

---

**Built with ❤️ for the Kenyan tech community**

