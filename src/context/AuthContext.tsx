import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  loading: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'client' | 'fundi';
  location?: string;
  bio?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('fundiconnect_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    
    // Mock login - in real app, this would call your API
    const mockUser: User = {
      id: '1',
      email,
      name: email === 'admin@fundiconnect.com' ? 'Admin User' : 
            email === 'fundi@test.com' ? 'John Mwangi' : 'Jane Doe',
      phone: '+254700000000',
      role: email === 'admin@fundiconnect.com' ? 'admin' : 
            email === 'fundi@test.com' ? 'fundi' : 'client',
      avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2`,
      location: 'Nairobi, Kenya',
      bio: email === 'fundi@test.com' ? 'Professional electrician with 5+ years experience' : undefined,
      isSubscribed: email === 'fundi@test.com' ? true : undefined,
      rating: email === 'fundi@test.com' ? 4.8 : undefined,
      completedJobs: email === 'fundi@test.com' ? 127 : undefined,
      createdAt: new Date()
    };

    localStorage.setItem('fundiconnect_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setLoading(false);
  };

  const register = async (userData: RegisterData) => {
    setLoading(true);
    
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name,
      phone: userData.phone,
      role: userData.role,
      location: userData.location,
      bio: userData.bio,
      isSubscribed: userData.role === 'fundi' ? false : undefined,
      rating: 0,
      completedJobs: 0,
      createdAt: new Date()
    };

    localStorage.setItem('fundiconnect_user', JSON.stringify(newUser));
    setUser(newUser);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('fundiconnect_user');
    setUser(null);
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('fundiconnect_user', JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    updateUser,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};