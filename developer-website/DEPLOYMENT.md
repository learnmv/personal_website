# Netlify Deployment Guide

## Quick Deployment Steps

### Method 1: Drag & Drop (Easiest)

1. **Prepare files**: Make sure all your files are ready
2. **Go to Netlify**: Visit [https://netlify.com](https://netlify.com) and sign up/login
3. **Drag & Drop**: Simply drag the entire project folder to the Netlify dashboard
4. **Done**: Your site will be live instantly with a random URL like `https://random-name-123.netlify.app`

### Method 2: Git Integration (Recommended)

1. **Create GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Mahesh Dommaraju Portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and authorize
   - Select your repository
   - Deploy settings:
     - Build command: (leave empty)
     - Publish directory: (leave empty or use `.`)
   - Click "Deploy site"

3. **Auto-deployment**: Now every time you push to GitHub, Netlify will automatically deploy

### Method 3: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

## Custom Domain Setup

1. **In Netlify Dashboard**:
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `maheshdommaraju.com`)

2. **Configure DNS**:
   - If you don't own a domain, you can buy one from:
     - Namecheap
     - GoDaddy
     - Google Domains
   - Point your domain's nameservers to Netlify's or add CNAME record

3. **SSL Certificate**: Netlify automatically provisions free SSL certificates

## Environment Variables (if needed)

If you need to add environment variables:
1. Go to Site settings → Environment variables
2. Add your variables

## Performance Tips

- Your site is already optimized for performance
- Netlify provides global CDN automatically
- Enable Netlify's form handling if using forms
- Consider enabling Netlify Analytics

## Troubleshooting

### Common Issues:

1. **404 errors**: Make sure `_redirects` file is in place
2. **Build fails**: Check if all files are committed
3. **Fonts not loading**: Check if font URLs are correct

### Getting Help:

- Check Netlify's documentation: https://docs.netlify.com
- Contact Netlify support
- Check browser console for errors

## Your Site URLs

After deployment, your site will be available at:
- **Netlify URL**: `https://your-site-name.netlify.app`
- **Custom domain** (if configured): `https://yourdomain.com`

## Updating Your Site

### Via Git:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

### Via Drag & Drop:
Simply drag your updated files to Netlify dashboard again

---

**Need help?** Contact Mahesh at maheshvarmadommaraju671@gmail.com
