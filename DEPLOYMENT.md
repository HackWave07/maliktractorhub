# Malik Tractor Hub – Deployment Guide

**For:** Vercel Deployment  
**Framework:** Next.js 15  
**Status:** Ready for Production

---

## Table of Contents
1. [Pre-Deployment Setup](#pre-deployment-setup)
2. [Vercel Deployment](#vercel-deployment)
3. [Post-Deployment Configuration](#post-deployment-configuration)
4. [Monitoring & Analytics](#monitoring--analytics)
5. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Setup

### 1. Environment Variables

Create `.env.local` file in the project root:

```bash
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Email Service (if using Resend or similar)
RESEND_API_KEY=re_xxxxxxxxx

# WhatsApp API (optional, if using API instead of wa.me links)
WHATSAPP_API_TOKEN=xxxxxxxxxxxxx

# Analytics & Monitoring
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@o123456.ingest.sentry.io/123456
```

### 2. Domain Configuration

#### DNS Records to Add
```
Type: A
Name: @
Value: 76.76.19.165

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Vercel Domain Setup
1. Go to Vercel Dashboard → Project Settings → Domains
2. Add domain: `maliktractorhub.com`
3. Add www subdomain: `www.maliktractorhub.com`
4. Vercel will auto-generate DNS records

### 3. SSL/TLS Certificate
- ✅ Automatically managed by Vercel
- Certificate auto-renews
- HTTPS enforced by default

### 4. Static Assets
Create `/public` directory with:
```
public/
├── favicon.ico (32×32)
├── apple-touch-icon.png (180×180)
├── og-image.png (1200×630) - CRITICAL
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── robots.txt (optional, Next.js auto-generates)
```

**Critical:** Must create `og-image.png` before launch for social sharing.

---

## Vercel Deployment

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: Using GitHub Integration (Recommended)

1. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Production-ready Malik Tractor Hub"
   git branch -M main
   git remote add origin https://github.com/yourusername/malik-tractor-hub.git
   git push -u origin main
   ```

2. **Connect GitHub to Vercel**
   - Visit vercel.com/new
   - Select "Import Git Repository"
   - Choose GitHub repository
   - Select project root
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` triggers deployment
   - Preview deployments for pull requests
   - Automatic rollbacks available

### Build Configuration

Vercel automatically detects Next.js. No additional configuration needed.

**Build Command:** `npm run build`  
**Start Command:** `npm run start`  
**Node Version:** 18.17 or later (set in package.json or vercel.json)

### Recommended vercel.json

Create `vercel.json` in project root:

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_SITE_URL": "@site_url"
  },
  "regions": ["iad1"],
  "functions": {
    "src/app/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  }
}
```

---

## Post-Deployment Configuration

### 1. Google Search Console

1. **Verify Ownership**
   - Go to google.com/webmasters
   - Add property: maliktractorhub.com
   - Verify via DNS TXT record or HTML file
   - Vercel: Use DNS TXT method

2. **Submit Sitemap**
   - In GSC, go to Sitemaps
   - Add: `https://maliktractorhub.com/sitemap.xml`
   - Verify submission successful

3. **Monitor**
   - Check indexing status
   - Monitor coverage reports
   - Address any errors

### 2. Google Analytics 4

1. **Create Property**
   - Go to analytics.google.com
   - Create new property "Malik Tractor Hub"
   - Select Web platform
   - Enter: https://maliktractorhub.com

2. **Install Measurement ID**
   - Get Measurement ID (G-XXXXXXXXXX)
   - Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
   - Redeploy on Vercel

3. **Install Google Tag Manager (Optional)**
   - Go to tagmanager.google.com
   - Create container for Web
   - Install GTM script in layout
   - Configure events and conversions

### 3. Bing Webmaster Tools

1. Go to bing.com/webmasters
2. Add property
3. Verify via:
   - Vercel DNS configuration
   - Or upload HTML file to /public
4. Submit sitemap

### 4. Contact Form Email

#### Option A: Using Resend (Recommended)
```bash
npm install react-email resend
```

Create `src/app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  await resend.emails.send({
    from: 'noreply@maliktractorhub.com',
    to: 'mohdnoordin7461@gmail.com',
    subject: `New inquiry from ${name}`,
    html: `
      <h2>New Website Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  });

  return Response.json({ success: true });
}
```

#### Option B: Using Email Service Integration
- SendGrid
- Mailgun
- AWS SES
- Brevo (formerly Sendinblue)

### 5. WhatsApp Business Integration

1. **Current Setup (wa.me links)**
   - ✅ Already working
   - Directs to WhatsApp with pre-filled message
   - No API required

2. **Optional: WhatsApp Business API**
   - For automated responses
   - Message templates
   - Requires WhatsApp Business Account
   - Contact WhatsApp for API access

### 6. Analytics Setup Checklist

- [ ] Google Analytics 4 installed and verified
- [ ] Google Search Console connected
- [ ] Bing Webmaster Tools set up
- [ ] Sitemap submitted
- [ ] robots.txt indexed
- [ ] Contact form tracking enabled
- [ ] WhatsApp link tracking (UTM parameters optional)
- [ ] Goal tracking configured
- [ ] Conversion events set up

---

## Monitoring & Analytics

### Performance Monitoring

#### Using Vercel Analytics
1. Dashboard → Project → Analytics
2. Monitor:
   - Page load times
   - Core Web Vitals
   - Traffic patterns

#### Using Sentry (Error Tracking)
```bash
npm install @sentry/nextjs
```

Update `next.config.mjs`:
```javascript
const withSentryConfig = require("@sentry/nextjs").withSentryConfig;

export default withSentryConfig(nextConfig, {
  org: "your-sentry-org",
  project: "malik-tractor-hub",
});
```

### SEO Monitoring

#### Tools to Use
1. **Google Search Console**
   - Monitor search performance
   - Fix crawl errors
   - Review rich results

2. **Google Analytics 4**
   - Track user behavior
   - Conversion goals
   - Traffic sources

3. **SEMrush** (Optional)
   - Keyword rankings
   - Competitor analysis
   - Backlink monitoring

4. **Ahrefs** (Optional)
   - Site audit
   - Technical SEO
   - Link opportunities

### Regular Maintenance

#### Weekly
- Check Google Search Console for errors
- Monitor analytics traffic
- Verify contact form submissions

#### Monthly
- Review top-performing pages
- Check for broken links
- Monitor Core Web Vitals
- Update blog content

#### Quarterly
- Full SEO audit
- Backlink analysis
- Keyword ranking review
- Competitor analysis

---

## Troubleshooting

### Deployment Issues

#### Build Fails
```
Error: next build
```
**Solution:**
1. Run locally: `npm run build`
2. Check for TypeScript errors: `npm run typecheck`
3. Review Vercel build logs
4. Common cause: Missing environment variables

#### 404 on Pages
```
404: Not Found
```
**Solution:**
1. Ensure all pages exist in `src/app/`
2. Check file naming (must be `page.tsx`)
3. Verify route structure
4. Clear Vercel cache: Dashboard → Settings → Git → Clear Cache

#### Environment Variables Not Loaded
**Solution:**
1. Add to Vercel: Project Settings → Environment Variables
2. Redeploy after adding
3. Check `.env.local` in development
4. Use `NEXT_PUBLIC_` prefix for client-side variables

### SEO Issues

#### Pages Not Indexed
**Solution:**
1. Check robots.txt at `/robots.txt`
2. Verify sitemap at `/sitemap.xml`
3. Submit to Google Search Console
4. Wait 2-4 weeks for indexing
5. Request indexing in GSC if urgent

#### Low Rankings
**Solution:**
1. Ensure unique meta descriptions
2. Check keyword usage
3. Verify structured data with schema.org
4. Test OpenGraph with social media debuggers
5. Improve content quality and relevance

#### Broken Links
**Solution:**
1. Use Google Search Console coverage report
2. Fix 404 URLs
3. Add redirects if URLs changed
4. Test internally with link checkers

### Performance Issues

#### Slow Load Times
**Solution:**
1. Check Vercel Analytics
2. Optimize images (WebP format)
3. Lazy load above-the-fold content
4. Use CDN for static assets
5. Monitor Core Web Vitals

#### High Bounce Rate
**Solution:**
1. Improve page load speed
2. Fix broken navigation
3. Enhance page relevance
4. Improve mobile responsiveness
5. Add clear CTAs

---

## Security Checklist

- ✅ HTTPS enabled (automatic with Vercel)
- ✅ Security headers configured
- ✅ No sensitive data in public files
- ✅ Environment variables protected
- ✅ CORS properly configured
- ✅ X-Frame-Options prevents clickjacking
- ✅ CSP headers ready (optional enhancement)
- ✅ Regular dependency updates: `npm audit fix`

---

## Rollback Procedure

If deployment has critical issues:

1. **Via Vercel Dashboard**
   - Go to Deployments
   - Find previous working deployment
   - Click three dots → Promote to Production

2. **Via Git**
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

3. **Estimated Time:** 2-5 minutes

---

## Support Resources

- **Vercel Docs:** vercel.com/docs
- **Next.js Docs:** nextjs.org/docs
- **Tailwind CSS:** tailwindcss.com/docs
- **Google Search Console Help:** support.google.com/webmasters
- **Google Analytics Help:** support.google.com/analytics

---

**Deployment Status:** READY ✅  
**Last Updated:** June 16, 2026  
**Next Action:** Follow LAUNCH_CHECKLIST.md
