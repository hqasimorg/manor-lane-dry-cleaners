import Link from "next/link";
import { FOOTER_NAV } from "@/lib/constants/navigation";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants/site";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils/helpers";
import { Phone, MessageCircle, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-black text-white">
      {/* Main footer */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">ML</span>
              </div>
              <div>
                <span className="font-bold text-lg leading-tight block">
                  Manor Lane
                </span>
                <span className="text-sm text-neutral-medium-grey leading-tight block">
                  Dry Cleaners
                </span>
              </div>
            </div>
            <p className="text-neutral-medium-grey text-sm mb-6">
              Professional dry cleaning and laundry services in Hither Green, 
              London. Family-run since {SITE_CONFIG.establishedYear}.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2.5">
              {FOOTER_NAV.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-medium-grey hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2.5">
              {FOOTER_NAV.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-medium-grey hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getPhoneLink(SITE_CONFIG.phone)}
                  className="flex items-center gap-2 text-neutral-medium-grey hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink(SITE_CONFIG.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-medium-grey hover:text-white transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-neutral-medium-grey hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-neutral-medium-grey text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  {SITE_CONFIG.address.street}<br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.postcode}
                </span>
              </li>
              <li className="flex items-start gap-2 text-neutral-medium-grey text-sm">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Mon–Sat: 8:30am–6:30pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-medium-grey text-sm">
              &copy; {new Date().getFullYear()} Manor Lane Dry Cleaners. All rights reserved.
            </p>
            <p className="text-neutral-medium-grey text-sm">
              Made by{" "}
              <a
                href="https://echtsol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                ECHTSOL LTD
              </a>
            </p>
            <div className="flex items-center gap-6">
              {FOOTER_NAV.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-medium-grey hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
