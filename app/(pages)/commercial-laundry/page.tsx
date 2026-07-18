import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { CommercialEnquiryForm } from "@/components/forms/CommercialEnquiryForm";
import { Building2, Shirt, Clock, Truck, PoundSterling, HeartHandshake, BedDouble, UtensilsCrossed, Scissors, Briefcase, Cross } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Laundry London | Manor Lane Dry Cleaners",
  description:
    "Professional commercial laundry and dry cleaning for London businesses. Hotels, restaurants, salons, and offices — regular collections across South East London.",
  alternates: {
    canonical: "/commercial-laundry",
  },
};

const sectors = [
  { icon: BedDouble, label: "Hotels & B&Bs" },
  { icon: Building2, label: "Airbnb Hosts" },
  { icon: UtensilsCrossed, label: "Restaurants & Cafés" },
  { icon: Scissors, label: "Salons & Spas" },
  { icon: Briefcase, label: "Offices" },
  { icon: Cross, label: "Healthcare" },
];

const benefits = [
  {
    icon: Clock,
    title: "Reliable Turnaround",
    description: "Consistent 48-hour turnaround so your business never runs short of fresh linen or uniforms.",
  },
  {
    icon: Truck,
    title: "Free Collection & Delivery",
    description: "We collect and deliver across South East London. No logistics overhead for your team.",
  },
  {
    icon: PoundSterling,
    title: "Volume Pricing",
    description: "Competitive rates that scale with your volume. Get a custom quote based on your needs.",
  },
  {
    icon: Shirt,
    title: "Full Range of Services",
    description: "Dry cleaning, laundry, linen, uniforms, and specialist garment care — all in one place.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Account Manager",
    description: "A named point of contact who knows your business and your requirements.",
  },
  {
    icon: Building2,
    title: "Flexible Scheduling",
    description: "Daily, weekly, or on-demand collections — scheduled around your operation.",
  },
];

export default function CommercialLaundryPage() {
  return (
    <>
      <PageHeader
        title="Commercial Laundry"
        subtitle="Professional laundry and dry cleaning for London businesses"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Commercial Laundry", href: "/commercial-laundry" },
        ]}
      />

      {/* Intro */}
      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-black mb-6">
                Laundry sorted. Business running.
              </h2>
              <p className="text-neutral-dark-grey mb-4">
                Manor Lane Dry Cleaners partners with South East London businesses that need
                reliable, high-quality laundry and dry cleaning on a regular basis. From hotel
                linen to restaurant uniforms, we handle the load so you can focus on your customers.
              </p>
              <p className="text-neutral-dark-grey mb-4">
                We work with hotels, Airbnb hosts, restaurants, salons, and offices across
                Hither Green, Lee, Lewisham, Greenwich, and the wider SE London area.
              </p>
              <p className="text-neutral-dark-grey">
                Every account gets flexible scheduling, transparent pricing, and the same
                attention to quality we give every customer — at commercial scale.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-card">
              <h3 className="text-lg font-semibold text-neutral-black mb-6">
                Sectors we work with
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {sectors.map((sector) => (
                  <li
                    key={sector.label}
                    className="flex items-center gap-3 bg-accent rounded-lg px-4 py-3"
                  >
                    <sector.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-neutral-dark-grey">
                      {sector.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white section-padding">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-black mb-4">
              Why businesses choose us
            </h2>
            <p className="text-neutral-dark-grey max-w-2xl mx-auto">
              We've built our commercial service around what businesses actually need — consistency,
              convenience, and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-neutral-off-white rounded-lg p-6"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-dark-grey">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enquiry form */}
      <section className="bg-accent section-padding">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-neutral-black mb-4">
                Get a Commercial Quote
              </h2>
              <p className="text-neutral-dark-grey">
                Fill in the form below and our business team will get back to you within 24 hours
                with a tailored quote.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-10 shadow-card">
              <CommercialEnquiryForm />
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Rather talk it through?"
        subtitle="Call us and we'll work out the right arrangement for your business."
      />
    </>
  );
}
