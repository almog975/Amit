import React from 'react';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = ({ currentLanguage, onLanguageChange }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === 'he' ? 'en' : 'he')}
      className="flex items-center gap-2 hover:bg-gray-50"
    >
      <Globe className="h-4 w-4" />
      {currentLanguage === 'he' ? 'English' : 'עברית'}
    </Button>
  );
};

export default LanguageToggle;