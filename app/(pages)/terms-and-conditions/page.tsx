import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions | Manor Lane Dry Cleaners",
  description: "Terms and conditions for using our services.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions", href: "/terms-and-conditions" },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-card">
            <p className="text-sm text-neutral-medium-grey mb-8">
              Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  1. Acceptance of Terms
                </h2>
                <p className="text-neutral-dark-grey">
                  By using our website and services, you agree to these terms and conditions. If you do not agree, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  2. Services
                </h2>
                <p className="text-neutral-dark-grey">
                  Manor Lane Dry Cleaners provides dry cleaning, laundry, alterations, and related services. All services are subject to availability and our standard terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  3. Pricing and Payment
                </h2>
                <p className="text-neutral-dark-grey">
                  Prices are as displayed on our website or quoted at the time of service. Payment is due when collecting your items unless otherwise agreed. We accept cash and card payments.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  4. Collection and Delivery
                </h2>
                <p className="text-neutral-dark-grey">
                  Collection and delivery services are available within our service area. Please ensure someone is available at the agreed time. We are not liable for missed collections due to customer unavailability.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  5. Liability
                </h2>
                <p className="text-neutral-dark-grey">
                  We take every care with your garments. However, we are not liable for damage caused by defective garments, pre-existing damage, or items left beyond our recommended collection period (30 days).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  6. Governing Law
                </h2>
                <p className="text-neutral-dark-grey">
                  These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
