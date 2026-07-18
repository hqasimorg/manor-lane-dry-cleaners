import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const faqItems = [
  {
    id: "faq-1",
    question: "How long does dry cleaning take?",
    answer: (
      <p>
        Most items are ready within 48 hours. Same-day service is available for
        urgent requests — just call ahead.
      </p>
    ),
  },
  {
    id: "faq-2",
    question: "Do you offer collection and delivery?",
    answer: (
      <p>
        Yes, we offer free collection and delivery across South East London.
        Contact us to arrange a time that suits you.
      </p>
    ),
  },
  {
    id: "faq-3",
    question: "How much does dry cleaning cost?",
    answer: (
      <p>
        Prices vary by item. A suit typically starts from £12.50, and a dress
        from £10.00. See our{" "}
        <Link href="/pricing" className="text-primary hover:underline">
          pricing page
        </Link>{" "}
        for full details.
      </p>
    ),
  },
];

export function FAQTeaserSection() {
  return (
    <section className="bg-neutral-off-white section-padding">
      <Container>
        <SectionHeader
          title="Common Questions"
          subtitle="Quick answers to the things people ask most."
        />

        <div className="max-w-3xl mx-auto mt-12">
          <Accordion items={faqItems} />
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" href="/faq" icon={<ArrowRight className="w-5 h-5" />}>
            View All FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}
