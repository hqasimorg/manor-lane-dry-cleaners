# Manor Lane Dry Cleaners

A modern, conversion-focused website for Manor Lane Dry Cleaners — a family-run dry cleaning and laundry service in Hither Green, London (SE12 8LP).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **CMS** | Sanity (headless) |
| **Forms** | React Hook Form + Zod + Server Actions |
| **Icons** | Lucide React |
| **Hosting** | Vercel |

## Features

- **15+ pages** — Home, Services, Pricing, About, Commercial, FAQ, Contact, Areas, Blog, Legal
- **Mobile-first responsive design** with sticky CTAs
- **WhatsApp + phone integration** — click-to-call, deep links
- **3 form types** — Contact, Quote Request, Commercial Enquiry (Server Actions + Zod validation)
- **Full SEO** — dynamic metadata, schema markup, sitemap-ready
- **CMS-driven content** — editable by non-technical staff via Sanity
- **25 SE London service areas** — Hither Green, Lee, Grove Park, and beyond

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=info@manorlanedrycleaners.co.uk
RECAPTCHA_SECRET_KEY=your_recaptcha_secret
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Project Structure

```
app/              # Next.js App Router pages
components/       # React components
  layout/         # Header, Footer, Container
  sections/       # Page sections (Hero, Services, etc.)
  ui/             # Reusable UI (Button, Card, Accordion, etc.)
  forms/          # Form components + Server Actions
  shared/         # Shared components (CTA, Map, etc.)
lib/              # Utilities, constants, Sanity client
types/            # TypeScript interfaces
```

## Business Info

- **Address:** 176 Manor Ln, London SE12 8LP, United Kingdom
- **Phone:** 020 8857 1234
- **Email:** info@manorlanedrycleaners.co.uk
- **Hours:** Mon–Fri 8am–6pm, Sat 9am–4pm, Sun Closed

## License

Private — All rights reserved.
