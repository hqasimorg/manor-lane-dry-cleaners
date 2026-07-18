import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABanner } from "@/components/shared/CTABanner";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Dry Cleaners London & Surrounding Areas | Manor Lane",
  description:
    "We provide dry cleaning and laundry services across South East London and nearby areas. Check if we cover your neighbourhood.",
  alternates: {
    canonical: "/areas-we-cover",
  },
};

const areas = [
  { name: "Hither Green", collection: true },
  { name: "Lee", collection: true },
  { name: "Grove Park", collection: true },
  { name: "Brockley", collection: true },
  { name: "Eltham", collection: true },
  { name: "Chislehurst", collection: true },
  { name: "Sidcup", collection: true },
  { name: "Bromley", collection: true },
  { name: "Bexley", collection: true },
  { name: "Lewisham", collection: true },
  { name: "New Cross", collection: true },
  { name: "Catford", collection: true },
  { name: "Deptford", collection: true },
  { name: "Greenwich", collection: true },
  { name: "Woolwich", collection: true },
  { name: "Blackheath", collection: true },
  { name: "Charlton", collection: true },
  { name: "Kidbrooke", collection: true },
  { name: "Forest Hill", collection: true },
  { name: "Bermondsey", collection: true },
  { name: "Camberwell", collection: true },
  { name: "Dulwich", collection: true },
  { name: "Penge", collection: true },
  { name: "Sydenham", collection: true },
  { name: "Crystal Palace", collection: true },
  { name: "Norwood", collection: true },
];

export default function AreasPage() {
  return (
    <>
      <PageHeader
        title="Areas We Cover"
        subtitle="We provide dry cleaning and laundry services across South East London and nearby areas."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas We Cover", href: "/areas-we-cover" },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <SectionHeader
            title="Serving South East London"
            subtitle="Free collection and delivery available in all areas marked below."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
            {areas.map((area) => (
              <div
                key={area.name}
                className="bg-white rounded-lg p-4 shadow-card flex items-center gap-3"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-black text-sm">
                    {area.name}
                  </p>
                  {area.collection && (
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      Collection
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Check if we cover your area"
        subtitle="Not sure if we serve your neighbourhood? Get in touch and we'll confirm."
      />
    </>
  );
}
