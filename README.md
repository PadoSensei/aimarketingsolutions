# AI Solutions™ — Website

> **Grow without the grind.**  
> The official website for [aisolutions.irish](https://aisolutions.irish) — a two-person automation consultancy based in Ireland helping small businesses reclaim their time through practical AI and automation tools.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Design System](#design-system)
- [Pages](#pages)
- [Components](#components)
- [CMS — Outstatic](#cms--outstatic)
- [Deployment](#deployment)

---

## Overview

This is a [Next.js](https://nextjs.org) App Router project with:

- **Outstatic** for content management (blog posts, projects, pages)
- **Tailwind CSS v4** for styling
- **Embla Carousel** for the AI Coaching week-by-week slider
- **Vercel Analytics** for traffic insights
- **Google Calendar Appointments** for booking intro calls

---

## Tech Stack

| Layer           | Technology                   |
| --------------- | ---------------------------- |
| Framework       | Next.js 14 (App Router)      |
| Language        | TypeScript                   |
| Styling         | Tailwind CSS v4              |
| CMS             | Outstatic                    |
| Carousel        | Embla Carousel               |
| Booking         | Google Calendar Appointments |
| Analytics       | Vercel Analytics             |
| Deployment      | Vercel                       |
| Package Manager | npm                          |

---

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── (cms)/                  # Outstatic CMS routes
│   ├── about/                  # About page
│   ├── ai-coaching/            # AI Coaching programme page
│   ├── blog/                   # Blog listing + posts
│   ├── contact/                # Contact page
│   ├── courses/                # Courses page
│   ├── posts/                  # Post routes
│   ├── privacy/                # Privacy policy
│   ├── projects/               # Projects showcase
│   ├── services/               # Services page
│   ├── favicon.ico             # Browser tab icon (circular)
│   ├── favicon-16.png          # 16px favicon
│   ├── favicon-32.png          # 32px favicon
│   ├── layout.tsx              # Root layout + metadata
│   └── page.tsx                # Homepage
│
├── components/                 # Shared UI components
│   ├── AICarousel.jsx          # Week-by-week coaching carousel (Embla)
│   ├── AICoachingHero.jsx      # Hero section for coaching page
│   ├── Button.jsx              # Primary CTA button
│   ├── ContentGrid.jsx         # Blog/project grid
│   ├── Footer.jsx             # Site footer
│   ├── Hero.jsx                # Homepage hero
│   ├── Layout.jsx              # Page wrapper
│   ├── NavBar.jsx              # Sticky responsive navbar
│   └── ServicesStump.jsx       # Services preview on homepage
│
├── data/
│   ├── coachingData.js         # 5-slide coaching carousel content
│   └── servicesData.js         # Services card content
│
├── interfaces/                 # TypeScript interfaces
├── lib/                        # Utility functions (markdownToHtml, utils)
└── styles/
    └── index.css               # Global styles + gradient utilities
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/your-org/ai-solutions-website.git
cd ai-solutions-website
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file in the root (see `.env.local.example`):

```env
# Outstatic CMS
OST_TOKEN=your_outstatic_token

# Required for Outstatic GitHub integration
GITHUB_TOKEN=your_github_token
GITHUB_REPO_SLUG=your-repo-name
GITHUB_REPO_OWNER=your-github-username
```

---

## Design System

### Colour Palette

| Token           | Hex           | Usage                             |
| --------------- | ------------- | --------------------------------- |
| Brand Blue      | `#A8E5FE`     | Gradient start, accent highlights |
| Brand Purple    | `#64149C`     | Gradient end, borders, glows      |
| Page Background | `#000000`     | All page backgrounds              |
| Card Background | `zinc-900/40` | Service and feature cards         |
| Text Primary    | `#FFFFFF`     | Headings                          |
| Text Secondary  | `zinc-400`    | Body copy                         |

### Gradient System

Defined in `src/styles/index.css` — use these classes everywhere:

```css
/* Primary brand gradient — matches logo illustration */
.gradient-text         /* #A8E5FE → #64149C, applied to text */

/* Secondary warm accent — hero subheadings */
/* #A8E5FE → #64149C, applied to text */

/* Secondary warm accent — hero subheadings */
/* #A8E5FE → #64149C, applied to text */

/* Secondary warm accent — hero subheadings */
/* #A8E5FE → #64149C, applied to text */

/* Secondary warm accent — hero subheadings */
.gradient-purple-pink; /* purple → pink, applied to text */
```

**Pattern:** `AI` in `text-white`, `Solutions` in `gradient-text` — consistent across Navbar, Footer, and all wordmarks.

### Typography Convention

- **Eyebrow labels** — `text-xs font-bold tracking-widest uppercase` in a pill badge
- **Page headings** — `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`
- **Section headings** — `text-3xl md:text-4xl font-bold`
- **Body copy** — `text-base leading-relaxed text-zinc-400`

### Card Convention

```jsx
// Standard dark glass card
className="bg-zinc-900/40 border border-white/8 rounded-3xl
           hover:border-purple-500/40
           hover:shadow-[0_0_40px_rgba(147,51,234,0.1)]
           transition-all duration-300"
```

---

## Pages

| Route          | File                       | Description                        |
| -------------- | -------------------------- | ---------------------------------- |
| `/`            | `app/page.tsx`             | Homepage — Hero + Services preview |
| `/about`       | `app/about/page.tsx`       | Team profiles + philosophy         |
| `/services`    | `app/services/page.tsx`    | Full services + process steps      |
| `/ai-coaching` | `app/ai-coaching/page.tsx` | 4-week programme + booking         |
| `/contact`     | `app/contact/page.tsx`     | Contact form                       |
| `/posts`       | `app/posts/`               | Blog posts (Outstatic)             |
| `/projects`    | `app/projects/`            | Project showcase (Outstatic)       |
| `/privacy`     | `app/privacy/page.tsx`     | Privacy policy                     |

---

## Components

### `NavBar`

- Fixed, sticky with `backdrop-blur` on scroll
- Animated hamburger → × mobile menu
- Body scroll lock when mobile menu is open
- Logo: inline image + "**AI** Solutions™" wordmark

### `Hero`

- Full viewport height homepage hero
- Animated gradient halo on logo circle (`animate-spin-slow`)
- Subtle dot-grid background texture
- Two CTAs: primary Button + ghost link

### `AICarousel`

- Embla Carousel with `loop: false`
- Week tab bar for direct navigation
- Prev/Next arrow buttons with disabled states
- Dot indicators that expand on active slide
- 5 slides: Weeks 1–4 + Pricing

### `ServicesStump`

- Homepage services preview grid (4 cards)
- Conditionally renders "Sign up for AI Coaching" CTA on the coaching card
- Links to full `/services` page

### `Footer`

- Gradient accent line at top
- Brand column + Company + Support + CTA columns
- Inline LinkedIn SVG icon
- Dynamic copyright year

---

## CMS — Outstatic

Content is managed via [Outstatic](https://outstatic.com), accessible at `/outstatic` when authenticated.

Collections:

- **Posts** — Blog articles
- **Projects** — Case studies / project showcase
- **Pages** — Static page content (e.g. home page body copy)

---

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers a production deployment.

```bash
# Deploy manually via Vercel CLI
npx vercel --prod
```

Vercel Analytics is active via `<Analytics />` in `src/app/layout.tsx`.

---

## Booking

The AI Coaching intro call booking uses **Google Calendar Appointments**, embedded as an iframe on the `/ai-coaching` page:

```
https://calendar.google.com/calendar/appointments/schedules/AcZssZ2r6lcdEndqFrF4_2mu2yz0m0Ya4FHhKGJ5SrUO3ounqTTtwSexSLOBKP2TWDUW-2NYccLTsigM?gv=true
```

The iframe is wrapped in a white background container (`bg-white`) since Google Calendar renders for light backgrounds.

---

_Built with ❤️ in Ireland by [Ludmila Domingos](https://linkedin.com/in/dludmila) & [Padraig O'Donoghue](https://linkedin.com/in/padraig-o-donoghue-6175101ba)_
