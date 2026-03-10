# 🚀 Deployment Guide for Render

This guide provides step-by-step instructions to deploy your Yashwanth Hemanth Waterproofing website on Render.

## Prerequisites

- GitHub account (with your repository pushed)
- Render account (free tier available)
- Domain name (optional, can use Render's provided domain)

## Deployment Steps

### Step 1: Push Your Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Yashwanth Hemanth Waterproofing website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yashwanth-waterproofing.git
git push -u origin main
```

### Step 2: Create a Render Account

1. Visit [render.com](https://render.com)
2. Sign up using GitHub (recommended for easier integration)
3. Authorize Render to access your GitHub account

### Step 3: Create a Static Site on Render

1. **Log in to Render Dashboard**
2. Click **"New +"** button (top right)
3. Select **"Static Site"**
4. **Connect Your Repository**:
   - Select your GitHub account
   - Choose `yashwanth-waterproofing` repository
   - Click "Connect"

### Step 4: Configure Build Settings

1. **Name**: `yashwanth-waterproofing` (or your preferred name)
2. **Build Command**: 
   ```
   npm install && npm run build
   ```
3. **Publish Directory**: 
   ```
   out
   ```
4. Click **"Create Static Site"**

### Step 5: Wait for Deployment

- Render will automatically build and deploy your site
- You'll see a live URL like: `https://yashwanth-waterproofing.onrender.com`
- Deployment takes 2-5 minutes

### Step 6: Configure Custom Domain (Optional)

If you want to use your own domain:

1. Go to **Settings** tab
2. Scroll to **Custom Domain**
3. Enter your domain (e.g., `yashwanthwaterproofing.com`)
4. Follow DNS instructions provided by Render
5. Update your domain registrar's DNS records
6. Wait for DNS propagation (15 mins to 24 hours)

## Automatic Deployments

After initial setup, Render will automatically:
- Deploy when you push to the `main` branch
- Build and deploy within 2-5 minutes
- Show deployment status in the dashboard

## Environment Variables (if needed later)

1. Go to **Settings** → **Environment**
2. Add variables (not needed for current setup)

## Monitoring & Logs

**View Deployment Logs:**
1. Click **"Logs"** tab
2. See build and deployment status
3. Troubleshoot any errors

**Monitor Performance:**
- Dashboard shows request count, bandwidth usage
- View analytics over time

## Troubleshooting

### Build Fails
- Check logs for errors
- Ensure `next.config.js` has `output: 'export'`
- Verify Node.js version compatibility

### Site Not Loading
- Check DNS configuration (custom domain)
- Clear browser cache
- Check Render status page

### Slow Performance
- Enable caching in Render settings
- Optimize images further
- Check network tab in browser DevTools

## Update Your Site

After deployment, updates are automatic:

```bash
# Make changes locally
git add .
git commit -m "Update homepage content"
git push origin main

# Render automatically rebuilds and deploys
# Check deployment status in Render dashboard
```

## Maintenance

### Regular Updates
- Update Node.js/npm dependencies: `npm update`
- Test locally before pushing
- Monitor error logs

### Backups
- Render automatically maintains deployment history
- Revert to previous versions from deployment history
- Keep GitHub as your source of truth

## Security Best Practices

✅ **Do This:**
- Keep sensitive data in environment variables
- Use HTTPS (automatic with Render)
- Regularly update dependencies

❌ **Don't Do This:**
- Commit API keys or passwords
- Use hardcoded sensitive data
- Ignore security updates

## Performance Tips

1. **Images**: Use Next.js Image component (already done)
2. **Caching**: Enable Render's caching headers
3. **CDN**: Render includes automatic CDN distribution
4. **Monitoring**: Check Render analytics for performance data

## Cost Estimation

- **Render Free Tier**: Perfect for this static site
- **Features Included**:
  - Free SSL/TLS certificate
  - Automatic deploys
  - GitHub integration
  - Global CDN
  - 500 build minutes/month
  - Commercial use allowed

## Upgrading if Needed

Later, if you want to add a backend:
1. Upgrade to Render **Web Service** ($7+/month)
2. Connect a database (PostgreSQL, MongoDB)
3. Deploy Node.js backend with frontend

## Support & Documentation

- **Render Docs**: https://render.com/docs
- **Help**: Contact support@render.com
- **Status Page**: https://status.render.com

---

## Quick Reference Commands

```bash
# Local development
npm install
npm run dev           # Runs on http://localhost:3000

# Build for production
npm run build

# Test production build
npm start             # Serves the 'out' directory

# Deploy to Render
git push origin main  # Automatic deployment
```

## Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] Render account created
- [ ] Static site created on Render
- [ ] Build command verified: `npm install && npm run build`
- [ ] Publish directory set to: `out`
- [ ] Site deployed successfully
- [ ] Test website functionality
- [ ] (Optional) Custom domain configured
- [ ] (Optional) DNS records updated
- [ ] Monitor deployment logs

---

**Your website is now live on Render!** 🎉

For any issues, check the Render dashboard logs or contact Render support.
