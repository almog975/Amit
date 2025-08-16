import React, { useState, useMemo } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import PropertyCard from './PropertyCard';
import SearchFilters from './SearchFilters';
import LanguageToggle from './LanguageToggle';
import { mockProperties, mockTestimonials, mockAgent } from '../mockData';
import { translations, formatCurrency } from '../i18n';
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
  const [language, setLanguage] = useState('he');
  const [filters, setFilters] = useState({});
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showAllProperties, setShowAllProperties] = useState(false);

  const t = (key) => translations[language][key] || key;
  const isRTL = language === 'he';

  // Filter properties based on current filters
  const filteredProperties = useMemo(() => {
    let filtered = mockProperties;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(property =>
        property.title[language].toLowerCase().includes(searchLower) ||
        property.location[language].toLowerCase().includes(searchLower) ||
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
  }, [filters, language]);

  const displayProperties = showAllProperties ? filteredProperties : filteredProperties.slice(0, 6);

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleViewDetails = (propertyId) => {
    console.log('View details for property:', propertyId);
    alert(`${isRTL ? 'צפייה בפרטי נכס' : 'Viewing details for property'} ${propertyId}`);
  };

  const handleContactAgent = (property) => {
    console.log('Contact agent for property:', property.title[language]);
    alert(`${isRTL ? 'יצירת קשר לגבי' : 'Contacting agent about'} ${property.title[language]}`);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert(isRTL ? 'תודה על פנייתך! עמית יחזור אליך בקרוב.' : 'Thank you for your message! Amit will contact you soon.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
              <Home className="h-8 w-8 text-emerald-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {isRTL ? 'עמית נדל"ן' : 'Amit Real Estate'}
                </h1>
                <p className="text-sm text-gray-600">{t('Your Trusted Property Partner')}</p>
              </div>
            </div>
            <div className={`flex items-center space-x-6 ${isRTL ? 'space-x-reverse' : ''}`}>
              <LanguageToggle currentLanguage={language} onLanguageChange={setLanguage} />
              <div className="hidden md:flex items-center space-x-6">
                <a href="#properties" className="text-gray-700 hover:text-emerald-600 transition-colors">{t('Properties')}</a>
                <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">{t('About')}</a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">{t('Contact')}</a>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  {mockAgent.phone}
                </Button>
              </div>
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
                  {mockAgent.experience[language]}
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  {t('Find Your Perfect Home with')} {isRTL ? mockAgent.name : mockAgent.englishName}
                </h1>
                <p className="text-xl text-gray-600 mt-4">
                  {mockAgent.bio[language]}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {mockAgent.achievements[language].map((achievement, index) => (
                  <div key={index} className={`flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm ${isRTL ? 'space-x-reverse' : ''}`}>
                    <Award className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  {t('Call Now')}
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-gray-50">
                  <Mail className="h-5 w-5 mr-2" />
                  {t('Send Message')}
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
                    <h3 className="text-xl font-semibold text-gray-900">{isRTL ? mockAgent.name : mockAgent.englishName}</h3>
                    <p className="text-gray-600">{mockAgent.title[language]}</p>
                    <p className="text-sm text-emerald-600 font-medium">
                      {isRTL ? `רישיון מס' ${mockAgent.licenseNumber}` : `License #${mockAgent.licenseNumber}`}
                    </p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                      <Phone className="h-4 w-4 text-emerald-600" />
                      <span>{mockAgent.phone}</span>
                    </div>
                    <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                      <Mail className="h-4 w-4 text-emerald-600" />
                      <span>{mockAgent.email}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">{t('Specialties:')}</h4>
                    <div className="flex flex-wrap gap-1">
                      {mockAgent.specialties[language].map((specialty, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900">{t('Find Your Dream Property')}</h2>
            <p className="text-gray-600 mt-2">{t('Search through our exclusive listings')}</p>
          </div>
          
          <SearchFilters
            language={language}
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
              <h2 className="text-3xl font-bold text-gray-900">{t('Featured Properties')}</h2>
              <p className="text-gray-600 mt-2">
                {filteredProperties.length} {t('properties available')}
              </p>
            </div>
            
            {filteredProperties.length > 6 && (
              <Button 
                variant="outline" 
                onClick={() => setShowAllProperties(!showAllProperties)}
                className="hover:bg-gray-50"
              >
                {showAllProperties ? t('Show Less') : t('View All Properties')}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                language={language}
                onViewDetails={handleViewDetails}
                onContact={handleContactAgent}
              />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <Home className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('No Properties Found')}</h3>
              <p className="text-gray-600">{t('Try adjusting your search filters to find more properties.')}</p>
              <Button 
                onClick={handleClearFilters}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                {t('Clear Filters')}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('What Clients Say')}</h2>
            <p className="text-gray-600 mt-2">{t('Trusted by families across the region')}</p>
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
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text[language]}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name[language]}</p>
                    <p className="text-sm text-gray-600">{testimonial.location[language]}</p>
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
            <h2 className="text-3xl font-bold text-gray-900">{t('Get In Touch')}</h2>
            <p className="text-gray-600 mt-2">{t("Ready to find your dream home? Let's talk!")}</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('Name')} *</label>
                    <Input
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="h-12"
                      placeholder={t('Your full name')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('Email')} *</label>
                    <Input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="h-12"
                      placeholder={t('your.email@example.com')}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('Phone')}</label>
                  <Input
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="h-12"
                    placeholder={t('(555) 123-4567')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('Message')} *</label>
                  <Textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder={t('Tell me about your dream home or any questions you have...')}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Send className="h-5 w-5 mr-2" />
                  {t('Send Message')}
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
              <div className={`flex items-center space-x-3 mb-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                <Home className="h-8 w-8 text-emerald-400" />
                <div>
                  <h3 className="text-xl font-bold">{isRTL ? 'עמית נדל"ן' : 'Amit Real Estate'}</h3>
                  <p className="text-gray-400 text-sm">{mockAgent.title[language]}</p>
                </div>
              </div>
              <p className="text-gray-400">{mockAgent.bio[language]}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('Contact Info')}</h4>
              <div className="space-y-3 text-gray-400">
                <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>{mockAgent.phone}</span>
                </div>
                <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span>{mockAgent.email}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('Services')}</h4>
              <ul className="space-y-2 text-gray-400">
                {mockAgent.specialties[language].map((specialty, index) => (
                  <li key={index} className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span>{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {isRTL ? 'עמית נדל"ן' : 'Amit Real Estate'}. {t('All rights reserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateHome;