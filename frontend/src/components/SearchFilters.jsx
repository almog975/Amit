import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, SlidersHorizontal } from 'lucide-react';
import { translations } from '../i18n';

const SearchFilters = ({ language, filters, onFiltersChange, onSearch, onClear }) => {
  const t = (key) => translations[language][key] || key;
  const isRTL = language === 'he';

  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <Card className="w-full shadow-lg border-0">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Main Search Bar */}
          <div className="relative">
            <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400`} />
            <Input
              placeholder={t('Search by location, property type, or keyword...')}
              value={filters.search || ''}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className={`${isRTL ? 'pr-10' : 'pl-10'} h-12 text-base border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
            />
          </div>

          {/* Filter Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Property Type */}
            <Select value={filters.type || ''} onValueChange={(value) => handleFilterChange('type', value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={t('Property Type')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('All Types')}</SelectItem>
                <SelectItem value="house">{t('House')}</SelectItem>
                <SelectItem value="condo">{t('Condo')}</SelectItem>
                <SelectItem value="townhouse">{t('Townhouse')}</SelectItem>
              </SelectContent>
            </Select>

            {/* Bedrooms */}
            <Select value={filters.bedrooms || ''} onValueChange={(value) => handleFilterChange('bedrooms', value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={t('Bedrooms')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">{t('Any')}</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>

            {/* Bathrooms */}
            <Select value={filters.bathrooms || ''} onValueChange={(value) => handleFilterChange('bathrooms', value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={t('Bathrooms')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">{t('Any')}</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={filters.priceRange || ''} onValueChange={(value) => handleFilterChange('priceRange', value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={t('Price Range')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">{t('Any Price')}</SelectItem>
                <SelectItem value="0-1500000">{t('Under $300K')}</SelectItem>
                <SelectItem value="1500000-2500000">{t('$300K - $500K')}</SelectItem>
                <SelectItem value="2500000-3500000">{t('$500K - $750K')}</SelectItem>
                <SelectItem value="3500000-5000000">{t('$750K - $1M')}</SelectItem>
                <SelectItem value="5000000-99999999">{t('$1M+')}</SelectItem>
              </SelectContent>
            </Select>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button 
                onClick={onSearch}
                className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <Search className="h-4 w-4 mr-2" />
                {t('Search')}
              </Button>
              <Button 
                onClick={onClear}
                variant="outline" 
                size="sm" 
                className="px-3 h-12 hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;