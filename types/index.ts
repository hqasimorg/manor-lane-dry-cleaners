export interface SiteSettings {
  siteName: string;
  tagline: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  address: {
    street: string;
    city: string;
    postcode: string;
  };
  openingHours: Record<string, string>;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    googleBusiness?: string;
  };
  googleMapsUrl: string;
  metaDescription: string;
}

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  fullDescription: any[];
  icon: string;
  heroImage?: any;
  process: { step: number; title: string; description: string }[];
  features: string[];
  pricingNote: string;
  faqItems?: FAQItem[];
  relatedServices?: Service[];
  metaTitle: string;
  metaDescription: string;
  order: number;
}

export interface PricingItem {
  _id: string;
  itemName: string;
  category: string;
  priceFrom: number;
  priceTo?: number;
  unit: string;
  description: string;
  note: string;
  order: number;
}

export interface FAQItem {
  _id: string;
  question: string;
  answer: any[];
  category: string;
  relatedServices?: Service[];
  order: number;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
  date: string;
  isCommercial: boolean;
  featured: boolean;
}

export interface ServiceArea {
  _id: string;
  name: string;
  slug: { current: string };
  description: string;
  postcodePrefixes: string[];
  collectionAvailable: boolean;
  order: number;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: any[];
  featuredImage?: any;
  author: string;
  publishedAt: string;
  categories: string[];
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  featured: boolean;
}

export interface CommercialSector {
  _id: string;
  name: string;
  slug: { current: string };
  description: string;
  icon: string;
  benefits: string[];
  caseStudy?: {
    clientName: string;
    testimonial: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
