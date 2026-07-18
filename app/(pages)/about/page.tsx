import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Award, PoundSterling, Zap, Home, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Manor Lane Dry Cleaners | Hither Green, London",
  description:
    "Family-run dry cleaners in Hither Green, London. Learn about our story, values, and commitment to quality garment care.",
  alternates: {
    canonical: "/about",
  },
};

const reasons = [
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Our experienced team uses advanced cleaning techniques and high-quality products to ensure your garments look their best. We perform thorough inspections on all items before they leave our facility.",
  },
  {
    icon: PoundSterling,
    title: "Affordable Prices",
    description:
      "We believe that quality laundry services should be accessible to everyone. Our transparent pricing structure ensures you know exactly what you're paying for — no hidden fees.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description:
      "Need your clothes cleaned in a hurry? We offer same-day or next-day service for most garments. We value your time and deliver fast, reliable service without compromising on quality.",
  },
  {
    icon: Home,
    title: "All Done In-House",
    description:
      "We handle all cleaning processes in-house, ensuring every garment receives the personal touch it deserves. Your clothes are never sent elsewhere — they stay with our team from start to finish.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "From removing tough stains to repairing minor damages, we go the extra mile. Our team takes pride in giving every item special attention, whether it's a business suit, a wedding dress, or everyday wear.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Manor Lane"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-black mb-6">
                Our Story
              </h2>
              <p className="text-neutral-dark-grey mb-4">
                Manor Lane Dry Cleaners has been serving Hither Green and South East
                London with professional garment care since {SITE_CONFIG.establishedYear}.
                We're a family-run business built on reliability, quality, and genuine
                care for our customers' clothes.
              </p>
              <p className="text-neutral-dark-grey mb-4">
                It started with a simple belief: South East London deserves a dry cleaner
                that treats every garment like it's their own. From our first customer to
                today, that hasn't changed.
              </p>
              <p className="text-neutral-dark-grey">
                We're proud to be based in Hither Green. Our customers live in Lee,
                Grove Park, Eltham, and beyond — and we know what London weather does
                to a good coat.
              </p>
            </div>
            <div className="bg-accent rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-neutral-medium-grey text-sm">Team Photo</p>
                <p className="text-neutral-medium-grey text-xs mt-1">
                  Replace with a photo of the shop or team
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white section-padding">
        <Container>
          <SectionHeader
            title="Why Choose Manor Lane Dry Cleaners?"
            subtitle="Whether you need a one-time service or regular cleaning, we're your trusted partner for all your garment care needs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-neutral-off-white rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-black mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-neutral-dark-grey leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Visit us in Hither Green"
        subtitle="Come and meet the team. We're here Monday to Saturday."
      />
    </>
  );
}
