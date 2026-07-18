import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, CheckCircle } from "lucide-react";

// Static params for pre-rendering
export function generateStaticParams() {
  return [
    { slug: "dry-cleaning" },
    { slug: "laundry-service" },
    { slug: "wash-and-iron" },
    { slug: "alterations" },
    { slug: "duvet-bedding-cleaning" },
  ];
}

const serviceData: Record<string, {
  title: string;
  description: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
}> = {
  "dry-cleaning": {
    title: "Dry Cleaning",
    description:
      "Professional solvent-based cleaning for delicate and structured garments. Suits, dresses, coats, and more — treated with expert care.",
    features: [
      "Suits, dresses, coats, and jackets",
      "Delicate fabrics and designer garments",
      "Wedding dress cleaning",
      "Stain treatment and removal",
      "48-hour standard turnaround",
      "Same-day service available",
    ],
    process: [
      { step: 1, title: "Inspection", description: "We inspect every garment for stains, damage, and fabric type." },
      { step: 2, title: "Pre-treatment", description: "Stains are treated with specialist solutions before cleaning." },
      { step: 3, title: "Cleaning", description: "Garments are cleaned using professional dry cleaning solvents." },
      { step: 4, title: "Finishing", description: "Pressed, steamed, and packaged ready for collection." },
    ],
  },
  "laundry-service": {
    title: "Laundry Service",
    description:
      "Wash, dry, and fold for your everyday items. Perfect for busy households who want fresh clothes without the hassle.",
    features: [
      "Wash, dry, and fold service",
      "Everyday clothing and household items",
      "Bulk laundry for families",
      "Student laundry packages",
      "48-hour turnaround",
      "Free collection available",
    ],
    process: [
      { step: 1, title: "Collection", description: "We collect your laundry from your door." },
      { step: 2, title: "Sorting", description: "Items are sorted by colour, fabric, and washing requirements." },
      { step: 3, title: "Washing", description: "Professional machines with quality detergents." },
      { step: 4, title: "Delivery", description: "Fresh, folded laundry delivered back to you." },
    ],
  },
  "wash-and-iron": {
    title: "Wash & Iron",
    description:
      "Shirts, blouses, and bedding washed and pressed to a crisp finish. Look sharp every day.",
    features: [
      "Shirts and blouses",
      "Bed linen and tablecloths",
      "Professional pressing",
      "Crisp, wrinkle-free finish",
      "Bulk discounts available",
      "48-hour turnaround",
    ],
    process: [
      { step: 1, title: "Wash", description: "Gentle wash with fabric-appropriate settings." },
      { step: 2, title: "Dry", description: "Careful drying to prevent shrinkage." },
      { step: 3, title: "Press", description: "Professional pressing for a crisp finish." },
      { step: 4, title: "Package", description: "Neatly folded or hung, ready for use." },
    ],
  },
  "alterations": {
    title: "Alterations",
    description:
      "Hemming, repairs, resizing, and adjustments. If it doesn't fit, we can fix it.",
    features: [
      "Hemming trousers and dresses",
      "Zip replacements",
      "Button replacements",
      "Resizing and adjustments",
      "Patch repairs",
      "Curtain alterations",
    ],
    process: [
      { step: 1, title: "Assessment", description: "Free assessment of your alteration needs." },
      { step: 2, title: "Quote", description: "Clear pricing before any work begins." },
      { step: 3, title: "Alteration", description: "Expert hand or machine alterations." },
      { step: 4, title: "Fitting", description: "Try on to ensure perfect fit." },
    ],
  },
  "duvet-bedding-cleaning": {
    title: "Duvet & Bedding Cleaning",
    description:
      "Deep clean and refresh for duvets, pillows, and bed linen. We recommend cleaning duvets every 6 months.",
    features: [
      "All duvet sizes (single to super king)",
      "Pillows and cushions",
      "Bed linen and sheets",
      "Blankets and throws",
      "Anti-allergy treatment available",
      "72-hour turnaround",
    ],
    process: [
      { step: 1, title: "Collection", description: "We collect your bulky bedding items." },
      { step: 2, title: "Pre-treatment", description: "Spot treatment for any stains." },
      { step: 3, title: "Deep Clean", description: "Large-capacity machines for thorough cleaning." },
      { step: 4, title: "Dry & Deliver", description: "Fully dried and delivered fresh." },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return {
      title: "Service Not Found | Manor Lane Dry Cleaners",
    };
  }

  return {
    title: `${service.title} Hither Green | Manor Lane Dry Cleaners`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Manor Lane Dry Cleaners",
      url: "https://www.manorlanedrycleaners.co.uk",
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    url: `https://www.manorlanedrycleaners.co.uk/services/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeader
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${slug}` },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Features */}
            <h2 className="text-2xl font-bold text-neutral-black mb-6">
              What We Clean
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-card"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-dark-grey">{feature}</p>
                </div>
              ))}
            </div>

            {/* Process */}
            <h2 className="text-2xl font-bold text-neutral-black mb-6">
              Our Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-lg p-6 shadow-card text-center"
                >
                  <span className="text-3xl font-bold text-primary/20 block mb-3">
                    0{step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-dark-grey">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pricing note */}
            <div className="bg-accent rounded-lg p-6 mb-12">
              <p className="text-neutral-dark-grey">
                <strong>Pricing:</strong> Prices vary depending on the specific
                items and any special requirements. See our{" "}
                <a href="/pricing" className="text-primary hover:underline">
                  pricing page
                </a>{" "}
                for indicative rates, or{" "}
                <a href="/contact" className="text-primary hover:underline">
                  request a quote
                </a>{" "}
                for your specific needs.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="primary" size="lg" href="/quote" icon={<ArrowRight className="w-5 h-5" />}>
                Get a Quote for {service.title}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
