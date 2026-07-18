import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Shirt, Bed, Scissors, Sparkles } from "lucide-react";

const previewItems = [
  {
    icon: Shirt,
    item: "Shirt (Wash & Press)",
    price: "£2.50",
    note: "",
  },
  {
    icon: Sparkles,
    item: "2 pc Suit",
    price: "£12.00",
    note: "",
  },
  {
    icon: Bed,
    item: "Single Duvet",
    price: "£18.00",
    note: "from",
  },
  {
    icon: Scissors,
    item: "Trousers Hem",
    price: "£8.00",
    note: "from",
  },
];

export function PricingPreviewSection() {
  return (
    <section className="bg-accent section-padding">
      <Container>
        <SectionHeader
          title="Transparent Pricing"
          subtitle="No hidden fees. See our most popular items below."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {previewItems.map((item) => (
            <div
              key={item.item}
              className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-neutral-medium-grey mb-1">{item.item}</p>
              <p className="text-2xl font-bold text-neutral-black">
                {item.price}
                <span className="text-sm font-normal text-neutral-medium-grey ml-1">
                  {item.note}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="primary" href="/pricing" icon={<ArrowRight className="w-5 h-5" />}>
            See Full Pricing
          </Button>
        </div>
      </Container>
    </section>
  );
}
