import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CTABanner } from "@/components/shared/CTABanner";
import { Calendar, ArrowLeft, User } from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: "how-often-dry-clean-suit" },
    { slug: "common-stains-treatment" },
    { slug: "delicate-fabrics-home" },
    { slug: "dry-cleaning-vs-laundry" },
    { slug: "winter-coat-storage" },
    { slug: "wedding-dress-cleaning" },
  ];
}

const blogPosts: Record<string, {
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}> = {
  "how-often-dry-clean-suit": {
    title: "How Often Should You Dry Clean a Suit?",
    content: `
      <p>Suits are an investment. Whether it's for work, weddings, or special occasions, a well-maintained suit can last for years. But how often should you dry clean it?</p>

      <h2>The General Rule</h2>
      <p>As a general rule, you should dry clean a suit after every 3-4 wears. This prevents dirt and oils from building up in the fabric while avoiding excessive cleaning that can wear down the material.</p>

      <h2>Factors That Affect Frequency</h2>
      <ul>
        <li><strong>How often you wear it:</strong> Daily wear suits need more frequent cleaning than occasional wear.</li>
        <li><strong>The environment:</strong> Suits worn in dusty or smoky environments need cleaning sooner.</li>
        <li><strong>Stains:</strong> Any visible stain should be addressed immediately.</li>
        <li><strong>Odour:</strong> If your suit smells, it's time for a clean.</li>
      </ul>

      <h2>Tips Between Cleans</h2>
      <p>To extend the life of your suit between dry cleans:</p>
      <ul>
        <li>Hang it properly on a shaped hanger</li>
        <li>Air it out after wearing</li>
        <li>Brush off any surface dirt</li>
        <li>Use a garment bag for storage</li>
      </ul>

      <p>At Manor Lane Dry Cleaners, we treat every suit with care. Bring yours in and we'll keep it looking sharp.</p>
    `,
    author: "Manor Lane Team",
    date: "2026-07-10",
    category: "Care Tips",
  },
  "common-stains-treatment": {
    title: "5 Common Stains and How to Treat Them",
    content: `
      <p>Stains happen. The key is acting fast. Here are the five most common stains and how to treat them before they set.</p>

      <h2>1. Coffee</h2>
      <p>Blot (don't rub) with cold water immediately. For milk-based coffee, use a mild detergent solution.</p>

      <h2>2. Red Wine</h2>
      <p>Blot with a clean cloth, then apply salt to absorb the liquid. Rinse with cold water.</p>

      <h2>3. Grease / Oil</h2>
      <p>Apply talcum powder or cornstarch to absorb the oil. Brush off after 15 minutes.</p>

      <h2>4. Ink</h2>
      <p>Place a paper towel behind the stain and dab with rubbing alcohol from the front.</p>

      <h2>5. Blood</h2>
      <p>Use cold water only — hot water sets blood stains. Soak and gently rub.</p>

      <p>For stubborn stains, bring your garment to Manor Lane Dry Cleaners. We have professional stain removal solutions for every type of fabric.</p>
    `,
    author: "Manor Lane Team",
    date: "2026-07-05",
    category: "Stain Removal",
  },
  "delicate-fabrics-home": {
    title: "How to Care for Delicate Fabrics at Home",
    content: `
      <p>Silk, cashmere, and wool need special care. Here's how to keep them in top condition between professional cleans.</p>

      <h2>Silk</h2>
      <p>Hand wash in cold water with a mild detergent. Never wring — press between towels to remove water. Dry flat away from direct sunlight.</p>

      <h2>Cashmere</h2>
      <p>Hand wash in lukewarm water. Use a cashmere-specific detergent. Lay flat to dry on a towel. Store folded, never hung.</p>

      <h2>Wool</h2>
      <p>Hand wash in cold water or use the wool cycle on your machine. Use wool detergent. Dry flat to prevent stretching.</p>

      <h2>General Tips</h2>
      <ul>
        <li>Always check the care label first</li>
        <li>Use a mesh bag for machine washing</li>
        <li>Avoid fabric softener on delicates</li>
        <li>Store in breathable garment bags</li>
      </ul>

      <p>For deep cleaning of delicate items, trust the professionals at Manor Lane Dry Cleaners.</p>
    `,
    author: "Manor Lane Team",
    date: "2026-06-28",
    category: "Care Tips",
  },
  "dry-cleaning-vs-laundry": {
    title: "The Difference Between Dry Cleaning and Laundry",
    content: `
      <p>Not sure which service you need? Here's a simple guide to help you choose.</p>

      <h2>Dry Cleaning</h2>
      <p>Dry cleaning uses chemical solvents (not water) to clean garments. It's ideal for:</p>
      <ul>
        <li>Delicate fabrics (silk, wool, cashmere)</li>
        <li>Structured garments (suits, coats)</li>
        <li>Items with embellishments or beading</li>
        <li>Stain removal on sensitive fabrics</li>
      </ul>

      <h2>Laundry Service</h2>
      <p>Laundry uses water and detergent. It's suitable for:</p>
      <ul>
        <li>Everyday clothing (cotton, polyester)</li>
        <li>Bed linen and towels</li>
        <li>Casual wear and undergarments</li>
        <li>Items that can withstand water and agitation</li>
      </ul>

      <h2>When in Doubt</h2>
      <p>Check the care label. If it says "Dry Clean Only," don't risk it. Bring it to Manor Lane and we'll take care of it.</p>
    `,
    author: "Manor Lane Team",
    date: "2026-06-20",
    category: "Advice",
  },
  "winter-coat-storage": {
    title: "How to Store Winter Coats in London's Damp Climate",
    content: `
      <p>London's damp weather can damage stored coats. Here's how to keep yours in perfect condition during the off-season.</p>

      <h2>Clean Before Storing</h2>
      <p>Always clean your coat before storing it. Dirt, oils, and stains can set in over time and attract moths.</p>

      <h2>Choose the Right Storage</h2>
      <ul>
        <li>Use breathable cotton garment bags (not plastic)</li>
        <li>Store in a cool, dry place</li>
        <li>Avoid direct sunlight</li>
        <li>Use cedar blocks or lavender sachets to deter moths</li>
      </ul>

      <h2>Hang Properly</h2>
      <p>Use a sturdy, shaped hanger to maintain the coat's structure. Avoid wire hangers that can distort the shoulders.</p>

      <h2>Check Periodically</h2>
      <p>Every few weeks, check your stored coats for signs of damp or moth damage. Air them out if needed.</p>

      <p>Need a professional clean before storing? Bring your coat to Manor Lane Dry Cleaners.</p>
    `,
    author: "Manor Lane Team",
    date: "2026-06-15",
    category: "Care Tips",
  },
  "wedding-dress-cleaning": {
    title: "Wedding Dress Cleaning: What to Know",
    content: `
      <p>Your wedding dress is precious. Here's what you need to know about professional cleaning and preservation.</p>

      <h2>When to Clean</h2>
      <p>Ideally, have your dress cleaned within a few weeks of the wedding. The longer stains sit, the harder they are to remove.</p>

      <h2>The Process</h2>
      <ul>
        <li>Detailed inspection for stains and damage</li>
        <li>Specialist stain treatment</li>
        <li>Gentle hand cleaning for delicate fabrics</li>
        <li>Careful pressing and finishing</li>
        <li>Optional preservation boxing</li>
      </ul>

      <h2>Preservation</h2>
      <p>For long-term storage, we offer acid-free preservation boxing. This protects your dress from yellowing and deterioration for decades.</p>

      <h2>Cost</h2>
      <p>Wedding dress cleaning starts from £85. Preservation boxing is an additional £45. We provide a full quote after inspection.</p>

      <p>Trust your wedding dress to the experts at Manor Lane Dry Cleaners. Book a consultation today.</p>
    `,
    author: "Manor Lane Team",
    date: "2026-06-10",
    category: "Advice",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post Not Found | Manor Lane Dry Cleaners",
    };
  }

  return {
    title: `${post.title} | Manor Lane Blog`,
    description: `${post.title} — tips and advice from Manor Lane Dry Cleaners, Hither Green.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Manor Lane Dry Cleaners",
    },
    publisher: {
      "@type": "Organization",
      name: "Manor Lane Dry Cleaners",
      url: "https://www.manorlanedrycleaners.co.uk",
    },
    url: `https://www.manorlanedrycleaners.co.uk/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="bg-primary py-16 lg:py-20">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-accent aspect-video rounded-lg flex items-center justify-center mb-8">
              <p className="text-neutral-medium-grey text-sm">Blog Featured Image</p>
            </div>
            <div
              className="prose prose-lg max-w-none prose-headings:text-neutral-black prose-p:text-neutral-dark-grey prose-a:text-primary hover:prose-a:text-primary-dark prose-strong:text-neutral-black"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </Container>
      </section>

      <CTABanner
        title="Need help with this?"
        subtitle="Contact us for professional advice or to book a service."
      />
    </>
  );
}
