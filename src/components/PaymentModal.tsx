import React, { useState } from 'react';
import { X, CreditCard, Lock, Shield } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  price: number;
  image: string;
  medium?: string;
  year?: number;
}

interface PaymentModalProps {
  artwork: Artwork;
  quantity: number;
  onClose: () => void;
  onSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ artwork, quantity, onClose, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const totalAmount = artwork.price * quantity;
  const processingFee = Math.round(totalAmount * 0.0195 * 100) / 100; // 1.95%
  const finalAmount = totalAmount + processingFee;

  // Backend API URL - update this with your Railway backend URL
  const API_URL = 'https://your-backend-name.railway.app';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      // Validate card number (basic validation)
      const cardNumber = customerInfo.cardNumber.replace(/\s/g, '');
      if (cardNumber.length < 13 || cardNumber.length > 19) {
        throw new Error('Please enter a valid card number');
      }

      // Validate expiry date
      const [month, year] = customerInfo.expiryDate.split('/');
      const currentDate = new Date();
      const expiryDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
      if (expiryDate < currentDate) {
        throw new Error('Card has expired');
      }

      // Validate CVV
      if (customerInfo.cvv.length < 3 || customerInfo.cvv.length > 4) {
        throw new Error('Please enter a valid CVV');
      }

      // Call backend API
      const response = await fetch(`${API_URL}/api/payments/create-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          artwork,
          quantity,
          customerInfo,
          totalAmount: finalAmount
        })
      });

      const result = await response.json();

      if (result.success) {
        // Show success message
        alert(`Payment successful! Thank you for purchasing "${artwork.title}". You will receive a confirmation email shortly.`);
        
        onSuccess();
        onClose();
      } else {
        throw new Error(result.error || 'Payment failed');
      }

    } catch (err: any) {
      setError(err.message || 'Payment failed. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const getCardType = (number: string) => {
    const num = number.replace(/\s/g, '');
    if (num.startsWith('4')) return 'Visa';
    if (num.startsWith('5') || num.startsWith('2')) return 'Mastercard';
    return 'Card';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Complete Your Purchase</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{artwork.title}</p>
                  <p className="text-sm text-gray-600">by Dr. Consuela Grigorescu</p>
                  <p className="text-sm text-gray-600">Quantity: {quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">CHF {totalAmount.toLocaleString()}</p>
                </div>
              </div>
              <div className="border-t pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>CHF {totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Processing fee (1.95%)</span>
                  <span>CHF {processingFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center border-t pt-2">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-xl text-amber-600">CHF {finalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Customer Information */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Billing Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.country}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, country: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.postalCode}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, postalCode: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Card Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cardholder Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.cardName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, cardName: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Name as it appears on card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number * ({getCardType(customerInfo.cardNumber)})
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.cardNumber}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, cardNumber: formatCardNumber(e.target.value) })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.expiryDate}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, expiryDate: formatExpiryDate(e.target.value) })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.cvv}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, cvv: e.target.value.replace(/\D/g, '') })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 text-green-800">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Secure Payment with Sumup</span>
              </div>
              <p className="text-sm text-green-700 mt-1">
                Your payment is processed securely by Sumup. Only 1.95% processing fee - no hidden costs.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className="flex-1 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5" />
                    <span>Pay CHF {finalAmount.toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;