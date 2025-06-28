const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  async sendOrderConfirmation({ customerEmail, customerName, artwork, quantity, totalAmount, orderId }) {
    try {
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: customerEmail,
        subject: `Order Confirmation - ${artwork.title}`,
        html: this.generateOrderConfirmationHTML({
          customerName,
          artwork,
          quantity,
          totalAmount,
          orderId
        })
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Order confirmation email sent:', result.messageId);
      return result;
    } catch (error) {
      console.error('Failed to send order confirmation email:', error);
      throw error;
    }
  }

  generateOrderConfirmationHTML({ customerName, artwork, quantity, totalAmount, orderId }) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Order Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 8px; }
          .order-details { background: #fff; border: 1px solid #ddd; padding: 20px; margin: 20px 0; border-radius: 8px; }
          .artwork-info { display: flex; align-items: center; margin: 20px 0; }
          .artwork-image { width: 100px; height: 100px; object-fit: cover; border-radius: 8px; margin-right: 20px; }
          .total { font-size: 18px; font-weight: bold; color: #d97706; }
          .footer { text-align: center; margin-top: 30px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Purchase!</h1>
            <p>Your order has been confirmed and will be processed shortly.</p>
          </div>

          <div class="order-details">
            <h2>Order Details</h2>
            <p><strong>Order ID:</strong> ${orderId}</p>
            <p><strong>Customer:</strong> ${customerName}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>

            <div class="artwork-info">
              <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image">
              <div>
                <h3>${artwork.title}</h3>
                <p>by Dr. Consuela Grigorescu</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Medium:</strong> ${artwork.medium}</p>
                <p><strong>Year:</strong> ${artwork.year}</p>
              </div>
            </div>

            <div class="total">
              <p>Total Amount: CHF ${totalAmount.toFixed(2)}</p>
            </div>
          </div>

          <div class="order-details">
            <h2>What Happens Next?</h2>
            <ul>
              <li>Your payment has been processed successfully</li>
              <li>We will prepare your artwork for shipping within 2-3 business days</li>
              <li>You will receive a tracking number once shipped</li>
              <li>Your artwork will arrive with a certificate of authenticity</li>
            </ul>
          </div>

          <div class="footer">
            <p>If you have any questions, please contact us at:</p>
            <p><strong>Email:</strong> consuela.grigorescu@art.com</p>
            <p><strong>Website:</strong> Dr. Consuela Grigorescu Art Gallery</p>
            
            <p style="margin-top: 30px;">
              Thank you for supporting independent art!<br>
              Dr. Consuela Grigorescu
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

module.exports = new EmailService();