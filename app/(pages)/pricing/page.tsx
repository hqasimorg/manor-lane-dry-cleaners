import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dry Cleaning Prices Hither Green | Manor Lane Dry Cleaners",
  description:
    "Transparent pricing for dry cleaning, laundry, and alterations in Hither Green, London. Competitive rates for residents and businesses.",
  alternates: {
    canonical: "/pricing",
  },
};

const pricingCategories = [
  {
    name: "Dry Cleaning",
    items: [
      { item: "Suit (2-piece)", price: "£12.50" },
      { item: "Suit (3-piece)", price: "£15.00" },
      { item: "Dress (short)", price: "£10.00" },
      { item: "Dress (long)", price: "£14.00" },
      { item: "Coat / Jacket", price: "£10.00" },
      { item: "Blouse / Shirt", price: "£5.50" },
      { item: "Trousers", price: "£6.50" },
      { item: "Skirt", price: "£6.00" },
      { item: "Tie", price: "£4.00" },
      { item: "Wedding Dress", price: "£85.00" },
    ],
  },
  {
    name: "Laundry",
    items: [
      { item: "Shirt (wash & iron)", price: "£2.50" },
      { item: "T-shirt", price: "£2.00" },
      { item: "Jeans", price: "£3.50" },
      { item: "Bed Sheet (single)", price: "£4.00" },
      { item: "Bed Sheet (double)", price: "£5.50" },
      { item: "Bed Sheet (king)", price: "£7.00" },
      { item: "Pillowcase (pair)", price: "£3.00" },
      { item: "Towel (bath)", price: "£3.50" },
      { item: "Towel (hand)", price: "£2.00" },
    ],
  },
  {
    name: "Alterations",
    items: [
      { item: "Trousers hem", price: "£8.00" },
      { item: "Dress hem", price: "£12.00" },
      { item: "Sleeve shortening", price: "£10.00" },
      { item: "Waist adjustment", price: "£12.00" },
      { item: "Zip replacement", price: "£8.00" },
      { item: "Button replacement", price: "£2.00" },
      { item: "Patch repair", price: "£6.00" },
      { item: "Curtain alterations", price: "£15.00" },
    ],
  },
  {
    name: "Bedding",
    items: [
      { item: "Single duvet", price: "£18.00" },
      { item: "Double duvet", price: "£24.00" },
      { item: "King duvet", price: "£30.00" },
      { item: "Super king duvet", price: "£36.00" },
      { item: "Single pillow (pair)", price: "£8.00" },
      { item: "Double pillow (pair)", price: "£10.00" },
      { item: "King pillow (pair)", price: "£12.00" },
      { item: "Blanket (single)", price: "£12.00" },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Transparent Pricing"
        subtitle="No hidden fees. See our rates below."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="max-w-4xl mx-auto">
            {pricingCategories.map((category) => (
              <div key={category.name} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-neutral-black mb-6 pb-3 border-b-2 border-primary">
                  {category.name}
                </h2>
                <div className="bg-white rounded-lg shadow-card overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-accent">
                      <tr>
                        <th className="text-left px-6 py-3 text-sm font-semibold text-neutral-dark-grey">
                          Item
                        </th>
                        <th className="text-right px-6 py-3 text-sm font-semibold text-neutral-dark-grey w-32">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, index) => (
                        <tr
                          key={item.item}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-neutral-off-white/50"
                          }
                        >
                          <td className="px-6 py-3 text-neutral-dark-grey">
                            {item.item}
                          </td>
                          <td className="px-6 py-3 text-right font-semibold text-primary">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            <div className="bg-accent rounded-lg p-6 mt-8">
              <p className="text-sm text-neutral-dark-grey">
                <strong>Note:</strong> Prices shown are starting rates. Final pricing may
                vary based on fabric type, condition, and any special requirements.
                We always provide a quote before starting work. For commercial
                enquiries, please{" "}
                <a href="/commercial-laundry" className="text-primary hover:underline">
                  contact our business team
                </a>.
              </p>
            </div>

            <div className="text-center mt-10">
              <Button variant="primary" size="lg" href="/quote" icon={<ArrowRight className="w-5 h-5" />}>
                Request a Custom Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Business pricing available"
        subtitle="We offer competitive rates for regular commercial laundry. Get in touch for a tailored quote."
      />
    </>
  );
}
