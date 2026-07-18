# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # ESLint via Next.js
npm run type-check   # TypeScript check (tsc --noEmit)
```

No test suite is configured.

## Architecture

**Next.js 14 App Router** site for a local dry cleaning business in London.

### Routing
Pages live under `app/(pages)/` using a route group — this keeps them out of the URL path. The homepage is `app/page.tsx`. Dynamic routes like `/blog/[slug]` and `/services/[slug]` are nested inside the route group.

### Data fetching — Sanity CMS
All content (services, pricing, FAQs, blog posts, testimonials, service areas) is managed in Sanity. The client is in `lib/sanity/client.ts` and exposes `sanityFetch<T>({ query, params, tags })` which wraps Next.js `fetch` with cache tag support. GROQ queries are centralised in `lib/sanity/queries.ts`. TypeScript interfaces for all Sanity document types live in `types/index.ts`.

### Forms
Three forms (Contact, Quote Request, Commercial Enquiry) follow the same pattern:
- Component in `components/forms/` uses `react-hook-form` + `@hookform/resolvers/zod`
- Zod schemas are in `lib/utils/validators.ts`
- Server Actions are in `app/actions.ts` and also parallel API routes exist under `app/api/`

**Note:** The `sendEmail` helper in `app/actions.ts` is a placeholder — nodemailer is installed but not yet wired up to SMTP credentials.

### Component layers
| Folder | Purpose |
|--------|---------|
| `components/ui/` | Primitive UI (Button, Card, Accordion, FormInput, etc.) |
| `components/layout/` | Header, Footer, Container |
| `components/sections/` | Full-page sections used on the homepage |
| `components/shared/` | Cross-page pieces (CTABanner, PageHeader, MapEmbed) |
| `components/forms/` | Form components wired to Server Actions |

### Styling
Tailwind CSS with a custom palette — use these tokens rather than raw hex values:
- `primary` / `primary-dark` / `primary-light` — dark green (#1B4D3E)
- `secondary` / `secondary-dark` — gold (#C9A227)
- `accent` / `accent-dark` — warm off-white (#F5F0E8)
- `neutral-{black,dark-grey,medium-grey,light-grey,off-white,white}`
- `whatsapp` / `whatsapp-dark` — WhatsApp green

Use `cn()` from `lib/utils/cn.ts` (clsx + tailwind-merge) whenever composing conditional Tailwind classes.

### Site constants
Business details (phone, email, address, hours, coordinates) are in `lib/constants/site.ts` as `SITE_CONFIG`. Always import from there rather than hardcoding values. Navigation structure is in `lib/constants/navigation.ts`.

## Environment variables

Copy `.env.example` to `.env.local`. Required at runtime:
- `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN` — CMS access
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `ADMIN_EMAIL` — email via nodemailer
- `RECAPTCHA_SECRET_KEY`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` — form bot protection
- `NEXT_PUBLIC_GA_ID` — Google Analytics

Sanity images are served from `cdn.sanity.io`; this hostname is already allowlisted in `next.config.js`.
