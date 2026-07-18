import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants/site";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils/helpers";
import { Phone, MessageCircle, ClipboardList } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "dark";
}

export function CTABanner({
  title = "Ready for fresh clothes?",
  subtitle = "Call, WhatsApp, or request a quote. We'll take care of the rest.",
  variant = "default",
}: CTABannerProps) {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "bg-neutral-black" : "bg-primary"}>
      <Container className="py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/80 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              href={getPhoneLink(SITE_CONFIG.phone)}
              icon={<Phone className="w-5 h-5" />}
            >
              Call {SITE_CONFIG.phone}
            </Button>
            <Button
              variant={isDark ? "outline" : "ghost"}
              size="lg"
              href={getWhatsAppLink(SITE_CONFIG.whatsapp)}
              icon={<MessageCircle className="w-5 h-5" />}
              className={!isDark ? "text-white border-white hover:bg-white hover:text-primary" : ""}
            >
              WhatsApp Us
            </Button>
            <Button
              variant={isDark ? "outline" : "ghost"}
              size="lg"
              href="/quote"
              icon={<ClipboardList className="w-5 h-5" />}
              className={!isDark ? "text-white border-white hover:bg-white hover:text-primary" : ""}
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
