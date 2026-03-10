# Bankai Technologies Website — Claude Code Instructions

## Project Overview
This is the official website for **Bankai Technologies**, an AI systems company based in Bukoto, Kampala, Uganda. The site must look and feel like a premium African tech company — dark, bold, professional. Reference: https://www.oticgroup.net/

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Blog**: MDX via next-mdx-remote
- **CMS**: Keystatic (admin dashboard at /keystatic)
- **SEO**: next-seo
- **Hosting**: Vercel
- **Domain**: BankaiTech.com

## Brand Identity
```
Primary Dark:   #0A0F1E  (near black — main background)
Navy:           #1B3A6B  (section backgrounds)
Blue:           #2E6DB4  (primary brand blue)
Accent:         #4BA8E8  (bright blue — CTAs, highlights)
Light Accent:   #7CC8F5  (hover states, gradients)
White:          #FFFFFF  (text on dark)
Muted:          #A0AEC0  (secondary text)
```

**Fonts:**
- Headlines: `Syne` (bold, geometric, commanding)
- Body: `DM Sans` (clean, readable)
- Both available via Google Fonts

**Design Feel:**
- Dark mode base
- Full-width hero sections with animated background
- Scroll-triggered reveal animations (Framer Motion)
- Blue glowing card accents on hover
- Bold typography that commands attention
- Premium African tech company — NOT generic AI company

## Assets (in /public)
- `logo.png` — Bankai Technologies logo, transparent background
- `elvis.jpg` — Elvis Twinomugisha (Co-Founder & Lead Developer)
- `jeremy.jpg` — Jeremy Mutaruha (Co-Founder & Head of Growth)
- `niih.jpg` — National ICT Innovation Hub badge

## Site Structure
```
/             → Home page
/products     → All products page
/about        → About Bankai + founders
/blog         → Blog listing
/blog/[slug]  → Individual blog posts
/contact      → Contact page
/keystatic    → Admin CMS dashboard (for managing blog posts)
```

## Company Info
- **Company**: Bankai Technologies
- **Location**: Bukoto, Kampala, Uganda 🇺🇬
- **NiiH Affiliation**: Uganda National ICT Innovation Hub — Ideation Program
- **GitHub**: https://github.com/elvistwinomugisha123-droid

## Contact Info
- **Jeremy WhatsApp**: +256 788 572959
- **Jeremy Email**: jeremymutaruha@gmail.com
- **WhatsApp Link**: https://wa.me/256788572959

## Founders
**Elvis Twinomugisha Paul** — Co-Founder & Lead Developer
- Self-taught AI systems developer since 2022
- Leads all technical development at Bankai Technologies
- Builds multi-agent AI systems adapted to African infrastructure
- Innovator-in-Residence at Uganda National ICT Innovation Hub

**Mutaruha Jeremy** — Co-Founder & Head of Growth
- Drives research, marketing, and business development
- Manages external relationships, sales, and partnerships
- Bridges AI technology with real-world Ugandan business needs

## Products

### BankaiRx — Pharmacy Operations AI
**Tagline**: "Run your pharmacy smarter. Not harder."
**Problem**: Stockouts, missed refills, manual reorders cost Kampala pharmacies real money every day.
**Features**:
- Automated stock monitoring & reorder alerts
- Patient refill reminders via WhatsApp
- Supplier communication automation
- Boda dispatch coordination (BodaRx agent)
**Status**: Beta — Piloting in Kampala
**Agents**: PharmAssist, RefillBot, StockLink, BodaRx

### ATE — Academic Track Engine
**Tagline**: "School management built for Uganda."
**Problem**: Ugandan schools manage fees, academics, and admin on paper and WhatsApp threads.
**Features**:
- Student academic performance tracking
- Fee collection & MTN Mobile Money integration
- Admin & bursar workflow automation
- Head Teacher reporting via WhatsApp
**Status**: Pilot — Mount of Olives College, Kakiiri
**Agents**: Finance Agent, Admin Agent, Head Teacher Agent

### UCC-Sentry — Consumer Advocacy AI
**Tagline**: "Know your telecom rights. In your language."
**Problem**: Ugandan consumers can't navigate telecom complaints without legal knowledge.
**Features**:
- Multilingual NLP (English + Luganda)
- RAG-grounded legal analysis
- WhatsApp complaint interface
- NITA-U Cloud hosted (DPPA compliant)
**Status**: In Development — NiiH Ideation Program

### BodaFlow — Last Mile Delivery AI (Coming Soon)
**Tagline**: "Smart dispatch for Kampala's last mile."
**Problem**: Tier 1 Kampala merchants lose money to untracked boda deliveries and cash reconciliation gaps.
**Features**:
- Intelligent dispatch system
- Real-time customer notifications
- Automated cash reconciliation
- Merchant delivery dashboard
**Status**: Coming Soon

## Mission & Vision
**Mission**: "To build practical, affordable AI systems that solve real operational problems for African businesses — starting with Uganda."
**Vision**: "A future where every African business, from a Kampala pharmacy to a rural school, runs on intelligent automation."

## Blog Posts (3 starter posts in /content/blog)
1. `kampala-pharmacies-stockouts.mdx`
2. `whatsapp-ai-african-schools.mdx`
3. `why-we-built-bankai-in-uganda.mdx`

## Build Instructions for Claude Code

### Step 1: Initialize Project
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Step 2: Install Dependencies
```bash
npm install framer-motion next-mdx-remote gray-matter @keystatic/core @keystatic/next lucide-react clsx tailwind-merge
npm install @next/font
npx shadcn@latest init
npx shadcn@latest add button card badge separator
```

### Step 3: Build Order
1. `tailwind.config.ts` — brand colors + Syne/DM Sans fonts
2. `src/app/layout.tsx` — root layout, navbar, footer, font loading
3. `src/components/Navbar.tsx`
4. `src/components/Footer.tsx`
5. `src/app/page.tsx` — Home (hero, products snapshot, why bankai, NiiH badge, CTA)
6. `src/app/products/page.tsx`
7. `src/app/about/page.tsx`
8. `src/app/blog/page.tsx` + `src/app/blog/[slug]/page.tsx`
9. `src/app/contact/page.tsx`
10. Keystatic config for blog CMS
11. `content/blog/*.mdx` — 3 starter posts

### Step 4: Deploy
```bash
git init
git remote add origin https://github.com/elvistwinomugisha123-droid/bankai-website.git
git add .
git commit -m "Initial Bankai Technologies website"
git push -u origin main
# Then connect to Vercel at vercel.com
```

## Key Design Requirements
- Hero: Full viewport, dark animated background (floating blue particles or gradient mesh), massive headline, 2 CTAs
- Every section: scroll-triggered fade/slide animations via Framer Motion
- Cards: Dark background (#1B3A6B), blue glow on hover, badge for product status
- WhatsApp CTA button: Fixed floating button on all pages (bottom right)
- NiiH badge: Displayed with official logo in About and Home
- Mobile responsive: All sections stack cleanly on mobile
- No stock photos: Only real photos of Elvis and Jeremy

## Placeholder Values (update when available)
- Official Bankai email: `info@bankaitech.com` (placeholder — update when ready)
- Social handles: Add when created
- Google Analytics: Add GA4 tracking ID when ready
- Domain: Configure on Vercel after purchasing BankaiTech.com
