import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dry Cleaning Tips & Advice | Manor Lane Blog",
  description:
    "Tips on garment care, stain removal, and laundry advice from Hither Green's trusted dry cleaners.",
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    slug: "how-often-dry-clean-suit",
    title: "How Often Should You Dry Clean a Suit?",
    excerpt:
      "Suits are an investment. Learn how often you should dry clean yours to keep it looking sharp without damaging the fabric.",
    date: "2026-07-10",
    category: "Care Tips",
    featured: true,
  },
  {
    slug: "common-stains-treatment",
    title: "5 Common Stains and How to Treat Them",
    excerpt:
      "From red wine to coffee, learn the best ways to tackle the most common stains before they set in.",
    date: "2026-07-05",
    category: "Stain Removal",
    featured: false,
  },
  {
    slug: "delicate-fabrics-home",
    title: "How to Care for Delicate Fabrics at Home",
    excerpt:
      "Silk, cashmere, and wool need special care. Here's how to keep them in top condition between dry cleans.",
    date: "2026-06-28",
    category: "Care Tips",
    featured: false,
  },
  {
    slug: "dry-cleaning-vs-laundry",
    title: "The Difference Between Dry Cleaning and Laundry",
    excerpt:
      "Not sure which service you need? We explain the difference so you can make the right choice.",
    date: "2026-06-20",
    category: "Advice",
    featured: false,
  },
  {
    slug: "winter-coat-storage",
    title: "How to Store Winter Coats in London's Damp Climate",
    excerpt:
      "London's damp weather can damage stored coats. Here's how to keep yours in perfect condition.",
    date: "2026-06-15",
    category: "Care Tips",
    featured: false,
  },
  {
    slug: "wedding-dress-cleaning",
    title: "Wedding Dress Cleaning: What to Know",
    excerpt:
      "Your wedding dress is precious. Here's what you need to know about professional cleaning and preservation.",
    date: "2026-06-10",
    category: "Advice",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <PageHeader
        title="Tips & Advice"
        subtitle="Garment care tips, stain removal guides, and laundry advice from the experts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          {/* Featured post */}
          {featuredPost && (
            <div className="mb-12">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-accent aspect-video lg:aspect-auto flex items-center justify-center">
                    <p className="text-neutral-medium-grey text-sm">Featured Image</p>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-neutral-black mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-neutral-dark-grey mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-neutral-medium-grey">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Post grid */}
          <SectionHeader
            title="Latest Articles"
            subtitle=""
            centered={false}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="bg-accent aspect-video flex items-center justify-center">
                  <p className="text-neutral-medium-grey text-xs">Blog Image</p>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-black mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-dark-grey mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-medium-grey">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
