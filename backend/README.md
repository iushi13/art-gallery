# Art Gallery Backend

Backend service for Dr. Consuela Grigorescu Art Gallery with Sumup payment processing.

## Features

- ✅ Sumup payment integration (1.95% fees)
- ✅ Secure payment processing
- ✅ Email confirmations
- ✅ Rate limiting and security
- ✅ Error handling
- ✅ Webhook support

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required environment variables:
- `SUMUP_CLIENT_ID` - Your Sumup client ID
- `SUMUP_CLIENT_SECRET` - Your Sumup client secret
- `EMAIL_USER` - Gmail address for sending emails
- `EMAIL_PASS` - Gmail app password
- `FRONTEND_URL` - Your website URL

### 3. Email Setup (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an "App Password" for this application
3. Use the app password in `EMAIL_PASS` (not your regular password)

### 4. Run the Server

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

## Deployment Options

### Option 1: Railway (Recommended - Free tier available)

1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Deploy the backend folder
4. Add environment variables in Railway dashboard

### Option 2: Heroku

1. Install Heroku CLI
2. Create new app: `heroku create your-app-name`
3. Set environment variables: `heroku config:set SUMUP_CLIENT_ID=your_id`
4. Deploy: `git push heroku main`

### Option 3: DigitalOcean App Platform

1. Go to DigitalOcean App Platform
2. Connect your repository
3. Configure build settings for the backend folder
4. Add environment variables

## API Endpoints

- `POST /api/payments/create-checkout` - Process payment
- `POST /api/payments/webhook` - Sumup webhook
- `GET /api/payments/status/:id` - Check payment status
- `GET /health` - Health check

## Security Features

- Rate limiting (100 requests per 15 minutes)
- CORS protection
- Helmet security headers
- Input validation
- Error handling

## Testing

Use these test card numbers:
- Visa: 4000 0000 0000 0002
- Mastercard: 5200 0000 0000 0007
- Any future expiry date and 3-digit CVV

## Support

For issues or questions, contact the development team.