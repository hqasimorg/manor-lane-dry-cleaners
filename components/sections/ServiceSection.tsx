import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Shirt, WashingMachine, Scissors, Bed, Building2, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Dry Cleaning",
    description: "Expert care for suits, dresses, coats, and delicate fabrics.",
    href: "/services/dry-cleaning",
  },
  {
    icon: WashingMachine,
    title: "Laundry Service",
    description: "Wash, dry, and fold — done for you.",
    href: "/services/laundry-service",
  },
  {
    icon: Sparkles,
    title: "Wash & Iron",
    description: "Crisp shirts and fresh bedding, pressed and ready.",
    href: "/services/wash-and-iron",
  },
  {
    icon: Scissors,
    title: "Alterations",
    description: "Hemming, repairs, and adjustments by experienced hands.",
    href: "/services/alterations",
  },
  {
    icon: Bed,
    title: "Duvet & Bedding",
    description: "Deep clean for duvets, pillows, and bed linen.",
    href: "/services/duvet-bedding-cleaning",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Regular laundry services for London businesses.",
    href: "/commercial-laundry",
  },
];

export function ServiceSection() {
  return (
    <section className="bg-neutral-off-white section-padding">
      <Container>
        <SectionHeader
          title="What We Do"
          subtitle="Professional care for every item in your wardrobe — and your home."
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

        <div className="text-center mt-10">
          <Button variant="outline" href="/services" icon={<ArrowRight className="w-5 h-5" />}>
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
