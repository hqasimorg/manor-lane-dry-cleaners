# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Business

**Manor Lane Dry Cleaners** — family-run dry cleaning and laundry service.
- **Address:** 176 Manor Lane, London SE12 8LP
- **Phone:** 020 8297 1411
- **WhatsApp:** 07523 790760
- **Email:** manorlane.drycleaners176@gmail.com
- **Hours:** Mon–Sat 8:30am–6:30pm, Sun Closed
- **Live site:** https://manor-lane-dry-cleaners.vercel.app
- **GitHub:** https://github.com/hqasimorg/manor-lane-dry-cleaners
- **Built by:** ECHTSOL LTD (echtsol.com)

All business details live in `lib/constants/site.ts` as `SITE_CONFIG`. Never hardcode phone, email, address, or hours anywhere else — always import from there.

---

## Commands

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint via Next.js
npm run type-check   # TypeScript check (tsc --noEmit) — run before every push
```

**Always run `npm run type-check` before pushing.** Vercel runs strict TypeScript checks on build and will fail on type errors that pass locally.

No test suite is configured.

---

## Deployment

- **Hosting:** Vercel — auto-deploys on every push to `main`
- **CI:** No CI pipeline — Vercel build IS the pipeline
- Every `git push origin main` triggers a Vercel production deployment
- To deploy manually: `vercel --prod --yes`

---

## Architecture

**Next.js 14 App Router** — TypeScript, Tailwind CSS.

### Routing

Pages live under `app/(pages)/` using a route group (keeps them out of the URL path). The homepage is `app/page.tsx`.

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/services` | `app/(pages)/services/page.tsx` |
| `/services/[slug]` | `app/(pages)/services/[slug]/page.tsx` |
| `/quote` | `app/(pages)/quote/page.tsx` |
| `/pricing` | `app/(pages)/pricing/page.tsx` |
| `/contact` | `app/(pages)/contact/page.tsx` |
| `/commercial-laundry` | `app/(pages)/commercial-laundry/page.tsx` |
| `/faq` | `app/(pages)/faq/page.tsx` |
| `/about` | `app/(pages)/about/page.tsx` |
| `/areas-we-cover` | `app/(pages)/areas-we-cover/page.tsx` |
| `/blog` | `app/(pages)/blog/page.tsx` |
| `/blog/[slug]` | `app/(pages)/blog/[slug]/page.tsx` |
| `/privacy-policy` | `app/(pages)/privacy-policy/page.tsx` |
| `/terms-and-conditions` | `app/(pages)/terms-and-conditions/page.tsx` |
| `/cookie-policy` | `app/(pages)/cookie-policy/page.tsx` |

### Services (15 total)

All service detail pages are data-driven from `serviceData` in `app/(pages)/services/[slug]/page.tsx`. To add a new service: add an entry to `serviceData`, add the slug to `generateStaticParams`, and add it to `app/sitemap.ts`.

Current slugs: `dry-cleaning`, `shirt-service`, `laundry-service`, `ironing-service`, `alterations-repairs`, `wedding-dress-cleaning`, `natives-cleaning`, `upholstery-cleaning`, `rug-cleaning`, `skiwear-cleaning`, `dye-service`, `school-uniform`, `shoe-repairs`, `curtain-cleaning`, `leather-suede-cleaning`

### Homepage sections (in order)

`HeroSection` → `ServiceSection` → `HowItWorksSection` → `WhyChooseUsSection` → `PricingPreviewSection` → `TestimonialSection` → `AreaCoverageSection` → `FAQTeaserSection` → `CTABanner`

---

## Forms

Three forms, all follow the same pattern:

| Form | Component | Server Action | Page |
|---|---|---|---|
| Contact | `ContactForm` | `submitContactForm` | `/contact` |
| Quote Request | `QuoteRequestForm` | `submitQuoteForm` | `/quote` |
| Commercial Enquiry | `CommercialEnquiryForm` | `submitCommercialEnquiry` | `/commercial-laundry` |

**Pattern:** `react-hook-form` is NOT used — forms use `useFormState` (from `react-dom`) + Next.js Server Actions in `app/actions.ts`. Zod schemas are in `lib/utils/validators.ts`.

**reCAPTCHA v3:** Wired but inactive until env vars are set. Each form intercepts `onSubmit`, fetches a token via `lib/utils/recaptcha.ts`, injects it into a hidden `recaptchaToken` input, then calls `form.requestSubmit()` so `useFormStatus` still fires correctly. Server-side verification is in `verifyRecaptcha()` in `app/actions.ts` — skips verification if `RECAPTCHA_SECRET_KEY` is not set (safe for local dev).

**Email:** `sendEmail()` in `app/actions.ts` is a **placeholder** (`console.log` only). Nodemailer is installed. Waiting on Gmail app password to wire up. Config needed: `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER=manorlane.drycleaners176@gmail.com`, `SMTP_PASS=<app-password>`, `ADMIN_EMAIL=manorlane.drycleaners176@gmail.com`.

---

## Component layers

| Folder | Contents |
|---|---|
| `components/ui/` | Button, Card, Accordion, FormInput, FormTextarea, FormSelect, Badge, Icon |
| `components/layout/` | Header, Footer, Container |
| `components/sections/` | Homepage sections (Hero, Services, HowItWorks, WhyChooseUs, PricingPreview, Testimonials, AreaCoverage, FAQTeaser) |
| `components/shared/` | CTABanner, PageHeader, SectionHeader, MapEmbed, TrustBadgeRow, RichTextContent |
| `components/forms/` | ContactForm, QuoteRequestForm, CommercialEnquiryForm, SubmitButton |

**`Button` component:** `icon` prop accepts `React.ReactNode` (not `LucideIcon`). Always pass `<Icon className="w-5 h-5" />` not `Icon`. This is required because Server Components cannot pass function references to Client Components.

**`SubmitButton`** uses `useFormStatus` from `react-dom` — only works when inside a `<form>` with an `action` prop.

---

## Styling

Tailwind CSS with custom design tokens — always use tokens, never raw hex:

| Token | Value | Usage |
|---|---|---|
| `primary` | #1B4D3E | Buttons, headings, icons |
| `primary-dark` | #143D31 | Hover states |
| `secondary` | #C9A227 | Gold CTAs, stars, highlights |
| `accent` | #F5F0E8 | Warm section backgrounds |
| `neutral-black` | #1A1A1A | Body text |
| `neutral-dark-grey` | #4A4A4A | Secondary text |
| `neutral-off-white` | #FAFAF8 | Page background |
| `whatsapp` | #25D366 | WhatsApp buttons |

Use `cn()` from `lib/utils/cn.ts` (clsx + tailwind-merge) for conditional class composition.

`section-padding` utility class is defined in `app/globals.css` → `py-16 lg:py-24`.

---

## SEO & Schema

- **Sitemap:** `app/sitemap.ts` — auto-generates `/sitemap.xml`. Add new routes here when adding pages.
- **Robots:** `app/robots.ts` — blocks `/api/`, allows everything else.
- **LocalBusiness schema:** In `app/layout.tsx` — applies site-wide.
- **FAQPage schema:** Inline `<script>` in `app/(pages)/faq/page.tsx`.
- **Service schema:** Generated per-slug in `app/(pages)/services/[slug]/page.tsx`.
- **Article schema:** Generated per-slug in `app/(pages)/blog/[slug]/page.tsx`.
- Legal pages (`/privacy-policy`, `/terms-and-conditions`, `/cookie-policy`) have `robots: noindex`.

---

## Google Reviews integration

`lib/google/reviews.ts` fetches from Google Places API with 1-hour ISR cache. `TestimonialSection` is an async Server Component — it fetches real reviews if env vars are set, falls back to 3 static reviews if not. Only shows 4★+ reviews, max 6.

Requires: `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` in env vars.

---

## Sanity CMS

Infrastructure is fully built but **not yet connected** — all content is currently hardcoded in page files.

- `lib/sanity/client.ts` — Sanity client + `sanityFetch<T>()`
- `lib/sanity/queries.ts` — All GROQ queries ready
- `lib/sanity/types.ts` — Sanity-specific types
- `types/index.ts` — Shared TypeScript interfaces

Connecting Sanity is planned as **Stage 1.5** before Stage 2 begins. Requires `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN`.

---

## Environment variables

Copy `.env.example` to `.env.local`:

```
# Sanity CMS (not yet connected — Stage 1.5)
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_TOKEN=

# Email — Gmail SMTP (placeholder in actions.ts, pending app password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=manorlane.drycleaners176@gmail.com
SMTP_PASS=
ADMIN_EMAIL=manorlane.drycleaners176@gmail.com

# reCAPTCHA v3 (wired, inactive until keys added)
RECAPTCHA_SECRET_KEY=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=

# Google Places API (for real reviews)
GOOGLE_PLACES_API_KEY=
GOOGLE_PLACE_ID=

# Analytics
NEXT_PUBLIC_GA_ID=
```

---

## Known pending items

1. **Email sending** — `sendEmail()` is a placeholder. Wire up nodemailer once Gmail app password is available.
2. **Sanity CMS** — Infrastructure ready, content hookup deferred to Stage 1.5.
3. **Google Reviews** — Working but needs `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` in Vercel env vars.
4. **reCAPTCHA** — Working but needs `RECAPTCHA_SECRET_KEY` + `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` in Vercel env vars.
5. **Pricing** — Dry cleaning prices confirmed. Laundry, alterations, and bedding prices need business confirmation.
6. **Hero image** — Displayed but sizing may need adjustment depending on final image choice.
7. **Google verification code** — `app/layout.tsx` has placeholder `"your-google-verification-code"`.

---

## Stage roadmap

- **Stage 1** ✅ — Brochure site, 15 services, 3 forms, SEO, live on Vercel
- **Stage 1.5** — Connect Sanity CMS, move hardcoded content to CMS
- **Stage 2A** — Online booking system (PostgreSQL + Prisma)
- **Stage 2B** — Customer accounts (NextAuth)
- **Stage 2C** — Admin dashboard
- **Stage 2D** — Payments + subscriptions (Stripe)
