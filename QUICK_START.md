# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser

### 3️⃣ Start Building
- Edit components in `app/components/`
- Styles are in `app/globals.css` and Tailwind classes
- Changes auto-reload in browser

---

## 📝 Common Customizations

### Change Business Phone Number
Find and replace `+91 96031 14112` in:
- `app/components/Hero.js`
- `app/components/Header.js`
- `app/components/Contact.js`
- `app/components/FloatingContactButtons.js`

### Update Business Name
Search for "Yashwanth Hemanth" in component files

### Add Real Images
1. Create `public/images/` folder
2. Add PNG/JPG files
3. Update image paths in `app/components/Gallery.js`
4. Example:
```javascript
src: '/images/project-1.jpg'
// instead of
src: 'data:image/svg+xml,...'
```

### Add Google Maps
Replace the placeholder in `app/components/Contact.js`:
```javascript
// Find this section and add your embed code
<div className="relative w-full h-96 bg-white...">
```

### Update Testimonials
Edit `app/components/Reviews.js` - replace the `reviews` array

### Change Service Areas
Edit `app/components/ServiceAreas.js` - modify `serviceAreas` array

---

## 🏗️ Project Structure
```
app/
├── components/          # All React components
│   ├── Hero.js
│   ├── Services.js
│   ├── Gallery.js
│   ├── WhyChooseUs.js
│   ├── Reviews.js
│   ├── ServiceAreas.js
│   ├── Contact.js
│   ├── FloatingContactButtons.js
│   ├── Header.js
│   └── Footer.js
├── globals.css          # Global styles
├── layout.js            # Root layout & SEO
└── page.js             # Main page (assembles all components)

public/                 # Static files (add images here)
tailwind.config.js      # Tailwind configuration
next.config.js          # Next.js configuration
```

---

## 🎨 Colors Used

| Component | Hex Color | Class Name |
|-----------|-----------|-----------|
| Primary | #001a4d | `bg-primary-900` |
| Accent | #fbbf24 | `bg-accent` |
| Light | #f9fafb | `bg-light` |

---

## 📱 Responsive Design
- Mobile first (works on all devices)
- Tailwind breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

---

## ⚡ Performance Tips
- Images already optimized via Next.js Image component
- Lazy loading implemented for images
- Minimal JavaScript
- Static export ready for fast deployment

---

## 🚀 Deployment Commands

### Build
```bash
npm run build
```
Creates optimized static site in `out/` folder

### Deploy to Render
1. Push code to GitHub
2. Create static site on Render
3. Set build command: `npm install && npm run build`
4. Set publish directory: `out`
5. Done! Site auto-deploys on git push

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed steps

---

## 📞 Test Live Features

All contact buttons are functional:
- Click "Call Now" → Opens phone dial
- Click "WhatsApp Chat" → Opens WhatsApp
- Form submission → Sends via WhatsApp
- Works on mobile automatically

---

## 🐛 Troubleshooting

**npm install fails?**
```bash
npm install --legacy-peer-deps
```

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build fails?**
- Check for syntax errors
- Verify image paths
- Check component imports

**Styling looks off?**
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

---

## 📚 Learn More
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

## ✅ By Default, This Site Includes

✓ Mobile-first responsive design  
✓ Hero section with CTAs  
✓ Services section  
✓ Before/After gallery  
✓ Testimonials  
✓ Contact form  
✓ Floating contact buttons  
✓ SEO meta tags  
✓ Fast lighthouse performance  
✓ Static export (Render compatible)  

Start customizing and deploy in minutes! 🎉

---

**Need help?** Check README.md or DEPLOYMENT_GUIDE.md
