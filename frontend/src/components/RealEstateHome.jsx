import React, { useState, useMemo } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import PropertyCard from './PropertyCard';
import SearchFilters from './SearchFilters';
import { mockProperties, mockTestimonials, mockAgent } from '../mockData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Users, 
  Home, 
  Star,
  ChevronRight,
  CheckCircle,
  Send
} from 'lucide-react';

const RealEstateHome = () => {
  const [filters, setFilters] = useState({});
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showAllProperties, setShowAllProperties] = useState(false);

  // Filter properties based on current filters
  const filteredProperties = useMemo(() => {
    let filtered = mockProperties;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchLower) ||
        property.location.toLowerCase().includes(searchLower) ||
        property.type.toLowerCase().includes(searchLower)
      );
    }

    if (filters.type && filters.type !== 'all') {
      filtered = filtered.filter(property => property.type === filters.type);
    }

    if (filters.bedrooms && filters.bedrooms !== 'any') {
      filtered = filtered.filter(property => property.bedrooms >= parseInt(filters.bedrooms));
    }

    if (filters.bathrooms && filters.bathrooms !== 'any') {
      filtered = filtered.filter(property => property.bathrooms >= parseInt(filters.bathrooms));
    }

    if (filters.priceRange && filters.priceRange !== 'any') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(property => 
        property.price >= min && property.price <= max
      );
    }

    return filtered;
  }, [filters]);

  const displayProperties = showAllProperties ? filteredProperties : filteredProperties.slice(0, 6);

  const handleSearch = () => {
    // Search logic is handled by the useMemo above
    console.log('Searching with filters:', filters);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleViewDetails = (propertyId) => {
    console.log('View details for property:', propertyId);
    alert(`Viewing details for property ${propertyId} (This would open property details page)`);
  };

  const handleContactAgent = (property) => {
    console.log('Contact agent for property:', property.title);
    alert(`Contacting agent about ${property.title} (This would open contact form or initiate contact)`);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! Amit will contact you soon.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Home className="h-8 w-8 text-emerald-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Amit Real Estate</h1>
                <p className="text-sm text-gray-600">Your Trusted Property Partner</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#properties" className="text-gray-700 hover:text-emerald-600 transition-colors">Properties</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                {mockAgent.phone}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
                  {mockAgent.experience}
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Find Your Perfect Home with {mockAgent.name}
                </h1>
                <p className="text-xl text-gray-600 mt-4">
                  {mockAgent.bio}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {mockAgent.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Award className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-gray-50">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="p-6 bg-white shadow-xl">
                <CardContent className="space-y-4 p-0">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-12 w-12 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{mockAgent.name}</h3>
                    <p className="text-gray-600">{mockAgent.title}</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-emerald-600" />
                      <span>{mockAgent.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-emerald-600" />
                      <span>{mockAgent.email}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {mockAgent.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Find Your Dream Property</h2>
            <p className="text-gray-600 mt-2">Search through our exclusive listings</p>
          </div>
          
          <SearchFilters
            filters={filters}
            onFiltersChange={setFilters}
            onSearch={handleSearch}
            onClear={handleClearFilters}
          />
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
              <p className="text-gray-600 mt-2">
                {filteredProperties.length} properties available
              </p>
            </div>
            
            {filteredProperties.length > 6 && (
              <Button 
                variant="outline" 
                onClick={() => setShowAllProperties(!showAllProperties)}
                className="hover:bg-gray-50"
              >
                {showAllProperties ? 'Show Less' : 'View All Properties'}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={handleViewDetails}
                onContact={handleContactAgent}
              />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <Home className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
              <p className="text-gray-600">Try adjusting your search filters to find more properties.</p>
              <Button 
                onClick={handleClearFilters}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Clients Say</h2>
            <p className="text-gray-600 mt-2">Trusted by families across the region</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
            <p className="text-gray-600 mt-2">Ready to find your dream home? Let's talk!</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <Input
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="h-12"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="h-12"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="h-12"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Tell me about your dream home or any questions you have..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Home className="h-8 w-8 text-emerald-400" />
                <div>
                  <h3 className="text-xl font-bold">Amit Real Estate</h3>
                  <p className="text-gray-400 text-sm">{mockAgent.title}</p>
                </div>
              </div>
              <p className="text-gray-400">{mockAgent.bio}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>{mockAgent.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span>{mockAgent.email}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {mockAgent.specialties.map((specialty, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span>{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Amit Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateHome;