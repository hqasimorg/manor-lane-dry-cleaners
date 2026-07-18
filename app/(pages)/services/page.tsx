import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/shared/CTABanner";
import Link from "next/link";
import { Shirt, WashingMachine, Scissors, Bed, Building2, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dry Cleaning & Laundry Services Hither Green | Manor Lane",
  description:
    "Full range of dry cleaning, laundry, and garment care services in Hither Green, London. From everyday washing to delicate fabrics.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    icon: Shirt,
    title: "Dry Cleaning",
    description: "Expert care for suits, dresses, coats, and delicate fabrics. Professional solvent-based cleaning for your most precious garments.",
    href: "/services/dry-cleaning",
  },
  {
    icon: WashingMachine,
    title: "Laundry Service",
    description: "Wash, dry, and fold — done for you. Perfect for busy households who want fresh clothes without the hassle.",
    href: "/services/laundry-service",
  },
  {
    icon: Sparkles,
    title: "Wash & Iron",
    description: "Crisp shirts and fresh bedding, washed and pressed to a crisp finish. Look sharp every day.",
    href: "/services/wash-and-iron",
  },
  {
    icon: Scissors,
    title: "Alterations",
    description: "Hemming, repairs, and adjustments by experienced hands. If it doesn't fit, we can fix it.",
    href: "/services/alterations",
  },
  {
    icon: Bed,
    title: "Duvet & Bedding",
    description: "Deep clean for duvets, pillows, and bed linen. Refresh your bedroom with professionally cleaned bedding.",
    href: "/services/duvet-bedding-cleaning",
  },
  {
    icon: Building2,
    title: "Commercial Laundry",
    description: "Regular, reliable service for London businesses. Hotels, restaurants, salons, and more.",
    href: "/commercial-laundry",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Professional dry cleaning and laundry in Hither Green, London"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <SectionHeader
            title="What We Do"
            subtitle="Whether it's your best suit, your weekly laundry, or a duvet that's seen better days — we handle it with care."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group">
                <Card className="h-full group-hover:shadow-card-hover transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <CardContent>
                    <p className="text-sm">{service.description}</p>
                  </CardContent>
                  <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Need regular laundry for your business?"
        subtitle="We provide reliable commercial laundry services for hotels, restaurants, salons, and more across London."
      />
    </>
  );
}
