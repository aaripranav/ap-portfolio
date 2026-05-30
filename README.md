# Aari Pranav - Cybersecurity Portfolio

A modern, cyberpunk-themed portfolio website showcasing cybersecurity expertise, projects, and experience.

## 🚀 Tech Stack

- **Framework**: React 19 with TanStack Router
- **Styling**: Tailwind CSS v4 with custom cyberpunk design system
- **3D Graphics**: React Three Fiber with Drei helpers
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: Vercel (SPA)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect the settings from `vercel.json`
5. Deploy!

### Option 3: Manual Deploy

1. Build the project: `npm run build`
2. Upload the `dist` folder to Vercel
3. Configure rewrites to point all routes to `/index.html`

## 🎨 Features

- **Boot Sequence**: Terminal-style loading animation on first visit
- **3D Scenes**: Interactive Three.js geometric shapes
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Neon Accents**: Cyberpunk-inspired color scheme
- **Custom Cursor**: Cyber-themed cursor replacement
- **Particle Effects**: Ambient background particles
- **Smooth Animations**: Page transitions and scroll-triggered reveals
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── routes/          # File-based routing pages
├── lib/             # Utility functions
├── styles.css       # Global styles and design system
└── main.tsx         # Application entry point
```

## 🎯 Pages

- **Home** - Hero section with 3D scene and stats
- **About** - Identity card, bio, and skill meters
- **Skills** - Capability pillars with 3D mini-scenes
- **Projects** - Portfolio of cybersecurity projects
- **Experience** - Timeline and certifications
- **Contact** - Contact form and social links

## 🔧 Configuration

The project uses:
- `vite.config.ts` - Vite configuration
- `vercel.json` - Vercel deployment settings
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration (via CSS)

## 📝 License

© 2026 Aari Pranav. All rights reserved.
