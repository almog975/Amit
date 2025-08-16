import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { translations, formatCurrency } from '../i18n';

const PropertyCard = ({ property, language, onViewDetails, onContact }) => {
  const t = (key) => translations[language][key] || key;
  const isRTL = language === 'he';

  const formatSqft = (sqft) => {
    return new Intl.NumberFormat(language === 'he' ? 'he-IL' : 'en-US').format(sqft);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title[language]}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop';
          }}
        />
        <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'}`}>
          <Badge variant="secondary" className="bg-emerald-500 text-white border-0 font-semibold">
            {property.status === 'for-sale' ? t('FOR SALE') : 'נמכר'}
          </Badge>
        </div>
        <button className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors`}>
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        <div className={`absolute bottom-3 ${isRTL ? 'right-3' : 'left-3'}`}>
          <div className="bg-white px-3 py-1 rounded-full shadow-md">
            <span className="text-lg font-bold text-gray-900">
              {formatCurrency(property.price, language === 'he' ? 'he-IL' : 'en-US', 'ILS')}
            </span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">{property.title[language]}</h3>
            <div className={`flex items-center text-gray-600 mt-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.location[language]}</span>
            </div>
          </div>

          <div className={`flex items-center justify-between text-gray-600 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Bed className="h-4 w-4 mr-1" />
                <span>{property.bedrooms} {t('bed')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Bath className="h-4 w-4 mr-1" />
                <span>{property.bathrooms} {t('bath')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Square className="h-4 w-4 mr-1" />
                <span>{formatSqft(property.sqft)} {isRTL ? 'מ"ר' : 'sqft'}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2">{property.description[language]}</p>

          <div className="flex flex-wrap gap-1 mt-3">
            {property.features[language].slice(0, 2).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {property.features[language].length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{property.features[language].length - 2} {isRTL ? 'עוד' : 'more'}
              </Badge>
            )}
          </div>

          <div className="flex gap-2 mt-4">
            <Button 
              onClick={() => onViewDetails(property.id)}
              variant="outline" 
              size="sm" 
              className="flex-1 hover:bg-slate-50 transition-colors"
            >
              {t('View Details')}
            </Button>
            <Button 
              onClick={() => onContact(property)}
              size="sm" 
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
            >
              {t('Contact Agent')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;