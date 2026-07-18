import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { AreaCoverageSection } from "@/components/sections/AreaCoverageSection";
import { FAQTeaserSection } from "@/components/sections/FAQTeaserSection";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Dry Cleaners Hither Green | Manor Lane Dry Cleaners",
  description:
    "Professional dry cleaning and laundry services in Hither Green, London. Family-run, reliable, and local. Call or WhatsApp for a quote.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <HowItWorksSection />
      <PricingPreviewSection />
      <TestimonialSection />
      <AreaCoverageSection />
      <FAQTeaserSection />
      <CTABanner />
    </>
  );
}
