# Manor Lane Dry Cleaners — Full Product, UX & Technical Build Brief

**Business:** Manor Lane Dry Cleaners  
**Location:** 176 Manor Ln, London SE12 8LP, United Kingdom  
**Platform:** React + Node.js Local Service Website  
**Prepared:** July 2026  
**Status:** Launch (Stage 1) + Future Platform (Stage 2)

---

## 1. Product Strategy

### Business Goals
1. **Generate enquiries** — phone calls, WhatsApp messages, and quote requests
2. **Increase bookings** — collection requests and walk-in visits
3. **Build local trust** — reviews, guarantees, local identity
4. **Improve London search visibility** — local SEO dominance
5. **Explain services clearly** — reduce confusion, increase confidence
6. **Be easy to update** — CMS-friendly for non-technical staff

### User Types
| User | Needs | Conversion Goal |
|------|-------|-----------------|
| Local residents | Reliable, nearby service | Call / WhatsApp / quote |
| Families | Bulk laundry, bedding, value | Quote / collection request |
| Students | Affordable, quick turnaround | Walk-in / WhatsApp |
| Busy professionals | Convenience, pickup/delivery | Collection booking |
| Airbnb hosts / landlords | Regular commercial service | Commercial enquiry |
| Small businesses | Repeat laundry, reliability | Commercial enquiry |

### Primary Conversion Goals (Launch)
1. Phone call
2. WhatsApp message
3. Quote request form submission
4. Commercial enquiry form submission
5. Walk-in visit (via clear address/hours)

### Recommended Launch Scope
- Static marketing pages (Home, Services, About, Pricing, FAQ, Contact, Areas, Commercial)
- Blog for local SEO
- Contact & quote forms
- WhatsApp integration
- Mobile-first responsive design
- Fast, SEO-optimised performance
- CMS for content updates

### Recommended Future Roadmap (Stage 2)
- Online booking with pickup/delivery scheduling
- Customer accounts & order history
- Order tracking dashboard
- Admin panel for order management
- Subscription plans for regular customers
- Rewards/loyalty programme
- Business account management
- Payment integration

### Key Difference: Brochure Site vs Service Platform
| Brochure Site (Launch) | Service Platform (Future) |
|------------------------|---------------------------|
| Inform & convert | Transact & retain |
| Forms -> email/phone | Booking -> database -> tracking |
| Static content | Dynamic user accounts |
| Marketing focus | Operations focus |
| Lower cost, faster launch | Higher cost, operational dependency |

### Recommendation: Launch First
**Launch the brochure site immediately.** It generates leads from day one, costs less, and proves demand. Add booking and accounts only after the business has operational capacity to handle them. A booking system with no driver schedule or stock management creates more problems than it solves.

---

## 2. Brand Positioning

### Brand Summary
Manor Lane Dry Cleaners is a trusted, family-run dry cleaning and laundry service in South East London. We combine traditional garment care with modern convenience — serving local residents, families, students, and businesses with reliability and pride.

### Value Proposition
**"Professional garment care, rooted in South East London. Reliable service for your home, your family, and your business."**

### Tone of Voice
- **Warm but professional** — not cold corporate, not overly casual
- **Direct and helpful** — clear explanations, no jargon
- **Proudly local** — Hither Green references, London warmth
- **Trustworthy** — guarantees, experience, care

### Brand Personality
- Reliable neighbour
- Skilled craftsperson
- Community member
- Modern convenience with old-school care

### Tagline Options
1. *"South East London's trusted garment care, since [year]."*
2. *"Clean clothes. Local service. No fuss."*
3. *"Professional care for your wardrobe and your home."*

### Hero Headline Options
1. *"Dry Cleaning & Laundry in South East London — Done Right"*
2. *"Your Local Dry Cleaners in South East London"*
3. *"Fresh Clothes, Local Service, Real Care"*

### Hero Subheadline Options
1. *"From everyday laundry to delicate garments, we keep South East London looking sharp. Collection available."*
2. *"Family-run dry cleaners serving South East London residents, students, and businesses. Walk in or request a quote."*
3. *"Professional dry cleaning, laundry, and alterations — right here in South East London."*

---

## 3. Technical Stack Recommendation

### Frontend: Next.js 14 (App Router)
**Why Next.js over standard React/Vite:**
- **Server-side rendering (SSR)** for critical SEO pages — Google indexes content properly
- **Static site generation (SSG)** for blog posts and marketing pages — fast, cached, cheap to host
- **Built-in image optimisation** — automatic WebP/AVIF, responsive sizes, lazy loading
- **File-based routing** — simpler project structure
- **Vercel deployment** — zero-config CDN, edge caching, excellent Core Web Vitals
- **Future-proof** — easy to add API routes later for booking

### Backend: Express.js
**Why Express over NestJS:**
- **Simplicity** — a local business needs a few API endpoints, not enterprise architecture
- **Faster development** — less boilerplate, easier to maintain for small teams
- **Sufficient for launch** — contact forms, quote requests, email sending
- **Easy to scale** — can add routes modularly if Stage 2 demands grow
- **NestJS is overkill** for 5-10 API endpoints; add it later if the platform grows

### Headless CMS: Sanity
**Why Sanity:**
- **Real-time collaborative editing** — staff can update content simultaneously
- **Structured content** — perfect for services, pricing, FAQs, blog posts
- **GROQ querying** — powerful, fast content fetching
- **Free tier generous** — sufficient for a local business
- **React SDK** — excellent integration with Next.js
- **Alternative:** Strapi (self-hosted, more control) or Contentful (enterprise-grade, pricier)

### Database at Launch: Not Required
- Launch content lives in Sanity CMS
- Form submissions go to email + optional Google Sheets/Airtable
- Add PostgreSQL only when booking/accounts are needed

### Hosting
- **Frontend:** Vercel (Next.js optimised, free tier available, global CDN)
- **Backend:** Vercel Serverless Functions or Railway/Render (if separate)
- **CMS:** Sanity Cloud (managed, free tier)
- **Domain:** Namecheap or Cloudflare (DNS + SSL)

### Image Handling
- **Next.js Image component** — automatic optimisation, lazy loading, responsive sizes
- **Sanity asset pipeline** — upload once, serve optimised versions
- **WebP/AVIF delivery** — modern formats for speed
- **Lazy loading below fold** — improve LCP

### Form Handling Strategy
- **React Hook Form** — lightweight, performant form management
- **Zod validation** — TypeScript-first schema validation
- **Server Actions (Next.js)** or **Express API** — form submission handling
- **Nodemailer** — email notifications to business
- **Google reCAPTCHA v3** — spam protection (invisible to users)
- **Optional:** Airtable or Google Sheets backup for lead tracking

### SEO Strategy (Technical)
- **Next.js metadata API** — dynamic `<title>`, `<meta>`, Open Graph, Twitter cards
- **Structured data (JSON-LD)** — LocalBusiness, Service, FAQPage schemas
- **Sitemap.xml** — auto-generated, submitted to Google Search Console
- **Robots.txt** — control crawl behaviour
- **Canonical URLs** — prevent duplicate content issues
- **Semantic HTML** — proper heading hierarchy, landmarks
- **Core Web Vitals** — target LCP <2.5s, CLS <0.1, FID <100ms

### Performance Strategy
- **Static generation** for marketing pages
- **ISR (Incremental Static Regeneration)** for blog — update without rebuild
- **Image optimisation** — Next.js Image + Sanity
- **Font optimisation** — `next/font` for zero-layout-shift fonts
- **Code splitting** — automatic route-based splitting
- **Edge caching** — Vercel CDN
- **Target:** Lighthouse 95+ across all categories

### Security Basics
- **HTTPS only** — enforced by Vercel
- **Content Security Policy** — restrict script sources
- **Input sanitisation** — Zod validation + DOMPurify for any rich text
- **Rate limiting** — on API routes (Express `express-rate-limit`)
- **Environment variables** — secrets never exposed client-side
- **reCAPTCHA v3** — bot protection on forms

### Analytics Setup
- **Google Analytics 4** — traffic, conversions, user behaviour
- **Google Search Console** — indexing, search performance, Core Web Vitals
- **Google Tag Manager** — manage tags without code changes
- **Hotjar or Microsoft Clarity** — heatmaps, session recordings (optional)
- **Call tracking** — dynamic number insertion to measure phone conversions

---

## 4. Solution Architecture

### Launch Phase Architecture

```
USER BROWSER
    |
    v
VERCEL EDGE NETWORK (CDN, SSL, Edge Caching)
    |
    +---> NEXT.JS APP (Frontend)
    |       - React pages
    |       - Server components
    |       - Client components
    |       - Static generation
    |       |
    |       v
    |   SANITY CMS (Content)
    |       - Content
    |       - Images
    |       - Blog posts
    |
    +---> EXPRESS API (Backend)
            - Form APIs
            - Email sending
            - Validation
            - Rate limiting
            |
            v
        EMAIL SERVICE (Nodemailer + SMTP/SES)
            - Notifications
```

### Future Phase Architecture (Stage 2)

```
USER BROWSER
    |
    v
VERCEL EDGE NETWORK
    |
    +---> NEXT.JS APP (Frontend)
    |       |
    |       v
    |   SANITY CMS (Content)
    |
    +---> EXPRESS API (Backend)
            |
            v
        POSTGRESQL DB (Bookings, Accounts, Orders)
            |
            v
        ADMIN DASHBOARD (React SPA)
            - Order management
            - Customer management
            - Scheduling
```

### Component Breakdown

| Layer | Launch | Future |
|-------|--------|--------|
| **Frontend** | Next.js 14 App Router | Same + booking flows |
| **Backend** | Express.js (3-5 routes) | Express.js + auth |
| **CMS** | Sanity (free tier) | Same |
| **Database** | None (CMS only) | PostgreSQL |
| **Media** | Sanity assets | Same |
| **Email** | Nodemailer + SMTP | Same + transactional |
| **Forms** | Server Actions / API | Same |
| **Booking** | Not included | Custom API + DB |
| **Accounts** | Not included | Auth0 / NextAuth |
| **Admin** | Not included | React SPA |
| **Payments** | Not included | Stripe |


---

## 5. Sitemap

### Primary Navigation Pages
| Page | Route | Reasoning |
|------|-------|-----------|
| **Home** | `/` | Primary landing, conversion hub |
| **Services** | `/services` | Overview of all services |
| **Dry Cleaning** | `/services/dry-cleaning` | Core service, SEO target |
| **Laundry Service** | `/services/laundry-service` | High-volume service |
| **Wash & Iron** | `/services/wash-and-iron` | Distinct from dry clean |
| **Alterations** | `/services/alterations` | Additional revenue stream |
| **Duvet & Bedding** | `/services/duvet-bedding-cleaning` | Seasonal, high-value |
| **Commercial Laundry** | `/commercial-laundry` | B2B positioning |
| **Pricing** | `/pricing` | Transparency, trust |
| **About** | `/about` | Trust, local identity |
| **Areas We Cover** | `/areas-we-cover` | Local SEO, service radius |
| **FAQ** | `/faq` | Reduce objections |
| **Contact** | `/contact` | Direct enquiries |
| **Blog** | `/blog` | Local SEO, content marketing |
| **Blog Post** | `/blog/[slug]` | Individual articles |

### Legal Pages
| Page | Route | Reasoning |
|------|-------|-----------|
| **Privacy Policy** | `/privacy-policy` | GDPR compliance |
| **Terms & Conditions** | `/terms-and-conditions` | Legal protection |
| **Cookie Policy** | `/cookie-policy` | GDPR compliance |

### Excluded Pages (Not Recommended for Launch)
- **Booking page** — operationally premature
- **Account/login** — no backend for it yet
- **Order tracking** — no order database yet
- **Careers** — too small to justify
- **Sustainability page** — can be a blog post instead

---

## 6. React Page Structure

### Home (`/`)
| Field | Detail |
|-------|--------|
| **Purpose** | Primary conversion page — generate calls, WhatsApp, quotes |
| **Core Sections** | Hero, Trust badges, Services grid, How it works, Pricing preview, Testimonials, Areas covered, CTA banner, FAQ teaser |
| **Components** | HeroSection, TrustBadgeRow, ServiceCardGrid, HowItWorks, PricingPreview, TestimonialSlider, AreaCoverageMap, CTABanner, FAQTeaser |
| **Data Needed** | Services (CMS), Testimonials (CMS), Areas (CMS), Pricing tiers (CMS) |
| **CTA** | "Call Now" / "WhatsApp Us" / "Request a Quote" |
| **SEO** | Title: "Dry Cleaners Hither Green, London | Manor Lane Dry Cleaners" / Description: "Professional dry cleaning and laundry services in South East London. Family-run, reliable, and local. Call or WhatsApp for a quote." |

### Services (`/services`)
| Field | Detail |
|-------|--------|
| **Purpose** | Service discovery — help users find what they need |
| **Core Sections** | Page header, Service category cards, Pricing link, Commercial CTA |
| **Components** | PageHeader, ServiceCardGrid, CTABanner |
| **Data Needed** | All services (CMS) |
| **CTA** | "View Pricing" / "Request a Quote" |
| **SEO** | Title: "Dry Cleaning & Laundry Services Hither Green, London | Manor Lane" / Description: "Full range of dry cleaning, laundry, and garment care services in South East London. From everyday washing to delicate fabrics." |

### Service Detail (`/services/[slug]`)
| Field | Detail |
|-------|--------|
| **Purpose** | Deep dive into specific service — SEO + conversion |
| **Core Sections** | Service hero, Description, Process, Pricing info, FAQ items, Related services, CTA |
| **Components** | ServiceHero, RichTextContent, ProcessSteps, PricingInfo, FAQAccordion, RelatedServices, CTABanner |
| **Data Needed** | Service details (CMS), Related services (CMS) |
| **CTA** | "Get a Quote for [Service]" |
| **SEO** | Dynamic title/desc based on service |

### Pricing (`/pricing`)
| Field | Detail |
|-------|--------|
| **Purpose** | Transparency — build trust, reduce friction |
| **Core Sections** | Page header, Price tables by category, Commercial pricing CTA, Disclaimer |
| **Components** | PageHeader, PricingTable, CTABanner |
| **Data Needed** | Pricing items (CMS) |
| **CTA** | "Request a Custom Quote" |
| **SEO** | Title: "Dry Cleaning Prices Hither Green, London | Manor Lane Dry Cleaners" / Description: "Transparent pricing for dry cleaning, laundry, and alterations in South East London. Competitive rates for residents and businesses." |

### About (`/about`)
| Field | Detail |
|-------|--------|
| **Purpose** | Trust building — humanise the business |
| **Core Sections** | Story, Team/owner, Values, Local connection, Timeline/milestones |
| **Components** | PageHeader, StorySection, TeamSection, ValuesGrid, Timeline |
| **Data Needed** | Business info (CMS), Team (CMS) |
| **CTA** | "Visit Us" / "Get in Touch" |
| **SEO** | Title: "About Manor Lane Dry Cleaners | Hither Green, London" / Description: "Family-run dry cleaners in South East London. Learn about our story, values, and commitment to quality garment care." |

### Commercial Laundry (`/commercial-laundry`)
| Field | Detail |
|-------|--------|
| **Purpose** | B2B conversion — hotels, Airbnb, restaurants, salons |
| **Core Sections** | Hero, Sectors served, Benefits, Case studies/testimonials, Process, Enquiry form |
| **Components** | HeroSection, SectorCards, BenefitList, TestimonialSlider, ProcessSteps, CommercialEnquiryForm |
| **Data Needed** | Sectors (CMS), Testimonials (CMS), Benefits (CMS) |
| **CTA** | "Request a Commercial Quote" |
| **SEO** | Title: "Commercial Laundry Services London | Business Laundry" / Description: "Reliable commercial laundry services for South East London businesses. Hotels, Airbnb, restaurants, and more. Request a business account." |

### FAQ (`/faq`)
| Field | Detail |
|-------|--------|
| **Purpose** | Reduce objections, improve SEO |
| **Core Sections** | Page header, Category filters, Accordion items, Contact CTA |
| **Components** | PageHeader, CategoryFilter, FAQAccordion, CTABanner |
| **Data Needed** | FAQ items (CMS) |
| **CTA** | "Still have questions? Contact us" |
| **SEO** | Title: "Dry Cleaning FAQ Hither Green, London | Manor Lane Dry Cleaners" / Description: "Common questions about our dry cleaning and laundry services in South East London. Turnaround times, prices, and more." |

### Contact (`/contact`)
| Field | Detail |
|-------|--------|
| **Purpose** | Direct enquiry channel |
| **Core Sections** | Contact info (phone, WhatsApp, address, hours), Contact form, Map embed, FAQ link |
| **Components** | ContactInfoCard, ContactForm, MapEmbed, CTABanner |
| **Data Needed** | Business info (CMS) |
| **CTA** | "Send Message" / "Call Now" / "WhatsApp" |
| **SEO** | Title: "Contact Manor Lane Dry Cleaners | Hither Green, London" / Description: "Get in touch with Manor Lane Dry Cleaners in South East London. Phone, WhatsApp, or fill in our contact form for a quote." |

### Areas We Cover (`/areas-we-cover`)
| Field | Detail |
|-------|--------|
| **Purpose** | Local SEO — rank for "dry cleaners [area]" |
| **Core Sections** | Page header, Area list/grid, Map, Service CTA |
| **Components** | PageHeader, AreaGrid, MapEmbed, CTABanner |
| **Data Needed** | Service areas (CMS) |
| **CTA** | "Check if we cover your area" / "Request Collection" |
| **SEO** | Title: "Dry Cleaners Hither Green, London & Surrounding Areas | Manor Lane" / Description: "We provide dry cleaning and laundry services across South East London and nearby areas. Check if we cover your neighbourhood." |

### Blog (`/blog`)
| Field | Detail |
|-------|--------|
| **Purpose** | Content marketing, local SEO |
| **Core Sections** | Page header, Featured post, Post grid, Category filters |
| **Components** | PageHeader, FeaturedPost, BlogCardGrid, CategoryFilter |
| **Data Needed** | Blog posts (CMS) |
| **CTA** | "Read More" / "Subscribe" (optional) |
| **SEO** | Title: "Dry Cleaning Tips & Advice | Manor Lane Blog" / Description: "Tips on garment care, stain removal, and laundry advice from South East London's trusted dry cleaners." |

### Blog Post (`/blog/[slug]`)
| Field | Detail |
|-------|--------|
| **Purpose** | Individual article — long-tail SEO |
| **Core Sections** | Article header, Rich content, Author, Related posts, CTA |
| **Components** | ArticleHeader, RichTextContent, AuthorCard, RelatedPosts, CTABanner |
| **Data Needed** | Post content (CMS), Related posts (CMS) |
| **CTA** | "Need help with this? Contact us" |
| **SEO** | Dynamic title/desc, article schema |

### Legal Pages (`/privacy-policy`, `/terms-and-conditions`, `/cookie-policy`)
| Field | Detail |
|-------|--------|
| **Purpose** | Compliance |
| **Core Sections** | Legal text, Last updated date |
| **Components** | LegalContent |
| **Data Needed** | Legal content (CMS or static) |
| **CTA** | None |
| **SEO** | Noindex (optional) |

---

## 7. Component Architecture

### Component Naming Conventions
- **Layout components:** `Layout`, `Header`, `Footer`, `Container`
- **Page sections:** `HeroSection`, `ServiceSection`, `CTABanner`
- **UI components:** `Button`, `Card`, `Accordion`, `FormInput`
- **Feature components:** `ContactForm`, `QuoteRequestForm`, `FAQAccordion`
- **Data display:** `ServiceCard`, `PricingTable`, `TestimonialCard`, `BlogCard`
- **Prefix pattern:** `[Feature][Type]` — e.g., `CommercialEnquiryForm`, `ServiceHero`

### Folder Structure
```
app/
  layout.tsx                    # Root layout
  page.tsx                      # Home page
  globals.css                   # Global styles

  (pages)/
    services/
      page.tsx
      [slug]/
        page.tsx
    pricing/
      page.tsx
    about/
      page.tsx
    commercial-laundry/
      page.tsx
    faq/
      page.tsx
    contact/
      page.tsx
    areas-we-cover/
      page.tsx
    blog/
      page.tsx
      [slug]/
        page.tsx
    privacy-policy/
      page.tsx
    terms-and-conditions/
      page.tsx
    cookie-policy/
      page.tsx

  api/
    contact/
      route.ts
    quote/
      route.ts
    commercial-enquiry/
      route.ts

components/
  layout/
    Header.tsx
    Footer.tsx
    Container.tsx
    MobileMenu.tsx

  sections/
    HeroSection.tsx
    ServiceSection.tsx
    HowItWorksSection.tsx
    PricingSection.tsx
    TestimonialSection.tsx
    AreaCoverageSection.tsx
    CTABanner.tsx
    FAQSection.tsx
    BlogSection.tsx
    CommercialSection.tsx

  ui/
    Button.tsx
    Card.tsx
    Accordion.tsx
    FormInput.tsx
    FormTextarea.tsx
    FormSelect.tsx
    Badge.tsx
    Icon.tsx

  forms/
    ContactForm.tsx
    QuoteRequestForm.tsx
    CommercialEnquiryForm.tsx

  cards/
    ServiceCard.tsx
    PricingCard.tsx
    TestimonialCard.tsx
    BlogCard.tsx
    AreaCard.tsx

  shared/
    PageHeader.tsx
    SectionHeader.tsx
    RichTextContent.tsx
    MapEmbed.tsx
    TrustBadgeRow.tsx

lib/
  sanity/
    client.ts
    queries.ts
    types.ts
  utils/
    cn.ts                    # Tailwind merge
    validators.ts            # Zod schemas
    helpers.ts
  constants/
    site.ts                  # Site config
    navigation.ts            # Nav links

hooks/
  useMediaQuery.ts
  useScrollPosition.ts

types/
  index.ts                     # Shared TypeScript types
```

### Component Specifications

#### Layout Components
| Component | Props | Description |
|-----------|-------|-------------|
| `Layout` | `children` | Root wrapper with Header + Footer |
| `Header` | — | Sticky nav with logo, links, CTA buttons |
| `Footer` | — | Multi-column footer with links, contact, legal |
| `Container` | `children, className` | Max-width wrapper with responsive padding |
| `MobileMenu` | `isOpen, onClose` | Slide-out mobile navigation |

#### Navigation Components
| Component | Props | Description |
|-----------|-------|-------------|
| `Header` | — | Main navigation with scroll behaviour |
| `MobileMenu` | `isOpen, onClose` | Full-screen mobile nav |
| `NavLink` | `href, label, active` | Styled link with active state |
| `CTAButtons` | — | Phone + WhatsApp + Quote buttons |

#### Hero Components
| Component | Props | Description |
|-----------|-------|-------------|
| `HeroSection` | `title, subtitle, ctaPrimary, ctaSecondary, image` | Full-width hero with text + image |
| `ServiceHero` | `service` | Hero for service detail pages |
| `PageHeader` | `title, subtitle, breadcrumbs` | Standard page header |

#### Service Card Components
| Component | Props | Description |
|-----------|-------|-------------|
| `ServiceCard` | `service: Service` | Image + title + excerpt + link |
| `ServiceCardGrid` | `services: Service[]` | Grid of service cards |
| `ServiceFeatureList` | `features: string[]` | Bullet list of service features |

#### Pricing Components
| Component | Props | Description |
|-----------|-------|-------------|
| `PricingTable` | `categories: PricingCategory[]` | Tabbed pricing by category |
| `PricingCard` | `item: PricingItem` | Individual price item |
| `PricingPreview` | `items: PricingItem[]` | Homepage pricing teaser |

#### Review/Testimonial Components
| Component | Props | Description |
|-----------|-------|-------------|
| `TestimonialCard` | `testimonial: Testimonial` | Quote + name + rating |
| `TestimonialSlider` | `testimonials: Testimonial[]` | Carousel of testimonials |
| `TrustBadgeRow` | — | Icons for guarantees, reviews, experience |

#### FAQ Components
| Component | Props | Description |
|-----------|-------|-------------|
| `FAQAccordion` | `items: FAQItem[]` | Collapsible FAQ list |
| `FAQTeaser` | `items: FAQItem[]` | Homepage FAQ preview (3 items) |
| `CategoryFilter` | `categories, active, onChange` | Filter FAQs by category |

#### Form Components
| Component | Props | Description |
|-----------|-------|-------------|
| `ContactForm` | `onSubmit` | Name, email, phone, message |
| `QuoteRequestForm` | `onSubmit` | Service selection, item details, contact |
| `CommercialEnquiryForm` | `onSubmit` | Business details, volume, requirements |
| `FormInput` | `label, name, type, required, error` | Styled input with validation |
| `FormTextarea` | `label, name, required, error` | Styled textarea |
| `FormSelect` | `label, name, options, required` | Styled select dropdown |

#### CTA Banner
| Component | Props | Description |
|-----------|-------|-------------|
| `CTABanner` | `title, subtitle, ctaText, ctaHref, variant` | Full-width conversion banner |

#### Footer
| Component | Props | Description |
|-----------|-------|-------------|
| `Footer` | — | Multi-column with services, contact, legal, social |
| `FooterColumn` | `title, links` | Single footer column |

#### Blog Components
| Component | Props | Description |
|-----------|-------|-------------|
| `BlogCard` | `post: BlogPost` | Image + title + excerpt + date |
| `BlogCardGrid` | `posts: BlogPost[]` | Grid of blog cards |
| `FeaturedPost` | `post: BlogPost` | Large featured blog post |
| `ArticleHeader` | `post: BlogPost` | Blog post header with meta |

#### Area Coverage Components
| Component | Props | Description |
|-----------|-------|-------------|
| `AreaCard` | `area: ServiceArea` | Area name + description |
| `AreaGrid` | `areas: ServiceArea[]` | Grid of area cards |
| `AreaCoverageSection` | `areas: ServiceArea[]` | Homepage area preview |

#### Trust Badge Section
| Component | Props | Description |
|-----------|-------|-------------|
| `TrustBadgeRow` | — | Icons: years, reviews, local |
| `TrustBadge` | `icon, label, value` | Individual trust stat |


---

## 8. Content Model

### Sanity Schema Design

#### Site Settings (`siteSettings`)
```typescript
{
  _type: "siteSettings",
  siteName: string,
  tagline: string,
  phoneNumber: string,
  whatsappNumber: string,
  email: string,
  address: {
    street: string,
    city: string,
    postcode: string
  },
  openingHours: {
    monday: string,
    tuesday: string,
    // ... etc
  },
  socialLinks: {
    facebook?: string,
    instagram?: string,
    googleBusiness?: string
  },
  googleMapsUrl: string,
  metaDescription: string
}
```

#### Business Info (`businessInfo`)
```typescript
{
  _type: "businessInfo",
  establishedYear: number,
  story: blockContent[],
  values: {
    title: string,
    description: string,
    icon: string
  }[],
  team: {
    name: string,
    role: string,
    bio: string,
    image: image
  }[]
}
```

#### Service (`service`)
```typescript
{
  _type: "service",
  title: string,
  slug: slug,
  shortDescription: string,
  fullDescription: blockContent[],
  icon: string,
  heroImage: image,
  process: {
    step: number,
    title: string,
    description: string
  }[],
  features: string[],
  pricingNote: string,
  faqItems: reference[] -> faqItem,
  relatedServices: reference[] -> service,
  metaTitle: string,
  metaDescription: string,
  order: number
}
```

#### Pricing Item (`pricingItem`)
```typescript
{
  _type: "pricingItem",
  itemName: string,
  category: string, // "dry-cleaning" | "laundry" | "alterations" | "bedding" | "commercial"
  priceFrom: number,
  priceTo?: number,
  unit: string, // "per item" | "per kg" | "per load"
  description: string,
  note: string,
  order: number
}
```

#### FAQ Item (`faqItem`)
```typescript
{
  _type: "faqItem",
  question: string,
  answer: blockContent[],
  category: string, // "general" | "services" | "pricing" | "turnaround" | "commercial"
  relatedServices: reference[] -> service,
  order: number
}
```

#### Testimonial (`testimonial`)
```typescript
{
  _type: "testimonial",
  name: string,
  role: string, // e.g., "Local Resident", "Airbnb Host"
  content: text,
  rating: number, // 1-5
  location: string, // e.g., "Hither Green, London"
  date: date,
  isCommercial: boolean,
  featured: boolean
}
```

#### Service Area (`serviceArea`)
```typescript
{
  _type: "serviceArea",
  name: string,
  slug: slug,
  description: string,
  postcodePrefixes: string[], // e.g., ["SE12", "SE13", "SE6", "SE9"]
  collectionAvailable: boolean,
  order: number
}
```

#### Blog Post (`blogPost`)
```typescript
{
  _type: "blogPost",
  title: string,
  slug: slug,
  excerpt: string,
  content: blockContent[],
  featuredImage: image,
  author: string,
  publishedAt: datetime,
  categories: string[],
  tags: string[],
  metaTitle: string,
  metaDescription: string,
  featured: boolean
}
```

#### Commercial Sector (`commercialSector`)
```typescript
{
  _type: "commercialSector",
  name: string,
  slug: slug,
  description: string,
  icon: string,
  benefits: string[],
  caseStudy?: {
    clientName: string,
    testimonial: text
  }
}
```

#### Legal Page (`legalPage`)
```typescript
{
  _type: "legalPage",
  title: string,
  slug: slug,
  content: blockContent[],
  lastUpdated: date
}
```

#### Promotional Banner (`promotionalBanner`)
```typescript
{
  _type: "promotionalBanner",
  text: string,
  link: string,
  backgroundColor: string,
  textColor: string,
  active: boolean,
  startDate: date,
  endDate: date
}
```

#### Homepage Section (`homepageSection`)
```typescript
{
  _type: "homepageSection",
  sectionId: string, // "hero" | "services" | "how-it-works" | "testimonials" | "areas"
  enabled: boolean,
  customTitle?: string,
  customSubtitle?: string,
  customCtaText?: string,
  customCtaLink?: string
}
```

### Editable by Non-Technical Staff
| Content Type | Editable? | Notes |
|--------------|-----------|-------|
| Site settings (phone, hours, address) | Yes | Business info changes |
| Services | Yes | Add/edit/remove services |
| Pricing | Yes | Update prices |
| FAQs | Yes | Add common questions |
| Testimonials | Yes | Add customer reviews |
| Blog posts | Yes | Content marketing |
| Service areas | Yes | Update coverage |
| Promotional banners | Yes | Seasonal offers |
| Homepage sections | Yes | Toggle/customise sections |
| Legal pages | Limited | Content changes only |
| Component structure | No | Developer only |
| Design system | No | Developer only |

---

## 9. Page-by-Page UX Plan

### Home Page UX

#### User Intent
- "I need a dry cleaner near me"
- "Can they handle my specific item?"
- "How much will it cost?"
- "Are they trustworthy?"

#### Information Hierarchy
1. Immediate trust + action (hero)
2. What we do (services)
3. How easy it is (process)
4. What it costs (pricing preview)
5. Others trust us (testimonials)
6. Where we are (areas)
7. Final push (CTA banner)

#### Section Order
```
[Announcement Banner - optional]
[Header - sticky]
[Hero Section]
  - Headline
  - Subheadline
  - Primary CTA: Call Now
  - Secondary CTA: WhatsApp / Request Quote
  - Trust badges (years, reviews, local)
[Services Grid]
  - 6 service cards
  - "View All Services" link
[How It Works]
  - 3-4 step process
  - Simple icons
[Pricing Preview]
  - 3-4 popular items with prices
  - "See Full Pricing" link
[Testimonials]
  - 2-3 featured reviews
  - Star ratings
[Areas We Cover]
  - List of South East London areas
  - "Check Your Area" link
[FAQ Teaser]
  - 3 common questions
  - "View All FAQs" link
[CTA Banner]
  - "Ready to get started?"
  - Phone + WhatsApp + Quote buttons
[Footer]
```

#### Trust Elements
- Years in business badge
- Google review count
- "Family-run" messaging
- Satisfaction guarantee
- Local Hither Green / London imagery

#### CTAs
- Above fold: Call, WhatsApp, Quote
- Mid-page: "View Services", "See Pricing"
- Bottom: "Request a Quote"

#### Mobile UX Notes
- Hero: stacked layout, large tap targets
- Services: horizontal scroll or 2-column grid
- Phone/WhatsApp: sticky bottom bar
- Forms: full-width inputs, large submit button
- Click-to-call on phone numbers

#### Internal Linking
- Services -> Service detail pages
- Pricing -> Full pricing page
- Areas -> Areas page
- FAQ -> FAQ page
- Blog -> Blog posts
- Commercial -> Commercial page

---

### Services Page UX

#### User Intent
- "What services do you offer?"
- "Can you clean [specific item]?"

#### Information Hierarchy
1. Overview of all services
2. Quick description of each
3. Link to detailed page
4. Pricing CTA

#### Section Order
```
[Page Header]
  - "Our Services"
  - "Professional dry cleaning and laundry in South East London"
[Service Categories]
  - Grid of 6 service cards
  - Each: image, title, short desc, "Learn More"
[Commercial CTA]
  - "Need regular laundry for your business?"
[Pricing Link]
  - "See our transparent pricing"
```

#### Trust Elements
- "Experienced with delicate fabrics"
- "Same-day service available"
- Quality guarantee

#### CTAs
- "Learn More" per service
- "Get a Quote"
- "Contact Us"

#### Mobile UX Notes
- 2-column grid (1 column on very small screens)
- Large card tap targets
- Sticky CTA at bottom

---

### Service Detail Page UX

#### User Intent
- "Tell me exactly what you do for [service]"
- "How does it work?"
- "How much?"

#### Information Hierarchy
1. Service name + hero image
2. What the service includes
3. Process steps
4. Pricing guidance
5. Related FAQs
6. Related services
7. CTA

#### Section Order
```
[Service Hero]
  - Title
  - Short description
  - Hero image
[Service Description]
  - Full details
  - What we clean
  - What to expect
[Process Steps]
  - 3-4 steps with icons
[Pricing Info]
  - "From £X"
  - Link to full pricing
[Related FAQs]
  - 2-3 relevant questions
[Related Services]
  - "You might also need..."
[CTA]
  - "Get a Quote for [Service]"
```

#### Trust Elements
- Process transparency
- Experience with specific items
- Care instructions

#### CTAs
- "Request a Quote"
- "Call Now"
- "Back to All Services"

---

### Pricing Page UX

#### User Intent
- "How much does it cost?"
- "Is it competitive?"

#### Information Hierarchy
1. Transparency message
2. Price tables by category
3. Commercial pricing CTA
4. Disclaimer

#### Section Order
```
[Page Header]
  - "Transparent Pricing"
  - "No hidden fees"
[Category Tabs]
  - Dry Cleaning | Laundry | Alterations | Bedding
[Price Tables]
  - Item | Price | Unit
[Commercial CTA]
  - "Business pricing available"
[Disclaimer]
  - "Prices from... subject to inspection"
```

#### Trust Elements
- "Transparent pricing" messaging
- "No hidden fees"
- Price guarantee

#### CTAs
- "Request a Custom Quote"
- "Call for Exact Pricing"

#### Mobile UX Notes
- Horizontal scroll for wide tables
- Card-based layout alternative
- Sticky category tabs

---

### About Page UX

#### User Intent
- "Who are you?"
- "Can I trust you?"
- "Are you actually local?"

#### Information Hierarchy
1. Story/origin
2. Values
3. Local connection
4. Team/owner
5. CTA

#### Section Order
```
[Page Header]
  - "About Manor Lane"
[Story Section]
  - Origin story
  - Years in business
  - Local roots
[Values]
  - 3-4 core values with icons
[Local Connection]
  - Hither Green / London imagery
  - Community involvement
[Team]
  - Owner/manager photo + bio
[CTA]
  - "Visit us in South East London"
```

#### Trust Elements
- Real photos (not stock)
- Specific Hither Green / London references
- Years of experience
- Community ties

---

### Commercial Laundry Page UX

#### User Intent
- "Do you do business laundry?"
- "What sectors do you serve?"
- "Can I get an account?"

#### Information Hierarchy
1. B2B positioning
2. Sectors served
3. Benefits
4. Process
5. Testimonials
6. Enquiry form

#### Section Order
```
[Hero]
  - "Commercial Laundry Services"
  - "Reliable partner for South East London businesses"
[Sectors]
  - Hotels, Airbnb, Restaurants, Salons, etc.
[Benefits]
  - Reliable pickup, flexible scheduling, account management
[Process]
  - How commercial service works
[Testimonials]
  - Business customer reviews
[Enquiry Form]
  - Business name, contact, volume, requirements
```

#### Trust Elements
- Business client logos (if available)
- Volume capacity
- Reliability messaging
- Account management

#### CTAs
- "Request a Commercial Quote"
- "Call Our Business Team"

---

### FAQ Page UX

#### User Intent
- "I have a specific question"
- "Will you ruin my clothes?"
- "How long does it take?"

#### Information Hierarchy
1. Category filters
2. Questions by category
3. Contact CTA

#### Section Order
```
[Page Header]
  - "Frequently Asked Questions"
[Category Filter]
  - All | General | Services | Pricing | Turnaround | Commercial
[FAQ Accordion]
  - Expandable questions
[Contact CTA]
  - "Can't find your answer?"
```

#### Trust Elements
- Detailed, honest answers
- No evasive language
- Specific timeframes

---

### Contact Page UX

#### User Intent
- "How do I reach you?"
- "Where are you located?"
- "What are your hours?"

#### Information Hierarchy
1. Contact methods
2. Address + map
3. Opening hours
4. Contact form
5. FAQ link

#### Section Order
```
[Page Header]
  - "Get in Touch"
[Contact Info]
  - Phone (click-to-call)
  - WhatsApp (click-to-chat)
  - Email
  - Address
[Map]
  - Google Maps embed
[Opening Hours]
  - Day-by-day schedule
[Contact Form]
  - Name, email, phone, message
[FAQ Link]
  - "Have a quick question?"
```

#### Trust Elements
- Real address
- Real phone number
- Clear hours
- Map confirmation

#### Mobile UX Notes
- Click-to-call prominent
- WhatsApp deep link
- Map opens in Google Maps app
- Form optimised for mobile input

---

### Areas Page UX

#### User Intent
- "Do you cover my area?"
- "Where in South East London do you serve?"

#### Information Hierarchy
1. Service radius message
2. Area list
3. Collection availability
4. CTA

#### Section Order
```
[Page Header]
  - "Areas We Cover"
[Area Grid]
  - South East London neighbourhoods
  - Collection available badge
[Map]
  - Service area map
[CTA]
  - "Request Collection"
```

#### Trust Elements
- Specific area names
- Collection availability
- Local knowledge

---

### Blog Page UX

#### User Intent
- "Tips on garment care"
- "Local London content"
- SEO discovery

#### Information Hierarchy
1. Featured post
2. Recent posts
3. Categories

#### Section Order
```
[Page Header]
  - "Tips & Advice"
[Featured Post]
  - Large featured article
[Post Grid]
  - 6-9 recent posts
[Category Filter]
  - Care Tips | Stain Removal | London | Commercial
```

#### Internal Linking
- Posts link to relevant services
- Posts link to contact page
- Related posts at bottom

---

## 10. Copy Direction

### Homepage

**Hero Headline:**  
*"Dry Cleaning & Laundry in South East London — Done Right"*

**Hero Subheadline:**  
*"From everyday laundry to delicate garments, Manor Lane Dry Cleaners keeps South East London looking sharp. Family-run, reliable, and right here in the city."*

**Hero CTAs:**
- Primary: "Call [Phone Number]"
- Secondary: "WhatsApp Us" / "Request a Quote"

**Services Section Header:**  
*"What We Do"*

**Services Section Subheader:**  
*"Professional care for every item in your wardrobe — and your home."*

**Service Cards:**
- **Dry Cleaning:** *"Expert care for suits, dresses, coats, and delicate fabrics."*
- **Laundry Service:** *"Wash, dry, and fold — done for you."*
- **Wash & Iron:** *"Crisp shirts and fresh bedding, pressed and ready."*
- **Alterations:** *"Hemming, repairs, and adjustments by experienced hands."*
- **Duvet & Bedding:** *"Deep clean for duvets, pillows, and bed linen."*
- **Commercial:** *"Regular laundry services for South East London businesses."*

**How It Works:**
1. *"Drop off or request collection"*
2. *"We clean with care"*
3. *"Pick up fresh and ready"*

**Pricing Preview:**  
*"Transparent pricing — no hidden fees."*

**Testimonials Section:**  
*"What Hither Green says about us"*

**Areas Section:**  
*"Serving South East London and surrounding areas"*

**CTA Banner:**  
*"Ready for fresh clothes?"*  
*"Call, WhatsApp, or request a quote. We'll take care of the rest."*

---

### About Page

**Page Title:** *"About Manor Lane Dry Cleaners"*

**Opening:**  
*"Manor Lane Dry Cleaners has been serving Hither Green and South East London with professional garment care for [X] years. We're a family-run business built on reliability, quality, and genuine care for our customers' clothes."*

**Story Section:**  
*"It started with a simple belief: South East London deserves a dry cleaner that treats every garment like it's their own. From our first customer to today, that hasn't changed."*

**Values:**
- *"Quality First — Every item inspected, every stain treated with care."*
- *"Local Service — We're part of the South East London community, not a faceless chain."*
- *"Honest Pricing — Clear costs upfront. No surprises when you collect."*
- *"Reliable Turnaround — We know you need your clothes back on time."*

**Local Connection:**  
*"We're proud to be London-based. Our customers live in Hither Green, Lee, Grove Park, and beyond — and we know what London weather does to a good coat."*

---

### Services Overview Page

**Page Title:** *"Our Services"*

**Opening:**  
*"Whether it's your best suit, your weekly laundry, or a duvet that's seen better days — we handle it with care."*

**Service Descriptions:**
- *"Dry Cleaning — Professional solvent-based cleaning for delicate and structured garments. Suits, dresses, coats, and more."*
- *"Laundry Service — Wash, dry, and fold for your everyday items. Perfect for busy households."*
- *"Wash & Iron — Shirts, blouses, and bedding washed and pressed to a crisp finish."*
- *"Alterations — Hemming, repairs, resizing, and adjustments. If it doesn't fit, we can fix it."*
- *"Duvet & Bedding Cleaning — Deep clean and refresh for duvets, pillows, and bed linen."*
- *"Commercial Laundry — Regular, reliable service for South East London businesses."*

---

### Commercial Laundry Page

**Hero:**  
*"Commercial Laundry Services in South East London"*  
*"Reliable, regular laundry for your business — so you can focus on running it."*

**Sectors:**
- *"Hotels & B&Bs — Fresh linen, every day."*
- *"Airbnb Hosts — Turnaround between guests, sorted."*
- *"Restaurants & Cafes — Aprons, tablecloths, and uniforms."*
- *"Salons & Spas — Towels and robes, hygienically cleaned."*
- *"Offices — Uniforms and workwear."*

**Benefits:**
- *"Scheduled pickups — We work around your timetable."*
- *"Account management — One point of contact, one monthly invoice."*
- *"Volume capacity — From small cafes to large hotels."*
- *"Reliable turnaround — We know your business can't wait."*

**Enquiry Form CTA:**  
*"Tell us about your business and we'll put together a quote."*

---

### Contact Page

**Page Title:** *"Get in Touch"*

**Opening:**  
*"Have a question? Need a quote? Want to arrange a collection? We're here to help."*

**Contact Methods:**
- *"Call us: [Phone] — Speak to someone directly."*
- *"WhatsApp: [Number] — Message us anytime."*
- *"Email: [Email] — We'll reply within 24 hours."*
- *"Visit: [Address] — Drop in during opening hours."*

**Opening Hours:**
- *"Monday–Friday: 8:00 AM – 6:00 PM"*
- *"Saturday: 9:00 AM – 4:00 PM"*
- *"Sunday: Closed"*

**Form CTA:**  
*"Send us a message and we'll get back to you as soon as possible."*

---

### FAQ Page

**Page Title:** *"Frequently Asked Questions"*

**Sample Questions & Answers:**

**Q: How long does dry cleaning take?**  
*A: Most items are ready within 48 hours. Same-day service is available for urgent requests — just call ahead.*

**Q: Do you offer collection and delivery?**  
*A: Yes, we offer collection and delivery across South East London. Contact us to arrange a time that suits you.*

**Q: What items can you dry clean?**  
*A: Suits, dresses, coats, jackets, delicate fabrics, wedding dresses, and more. If you're unsure, just ask.*

**Q: How much does dry cleaning cost?**  
*A: Prices vary by item. A suit typically starts from £[X], and a dress from £[X]. See our pricing page for full details.*

**Q: Do you clean duvets and bedding?**  
*A: Yes — duvets, pillows, bed linen, and blankets. We recommend cleaning duvets every 6 months.*

**Q: Can you alter my clothes?**  
*A: Yes. We offer hemming, repairs, resizing, and adjustments. Bring your item in for a free assessment.*

**Q: Do you serve businesses?**  
*A: Absolutely. We provide regular commercial laundry for hotels, restaurants, salons, and Airbnb hosts across South East London.*


---

## 11. SEO Strategy

### Primary Keywords
| Keyword | Intent | Priority |
|---------|--------|----------|
| dry cleaners hither green | Service | High |
| dry cleaning hither green | Service | High |
| laundry service hither green | Service | High |
| london dry cleaners | Service | High |
| wash and iron hither green | Service | Medium |
| alterations hither green | Service | Medium |
| duvet cleaning hither green | Service | Medium |
| commercial laundry london | B2B | Medium |

### Secondary Keywords
| Keyword | Intent |
|---------|--------|
| best dry cleaners hither green | Comparison |
| cheap dry cleaning hither green | Price |
| same day dry cleaning hither green | Urgency |
| dry cleaners near me | Local |
| laundry pickup hither green | Convenience |
| wedding dress cleaning hither green | Niche |
| suit cleaning hither green | Niche |
| curtain cleaning hither green | Niche |
| ironing service hither green | Service |
| bedding cleaning hither green | Service |

### Service Keywords
| Service | Keywords |
|---------|----------|
| Dry Cleaning | dry cleaning hither green, suit dry cleaning, dress dry cleaning, coat cleaning |
| Laundry | laundry service hither green, wash and fold, laundry pickup |
| Wash & Iron | wash and iron hither green, shirt ironing, bedding ironing |
| Alterations | alterations hither green, clothes repair, hemming service |
| Duvet Cleaning | duvet cleaning hither green, pillow cleaning, bedding wash |
| Commercial | commercial laundry london, business laundry, hotel laundry |

### Local Area Keywords
Target: "dry cleaners [area]" and "laundry service [area]" for all South East London neighbourhoods including: Hither Green, Lee, Grove Park, Nottingham, Eltham, Chislehurst, Sidcup, Bromley, Bexley, Lewisham, New Cross, Catford, Deptford, Greenwich, Woolwich, Blackheath, Charlton, Kidbrooke, Forest Hill, Bermondsey, Camberwell, Dulwich, Penge, Sydenham, Crystal Palace, Norwood.

### Page-to-Keyword Mapping
| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Home | dry cleaners hither green | laundry service hither green, london dry cleaners |
| Services | dry cleaning services hither green | laundry services hither green, garment care |
| Dry Cleaning | dry cleaning hither green | suit cleaning, dress cleaning, coat cleaning |
| Laundry | laundry service hither green | wash and fold hither green, laundry pickup |
| Wash & Iron | wash and iron hither green | shirt ironing, bedding ironing |
| Alterations | alterations hither green | clothes repair, hemming hither green |
| Duvet Cleaning | duvet cleaning hither green | pillow cleaning, bedding cleaning |
| Commercial | commercial laundry london | business laundry, hotel laundry |
| Pricing | dry cleaning prices hither green | laundry prices hither green, cheap dry cleaning |
| About | about manor lane dry cleaners | family dry cleaners hither green |
| FAQ | dry cleaning faq | laundry questions, stain removal |
| Contact | contact dry cleaners hither green | dry cleaners near me |
| Areas | dry cleaners [area] | laundry service [area] |
| Blog | garment care tips | stain removal, fabric care |

### Blog Topic Ideas
1. "How Often Should You Dry Clean a Suit?"
2. "5 Common Stains and How to Treat Them"
3. "How to Care for Delicate Fabrics at Home"
4. "The Difference Between Dry Cleaning and Laundry"
5. "How to Store Winter Coats in South East London's Damp Climate"
6. "Wedding Dress Cleaning: What to Know"
7. "Airbnb Host Guide to Linen Care in South East London"
8. "How to Keep Your Duvet Fresh Between Washes"
9. "South East London's Best Spots for a Fresh Outfit"
10. "Commercial Laundry: What South East London Businesses Need to Know"

### Structured Data / Schema Recommendations

#### LocalBusiness Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Manor Lane Dry Cleaners",
  "image": "[logo-url]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street]",
    "addressLocality": "London",
    "addressRegion": "England",
    "postalCode": "SE12 8LP",
    "addressCountry": "GB"
  },
  "telephone": "[Phone]",
  "url": "https://www.manorlanedrycleaners.co.uk",
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
  "priceRange": "££",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[lat]",
    "longitude": "[lng]"
  }
}
```

#### Service Schema (Service Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dry Cleaning",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Manor Lane Dry Cleaners"
  },
  "areaServed": {
    "@type": "City",
    "name": "London"
  },
  "description": "Professional dry cleaning services in South East London"
}
```

#### FAQPage Schema (FAQ Page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does dry cleaning take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most items are ready within 48 hours..."
      }
    }
  ]
}
```

#### Article Schema (Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post Title",
  "author": {
    "@type": "Organization",
    "name": "Manor Lane Dry Cleaners"
  },
  "datePublished": "2026-07-17",
  "publisher": {
    "@type": "Organization",
    "name": "Manor Lane Dry Cleaners"
  }
}
```

### Metadata Recommendations
- **Title format:** `[Page Title] | Manor Lane Dry Cleaners, Hither Green`
- **Description:** 150-160 characters, include primary keyword + CTA
- **Open Graph:** Image, title, description for social sharing
- **Twitter Cards:** Summary large image
- **Canonical URLs:** Prevent duplicate content
- **Hreflang:** Not needed (single language)

### Internal Linking Recommendations
- Home -> Services, Pricing, About, Contact, Areas, Blog
- Services -> Individual service pages, Pricing, Commercial
- Service Detail -> Related services, Pricing, FAQ, Contact
- Pricing -> Services, Commercial, Contact
- About -> Services, Contact, Areas
- Commercial -> Contact, Services
- FAQ -> Services, Contact
- Contact -> FAQ, Areas
- Blog -> Related services, Contact
- Areas -> Services, Contact
- Footer -> All main pages, legal pages

### Google Business Profile Strategy
1. **Claim and verify** Google Business Profile
2. **Complete all fields:** hours, services, photos, description
3. **Add service areas** — all South East London neighbourhoods covered
4. **Post weekly updates** — offers, tips, business news
5. **Upload photos** regularly — storefront, team, before/after
6. **Respond to all reviews** — positive and negative
7. **Add Q&A** — preempt common questions
8. **Enable messaging** — direct customer contact

### Review Acquisition Strategy
1. **Ask at collection** — "Would you mind leaving us a review?"
2. **Follow-up SMS/email** — 24 hours after collection
3. **QR code on receipt** — direct link to Google review
4. **Incentive** — "Leave a review and get 10% off your next visit"
5. **Respond to all reviews** — builds trust and engagement
6. **Display reviews on website** — testimonial section

### NAP Consistency Guidance
**NAP = Name, Address, Phone**
- Ensure identical NAP across:
  - Website (header, footer, contact page, schema)
  - Google Business Profile
  - Yelp, Yell, Thomson Local, etc.
  - Social media profiles
  - Any directory listings
- Use exact same formatting:
  - "Manor Lane Dry Cleaners"
  - "[Number] Manor Lane, London, SE12 8LP"
  - "[Phone Number]"
- Update immediately if any detail changes

---

## 12. Conversion Strategy

### Conversion Points

#### 1. Call Now
- **Placement:** Header (sticky), hero, CTA banners, contact page
- **Format:** Click-to-call on mobile, displayed number on desktop
- **Tracking:** Google Ads call tracking, Google Analytics event

#### 2. WhatsApp
- **Placement:** Header, hero, floating button (mobile), contact page
- **Format:** Deep link to WhatsApp chat with pre-filled message
- **Tracking:** UTM parameters, Analytics event

#### 3. Request Quote
- **Placement:** Hero, service pages, pricing page, CTA banners
- **Format:** Link to contact form with "quote" subject pre-selected
- **Tracking:** Form submission event, thank-you page

#### 4. Book Collection
- **Placement:** Services, areas, CTA banners
- **Format:** Contact form with "collection request" option
- **Tracking:** Form submission event

#### 5. Commercial Enquiry
- **Placement:** Commercial page, footer, services
- **Format:** Dedicated commercial enquiry form
- **Tracking:** Form submission event, CRM tag

#### 6. Pricing CTA
- **Placement:** Homepage, services, pricing page
- **Format:** "See our prices" or "Request a custom quote"
- **Tracking:** Click event

#### 7. Review Trust Blocks
- **Placement:** Homepage, service pages, about page
- **Format:** Star ratings, review count, testimonial quotes
- **Tracking:** Click to Google reviews

#### 8. Guarantee / Service Promise
- **Placement:** Homepage, service pages, footer
- **Format:** "Satisfaction guaranteed", "Quality promise"
- **Tracking:** Impression event

### Above the Fold vs Below the Fold

#### Above the Fold (Immediate)
- Phone number (click-to-call)
- WhatsApp button
- Primary CTA ("Request a Quote")
- Trust badges (years, reviews)
- Key services (3-4 cards or list)
- Opening hours (if relevant)

#### Below the Fold (Supporting)
- Full services grid
- How it works
- Detailed pricing
- Testimonials
- Areas covered
- FAQ
- About snippet
- Full contact details

### Conversion Funnel
```
Awareness (SEO, ads, word of mouth)
    |
    v
Landing (Home, Service page, Blog post)
    |
    v
Interest (Read services, check pricing, view areas)
    |
    v
Trust (Reviews, about page, guarantees)
    |
    v
Action (Call, WhatsApp, form, visit)
    |
    v
Follow-up (Confirmation, thank you, review request)
```

---

## 13. Features Roadmap

### A. Must-Have at Launch
| Feature | Priority | Effort |
|---------|----------|--------|
| Static marketing pages | Critical | Medium |
| Responsive mobile design | Critical | Medium |
| Contact form | Critical | Low |
| Quote request form | Critical | Low |
| Commercial enquiry form | Critical | Low |
| WhatsApp CTA | Critical | Low |
| Phone CTA (click-to-call) | Critical | Low |
| Services pages | Critical | Medium |
| Pricing page | Critical | Medium |
| About page | High | Low |
| FAQ page | High | Low |
| Areas page | High | Low |
| Blog | High | Medium |
| Google Analytics | High | Low |
| Google Search Console | High | Low |
| Schema markup | High | Low |
| Sitemap | High | Low |
| Robots.txt | High | Low |
| Cookie consent | High | Low |
| Privacy policy | High | Low |
| Terms & conditions | High | Low |
| CMS integration | High | Medium |
| Image optimisation | High | Low |
| Fast loading (<3s) | High | Medium |

### B. Nice-to-Have After Launch
| Feature | Priority | Effort |
|---------|----------|--------|
| Dynamic blog with categories | Medium | Medium |
| Testimonial slider | Medium | Low |
| Promotional banner (CMS) | Medium | Low |
| Area-specific landing pages | Medium | Medium |
| Call tracking | Medium | Low |
| Hotjar/Clarity heatmaps | Medium | Low |
| Google Business Profile posts | Medium | Low |
| Review widget | Medium | Low |
| Social media integration | Medium | Low |
| Newsletter signup | Low | Low |
| Live chat (Tidio/Crisp) | Low | Low |
| Multi-language (Polish, etc.) | Low | High |

### C. Advanced Platform Phase
| Feature | Priority | Effort |
|---------|----------|--------|
| Online booking system | High | High |
| Pickup/delivery scheduling | High | High |
| Customer accounts | High | High |
| Order tracking | High | High |
| Admin dashboard | High | High |
| Payment integration (Stripe) | High | High |
| Subscription plans | Medium | High |
| Rewards/loyalty programme | Medium | High |
| Discount logic | Medium | Medium |
| Business account management | Medium | High |
| CRM integration | Medium | Medium |
| SMS notifications | Medium | Medium |
| Inventory management | Low | High |
| Driver app | Low | High |

---

## 14. Node.js Backend Plan

### Launch Backend Responsibilities

#### API Endpoints

**1. Contact Form API**
```
POST /api/contact
Body: {
  name: string (required),
  email: string (required, email),
  phone: string (optional),
  message: string (required, min 10 chars),
  consent: boolean (required, true),
  recaptchaToken: string (required)
}
Response: { success: true, messageId: string }
```

**2. Quote Request API**
```
POST /api/quote
Body: {
  name: string (required),
  email: string (required, email),
  phone: string (required),
  serviceType: string (required),
  itemDescription: string (required),
  quantity: number (optional),
  preferredDate: string (optional, ISO date),
  collectionRequired: boolean (optional),
  address: string (optional),
  message: string (optional),
  consent: boolean (required, true),
  recaptchaToken: string (required)
}
Response: { success: true, quoteId: string }
```

**3. Commercial Enquiry API**
```
POST /api/commercial-enquiry
Body: {
  businessName: string (required),
  contactName: string (required),
  email: string (required, email),
  phone: string (required),
  sector: string (required),
  volume: string (required), // "small", "medium", "large"
  frequency: string (required), // "daily", "weekly", "monthly"
  requirements: string (required),
  address: string (optional),
  consent: boolean (required, true),
  recaptchaToken: string (required)
}
Response: { success: true, enquiryId: string }
```

**4. Collection Request API (Optional)**
```
POST /api/collection-request
Body: {
  name: string (required),
  email: string (required, email),
  phone: string (required),
  address: string (required),
  postcode: string (required),
  preferredDate: string (required),
  preferredTime: string (optional),
  items: string (required),
  notes: string (optional),
  consent: boolean (required, true),
  recaptchaToken: string (required)
}
Response: { success: true, requestId: string }
```

### Email Notifications

**Admin Notification Email**
- To: business email
- Subject: "New [Form Type] from [Name]"
- Body: All form fields formatted
- Attach: None

**Customer Confirmation Email**
- To: customer email
- Subject: "We've received your [enquiry/quote request]"
- Body: Thank you message, what to expect next, contact details
- Attach: None

### Spam Protection
- Google reCAPTCHA v3 (invisible)
- Rate limiting: 5 requests per IP per hour
- Honeypot field (hidden field bots fill in)
- Email validation (MX record check)
- Phone validation (format check)

### Validation
- Zod schemas for all inputs
- Sanitise all text inputs (DOMPurify)
- Validate email format
- Validate phone format (UK)
- Validate postcode (UK format)
- Check consent checkbox is true

### Logging
- Winston logger
- Log all form submissions (sanitised)
- Log errors with stack traces
- Log rate limit hits
- Store logs for 30 days

### Error Handling
- 400: Bad request (validation errors)
- 429: Too many requests (rate limit)
- 500: Internal server error
- Return user-friendly error messages
- Log all errors

### Future Backend Responsibilities

#### Booking API
```
POST /api/bookings
GET /api/bookings/:id
PUT /api/bookings/:id
DELETE /api/bookings/:id
```

#### Customer Account API
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/account
PUT /api/account
GET /api/account/orders
```

#### Order Status API
```
GET /api/orders/:id/status
GET /api/orders/:id/tracking
```

#### Admin APIs
```
GET /api/admin/orders
PUT /api/admin/orders/:id
GET /api/admin/customers
GET /api/admin/analytics
```

#### Promotions / Rewards Logic
```
GET /api/promotions
POST /api/promotions/apply
GET /api/rewards/balance
POST /api/rewards/redeem
```

---

## 15. Database / CMS Design

### Launch Recommendation: No Database + Sanity CMS

**Why no database at launch:**
- Content is static/marketing — perfect for CMS
- Form submissions go to email (no persistence needed)
- Faster to build, cheaper to run
- No maintenance overhead
- Easy to add database later when booking is needed

**Sanity CMS Pros:**
- Managed service — no server maintenance
- Real-time collaborative editing
- Structured content types
- GROQ querying — powerful and fast
- Free tier: 3 users, 10K documents, 5GB assets
- Excellent Next.js integration
- Image pipeline built-in

**Sanity CMS Cons:**
- Vendor lock-in (migrating out requires effort)
- GROQ learning curve (though simple for basic queries)
- Real-time features overkill for small sites
- Pricing scales if you grow beyond free tier

**Alternative: Strapi**
- Pros: Self-hosted, more control, no vendor lock-in, larger community
- Cons: Requires server, more setup, more maintenance

**Alternative: Contentful**
- Pros: Enterprise-grade, excellent support, robust
- Cons: Expensive for small businesses, complex for simple needs

**Recommendation for Manor Lane:**
Use **Sanity** for launch. It's the fastest path to a maintainable, CMS-driven site. If the business grows significantly and wants to avoid vendor lock-in, migrate to Strapi later. The content model is transferable.

### When to Add a Database
Add PostgreSQL when:
- Online booking is implemented (needs order persistence)
- Customer accounts are needed (user data)
- Order tracking is required (status history)
- Subscription plans are offered (billing cycles)
- Admin dashboard needs operational data

### Database Recommendation (Future)
**PostgreSQL** — reliable, well-supported, excellent with Node.js/Express
- Use **Prisma** ORM for type-safe database access
- Host on **Railway**, **Render**, or **Supabase**

---

## 16. Form and Lead Flow

### General Contact Form

**Fields:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Name | Text | Yes | Min 2 chars |
| Email | Email | Yes | Valid email format |
| Phone | Tel | No | UK phone format |
| Message | Textarea | Yes | Min 10 chars |
| Consent | Checkbox | Yes | Must be checked |

**Flow:**
1. User fills form
2. Client-side validation (Zod + React Hook Form)
3. reCAPTCHA v3 token generated
4. Submit to `/api/contact`
5. Server validates + sanitises
6. Email sent to business
7. Confirmation email sent to user
8. User sees success message
9. Form resets

### Quote Request Form

**Fields:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Name | Text | Yes | Min 2 chars |
| Email | Email | Yes | Valid email |
| Phone | Tel | Yes | UK phone format |
| Service Type | Select | Yes | From CMS options |
| Item Description | Textarea | Yes | Min 5 chars |
| Quantity | Number | No | Min 1 |
| Preferred Date | Date | No | Future date only |
| Collection Required | Checkbox | No | — |
| Address | Textarea | No | If collection checked |
| Message | Textarea | No | — |
| Consent | Checkbox | Yes | Must be checked |

**Flow:** Same as contact form, but to `/api/quote`

### Commercial Enquiry Form

**Fields:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Business Name | Text | Yes | Min 2 chars |
| Contact Name | Text | Yes | Min 2 chars |
| Email | Email | Yes | Valid email |
| Phone | Tel | Yes | UK phone format |
| Sector | Select | Yes | From CMS options |
| Volume | Select | Yes | Small/Medium/Large |
| Frequency | Select | Yes | Daily/Weekly/Monthly |
| Requirements | Textarea | Yes | Min 10 chars |
| Address | Textarea | No | — |
| Consent | Checkbox | Yes | Must be checked |

**Flow:** Same as contact form, but to `/api/commercial-enquiry`

### Optional Collection Request Form

**Fields:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Name | Text | Yes | Min 2 chars |
| Email | Email | Yes | Valid email |
| Phone | Tel | Yes | UK phone format |
| Address | Textarea | Yes | Min 5 chars |
| Postcode | Text | Yes | UK postcode format |
| Preferred Date | Date | Yes | Future date only |
| Preferred Time | Select | No | Morning/Afternoon/Evening |
| Items | Textarea | Yes | Min 5 chars |
| Notes | Textarea | No | — |
| Consent | Checkbox | Yes | Must be checked |

**Flow:** Same as contact form, but to `/api/collection-request`

### Confirmation UX
- **Success:** Green checkmark + "Thank you! We'll be in touch within 24 hours."
- **Error:** Red alert + specific error message + "Please try again or call us."
- **Loading:** Spinner on submit button + "Sending..."

### Admin Notification Flow
1. Form submitted
2. Server processes
3. Email sent to business inbox
4. Email includes: all form data, timestamp, source page, user IP (for spam checking)
5. Optional: Google Sheets/Airtable row added
6. Business responds within 24 hours

### Thank-You Messaging
- **On-page:** Immediate confirmation message
- **Email:** Thank-you email with next steps and contact info
- **WhatsApp:** Optional follow-up message (if opted in)

### Anti-Spam Recommendations
1. **reCAPTCHA v3** — invisible scoring, no user friction
2. **Rate limiting** — max 5 submissions per IP per hour
3. **Honeypot field** — hidden field that bots fill in
4. **Email validation** — MX record check
5. **Phone validation** — UK format regex
6. **Time-based check** — form submitted too quickly = bot
7. **Akismet** — optional spam filtering for messages

---

## 17. Design System

### Brand Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary** | `#1B4D3E` | Headers, primary buttons, key accents |
| **Primary Dark** | `#143D31` | Hover states, emphasis |
| **Primary Light** | `#2A6B56` | Secondary accents |
| **Secondary** | `#C9A227` | CTAs, highlights, stars |
| **Secondary Dark** | `#A88420` | Hover states |
| **Accent** | `#F5F0E8` | Warm backgrounds, cards |
| **Accent Dark** | `#E8E0D4` | Borders, dividers |

### Neutral Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Black** | `#1A1A1A` | Primary text |
| **Dark Grey** | `#4A4A4A` | Secondary text |
| **Medium Grey** | `#8A8A8A` | Tertiary text, placeholders |
| **Light Grey** | `#E5E5E5` | Borders, dividers |
| **Off-White** | `#FAFAF8` | Page backgrounds |
| **White** | `#FFFFFF` | Cards, content areas |

### Accent Colour
- **Warm Gold** `#C9A227` — used sparingly for CTAs, important highlights, star ratings
- Evokes quality, care, and warmth (not cheap or flashy)

### Typography

| Role | Font | Weight | Size (Desktop) | Size (Mobile) |
|------|------|--------|----------------|---------------|
| **H1 (Hero)** | Inter | 700 | 48px | 32px |
| **H2 (Section)** | Inter | 600 | 36px | 28px |
| **H3 (Subsection)** | Inter | 600 | 24px | 20px |
| **H4 (Card Title)** | Inter | 600 | 20px | 18px |
| **Body** | Inter | 400 | 16px | 16px |
| **Body Large** | Inter | 400 | 18px | 16px |
| **Caption** | Inter | 400 | 14px | 14px |
| **Button** | Inter | 600 | 16px | 16px |
| **Nav** | Inter | 500 | 15px | 15px |

- **Line height:** 1.5 for body, 1.2 for headings
- **Letter spacing:** -0.02em for headings, normal for body
- **Font loading:** `next/font/google` for zero-layout-shift

### Button Styles

| Variant | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| **Primary** | `#1B4D3E` | `#FFFFFF` | None | `#143D31` |
| **Secondary** | `#C9A227` | `#1A1A1A` | None | `#A88420` |
| **Outline** | Transparent | `#1B4D3E` | 2px `#1B4D3E` | `#1B4D3E` bg, white text |
| **Ghost** | Transparent | `#1B4D3E` | None | `#F5F0E8` bg |
| **WhatsApp** | `#25D366` | `#FFFFFF` | None | `#128C7E` |

- **Border radius:** 8px (slightly rounded, not pill)
- **Padding:** 14px 28px (generous tap targets)
- **Shadow on hover:** subtle `0 2px 8px rgba(0,0,0,0.1)`
- **Transition:** 200ms ease

### Form Styles

| Element | Style |
|---------|-------|
| **Input** | 1px `#E5E5E5` border, 8px radius, 14px padding |
| **Focus** | 2px `#1B4D3E` border, no outline |
| **Error** | 1px `#DC2626` border, red error text below |
| **Label** | 14px, `#4A4A4A`, 4px margin bottom |
| **Checkbox** | 20px, `#1B4D3E` when checked |
| **Select** | Same as input, custom arrow icon |

### Card Styles

| Element | Style |
|---------|-------|
| **Background** | `#FFFFFF` |
| **Border** | 1px `#E5E5E5` or none |
| **Border radius** | 12px |
| **Shadow** | `0 1px 3px rgba(0,0,0,0.05)` |
| **Hover shadow** | `0 4px 12px rgba(0,0,0,0.08)` |
| **Padding** | 24px |
| **Transition** | 200ms ease |

### Border Radius Scale
- **Small:** 4px (badges, tags)
- **Medium:** 8px (buttons, inputs)
- **Large:** 12px (cards, containers)
- **XL:** 16px (modals, large containers)
- **Full:** 9999px (avatars, pills)

### Shadows
- **SM:** `0 1px 2px rgba(0,0,0,0.05)`
- **MD:** `0 4px 6px rgba(0,0,0,0.05)`
- **LG:** `0 10px 15px rgba(0,0,0,0.08)`
- **XL:** `0 20px 25px rgba(0,0,0,0.1)`

### Icon Style
- **Library:** Lucide React (lightweight, consistent)
- **Size:** 20px default, 24px for feature icons
- **Stroke width:** 1.5px
- **Colour:** Inherit from text or `#1B4D3E`

### Section Spacing
- **Section padding:** 80px vertical (desktop), 48px (mobile)
- **Content max-width:** 1280px
- **Container padding:** 24px horizontal (desktop), 16px (mobile)
- **Gap between sections:** 0 (sections handle their own padding)
- **Gap within sections:** 48px (desktop), 32px (mobile)

### Grid System
- **12-column grid** via Tailwind
- **Gutter:** 24px (desktop), 16px (mobile)
- **Common patterns:**
  - 1 col: mobile
  - 2 col: tablet
  - 3 col: desktop (services, blog)
  - 4 col: desktop (features, stats)

### Mobile Behaviour
- **Header:** Hamburger menu, sticky
- **Hero:** Stacked, full-width image
- **Services:** 2-column grid (1 on small screens)
- **Forms:** Full-width inputs, large submit button
- **CTAs:** Sticky bottom bar with phone + WhatsApp
- **Font sizes:** Scale down 20-30%
- **Touch targets:** Minimum 44px

### Image Art Direction
- **Hero images:** Warm, authentic, local Hither Green / London feel
- **Service images:** Clean garments, professional setting
- **Team photos:** Real people, natural light
- **Blog images:** Lifestyle, relevant to content
- **Avoid:** Stock photos of generic models, overly polished corporate imagery
- **Treatment:** Slight warmth, natural colours, no heavy filters

---

## 18. Development Standards

### TypeScript
- **Use TypeScript** for all code — type safety reduces bugs
- Strict mode enabled
- No `any` types (use `unknown` if necessary)
- Interface naming: `PascalCase` (e.g., `ServiceProps`)
- Type naming: `PascalCase` (e.g., `ServiceType`)

### ESLint / Prettier
- **ESLint:** Next.js recommended config + TypeScript + React hooks
- **Prettier:** Default config, 2 spaces, single quotes, 100 char width
- **Pre-commit hook:** Husky + lint-staged to enforce on commit

### API Conventions
- **RESTful** naming: `/api/resource/action`
- **HTTP methods:** GET, POST, PUT, DELETE as appropriate
- **Status codes:** 200 success, 400 bad request, 429 rate limit, 500 error
- **Response format:** `{ success: boolean, data?: any, error?: string }`
- **Versioning:** Not needed for launch (add `/v1/` prefix later if needed)

### Environment Variables
```
# Required
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_TOKEN=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
ADMIN_EMAIL=
RECAPTCHA_SECRET_KEY=

# Optional
GOOGLE_ANALYTICS_ID=
HOTJAR_ID=
```

### Accessibility Standards
- **WCAG 2.1 AA** compliance target
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
- Proper heading hierarchy (h1 -> h2 -> h3)
- Alt text on all images
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Colour contrast ratio 4.5:1 minimum
- Skip to content link

### Performance Standards
- **Lighthouse scores:** 95+ all categories
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
  - INP (Interaction to Next Paint): < 200ms
- **Bundle size:** < 200KB initial JS
- **Image format:** WebP/AVIF with JPEG fallback
- **Font loading:** `font-display: swap`

### Security Practices
- HTTPS only
- Content Security Policy headers
- Input sanitisation on all forms
- Rate limiting on APIs
- Environment variables for secrets
- No sensitive data in client-side code
- Regular dependency updates

### Deployment Workflow
1. **Development:** Local Next.js dev server
2. **Staging:** Vercel preview deployments on PR
3. **Production:** Vercel production deployment on merge to main
4. **Branch protection:** Require PR + review before merge
5. **Rollback:** Instant via Vercel dashboard

### Testing Priorities
| Type | Priority | Tool |
|------|----------|------|
| **Unit tests** | Medium | Jest + React Testing Library |
| **Integration tests** | Medium | Jest + MSW |
| **E2E tests** | Low | Playwright (critical flows only) |
| **Accessibility tests** | High | axe-core + manual |
| **Performance tests** | High | Lighthouse CI |
| **Visual regression** | Low | Chromatic (optional) |

**Critical flows to test:**
- Contact form submission
- Quote request form submission
- Commercial enquiry form submission
- Navigation on mobile
- Page load performance

---

## 19. Final Implementation Brief

### Product Summary
Manor Lane Dry Cleaners needs a conversion-focused local business website that generates enquiries through phone calls, WhatsApp messages, and form submissions. The site must rank well in South East London local search, build trust with authentic content, and be easy for non-technical staff to update.

### Launch Scope
- 15+ pages (Home, Services x6, Pricing, About, Commercial, FAQ, Contact, Areas, Blog, Legal x3)
- 3 form types (Contact, Quote, Commercial Enquiry)
- WhatsApp + phone integration
- CMS-driven content
- Mobile-first responsive design
- Full SEO implementation
- Analytics setup

### Recommended Stack
| Layer | Technology | Reason |
|-------|-----------|--------|
| **Frontend** | Next.js 14 (App Router) | SEO, performance, future-proof |
| **Backend** | Express.js | Simple, sufficient, maintainable |
| **CMS** | Sanity | Structured content, easy editing |
| **Database** | None (launch) | Not needed until booking |
| **Hosting** | Vercel | Next.js optimised, global CDN |
| **Email** | Nodemailer + SMTP | Reliable, simple |
| **Forms** | React Hook Form + Zod | Type-safe, performant |
| **Styling** | Tailwind CSS | Rapid, consistent, maintainable |
| **Icons** | Lucide React | Lightweight, consistent |
| **Analytics** | GA4 + GTM + Search Console | Full tracking |

### Required Routes
```
/                           (Home)
/services                   (Services overview)
/services/[slug]            (Service detail)
/pricing                    (Pricing)
/about                      (About)
/commercial-laundry         (Commercial)
/faq                        (FAQ)
/contact                    (Contact)
/areas-we-cover             (Areas)
/blog                       (Blog)
/blog/[slug]                (Blog post)
/privacy-policy             (Privacy)
/terms-and-conditions       (Terms)
/cookie-policy              (Cookies)
```

### Required Components
- Layout: Header, Footer, Container, MobileMenu
- Sections: HeroSection, ServiceSection, HowItWorksSection, PricingSection, TestimonialSection, AreaCoverageSection, CTABanner, FAQSection, BlogSection, CommercialSection
- UI: Button, Card, Accordion, FormInput, FormTextarea, FormSelect, Badge, Icon
- Forms: ContactForm, QuoteRequestForm, CommercialEnquiryForm
- Cards: ServiceCard, PricingCard, TestimonialCard, BlogCard, AreaCard
- Shared: PageHeader, SectionHeader, RichTextContent, MapEmbed, TrustBadgeRow

### Required APIs
```
POST /api/contact            (General contact)
POST /api/quote              (Quote request)
POST /api/commercial-enquiry (Commercial enquiry)
```

### CMS / Content Needs
- Sanity project setup
- Content types: Site Settings, Business Info, Service, Pricing Item, FAQ, Testimonial, Service Area, Blog Post, Commercial Sector, Legal Page, Promotional Banner, Homepage Section
- Initial content population
- Staff training (1 hour)

### SEO Needs
- Meta tags on all pages
- Structured data (LocalBusiness, Service, FAQPage, Article)
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Google Search Console setup
- Google Business Profile optimisation
- NAP consistency across web

### Design Direction
- **Feel:** Warm, professional, local, trustworthy
- **Colours:** Deep green (#1B4D3E) + warm gold (#C9A227) + neutral greys
- **Typography:** Inter, clean and readable
- **Imagery:** Authentic, local, warm — avoid generic stock
- **Spacing:** Generous, breathable, not cramped
- **Mobile:** Sticky CTAs, large tap targets, click-to-call

### Conversion Strategy
- Phone CTA: sticky header + hero + banners
- WhatsApp CTA: floating button (mobile) + header + hero
- Forms: prominent, simple, fast
- Trust: reviews, guarantees, local identity
- Urgency: same-day service mention, quick turnaround

### Phase 2 Roadmap
1. **Month 3-6:** Add booking system (PostgreSQL + Express APIs)
2. **Month 6-9:** Customer accounts (NextAuth + profiles)
3. **Month 9-12:** Order tracking + admin dashboard
4. **Month 12+:** Subscriptions, rewards, payments (Stripe)

**Prerequisite for Phase 2:** Business must have operational capacity for online bookings (driver schedule, stock management, customer service bandwidth).

---

## Appendix: Assumptions

The following details are assumed and should be confirmed with the business:

1. **Exact address** — needed for schema, map, NAP
2. **Phone number** — needed for CTAs, schema, NAP
3. **WhatsApp number** — may be same as phone
4. **Email address** — for form notifications
5. **Opening hours** — for schema, contact page
6. **Established year** — for trust messaging
7. **Team details** — for about page
8. **Pricing** — for pricing page
9. **Service areas** — for areas page
10. **Photos** — storefront, team, services, before/after
11. **Existing reviews** — for testimonials section
12. **Business sectors served** — for commercial page
13. **Logo** — for branding
14. **Domain name** — for setup
15. **Google Business Profile status** — claimed or not

---

*End of Brief*
