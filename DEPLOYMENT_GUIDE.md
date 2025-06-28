# Deployment Guide: Netlify (Frontend) + Railway (Backend)

## Why This Combination?

- **Netlify**: Perfect for React apps, free tier, automatic deployments, great performance
- **Railway**: Excellent for Node.js backends, free tier, easy database integration

## Step 1: Deploy Backend to Railway

### 1.1 Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with your GitHub account

### 1.2 Deploy Backend
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose: `iushi13/art-gallery`
4. **Important**: Set **Root Directory** to `/backend`

### 1.3 Configure Backend Environment Variables
Add these in Railway's **Variables** tab:

```
SUMUP_CLIENT_ID=your_sumup_client_id_here
SUMUP_CLIENT_SECRET=your_sumup_client_secret_here
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_FROM=consuela.grigorescu@art.com
NODE_ENV=production
FRONTEND_URL=https://your-netlify-site.netlify.app
PORT=3001
```

### 1.4 Get Your Backend URL
- Copy your Railway backend URL (e.g., `https://backend-production-xxxx.up.railway.app`)
- **Save this** - you'll need it for the frontend!

## Step 2: Update Frontend Code

### 2.1 Update API URL
In `src/components/PaymentModal.tsx`, replace:
```javascript
const API_URL = 'https://your-backend-name.railway.app';
```

With your actual Railway backend URL:
```javascript
const API_URL = 'https://backend-production-xxxx.up.railway.app';
```

### 2.2 Commit Changes
```bash
git add .
git commit -m "Update API URL for production"
git push origin main
```

## Step 3: Deploy Frontend to Netlify

### 3.1 Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub account

### 3.2 Deploy from GitHub
1. Click **"New site from Git"**
2. Choose **GitHub**
3. Select repository: `iushi13/art-gallery`
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (leave empty - root directory)

### 3.3 Deploy!
Click **"Deploy site"** - Netlify will:
- Install dependencies
- Build your React app
- Deploy to a `.netlify.app` URL

## Step 4: Update Backend with Frontend URL

### 4.1 Get Your Netlify URL
- Copy your Netlify site URL (e.g., `https://amazing-site-name.netlify.app`)

### 4.2 Update Railway Backend
1. Go to your Railway backend service
2. Update the `FRONTEND_URL` environment variable:
   ```
   FRONTEND_URL=https://your-actual-netlify-url.netlify.app
   ```

## Step 5: Test Everything

### 5.1 Test Backend
Visit: `https://your-railway-backend.up.railway.app/health`

### 5.2 Test Frontend
1. Visit your Netlify URL
2. Try the payment flow
3. Use test card: `4000 0000 0000 0002`

## Benefits of This Setup

### Netlify (Frontend)
✅ **Free tier**: 100GB bandwidth/month  
✅ **Automatic deployments** from GitHub  
✅ **Global CDN** for fast loading  
✅ **Custom domains** included  
✅ **HTTPS** automatic  

### Railway (Backend)
✅ **Free tier**: $5 credit/month  
✅ **Auto-scaling**  
✅ **Database support** if needed later  
✅ **Environment variables** management  
✅ **Logs and monitoring**  

## Custom Domains (Optional)

### Netlify Custom Domain
1. In Netlify dashboard → **Domain settings**
2. Add custom domain: `art.consuelagrigorescu.com`
3. Update DNS records as instructed

### Railway Custom Domain
1. In Railway → **Settings** → **Domains**
2. Add: `api.consuelagrigorescu.com`
3. Update frontend code with new API URL

## Final Architecture

```
User Browser
     ↓
Netlify (Frontend)
https://your-site.netlify.app
     ↓ API calls
Railway (Backend)
https://backend-xxx.up.railway.app
     ↓
Sumup API (Payments)
Gmail SMTP (Emails)
```

## Troubleshooting

### CORS Issues
Make sure your Railway backend has the correct `FRONTEND_URL` in environment variables.

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are in `package.json`
- Check build logs in Netlify

### Payment Issues
- Verify Sumup credentials
- Check Railway backend logs
- Test with proper test cards

## Cost Breakdown

### Free Tier Limits
- **Netlify**: 100GB bandwidth, 300 build minutes/month
- **Railway**: $5 credit/month (covers small apps easily)

### Paid Plans (if needed)
- **Netlify Pro**: $19/month (more bandwidth, advanced features)
- **Railway**: Pay-as-you-go after free credit

## Your Final URLs

After deployment:
- **Website**: `https://your-site.netlify.app`
- **API**: `https://backend-xxx.up.railway.app`
- **Health Check**: `https://backend-xxx.up.railway.app/health`

This setup gives you the best of both worlds: Netlify's excellent frontend hosting and Railway's powerful backend infrastructure!