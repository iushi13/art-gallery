import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, ShoppingCart, Info, Palette, Calendar, Ruler, CreditCard } from 'lucide-react';
import PaymentModal from './PaymentModal';

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
  detailedDescription?: string;
  technique?: string;
  inspiration?: string;
}

interface ArtworkDetailProps {
  artwork: Artwork;
  onClose: () => void;
  onOrder: (artwork: Artwork) => void;
}

const ArtworkDetail: React.FC<ArtworkDetailProps> = ({ artwork, onClose, onOrder }) => {
  const [quantity, setQuantity] = useState(1);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleEmailInquiry = () => {
    onOrder(artwork);
  };

  const handlePayNow = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    // You could add additional success handling here
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: artwork.title,
          text: `Check out this artwork by Dr. Consuela Grigorescu: ${artwork.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Gallery</span>
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleShare}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Image Section */}
            <div className="space-y-4">
              <div 
                className={`relative overflow-hidden rounded-lg bg-gray-100 cursor-zoom-in ${
                  isImageZoomed ? 'fixed inset-4 z-50 bg-black bg-opacity-90 flex items-center justify-center' : ''
                }`}
                onClick={() => setIsImageZoomed(!isImageZoomed)}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className={`w-full transition-transform duration-300 ${
                    isImageZoomed ? 'max-h-full max-w-full object-contain' : 'object-cover'
                  }`}
                />
                {isImageZoomed && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsImageZoomed(false);
                    }}
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                  >
                    ×
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-500 text-center">Click image to zoom</p>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                  {artwork.title}
                </h1>
                <p className="text-lg text-gray-600 mb-4">by Dr. Consuela Grigorescu</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className={`px-3 py-1 rounded-full ${
                    artwork.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {artwork.available ? 'Available' : 'Sold'}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-200 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-amber-600">
                    CHF {artwork.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">Original artwork</span>
                </div>
              </div>

              {/* Artwork Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Palette className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Medium</p>
                    <p className="text-sm text-gray-600">{artwork.medium}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Ruler className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Dimensions</p>
                    <p className="text-sm text-gray-600">{artwork.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Year</p>
                    <p className="text-sm text-gray-600">{artwork.year}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Info className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Technique</p>
                    <p className="text-sm text-gray-600">{artwork.technique || 'Mixed media'}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About this artwork</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {artwork.detailedDescription || artwork.description}
                </p>
                {artwork.inspiration && (
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-medium text-amber-900 mb-2">Artist's Inspiration</h4>
                    <p className="text-amber-800 text-sm">{artwork.inspiration}</p>
                  </div>
                )}
              </div>

              {/* Purchase Section */}
              {artwork.available && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-900">Quantity:</label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-600 hover:text-gray-900"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:text-gray-900"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      onClick={handlePayNow}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <CreditCard className="h-5 w-5" />
                      <span>Pay Now</span>
                    </button>
                    
                    <button
                      onClick={handleEmailInquiry}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Email Inquiry</span>
                    </button>
                  </div>

                  <div className="text-sm text-gray-600 space-y-2">
                    <p>• Free consultation about the artwork</p>
                    <p>• Professional packaging and insured shipping</p>
                    <p>• Certificate of authenticity included</p>
                    <p>• 14-day return policy</p>
                    <p>• Secure payment processing with Stripe</p>
                  </div>
                </div>
              )}

              {!artwork.available && (
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-gray-600 mb-2">This artwork has been sold</p>
                  <button
                    onClick={handleEmailInquiry}
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Inquire about similar works
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          artwork={artwork}
          quantity={quantity}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </>
  );
};

export default ArtworkDetail;