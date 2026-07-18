import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Card, CardTitle, CardContent } from "@/components/ui/Card";
import { ArrowRight, Shirt, WashingMachine, Scissors, Sparkles, Heart, Zap, Home, Layers, Snowflake, Palette, GraduationCap, Wrench, PanelLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Dry Cleaning & Laundry Services Hither Green | Manor Lane",
  description:
    "Full range of dry cleaning, laundry, and garment care services in Hither Green, London. From everyday washing to delicate fabrics, alterations, rugs, leather, and more.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Expert care for suits, dresses, coats, and delicate fabrics. Dry cleaning done right.",
    href: "/services/dry-cleaning",
  },
  {
    icon: Shirt,
    title: "Shirt Service",
    description: "Relax and let us handle it. Shirts washed, pressed, and ready to wear.",
    href: "/services/shirt-service",
  },
  {
    icon: WashingMachine,
    title: "Laundry Service",
    description: "Just drop off your laundry and we'll take care of the rest.",
    href: "/services/laundry-service",
  },
  {
    icon: Zap,
    title: "Ironing Service",
    description: "We'll iron away your clothes' creases — crisp and ready for anything.",
    href: "/services/ironing-service",
  },
  {
    icon: Scissors,
    title: "Alterations & Repairs",
    description: "Don't toss it — repair or alter it. Hemming, resizing, zip repairs, and more.",
    href: "/services/alterations-repairs",
  },
  {
    icon: Heart,
    title: "Wedding Dress Cleaning",
    description: "Choose Manor Lane for your wedding dress care. Expert cleaning and preservation.",
    href: "/services/wedding-dress-cleaning",
  },
  {
    icon: Shield,
    title: "Natives Cleaning",
    description: "Preserving heritage, one garment at a time. Specialist care for traditional garments.",
    href: "/services/natives-cleaning",
  },
  {
    icon: Home,
    title: "Upholstery Cleaning",
    description: "Clean sofa, happy life. Professional upholstery cleaning for your home.",
    href: "/services/upholstery-cleaning",
  },
  {
    icon: Layers,
    title: "Rug Cleaning",
    description: "Fresh rug, joy of walking. Deep cleaning for all types of rugs.",
    href: "/services/rug-cleaning",
  },
  {
    icon: Snowflake,
    title: "Skiwear Cleaning",
    description: "Luxury brand care for your skiwear and specialist outdoor garments.",
    href: "/services/skiwear-cleaning",
  },
  {
    icon: Palette,
    title: "Dye Service",
    description: "We can even dye your clothes — giving them a new look and a second life.",
    href: "/services/dye-service",
  },
  {
    icon: GraduationCap,
    title: "School Uniform",
    description: "Keep uniforms looking their best. Regular care for school clothing.",
    href: "/services/school-uniform",
  },
  {
    icon: Wrench,
    title: "Shoe Repairs",
    description: "Re-heel, save your soles, and restore comfort to your step.",
    href: "/services/shoe-repairs",
  },
  {
    icon: PanelLeft,
    title: "Curtain Cleaning",
    description: "Time to drop the curtains and keep allergens away. Professional curtain care.",
    href: "/services/curtain-cleaning",
  },
  {
    icon: Shield,
    title: "Leather & Suede",
    description: "Trust your leather care to the experts. Cleaning and conditioning for leather and suede.",
    href: "/services/leather-suede-cleaning",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Professional dry cleaning and garment care in Hither Green, London"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        title="Not sure which service you need?"
        subtitle="Give us a call or send a WhatsApp and we'll point you in the right direction."
      />
    </>
  );
}
