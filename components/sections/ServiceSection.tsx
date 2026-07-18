import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Shirt, WashingMachine, Scissors, Sparkles, Heart, Zap, ArrowRight } from "lucide-react";

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
    description: "We'll iron away your clothes' creases. Crisp and ready.",
    href: "/services/ironing-service",
  },
  {
    icon: Scissors,
    title: "Alterations & Repairs",
    description: "Don't toss it — repair or alter it. Hemming, resizing, and more.",
    href: "/services/alterations-repairs",
  },
  {
    icon: Heart,
    title: "Wedding Dress",
    description: "Choose Manor Lane for your wedding dress care. Expert cleaning and preservation.",
    href: "/services/wedding-dress-cleaning",
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
