# Bluetrace Technologies — Official Website

> **Tagline:** Building Intelligent Digital Infrastructure
> **Domain:** [bluetrace.tech](https://bluetrace.tech)
> **Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion

A modern, premium, responsive landing site for **Bluetrace Technologies Private Limited** — featuring a futuristic AI/SaaS aesthetic, glassmorphism, animated gradients, particle background, dark-by-default theme, and production-ready SEO + deployment configs.

---

## ✨ Features

- 🎨 **Premium futuristic UI** — glass cards, floating gradients, animated grid, particle field
- ⚡ **Next.js App Router** with React Server Components
- 🧩 **Reusable component library** (`/components`, `/components/sections`)
- 🔍 **SEO-ready** — full metadata, OpenGraph, Twitter cards, JSON-LD, dynamic OG image, sitemap & robots
- 🌗 **Dark mode by default** with electric blue / cyan / purple palette
- 📱 **Mobile-first responsive design** + accessible focus states + skip-to-content
- 🪄 **Framer Motion** animations (reveals, layout transitions, hover micro-interactions)
- 🧱 **Production hardened** — security headers, compression, font optimization
- ☁️ **Deploy-ready** for **Vercel**, **Cloudflare Pages**, and **Netlify**

---

## 📁 Project Structure

```
bluetrace-pages/
├── app/
│   ├── layout.tsx              # Root layout (SEO, fonts, JSON-LD, navbar/footer)
│   ├── page.tsx                # Home
│   ├── globals.css             # Tailwind + custom design tokens
│   ├── loading.tsx             # Global loading animation
│   ├── not-found.tsx           # 404 page
│   ├── opengraph-image.tsx     # Dynamic OG image (edge)
│   ├── sitemap.ts              # /sitemap.xml
│   ├── robots.ts               # /robots.txt
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── products/page.tsx
│   ├── contact/page.tsx
│   ├── careers/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── GlassCard.tsx
│   ├── ParticleField.tsx
│   ├── FloatingGradients.tsx
│   ├── SectionHeading.tsx
│   ├── PageHeader.tsx
│   ├── MotionReveal.tsx
│   ├── LegalContent.tsx
│   └── sections/               # Home page sections
│       ├── Hero.tsx
│       ├── ServicesOverview.tsx
│       ├── FeaturedProducts.tsx
│       ├── Vision.tsx
│       ├── TechStack.tsx
│       ├── WhyChooseUs.tsx
│       └── ContactCTA.tsx
├── lib/
│   ├── site.ts                 # Site config (name, urls, social, nav, emails)
│   ├── services.ts             # Services data
│   └── products.ts             # Products data
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── site.webmanifest
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── vercel.json
└── netlify.toml
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.18 (recommended: **20 LTS**)
- **npm** ≥ 9 (or pnpm / yarn)

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)**.

### 3. Type-check & lint
```bash
npm run type-check
npm run lint
```

### 4. Build & start production
```bash
npm run build
npm start
```

---

## ☁️ Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel        # first-time deploy
vercel --prod # production
```
Or push to GitHub and import the repo in [vercel.com/new](https://vercel.com/new). Zero config — `vercel.json` is included.

### Cloudflare Pages
```bash
npm i -g wrangler
# In Cloudflare Pages → Create Project → Connect Git
# Build command:    npm run build
# Build output:     .next
# Framework preset: Next.js
```
For full SSR support on Cloudflare, use the **Next on Pages** adapter:
```bash
npm i -D @cloudflare/next-on-pages
npx @cloudflare/next-on-pages
```
Then set the build command to `npx @cloudflare/next-on-pages` and output to `.vercel/output/static`.

### Netlify
```bash
npm i -g netlify-cli
netlify deploy             # preview
netlify deploy --prod      # production
```
The included `netlify.toml` configures Node 20 and the official `@netlify/plugin-nextjs`.

---

## 🎨 Brand & Theming

Edit colors and tokens in **`tailwind.config.ts`** and **`app/globals.css`**.
Site-wide content (name, emails, nav, social links) lives in **`lib/site.ts`** — change once, applied everywhere.

| Token              | Value     |
| ------------------ | --------- |
| `brand.electric`   | `#1E90FF` |
| `brand.cyan`       | `#22D3EE` |
| `brand.purple`     | `#8B5CF6` |
| `brand.ink`        | `#05070D` |

---

## 📬 Contact

- General — [rahim@bluetrace.tech](mailto:rahim@bluetrace.tech)
- Sales — [sales@bluetrace.tech](mailto:sales@bluetrace.tech)
- Support — [support@bluetrace.tech](mailto:support@bluetrace.tech)

© Bluetrace Technologies Private Limited. All rights reserved.
