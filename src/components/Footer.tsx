import React from 'react';
import { Palette, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Palette className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-serif font-bold">Dr. Consuela Grigorescu</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Visual artist, illustrator, and professor with over 20 years of experience in fine arts. 
            All works are original mixed-media pieces available for international shipping.
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>for art lovers worldwide</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 Dr. Consuela Grigorescu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;