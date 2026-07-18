import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Award, PoundSterling, Zap, Home, Eye } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Advanced cleaning techniques and thorough inspections on every item before it leaves our facility.",
  },
  {
    icon: PoundSterling,
    title: "Affordable Prices",
    description:
      "Transparent pricing — no hidden fees. Quality garment care that's accessible to everyone.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description:
      "Same-day or next-day service for most garments. Fast, reliable — without cutting corners.",
  },
  {
    icon: Home,
    title: "All Done In-House",
    description:
      "Every garment is cleaned by our own team on-site. Your clothes never leave our hands.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "From stubborn stains to delicate repairs — we treat every item with the care it deserves.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-accent section-padding">
      <Container>
        <SectionHeader
          title="Why Choose Manor Lane?"
          subtitle="South East London's trusted dry cleaners — family-run, reliable, and always in your corner."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-neutral-black mb-2">
                {reason.title}
              </h3>
              <p className="text-xs text-neutral-dark-grey leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
