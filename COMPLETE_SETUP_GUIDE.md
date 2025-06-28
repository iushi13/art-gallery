# 🎨 Complete Setup Guide: Dr. Consuela Grigorescu Art Gallery

## 🚀 What You'll Have After Following This Guide

- ✅ **Professional art gallery website** with secure payments
- ✅ **Frontend on Netlify** (free hosting, global CDN)
- ✅ **Backend on Railway** (free tier, auto-scaling)
- ✅ **Sumup payments** (only 1.95% fees vs 2.9% Stripe)
- ✅ **Email confirmations** for all orders
- ✅ **International shipping calculator**
- ✅ **Mobile responsive design**
- ✅ **SSL certificates** (automatic HTTPS)

---

## 📋 Prerequisites

Before starting, make sure you have:
- [x] GitHub account (free)
- [x] Gmail account (for sending emails)
- [x] Your art gallery repository: `iushi13/art-gallery`

---

## 🎯 Step 1: Create Sumup Account (Payment Processing)

### Why Sumup?
- **1.95% fees** (vs 2.9% Stripe = 36% cheaper!)
- **No monthly fees** or setup costs
- **Visa & Mastercard** support
- **PCI compliant** and secure

### Setup Instructions:
1. **Go to**: [sumup.com](https://sumup.com)
2. **Click**: "Get started" → "Online payments"
3. **Business info**: 
   - Business name: "Dr. Consuela Grigorescu Art"
   - Type: "Art & Creative Services"
   - Country: Romania
4. **Complete verification** with ID and bank details
5. **Add Romanian bank account** for receiving payments

### Get API Credentials:
1. **Login** to Sumup Dashboard
2. **Go to**: "Developers" → "API Keys"
3. **Generate** API keys for online payments
4. **Copy and save**:
   - Client ID (starts with `sum_`)
   - Client Secret (starts with `sk_`)

⚠️ **Keep these credentials safe** - you'll need them later!

---

## 📧 Step 2: Setup Gmail for Email Confirmations

### Enable App Passwords:
1. **Go to**: [myaccount.google.com](https://myaccount.google.com)
2. **Security** → **2-Step Verification** → **Enable**
3. **App passwords** → **Generate password**
4. **Select**: "Mail" and "Other (custom name)"
5. **Name**: "Art Gallery Website"
6. **Copy the 16-character password** (save it!)

### Email Settings You'll Need:
- **Email**: your-gmail@gmail.com
- **App Password**: the 16-character password from above
- **From Address**: consuela.grigorescu@art.com (or your preferred)

---

## 🚂 Step 3: Deploy Backend to Railway

### 3.1 Create Railway Account
1. **Go to**: [railway.app](https://railway.app)
2. **Click**: "Login" → "Login with GitHub"
3. **Authorize** Railway to access your repositories

### 3.2 Deploy Backend
1. **Click**: "New Project"
2. **Select**: "Deploy from GitHub repo"
3. **Choose**: `iushi13/art-gallery`
4. **IMPORTANT**: Click "Configure" and set:
   - **Root Directory**: `/backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### 3.3 Add Environment Variables
In Railway dashboard, go to **Variables** tab and add:

```
SUMUP_CLIENT_ID=your_sumup_client_id_here
SUMUP_CLIENT_SECRET=your_sumup_client_secret_here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16_character_app_password
EMAIL_FROM=consuela.grigorescu@art.com
NODE_ENV=production
FRONTEND_URL=https://your-netlify-site.netlify.app
PORT=3001
JWT_SECRET=your_random_secret_here_123456789
```

### 3.4 Get Your Backend URL
- After deployment, Railway gives you a URL like: `https://backend-production-xxxx.up.railway.app`
- **Copy this URL** - you'll need it for the frontend!

### 3.5 Test Backend
Visit: `https://your-railway-url.up.railway.app/health`

You should see:
```json
{
  "status": "OK",
  "timestamp": "2025-01-27T...",
  "service": "Art Gallery Backend"
}
```

---

## 🎨 Step 4: Update Frontend Code

### 4.1 Update API URL
1. **Open**: `src/components/PaymentModal.tsx`
2. **Find line 25**: `const API_URL = 'https://your-backend-name.railway.app';`
3. **Replace** with your actual Railway URL:
   ```javascript
   const API_URL = 'https://backend-production-xxxx.up.railway.app';
   ```

### 4.2 Commit Changes
```bash
git add .
git commit -m "Update API URL for production"
git push origin main
```

---

## 🌐 Step 5: Deploy Frontend to Netlify

### 5.1 Create Netlify Account
1. **Go to**: [netlify.com](https://netlify.com)
2. **Click**: "Sign up" → "GitHub"
3. **Authorize** Netlify

### 5.2 Deploy from GitHub
1. **Click**: "New site from Git"
2. **Choose**: "GitHub"
3. **Select**: `iushi13/art-gallery`
4. **Build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (leave empty)

### 5.3 Deploy!
- **Click**: "Deploy site"
- Netlify will build and deploy automatically
- You'll get a URL like: `https://amazing-site-name.netlify.app`

---

## 🔄 Step 6: Connect Frontend & Backend

### 6.1 Update Backend with Frontend URL
1. **Go to**: Railway dashboard → Your backend service
2. **Variables** tab
3. **Update**: `FRONTEND_URL=https://your-actual-netlify-url.netlify.app`

### 6.2 Redeploy Backend
Railway will automatically redeploy with the new URL.

---

## ✅ Step 7: Test Everything

### 7.1 Test Website
1. **Visit**: Your Netlify URL
2. **Navigate** through all sections
3. **Try**: Gallery, contact forms, shipping calculator

### 7.2 Test Payments
1. **Click**: Any artwork → "Pay Now"
2. **Use test card**: 
   - **Number**: 4000 0000 0000 0002
   - **Expiry**: Any future date (e.g., 12/25)
   - **CVV**: Any 3 digits (e.g., 123)
   - **Name**: Any name
3. **Complete** the payment flow
4. **Check**: Email confirmation arrives

### 7.3 Test Backend
- **Health check**: `https://your-railway-url.up.railway.app/health`
- **Should return**: Status OK

---

## 🎉 Step 8: Go Live!

### 8.1 Switch to Live Sumup
1. **Sumup Dashboard** → Switch to "Live" mode
2. **Update** Railway environment variables with live credentials
3. **Test** with a real small payment

### 8.2 Custom Domain (Optional)
**Netlify**:
1. **Domain settings** → "Add custom domain"
2. **Add**: `art.consuelagrigorescu.com`
3. **Update** DNS records as instructed

**Railway** (for API):
1. **Settings** → "Domains"
2. **Add**: `api.consuelagrigorescu.com`

---

## 💰 Cost Breakdown

### Free Tier (Perfect for Starting)
- **Netlify**: 100GB bandwidth/month (free)
- **Railway**: $5 credit/month (covers small gallery)
- **Sumup**: Only 1.95% per transaction
- **Gmail**: Free for email sending

### Example Costs for CHF 200 Artwork Sale:
- **Sumup fee**: CHF 3.90 (1.95%)
- **You receive**: CHF 196.10
- **Hosting**: ~CHF 0-3/month total

### If You Grow:
- **Netlify Pro**: $19/month (more bandwidth)
- **Railway**: Pay-as-you-go (very affordable)

---

## 🔧 Troubleshooting

### Payment Not Working?
1. **Check**: Sumup credentials in Railway
2. **Verify**: Test card numbers
3. **Look at**: Railway logs for errors

### Email Not Sending?
1. **Verify**: Gmail app password (16 characters)
2. **Check**: 2FA is enabled on Gmail
3. **Test**: Email settings in Railway logs

### Website Not Loading?
1. **Check**: Netlify build logs
2. **Verify**: All files committed to GitHub
3. **Test**: API URL is correct in PaymentModal.tsx

### CORS Errors?
1. **Ensure**: FRONTEND_URL is correct in Railway
2. **Check**: Both URLs use HTTPS
3. **Verify**: No trailing slashes in URLs

---

## 📞 Support & Maintenance

### Regular Tasks:
- **Monitor**: Railway usage (stay within free tier)
- **Check**: Email deliverability
- **Update**: Artwork inventory
- **Review**: Payment transactions in Sumup

### Getting Help:
- **Railway**: [docs.railway.app](https://docs.railway.app)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Sumup**: [developer.sumup.com](https://developer.sumup.com)

---

## 🎯 Your Final Setup

After completing all steps:

### Live URLs:
- **Website**: `https://your-site.netlify.app`
- **API**: `https://backend-xxx.up.railway.app`
- **Admin**: Railway & Netlify dashboards

### Features Working:
✅ **Art gallery** with beautiful design  
✅ **Secure payments** with Sumup  
✅ **Email confirmations** automatic  
✅ **International shipping** calculator  
✅ **Mobile responsive** design  
✅ **SSL certificates** (HTTPS)  
✅ **Global CDN** for fast loading  

### Business Benefits:
- **Professional online presence**
- **Secure payment processing**
- **Automated order management**
- **International customer reach**
- **Low transaction fees** (1.95%)
- **Scalable infrastructure**

---

## 🚀 Next Steps

### Marketing Your Gallery:
1. **SEO**: Add Google Analytics
2. **Social**: Share on Instagram, Facebook
3. **Email**: Build mailing list
4. **Content**: Blog about your art process

### Growing Your Business:
1. **Analytics**: Track visitor behavior
2. **A/B Testing**: Optimize conversion rates
3. **Inventory**: Add more artworks
4. **Features**: Customer accounts, wishlists

---

**🎨 Congratulations! Your professional art gallery is now live and ready to sell worldwide! 🌍**

*Built with ❤️ for artists who want to share their work with the world*