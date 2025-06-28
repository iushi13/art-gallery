import React, { useState } from 'react';
import { Eye, Heart, Info } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  description: string;
  price: number;
  dimensions: string;
  medium: string;
  year: number;
  image: string;
  available: boolean;
}

interface ArtworkCardProps {
  artwork: Artwork;
  onInquire: (artwork: Artwork) => void;
  onClick?: (artwork: Artwork) => void;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, onInquire, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    if (onClick) {
      onClick(artwork);
    }
  };

  const handleInquireClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onInquire(artwork);
  };

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDetails(!showDetails);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-4">
            <button 
              onClick={handleDetailsClick}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
              title="Quick details"
            >
              <Info className="h-5 w-5 text-white" />
            </button>
            <button 
              onClick={handleCardClick}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
              title="View full details"
            >
              <Eye className="h-5 w-5 text-white" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
              <Heart className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
        {!artwork.available && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sold
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{artwork.title}</h3>
        <p className="text-gray-600 mb-3 line-clamp-2">{artwork.description}</p>
        
        {showDetails && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Medium:</span> {artwork.medium}</p>
              <p><span className="font-medium">Dimensions:</span> {artwork.dimensions}</p>
              <p><span className="font-medium">Year:</span> {artwork.year}</p>
              <p><span className="font-medium">Artist:</span> Dr. Consuela Grigorescu</p>
            </div>
          </div>
        )}
        
        <div className="space-y-2 text-sm text-gray-500 mb-4">
          <p><span className="font-medium">Medium:</span> {artwork.medium}</p>
          <p><span className="font-medium">Year:</span> {artwork.year}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-amber-600">
            CHF {artwork.price.toLocaleString()}
          </span>
          <button 
            onClick={handleInquireClick}
            disabled={!artwork.available}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              artwork.available 
                ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {artwork.available ? 'Inquire' : 'Sold'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;