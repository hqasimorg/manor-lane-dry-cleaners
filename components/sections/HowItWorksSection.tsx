import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Truck, Sparkles, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Truck,
    step: "01",
    title: "Drop Off or Request Collection",
    description:
      "Bring your items to our shop at 176 Manor Lane, or request our free collection service across South East London.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "We Clean With Care",
    description:
      "Our experienced team treats every garment with professional care, using the right methods for each fabric.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Pick Up Fresh and Ready",
    description:
      "Collect your freshly cleaned items from our shop, or we'll deliver them back to you — crisp, clean, and ready to wear.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-white section-padding">
      <Container>
        <SectionHeader
          title="How It Works"
          subtitle="Simple, straightforward, and stress-free."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-4xl font-bold text-accent-dark/50 mb-3 block">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-neutral-black mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-dark-grey text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
