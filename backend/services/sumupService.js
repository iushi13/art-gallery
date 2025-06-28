const axios = require('axios');

class SumupService {
  constructor() {
    this.clientId = process.env.SUMUP_CLIENT_ID;
    this.clientSecret = process.env.SUMUP_CLIENT_SECRET;
    this.apiUrl = process.env.SUMUP_API_URL || 'https://api.sumup.com';
    this.accessToken = null;
    this.tokenExpiry = null;
  }

  async getAccessToken() {
    // Check if we have a valid token
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    try {
      const response = await axios.post(`${this.apiUrl}/token`, {
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        scope: 'payments'
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      this.accessToken = response.data.access_token;
      this.tokenExpiry = Date.now() + (response.data.expires_in * 1000) - 60000; // Refresh 1 minute early

      return this.accessToken;
    } catch (error) {
      console.error('Failed to get Sumup access token:', error.response?.data || error.message);
      throw new Error('Authentication failed');
    }
  }

  async createPayment({ amount, currency, description, customerInfo, metadata }) {
    try {
      const token = await this.getAccessToken();

      // For demo purposes, we'll simulate a successful payment
      // In production, you would make actual API calls to Sumup
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Basic card validation
      const cardNumber = customerInfo.cardNumber.replace(/\s/g, '');
      if (cardNumber.length < 13 || cardNumber.length > 19) {
        return {
          success: false,
          error: 'Invalid card number'
        };
      }

      // Validate expiry date
      const [month, year] = customerInfo.expiryDate.split('/');
      const currentDate = new Date();
      const expiryDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
      if (expiryDate < currentDate) {
        return {
          success: false,
          error: 'Card has expired'
        };
      }

      // Generate a mock transaction ID
      const transactionId = 'txn_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

      console.log('Payment processed:', {
        transactionId,
        amount,
        currency,
        description,
        customer: customerInfo.name,
        email: customerInfo.email
      });

      return {
        success: true,
        transactionId,
        amount,
        currency,
        status: 'completed'
      };

      /* 
      // Real Sumup API call would look like this:
      const paymentData = {
        checkout_reference: `order_${Date.now()}`,
        amount: Math.round(amount * 100), // Sumup expects amount in cents
        currency: currency,
        description: description,
        merchant_code: process.env.SUMUP_MERCHANT_CODE,
        return_url: `${process.env.FRONTEND_URL}/payment-success`,
        card: {
          number: customerInfo.cardNumber.replace(/\s/g, ''),
          expiry_month: customerInfo.expiryDate.split('/')[0],
          expiry_year: '20' + customerInfo.expiryDate.split('/')[1],
          cvv: customerInfo.cvv,
          name: customerInfo.cardName
        }
      };

      const response = await axios.post(`${this.apiUrl}/v0.1/checkouts`, paymentData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      return {
        success: true,
        transactionId: response.data.id,
        checkoutUrl: response.data.checkout_url,
        status: response.data.status
      };
      */

    } catch (error) {
      console.error('Sumup payment error:', error.response?.data || error.message);
      return {
        success: false,
        error: error.response?.data?.message || 'Payment processing failed'
      };
    }
  }

  async getPaymentStatus(transactionId) {
    try {
      const token = await this.getAccessToken();

      // For demo purposes, return a mock status
      return {
        id: transactionId,
        status: 'completed',
        amount: 200,
        currency: 'CHF'
      };

      /* 
      // Real API call:
      const response = await axios.get(`${this.apiUrl}/v0.1/checkouts/${transactionId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return response.data;
      */

    } catch (error) {
      console.error('Failed to get payment status:', error.response?.data || error.message);
      throw new Error('Failed to retrieve payment status');
    }
  }
}

module.exports = new SumupService();