const express = require('express');
const axios = require('axios');
const emailService = require('../services/emailService');
const sumupService = require('../services/sumupService');

const router = express.Router();

// Create payment checkout
router.post('/create-checkout', async (req, res) => {
  try {
    const { artwork, quantity, customerInfo, totalAmount } = req.body;

    // Validate required fields
    if (!artwork || !quantity || !customerInfo || !totalAmount) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['artwork', 'quantity', 'customerInfo', 'totalAmount']
      });
    }

    // Validate customer info
    const requiredCustomerFields = ['name', 'email', 'cardNumber', 'expiryDate', 'cvv'];
    const missingFields = requiredCustomerFields.filter(field => !customerInfo[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: 'Missing customer information',
        missingFields 
      });
    }

    // Calculate processing fee (1.95%)
    const processingFee = Math.round(totalAmount * 0.0195 * 100) / 100;
    const finalAmount = totalAmount + processingFee;

    // Create payment with Sumup
    const paymentResult = await sumupService.createPayment({
      amount: finalAmount,
      currency: 'CHF',
      description: `Artwork: ${artwork.title} by Dr. Consuela Grigorescu`,
      customerInfo,
      metadata: {
        artworkId: artwork.id,
        artworkTitle: artwork.title,
        quantity,
        originalAmount: totalAmount,
        processingFee
      }
    });

    if (paymentResult.success) {
      // Send confirmation email
      try {
        await emailService.sendOrderConfirmation({
          customerEmail: customerInfo.email,
          customerName: customerInfo.name,
          artwork,
          quantity,
          totalAmount: finalAmount,
          orderId: paymentResult.transactionId
        });
      } catch (emailError) {
        console.error('Failed to send confirmation email:', emailError);
        // Don't fail the payment if email fails
      }

      res.json({
        success: true,
        transactionId: paymentResult.transactionId,
        message: 'Payment processed successfully'
      });
    } else {
      res.status(400).json({
        success: false,
        error: paymentResult.error || 'Payment failed'
      });
    }

  } catch (error) {
    console.error('Payment creation error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Payment processing failed',
      message: error.message 
    });
  }
});

// Webhook endpoint for Sumup payment notifications
router.post('/webhook', async (req, res) => {
  try {
    const { event_type, resource } = req.body;

    if (event_type === 'PAYMENT_COMPLETED') {
      console.log('Payment completed:', resource);
      
      // Here you can update your database, send additional emails, etc.
      // For now, we'll just log the successful payment
      
      res.status(200).json({ received: true });
    } else {
      res.status(200).json({ received: true, ignored: true });
    }
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// Get payment status
router.get('/status/:transactionId', async (req, res) => {
  try {
    const { transactionId } = req.params;
    
    const status = await sumupService.getPaymentStatus(transactionId);
    
    res.json({
      success: true,
      status
    });
  } catch (error) {
    console.error('Status check error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to check payment status' 
    });
  }
});

module.exports = router;