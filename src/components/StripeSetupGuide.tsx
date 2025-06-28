import React from 'react';
import { CreditCard, Shield, Globe, CheckCircle } from 'lucide-react';

const StripeSetupGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <CreditCard className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stripe Payment Setup Guide</h1>
        <p className="text-lg text-gray-600">
          Complete these steps to enable card payments on your art website
        </p>
      </div>

      <div className="space-y-8">
        {/* Step 1 */}
        <div className="border-l-4 border-blue-500 pl-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Step 1: Create a Stripe Account
          </h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              1. Go to <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">stripe.com</a> and click "Start now"
            </p>
            <p className="text-gray-700">
              2. Fill in your business information (use "Dr. Consuela Grigorescu Art" as business name)
            </p>
            <p className="text-gray-700">
              3. Complete the verification process with your ID and bank details
            </p>
            <p className="text-gray-700">
              4. Set up your bank account for receiving payments
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="border-l-4 border-green-500 pl-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Step 2: Get Your API Keys
          </h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              1. In your Stripe Dashboard, go to "Developers" → "API keys"
            </p>
            <p className="text-gray-700">
              2. Copy your "Publishable key" (starts with pk_test_ or pk_live_)
            </p>
            <p className="text-gray-700">
              3. Copy your "Secret key" (starts with sk_test_ or sk_live_)
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-800 font-medium">
                ⚠️ Keep your secret key private! Never share it publicly.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="border-l-4 border-purple-500 pl-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Step 3: Update Your Website Code
          </h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              1. Replace the placeholder key in PaymentModal.tsx:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              <p className="text-red-600">// Replace this line:</p>
              <p>const stripePromise = loadStripe('pk_test_your_stripe_publishable_key_here');</p>
              <p className="text-green-600 mt-2">// With your actual publishable key:</p>
              <p>const stripePromise = loadStripe('pk_test_YOUR_ACTUAL_KEY');</p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="border-l-4 border-amber-500 pl-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Step 4: Set Up Backend (Required for Production)
          </h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              For a complete payment system, you'll need a backend server to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Create payment intents securely</li>
              <li>Handle webhook events</li>
              <li>Process successful payments</li>
              <li>Send confirmation emails</li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                💡 Consider using Netlify Functions, Vercel Functions, or a simple Node.js server for this.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
            What You Get With Stripe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Secure Payments</p>
                <p className="text-sm text-gray-600">PCI DSS compliant, fraud protection</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Globe className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Global Reach</p>
                <p className="text-sm text-gray-600">Accept cards from 195+ countries</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CreditCard className="h-5 w-5 text-purple-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Multiple Payment Methods</p>
                <p className="text-sm text-gray-600">Cards, digital wallets, bank transfers</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Easy Integration</p>
                <p className="text-sm text-gray-600">Already integrated in your website</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Stripe Pricing</h2>
          <p className="text-gray-700 mb-2">
            <strong>2.9% + CHF 0.30</strong> per successful card charge
          </p>
          <p className="text-sm text-gray-600">
            No setup fees, monthly fees, or hidden costs. You only pay when you get paid.
          </p>
        </div>

        {/* Test Mode */}
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Testing Your Integration</h2>
          <p className="text-gray-700 mb-3">
            Use these test card numbers to verify your payment flow:
          </p>
          <div className="space-y-2 font-mono text-sm">
            <p><strong>Visa:</strong> 4242 4242 4242 4242</p>
            <p><strong>Mastercard:</strong> 5555 5555 5555 4444</p>
            <p><strong>Any future expiry date and any 3-digit CVC</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripeSetupGuide;