# Dr. Consuela Grigorescu Art Gallery

A beautiful, professional art gallery website showcasing the work of Dr. Consuela Grigorescu, featuring secure online payments and international shipping.

## 🎨 Features

- **Beautiful Gallery**: Responsive design showcasing artwork with detailed views
- **Secure Payments**: Integrated with Sumup (only 1.95% fees) for Visa/Mastercard payments
- **International Shipping**: Worldwide shipping calculator and professional packaging
- **Artist Information**: Comprehensive about section, exhibitions, and testimonials
- **Contact System**: Professional inquiry forms and customer support
- **Mobile Responsive**: Optimized for all devices

## 🚀 Live Demo

- **Frontend**: [Your Railway Frontend URL]
- **Backend API**: [Your Railway Backend URL]

## 💰 Payment Processing

This website uses **Sumup** for payment processing - the most cost-effective solution:
- **Only 1.95% per transaction** (vs 2.9% for Stripe)
- **36% cheaper** than competitors
- **Secure PCI DSS compliant** processing
- **Visa & Mastercard** support

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **Sumup API** for payments
- **Nodemailer** for email confirmations
- **Security middleware** (Helmet, CORS, Rate limiting)

## 📦 Project Structure

```
art-gallery/
├── src/                    # Frontend React application
│   ├── components/         # React components
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── backend/               # Backend API server
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
├── public/                # Static assets
└── package.json           # Frontend dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Git installed
- Sumup merchant account

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/art-gallery.git
cd art-gallery
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
```

### 4. Configure Environment Variables
```bash
cd backend
cp .env.example .env
# Edit .env with your Sumup credentials and email settings
```

### 5. Run Development Servers

Frontend:
```bash
npm run dev
```

Backend (in separate terminal):
```bash
cd backend
npm run dev
```

## 🌐 Deployment

### Frontend (Railway)
1. Connect your GitHub repository to Railway
2. Deploy the root directory (frontend)
3. Set build command: `npm run build`
4. Set start command: `npm run preview`

### Backend (Railway)
1. Create a new Railway service
2. Connect the same GitHub repository
3. Set root directory to `/backend`
4. Add environment variables in Railway dashboard
5. Deploy automatically

### Environment Variables for Backend
```
SUMUP_CLIENT_ID=your_sumup_client_id
SUMUP_CLIENT_SECRET=your_sumup_client_secret
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_FROM=consuela.grigorescu@art.com
FRONTEND_URL=https://your-frontend-url.railway.app
```

## 💳 Payment Setup

### 1. Create Sumup Account
1. Go to [sumup.com](https://sumup.com)
2. Sign up for a business account
3. Complete verification process
4. Get your API credentials from the developer dashboard

### 2. Configure Email
1. Enable 2FA on your Gmail account
2. Generate an App Password
3. Use the app password in your environment variables

### 3. Test Payments
Use these test cards:
- **Visa**: 4000 0000 0000 0002
- **Mastercard**: 5200 0000 0000 0007
- Any future expiry date and 3-digit CVV

## 📧 Email Confirmations

Customers automatically receive beautiful HTML email confirmations with:
- Order details and artwork information
- Payment confirmation
- Shipping information
- Certificate of authenticity details

## 🔒 Security Features

- Rate limiting (100 requests per 15 minutes)
- CORS protection
- Secure headers with Helmet
- Input validation and sanitization
- Error handling and logging

## 🌍 International Shipping

- Professional art packaging
- Insured shipping worldwide
- Tracking provided
- Customs documentation included
- Shipping cost calculator by region

## 📱 Mobile Responsive

Fully optimized for:
- Mobile phones (iOS/Android)
- Tablets
- Desktop computers
- All screen sizes

## 🎯 SEO Optimized

- Semantic HTML structure
- Meta tags and descriptions
- Fast loading times
- Mobile-friendly design
- Accessible components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:
- **Email**: consuela.grigorescu@art.com
- **Website**: [Your deployed website]

## 🙏 Acknowledgments

- Dr. Consuela Grigorescu for her beautiful artwork
- Sumup for affordable payment processing
- Railway for reliable hosting
- The React and Node.js communities

---

**Built with ❤️ for art lovers worldwide**