import React, { useState } from 'react';
import { Truck, Shield, Clock, Globe } from 'lucide-react';

const Shipping: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [artworkSize, setArtworkSize] = useState<string>('');

  const shippingRates = {
    'Europe': { small: 80, medium: 120, large: 180 },
    'North America': { small: 120, medium: 180, large: 280 },
    'Asia Pacific': { small: 150, medium: 220, large: 350 },
    'Rest of World': { small: 130, medium: 200, large: 300 }
  };

  const getShippingCost = () => {
    if (!selectedRegion || !artworkSize) return null;
    return shippingRates[selectedRegion as keyof typeof shippingRates]?.[artworkSize as keyof typeof shippingRates['Europe']];
  };

  return (
    <section id="shipping" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            International Shipping
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We ship worldwide with professional art handling services to ensure your artwork arrives safely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Our Shipping Promise</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Secure Packaging</h4>
                  <p className="text-gray-600">Professional art packaging with custom protection for each piece, ensuring maximum safety during transit.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Trusted Carriers</h4>
                  <p className="text-gray-600">We partner with DHL, FedEx, and specialized art logistics companies for reliable worldwide delivery.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Delivery Timeline</h4>
                  <p className="text-gray-600">5-10 business days for express shipping, 10-21 business days for standard international delivery.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Full Insurance</h4>
                  <p className="text-gray-600">All shipments are fully insured for the artwork's value, with tracking provided for peace of mind.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Calculate Shipping Cost</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shipping Region
                </label>
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select your region</option>
                  <option value="Europe">Europe (EU, UK, Switzerland, Norway)</option>
                  <option value="North America">North America (USA, Canada, Mexico)</option>
                  <option value="Asia Pacific">Asia Pacific (Japan, Australia, Singapore, etc.)</option>
                  <option value="Rest of World">Rest of World</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Artwork Size Category
                </label>
                <select 
                  value={artworkSize}
                  onChange={(e) => setArtworkSize(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select size category</option>
                  <option value="small">Small (up to 40×50 cm)</option>
                  <option value="medium">Medium (40×50 to 70×90 cm)</option>
                  <option value="large">Large (over 70×90 cm)</option>
                </select>
              </div>

              {getShippingCost() && (
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Estimated Shipping Cost:</span>
                    <span className="text-2xl font-bold text-amber-600">CHF {getShippingCost()}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Includes professional packaging, insurance, and tracking. Final cost confirmed at checkout.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Important Notes:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Customs duties and taxes are the buyer's responsibility</li>
                <li>• We provide all necessary documentation for customs</li>
                <li>• Delivery to business addresses recommended for large works</li>
                <li>• White glove delivery service available for premium artworks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;