export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  slug,
  shortDescription,
  icon,
  "heroImage": heroImage.asset->url,
  order
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  shortDescription,
  fullDescription,
  icon,
  heroImage,
  process,
  features,
  pricingNote,
  "faqItems": faqItems[]-> {
    _id,
    question,
    answer,
    category
  },
  "relatedServices": relatedServices[]-> {
    _id,
    title,
    slug,
    shortDescription,
    icon
  },
  metaTitle,
  metaDescription
}`;

export const pricingQuery = `*[_type == "pricingItem"] | order(category asc, order asc) {
  _id,
  itemName,
  category,
  priceFrom,
  priceTo,
  unit,
  description,
  note
}`;

export const faqsQuery = `*[_type == "faqItem"] | order(order asc) {
  _id,
  question,
  answer,
  category
}`;

export const faqsByCategoryQuery = `*[_type == "faqItem" && category == $category] | order(order asc) {
  _id,
  question,
  answer,
  category
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(date desc) {
  _id,
  name,
  role,
  content,
  rating,
  location,
  date,
  isCommercial,
  featured
}`;

export const featuredTestimonialsQuery = `*[_type == "testimonial" && featured == true] | order(date desc) {
  _id,
  name,
  role,
  content,
  rating,
  location,
  date
}`;

export const serviceAreasQuery = `*[_type == "serviceArea"] | order(order asc) {
  _id,
  name,
  slug,
  description,
  postcodePrefixes,
  collectionAvailable,
  order
}`;

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  "featuredImage": featuredImage.asset->url,
  author,
  publishedAt,
  categories,
  featured
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  featuredImage,
  author,
  publishedAt,
  categories,
  tags,
  metaTitle,
  metaDescription
}`;

export const commercialSectorsQuery = `*[_type == "commercialSector"] | order(name asc) {
  _id,
  name,
  slug,
  description,
  icon,
  benefits,
  caseStudy
}`;

export const legalPageBySlugQuery = `*[_type == "legalPage" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content,
  lastUpdated
}`;

export const homepageSectionsQuery = `*[_type == "homepageSection"] | order(sectionId asc) {
  _id,
  sectionId,
  enabled,
  customTitle,
  customSubtitle,
  customCtaText,
  customCtaLink
}`;
