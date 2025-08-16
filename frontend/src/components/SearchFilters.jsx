import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, SlidersHorizontal } from 'lucide-react';

const SearchFilters = ({ filters, onFiltersChange, onSearch, onClear }) => {
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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by location, property type, or keyword..."
              value={filters.search || ''}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="pl-10 h-12 text-base border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Filter Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Property Type */}
            <Select value={filters.type || ''} onValueChange={(value) => handleFilterChange('type', value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>

            {/* Bedrooms */}
            <Select value={filters.bedrooms || ''} onValueChange={(value) => handleFilterChange('bedrooms', value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>

            {/* Bathrooms */}
            <Select value={filters.bathrooms || ''} onValueChange={(value) => handleFilterChange('bathrooms', value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={filters.priceRange || ''} onValueChange={(value) => handleFilterChange('priceRange', value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Price</SelectItem>
                <SelectItem value="0-300000">Under $300K</SelectItem>
                <SelectItem value="300000-500000">$300K - $500K</SelectItem>
                <SelectItem value="500000-750000">$500K - $750K</SelectItem>
                <SelectItem value="750000-1000000">$750K - $1M</SelectItem>
                <SelectItem value="1000000-999999999">$1M+</SelectItem>
              </SelectContent>
            </Select>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button 
                onClick={onSearch}
                className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
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