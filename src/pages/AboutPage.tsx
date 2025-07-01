import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Users, Shield, Star, Heart, Target, Eye, Award } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  const stats = [
    { number: '10,000+', label: 'Active Fundis', icon: <Users className="h-6 w-6" /> },
    { number: '50,000+', label: 'Happy Clients', icon: <Heart className="h-6 w-6" /> },
    { number: '100,000+', label: 'Jobs Completed', icon: <Award className="h-6 w-6" /> },
    { number: '4.9/5', label: 'Average Rating', icon: <Star className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Trust & Safety',
      description: 'We verify all our fundis and ensure secure payments through M-Pesa integration for your peace of mind.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community First',
      description: 'We believe in empowering local communities by connecting skilled professionals with those who need their services.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Quality Service',
      description: 'Our rating system and review process ensure you always get the best service from qualified professionals.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Fair Pricing',
      description: 'We maintain transparent pricing with fair rates for both clients and fundis, ensuring value for everyone.'
    }
  ];

  const team = [
    {
      name: 'David Kiprotich',
      role: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Former software engineer with a passion for connecting communities through technology.'
    },
    {
      name: 'Grace Wanjiku',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Tech leader with 10+ years experience building scalable platforms for emerging markets.'
    },
    {
      name: 'Samuel Ochieng',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Operations expert focused on ensuring smooth service delivery and customer satisfaction.'
    },
    {
      name: 'Faith Mutindi',
      role: 'Head of Marketing',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Marketing strategist passionate about growing local businesses and building brand trust.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">About FundiConnect</h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              We're on a mission to transform how Kenyans access skilled services by connecting 
              communities with trusted local professionals.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-emerald-400 opacity-20 rounded-full"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-3 rounded-lg inline-block mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  FundiConnect was born from a simple observation: finding reliable, skilled 
                  professionals for everyday services in Kenya was unnecessarily difficult. 
                  Whether you needed an electrician, cleaner, mechanic, or tutor, the process 
                  was often based on word-of-mouth and lacked transparency.
                </p>
                <p>
                  Founded in 2024 by a team of Kenyan entrepreneurs and technologists, we set 
                  out to create a platform that would bridge this gap. We wanted to empower 
                  skilled fundis with technology while giving clients confidence in their 
                  service choices.
                </p>
                <p>
                  Today, FundiConnect is Kenya's fastest-growing platform for local services, 
                  connecting thousands of skilled professionals with clients across the country. 
                  We're proud to be contributing to the digital transformation of Kenya's 
                  service economy.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">2024</div>
                <div className="text-sm">Founded in Nairobi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center p-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg inline-block mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize access to skilled services across Kenya by creating a trusted, 
                transparent platform that empowers local professionals and provides clients 
                with reliable, quality services at fair prices.
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 rounded-lg inline-block mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become East Africa's leading platform for local services, fostering 
                economic growth in communities while setting the standard for trust, 
                quality, and innovation in the digital service economy.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-3 rounded-lg inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind FundiConnect</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the FundiConnect Community</h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're looking for services or want to offer your skills, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?role=client">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Find Services
              </Button>
            </Link>
            <Link to="/register?role=fundi">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Become a Fundi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};