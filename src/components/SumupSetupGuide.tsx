import React from 'react';
import { CreditCard, Shield, DollarSign, CheckCircle } from 'lucide-react';

const SumupSetupGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <CreditCard className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sumup Payment Setup Guide</h1>
        <p className="text-lg text-gray-600">
          The cheapest way to accept Visa/Mastercard payments - only 1.95% per transaction!
        </p>
      </div>

      <div className="space-y-8">
        {/* Step 1 */}
        <div className="border-l-4 border-blue-500 pl-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Step 1: Create a Sumup Account
          </h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              1. Go to <a href="https://sumup.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sumup.com</a> and click "Get started"
            </p>
            <p className="text-gray-700">
              2. Choose "Online payments" as your business type
            </p>
            <p className="text-gray-700">
              3. Fill in your business information (use "Dr. Consuela Grigorescu Art" as business name)
            </p>
            <p className="text-gray-700">
              4. Complete the verification process with your ID and bank details
            </p>
            <p className="text-gray-700">
              5. Set up your Romanian bank account for receiving payments
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="border-l-4 border-green-500 pl-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Step 2: Get Your API Credentials
          </h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              1. In your Sumup Dashboard, go to "Developers" → "API Keys"
            </p>
            <p className="text-gray-700">
              2. Generate your API keys for online payments
            </p>
            <p className="text-gray-700">
              3. Copy your "Client ID" and "Client Secret"
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-800 font-medium">
                ⚠️ Keep your credentials secure! Never share them publicly.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="border-l-4 border-purple-500 pl-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Step 3: Set Up Backend Integration
          </h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              You'll need a simple backend to process payments securely. Here's what it needs to do:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Receive payment requests from your website</li>
              <li>Create checkout sessions with Sumup API</li>
              <li>Handle payment confirmations</li>
              <li>Send confirmation emails to customers</li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                💡 You can use Netlify Functions, Vercel Functions, or a simple Node.js server for this.
              </p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="border-l-4 border-amber-500 pl-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Step 4: Update Payment Processing
          </h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              The payment form is already integrated in your website. You just need to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Connect the form to your backend endpoint</li>
              <li>Replace the demo payment processing with real Sumup API calls</li>
              <li>Set up webhook handling for payment confirmations</li>
            </ul>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <DollarSign className="h-6 w-6 text-green-600 mr-2" />
            Cost Savings with Sumup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">1.95%</p>
              <p className="text-sm text-gray-600">Sumup fee</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">2.9%</p>
              <p className="text-sm text-gray-600">Stripe fee</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">36% cheaper</p>
              <p className="text-sm text-gray-600">Savings</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg">
            <h3 className="font-semibold mb-2">Example for CHF 200 artwork:</h3>
            <div className="flex justify-between">
              <span>Sumup fee: CHF 3.90</span>
              <span className="font-semibold text-green-600">You receive: CHF 196.10</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Stripe fee: CHF 6.10</span>
              <span>You would receive: CHF 193.90</span>
            </div>
            <div className="border-t mt-2 pt-2">
              <span className="font-bold text-green-600">You save CHF 2.20 per sale!</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
            What You Get With Sumup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Secure Processing</p>
                <p className="text-sm text-gray-600">PCI DSS compliant, fraud protection</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CreditCard className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Visa & Mastercard</p>
                <p className="text-sm text-gray-600">Accept all major card types</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <DollarSign className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Lowest Fees</p>
                <p className="text-sm text-gray-600">Only 1.95%, no fixed fees</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Easy Integration</p>
                <p className="text-sm text-gray-600">Simple API, good documentation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Test Cards */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Testing Your Integration</h2>
          <p className="text-gray-700 mb-3">
            Use these test card numbers to verify your payment flow:
          </p>
          <div className="space-y-2 font-mono text-sm">
            <p><strong>Visa:</strong> 4000 0000 0000 0002</p>
            <p><strong>Mastercard:</strong> 5200 0000 0000 0007</p>
            <p><strong>Any future expiry date and any 3-digit CVV</strong></p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-amber-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Next Steps</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Create your Sumup account and get verified</li>
            <li>Set up a simple backend for payment processing</li>
            <li>Test the integration with test cards</li>
            <li>Go live and start accepting payments!</li>
          </ol>
          <p className="text-amber-800 mt-4 font-medium">
            💰 Start saving money on every transaction with Sumup's low 1.95% fee!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SumupSetupGuide;