import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Cookie Policy | Manor Lane Dry Cleaners",
  description: "How we use cookies on our website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CookiePage() {
  return (
    <>
      <PageHeader
        title="Cookie Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy", href: "/cookie-policy" },
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
                  What Are Cookies
                </h2>
                <p className="text-neutral-dark-grey">
                  Cookies are small text files that are placed on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  How We Use Cookies
                </h2>
                <p className="text-neutral-dark-grey mb-2">
                  We use the following types of cookies:
                </p>
                <ul className="list-disc list-inside text-neutral-dark-grey space-y-1">
                  <li><strong>Essential cookies:</strong> Required for the website to function properly.</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website (via Google Analytics).</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  Managing Cookies
                </h2>
                <p className="text-neutral-dark-grey">
                  You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-black mb-3">
                  Third-Party Cookies
                </h2>
                <p className="text-neutral-dark-grey">
                  We use Google Analytics to collect anonymous usage data. This helps us improve our website and services. Google Analytics cookies do not collect personal information.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
