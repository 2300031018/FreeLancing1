# Yashwanth Hemanth Waterproofing Service Website

A high-performance, mobile-first contractor website built with Next.js and Tailwind CSS for lead generation and conversion optimization.

## 🚀 Features

- **Mobile-First Design**: Optimized for all devices with responsive layouts
- **High Performance**: 
  - Image optimization with WebP/AVIF formats
  - Lazy loading for images
  - Minimal JavaScript bundle
  - SEO-friendly structure
- **Lead Generation Focused**:
  - Prominent CTA buttons (Call Now, WhatsApp Chat)
  - Floating contact buttons for easy accessibility
  - Multiple contact conversion points
- **Modern Stack**:
  - Next.js 15 with App Router
  - Tailwind CSS for styling
  - Static export for deployment on Render
  - Zero API dependencies (runs on frontend only)

## 📋 Project Structure

```
yashwanth-waterproofing/
├── app/
│   ├── components/
│   │   ├── Header.js              # Navigation header
│   │   ├── Hero.js                # Hero section with CTAs
│   │   ├── Services.js            # Service cards
│   │   ├── Gallery.js             # Before & after gallery
│   │   ├── WhyChooseUs.js         # Trust indicators
│   │   ├── Reviews.js             # Customer testimonials
│   │   ├── ServiceAreas.js        # Geographic coverage
│   │   ├── Contact.js             # Contact form & info
│   │   ├── FloatingContactButtons.js # Floating action buttons
│   │   └── Footer.js              # Footer section
│   ├── globals.css                # Global styles
│   ├── layout.js                  # Root layout with meta tags
│   └── page.js                    # Main page
├── public/                        # Static assets (images, icons)
├── .gitignore                     # Git ignore rules
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── README.md                      # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### Step 4: Run Production Build Locally
```bash
npm start
```

## 📱 Pages & Sections

### 1. **Header**
- Navigation menu
- Mobile hamburger menu
- Quick call button
- Logo and branding

### 2. **Hero Section**
- Attention-grabbing headline
- Conversion-focused messaging
- Call Now & WhatsApp buttons
- Trust indicators (25+ years, 1000+ projects, 98% satisfaction)
- Scroll indicator

### 3. **Services**
- 6 service cards with icons
- Service descriptions
- Hover animations
- Learn More links
- CTA to consultation

### 4. **Before & After Gallery**
- 4 project showcases
- Before/After image comparison
- Location information
- Image lazy loading
- Mobile-optimized layout

### 5. **Why Choose Us**
- 6 key differentiators with emojis
- Professional materials & affordable pricing
- Residential & commercial experience
- Statistics display (1000+ projects, 98% satisfaction, 24hrs response)

### 6. **Customer Reviews**
- 4 testimonials with star ratings
- Customer names and locations
- Trust callout section
- Responsive card layout

### 7. **Service Areas**
- Coverage map with 8+ locations
- Emergency service highlight
- Service availability info

### 8. **Contact Section**
- Phone & WhatsApp integration
- Contact form (submits via WhatsApp)
- Hours of operation
- Service area information
- Google Maps placeholder
- Mobile-optimized layout

### 9. **Floating Contact Buttons**
- Fixed position buttons
- Call & WhatsApp options
- Desktop and mobile variants
- Smooth animations

### 10. **Footer**
- Company info
- Quick links
- Service list
- Trust badges
- Copyright & legal links

## 🎨 Color Scheme

| Color | Usage |
|-------|-------|
| **Dark Blue (#001a4d)** | Primary theme, headers, text |
| **Yellow (#fbbf24)** | Accent color, CTAs, highlights |
| **White (#ffffff)** | Background, cards, text contrast |
| **Light Gray (#f9fafb)** | Secondary background |

## 📞 Business Information

- **Phone**: +91 96031 14112
- **Service Areas**: Vijayawada, Guntur, Mangalagiri, Tenali, and nearby areas
- **Services**: Terrace waterproofing, Roof leakage repair, Bathroom waterproofing, Basement waterproofing, Wall crack repair, Water tank waterproofing
- **Experience**: 25+ years
- **Projects**: 1000+
- **Satisfaction Rate**: 98%
- **Emergency Service**: 24/7

## 🔍 SEO Meta Tags

- Title: "Roof Leakage Repair & Waterproofing in Vijayawada | Yashwanth Hemanth"
- Description: "Professional waterproofing and roof leakage repair service. 25+ years experience. Free inspection available."
- Keywords: roof leakage repair Vijayawada, waterproofing contractor, terrace waterproofing, roof seepage repair

## 🚀 Deployment on Render

### Step 1: Prepare for Deployment
```bash
npm run build
```

### Step 2: Create a Render Account
- Go to [render.com](https://render.com)
- Sign up with GitHub or email

### Step 3: Create a New Static Site
1. Click "New +" → "Static Site"
2. Connect your GitHub repository
3. Set Build Command: `npm run build`
4. Set Publish Directory: `out`
5. Click "Create Static Site"

### Step 4: Custom Domain (Optional)
1. Go to site settings
2. Add custom domain
3. Configure DNS records

## ⚡ Performance Optimizations

- ✅ Next.js Image component with automatic optimization
- ✅ WebP/AVIF format support
- ✅ Lazy loading for images
- ✅ CSS optimization via Tailwind
- ✅ Static export (no server-side rendering needed)
- ✅ Minimal JavaScript
- ✅ Semantic HTML structure
- ✅ Meta tags for social sharing
- ✅ Mobile-first responsive design
- ✅ Optimized fonts and typography

## 📊 Lighthouse Performance Targets

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🔧 Customization

### Update Business Information
Edit contact details in these files:
- `app/components/Hero.js` - Phone number and WhatsApp link
- `app/components/Header.js` - Navigation and contact
- `app/components/Contact.js` - Full contact information
- `app/components/Footer.js` - Footer details

### Add Images
1. Create `public/images` directory
2. Add your image files
3. Update Image components with real paths
4. Example in `Gallery.js`: Update `src={item.before}` with actual image paths

### Modify Testimonials
Edit `app/components/Reviews.js` - Update the `reviews` array with real customer reviews

### Update Service Areas
Edit `app/components/ServiceAreas.js` - Add or remove locations in `serviceAreas` array

## 📝 Content Updates

All text content can be easily updated by modifying the respective component files. No database required!

## 🔐 Privacy & Security

- No backend server needed
- No database
- Form submissions via WhatsApp (client-side only)
- Static export ensures no server vulnerabilities
- Suitable for static hosting platforms

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for Yashwanth Hemanth Waterproofing Service.

## 🤝 Support

For questions or modifications, contact the development team.

---

**Built with ❤️ for Yashwanth Hemanth Waterproofing Service**

Live Services:
- Terrace Waterproofing
- Roof Leakage Repair
- Bathroom Waterproofing
- Basement Waterproofing
- Wall Crack Repair
- Water Tank Waterproofing
