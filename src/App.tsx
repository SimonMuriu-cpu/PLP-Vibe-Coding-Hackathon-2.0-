import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { ServicesPage } from './pages/services/ServicesPage';
import { ClientDashboard } from './pages/client/ClientDashboard';
import { ProtectedRoute } from './pages/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/services" element={<ServicesPage />} />
              
              {/* Protected Routes */}
              <Route
                path="/client/*"
                element={
                  <ProtectedRoute roles={['client']}>
                    <Routes>
                      <Route path="/" element={<ClientDashboard />} />
                    </Routes>
                  </ProtectedRoute>
                }
              />
              
              <Route
                path="/fundi/*"
                element={
                  <ProtectedRoute roles={['fundi']}>
                    <div className="p-8 text-center">
                      <h1 className="text-2xl font-bold text-gray-900">Fundi Dashboard</h1>
                      <p className="text-gray-600 mt-2">Coming soon...</p>
                    </div>
                  </ProtectedRoute>
                }
              />
              
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute roles={['admin']}>
                    <div className="p-8 text-center">
                      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                      <p className="text-gray-600 mt-2">Coming soon...</p>
                    </div>
                  </ProtectedRoute>
                }
              />

              {/* Fallback for unknown routes */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                    <p className="text-gray-600 mb-4">Page not found</p>
                    <a href="/" className="text-blue-600 hover:text-blue-500">
                      Go back home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;