import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { Accordion } from "@/components/ui/Accordion";
import { SITE_CONFIG } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "FAQ | Manor Lane Dry Cleaners, Hither Green",
  description:
    "Frequently asked questions about our dry cleaning and laundry services in Hither Green, London. Turnaround times, pricing, collection, and more.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    category: "Turnaround & Collection",
    items: [
      {
        id: "faq-turnaround",
        question: "How long does dry cleaning take?",
        answer: (
          <p>
            Most items are ready within 48 hours. Same-day service is available
            for urgent requests — call us before 10am and we'll do our best.
          </p>
        ),
      },
      {
        id: "faq-collection",
        question: "Do you offer collection and delivery?",
        answer: (
          <p>
            Yes. We offer free collection and delivery across South East London,
            including Hither Green, Lee, Grove Park, Lewisham, Greenwich, and
            surrounding areas. Contact us to arrange a convenient time.
          </p>
        ),
      },
      {
        id: "faq-hours",
        question: "What are your opening hours?",
        answer: (
          <p>
            We're open Monday to Saturday 8:30am–6:30pm. We're closed on
            Sundays. You can also reach us by phone or WhatsApp at{" "}
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="text-primary hover:underline"
            >
              {SITE_CONFIG.phone}
            </a>
            .
          </p>
        ),
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        id: "faq-pricing",
        question: "How much does dry cleaning cost?",
        answer: (
          <p>
            Prices vary by item. A 2-piece suit starts from £12.50, a dress
            from £10.00, and a single duvet from £18.00. See our full{" "}
            <Link href="/pricing" className="text-primary hover:underline">
              pricing page
            </Link>{" "}
            for a complete list.
          </p>
        ),
      },
      {
        id: "faq-hidden-fees",
        question: "Are there any hidden fees?",
        answer: (
          <p>
            No. We tell you the price before we start work. If we spot anything
            unusual with a garment that might affect the cost, we'll call you
            first.
          </p>
        ),
      },
      {
        id: "faq-commercial-pricing",
        question: "Do you offer discounts for regular or bulk orders?",
        answer: (
          <p>
            Yes — we offer volume pricing for commercial customers and regular
            domestic clients. Visit our{" "}
            <Link
              href="/commercial-laundry"
              className="text-primary hover:underline"
            >
              commercial laundry page
            </Link>{" "}
            or get in touch for a custom quote.
          </p>
        ),
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        id: "faq-what-items",
        question: "What items do you clean?",
        answer: (
          <p>
            We clean suits, dresses, coats, shirts, bedding, duvets, curtains,
            and more. We also offer alterations and repairs. If you're unsure
            about a specific item, just call and we'll advise.
          </p>
        ),
      },
      {
        id: "faq-stains",
        question: "Can you remove stains?",
        answer: (
          <p>
            We treat stains as part of our standard dry cleaning process. Most
            common stains — wine, grease, ink, food — respond well to
            professional treatment. We can't guarantee removal of every stain,
            especially old or set-in ones, but we'll always tell you upfront
            what to expect.
          </p>
        ),
      },
      {
        id: "faq-delicates",
        question: "Do you handle delicate or designer garments?",
        answer: (
          <p>
            Yes. We regularly clean silk, cashmere, wool, and designer pieces.
            Each item is inspected before cleaning and handled according to its
            care label and fabric requirements.
          </p>
        ),
      },
      {
        id: "faq-alterations",
        question: "Do you do alterations and repairs?",
        answer: (
          <p>
            Yes — hemming, zip replacements, button repairs, resizing, and
            more. Bring the item in and we'll give you a quote before any work
            starts. See our{" "}
            <Link
              href="/services/alterations"
              className="text-primary hover:underline"
            >
              alterations page
            </Link>{" "}
            for details.
          </p>
        ),
      },
    ],
  },
  {
    category: "Practical",
    items: [
      {
        id: "faq-garment-care",
        question: "How should I prepare my items for drop-off?",
        answer: (
          <p>
            Just bring them in as they are — no need to do anything special.
            Let us know about any stains you're concerned about so we can give
            them priority attention.
          </p>
        ),
      },
      {
        id: "faq-payment",
        question: "What payment methods do you accept?",
        answer: (
          <p>
            We accept cash and card payments in-store. For commercial accounts,
            we can arrange invoicing.
          </p>
        ),
      },
      {
        id: "faq-lost-item",
        question: "What if something goes wrong with my garment?",
        answer: (
          <p>
            We take great care with every item and are fully insured. If there's
            ever an issue, speak to us directly and we'll work to resolve it
            fairly and promptly.
          </p>
        ),
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does dry cleaning take?",
      acceptedAnswer: { "@type": "Answer", text: "Most items are ready within 48 hours. Same-day service is available for urgent requests — call us before 10am and we'll do our best." },
    },
    {
      "@type": "Question",
      name: "Do you offer collection and delivery?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We offer free collection and delivery across South East London, including Hither Green, Lee, Grove Park, Lewisham, Greenwich, and surrounding areas. Contact us to arrange a convenient time." },
    },
    {
      "@type": "Question",
      name: "What are your opening hours?",
      acceptedAnswer: { "@type": "Answer", text: "We're open Monday to Saturday 8:30am–6:30pm. We're closed on Sundays." },
    },
    {
      "@type": "Question",
      name: "How much does dry cleaning cost?",
      acceptedAnswer: { "@type": "Answer", text: "Prices vary by item. A 2-piece suit starts from £12.50, a dress from £10.00, and a single duvet from £18.00. See our full pricing page for a complete list." },
    },
    {
      "@type": "Question",
      name: "Are there any hidden fees?",
      acceptedAnswer: { "@type": "Answer", text: "No. We tell you the price before we start work. If we spot anything unusual with a garment that might affect the cost, we'll call you first." },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for regular or bulk orders?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — we offer volume pricing for commercial customers and regular domestic clients. Visit our commercial laundry page or get in touch for a custom quote." },
    },
    {
      "@type": "Question",
      name: "What items do you clean?",
      acceptedAnswer: { "@type": "Answer", text: "We clean suits, dresses, coats, shirts, bedding, duvets, curtains, and more. We also offer alterations and repairs. If you're unsure about a specific item, just call and we'll advise." },
    },
    {
      "@type": "Question",
      name: "Can you remove stains?",
      acceptedAnswer: { "@type": "Answer", text: "We treat stains as part of our standard dry cleaning process. Most common stains — wine, grease, ink, food — respond well to professional treatment. We can't guarantee removal of every stain, especially old or set-in ones, but we'll always tell you upfront what to expect." },
    },
    {
      "@type": "Question",
      name: "Do you handle delicate or designer garments?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We regularly clean silk, cashmere, wool, and designer pieces. Each item is inspected before cleaning and handled according to its care label and fabric requirements." },
    },
    {
      "@type": "Question",
      name: "Do you do alterations and repairs?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — hemming, zip replacements, button repairs, resizing, and more. Bring the item in and we'll give you a quote before any work starts." },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: { "@type": "Answer", text: "We accept cash and card payments in-store. For commercial accounts, we can arrange invoicing." },
    },
    {
      "@type": "Question",
      name: "What if something goes wrong with my garment?",
      acceptedAnswer: { "@type": "Answer", text: "We take great care with every item and are fully insured. If there's ever an issue, speak to us directly and we'll work to resolve it fairly and promptly." },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {faqs.map((group) => (
              <div key={group.category}>
                <h2 className="text-xl font-bold text-neutral-black mb-6 pb-3 border-b border-neutral-light-grey">
                  {group.category}
                </h2>
                <Accordion items={group.items} allowMultiple />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Still have a question?"
        subtitle="Call or WhatsApp us and we'll answer straight away."
      />
    </>
  );
}
