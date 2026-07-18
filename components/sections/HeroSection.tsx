"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { TrustBadgeRow } from "@/components/shared/TrustBadgeRow";
import { SITE_CONFIG } from "@/lib/constants/site";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils/helpers";
import { Phone, MessageCircle, ClipboardList, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <Container className="relative py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>Family-run since {SITE_CONFIG.establishedYear}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Dry Cleaning & Laundry in{" "}
              <span className="text-secondary">Hither Green</span> — Done Right
            </h1>

            <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              From everyday laundry to delicate garments, Manor Lane Dry Cleaners
              keeps South East London looking sharp. Collection available across 25+ locations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                variant="secondary"
                size="lg"
                href={getPhoneLink(SITE_CONFIG.phone)}
                icon={<Phone className="w-5 h-5" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href={getWhatsAppLink(SITE_CONFIG.whatsapp)}
                icon={<MessageCircle className="w-5 h-5" />}
                className="text-white border border-white/30 hover:bg-white hover:text-primary"
              >
                WhatsApp Us
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/quote"
                icon={<ClipboardList className="w-5 h-5" />}
                className="text-white border border-white/30 hover:bg-white hover:text-primary"
              >
                Request a Quote
              </Button>
            </div>

            <TrustBadgeRow />
          </div>

          {/* Hero image / visual */}
          <div className="hidden lg:block relative">
            <div className="relative bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
              <Image
                src="/images/hero.jpg"
                alt="Manor Lane Dry Cleaners — professional garment care in Hither Green, London"
                width={600}
                height={500}
                className="w-full h-auto rounded-xl object-cover object-top"
                priority
              />
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-black">Same Day</p>
                    <p className="text-xs text-neutral-medium-grey">Service Available</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-black">Free Collection</p>
                    <p className="text-xs text-neutral-medium-grey">Across SE London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
