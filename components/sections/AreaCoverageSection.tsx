import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowRight } from "lucide-react";

const areas = [
  "Hither Green", "Lee", "Grove Park", "Eltham", "Chislehurst",
  "Sidcup", "Bromley", "Bexley", "Lewisham", "New Cross",
  "Catford", "Deptford", "Greenwich", "Woolwich", "Blackheath",
];

export function AreaCoverageSection() {
  return (
    <section className="bg-primary section-padding">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Serving South East London
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We provide dry cleaning and laundry services across 25+ locations in South East London.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3 text-white"
            >
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="text-sm font-medium">{area}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            href="/areas-we-cover"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            See All Areas
          </Button>
        </div>
      </Container>
    </section>
  );
}
