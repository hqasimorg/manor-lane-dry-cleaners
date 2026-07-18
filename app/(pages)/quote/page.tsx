import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { Clock, Truck, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";
import { getPhoneLink } from "@/lib/utils/helpers";

export const metadata: Metadata = {
  title: "Request a Quote | Manor Lane Dry Cleaners, Hither Green",
  description:
    "Get a quote for dry cleaning, laundry, alterations, or duvet cleaning in Hither Green, London. Fill in the form and we'll get back to you within 24 hours.",
  alternates: {
    canonical: "/quote",
  },
};

const reassurances = [
  {
    icon: Clock,
    title: "Reply within 24 hours",
    description: "We'll get back to you with a price by the next working day.",
  },
  {
    icon: Truck,
    title: "Free collection available",
    description: "We collect and deliver across South East London at no extra cost.",
  },
  {
    icon: Phone,
    title: "Prefer to call?",
    description: `Ring us on ${SITE_CONFIG.phone} and we'll sort it straight away.`,
    href: getPhoneLink(SITE_CONFIG.phone),
  },
];

export default function QuotePage() {
  return (
    <>
      <PageHeader
        title="Request a Quote"
        subtitle="Tell us what you need and we'll come back to you with a price"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request a Quote", href: "/quote" },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {reassurances.map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-6 shadow-card">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-neutral-black mb-1">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-neutral-dark-grey hover:text-primary transition-colors">
                      {item.description}
                    </a>
                  ) : (
                    <p className="text-sm text-neutral-dark-grey">{item.description}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-card">
                <h2 className="text-2xl font-bold text-neutral-black mb-2">
                  Quote Request Form
                </h2>
                <p className="text-neutral-dark-grey mb-8">
                  Fill in the details below and we'll prepare your quote. The more detail you give us, the more accurate the price.
                </p>
                <QuoteRequestForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Need it urgently?"
        subtitle="Call or WhatsApp us directly for a same-day response."
      />
    </>
  );
}
