import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Manor Lane Dry Cleaners",
  description: "How we collect, use, and protect your personal data.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
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
                  1. Introduction
                </h2>
                <p className="text-neutral-dark-grey">
                  Manor Lane Dry Cleaners ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our website and services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  2. Information We Collect
                </h2>
                <p className="text-neutral-dark-grey mb-2">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside text-neutral-dark-grey space-y-1">
                  <li>Name and contact details (email, phone)</li>
                  <li>Address (for collection and delivery services)</li>
                  <li>Service preferences and requirements</li>
                  <li>Website usage data (via cookies and analytics)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  3. How We Use Your Information
                </h2>
                <p className="text-neutral-dark-grey mb-2">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-neutral-dark-grey space-y-1">
                  <li>Provide our dry cleaning and laundry services</li>
                  <li>Communicate with you about your orders</li>
                  <li>Process payments and invoices</li>
                  <li>Improve our website and services</li>
                  <li>Send promotional communications (with your consent)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  4. Data Protection
                </h2>
                <p className="text-neutral-dark-grey">
                  We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  5. Your Rights
                </h2>
                <p className="text-neutral-dark-grey mb-2">
                  Under UK data protection law, you have the right to:
                </p>
                <ul className="list-disc list-inside text-neutral-dark-grey space-y-1">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request restriction of processing</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  6. Contact Us
                </h2>
                <p className="text-neutral-dark-grey">
                  If you have any questions about this privacy policy or our data practices, please contact us at{" "}
                  <a href="mailto:manorlane.drycleaners176@gmail.com" className="text-primary hover:underline">
                    manorlane.drycleaners176@gmail.com
                  </a>{" "}
                  or call us on 020 8297 1411.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
