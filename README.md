# Instant Resume - Landing Page

A modern, professional landing page for Instant Resume - an AI-powered career management platform built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## 🎨 Brand Colors

- **Primary Red**: `#c1121f` - Main brand color for CTAs and emphasis
- **Deep Red**: `#780000` - Dark accent for headers and important text
- **Cream**: `#fdf0d5` - Background and light elements
- **Navy**: `#003049` - Secondary color for contrast sections
- **Blue**: `#669bbc` - Accent color for highlights and borders

## 🚀 Features

- **Modern Design**: Clean, professional interface inspired by industry leaders (Slack, Notion, Stripe)
- **Responsive**: Fully responsive design that works beautifully on all devices
- **ATS-Optimized**: Optimized for search engines with proper meta tags
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **Accessible**: Follows WCAG accessibility guidelines
- **Component-Based**: Modular architecture using shadcn/ui components

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Custom CSS animations

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
iresume-landing/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles and animations
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   ├── hero.tsx          # Hero section
│   ├── features.tsx      # Features showcase
│   ├── stats.tsx         # Statistics section
│   ├── how-it-works.tsx  # Step-by-step guide
│   ├── pricing.tsx       # Pricing plans
│   ├── cta.tsx           # Call-to-action
│   └── footer.tsx        # Footer component
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 🎯 Key Sections

1. **Hero**: Eye-catching introduction with clear value proposition
2. **Stats**: Social proof with impressive statistics
3. **Features**: Comprehensive feature showcase with 12 key capabilities
4. **How It Works**: 4-step process explanation
5. **Pricing**: Three-tier pricing structure (Free, Pro, Enterprise)
6. **CTA**: Multiple call-to-action sections
7. **Footer**: Links and company information

## 🎨 Design Principles

- **Professional**: Corporate-ready design without looking generic
- **Human-Centered**: Focused on user benefits and pain points
- **Scannable**: Easy-to-digest content with clear hierarchy
- **Action-Oriented**: Multiple CTAs strategically placed
- **Trustworthy**: Social proof and credibility indicators

## 🚀 Deployment

This project can be deployed to:

- **Vercel** (Recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Follow AWS deployment guide
- **Any Node.js hosting**: Build and serve the `.next` folder

## 📝 Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #c1121f;
  --secondary: #003049;
  --accent: #669bbc;
  /* ... */
}
```

### Adding New Sections

1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Update navigation links in `components/navbar.tsx`

### Modifying Content

All content is hardcoded in the respective component files for easy modification:
- Hero text: `components/hero.tsx`
- Features: `components/features.tsx`
- Pricing: `components/pricing.tsx`

## 🤝 Contributing

This is a private project for Instant Resume. For any issues or suggestions, please contact the development team.

## 📄 License

All rights reserved © 2026 Instant Resume

## 🔗 Links

- **Production**: [To be deployed]
- **Staging**: [To be deployed]
- **Design Reference**: Based on modern SaaS landing pages

---

Built with ❤️ by the Instant Resume team
