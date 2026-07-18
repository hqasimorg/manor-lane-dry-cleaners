import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Manor Lane Dry Cleaners, Hither Green",
  description:
    "Get in touch with Manor Lane Dry Cleaners. Call, WhatsApp, or send us a message. We're based in Hither Green, SE12.",
  alternates: {
    canonical: "/contact",
  },
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.postcode}`,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat 8:30am–6:30pm · Sun Closed",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-black mb-6">
                Get in Touch
              </h2>
              <p className="text-neutral-dark-grey mb-8">
                We're here to help. Call us, drop us an email, or fill in the
                form and we'll get back to you within 24 hours.
              </p>

              <ul className="space-y-6 mb-10">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-medium-grey mb-0.5">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-neutral-black hover:text-primary transition-colors font-medium"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-neutral-black font-medium">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <MapEmbed />
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-black mb-6">
                Send us a Message
              </h2>
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-card">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Prefer to call?"
        subtitle="We're available Monday to Saturday. Give us a ring and we'll sort everything out."
      />
    </>
  );
}
