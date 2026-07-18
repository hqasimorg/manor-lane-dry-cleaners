"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { MAIN_NAV } from "@/lib/constants/navigation";
import { SITE_CONFIG } from "@/lib/constants/site";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils/helpers";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white"
      )}
    >
      {/* Top bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a
              href={getPhoneLink(SITE_CONFIG.phone)}
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{SITE_CONFIG.phone}</span>
            </a>
            <span className="text-primary-light hidden sm:inline">|</span>
            <span className="hidden sm:inline">Mon–Sat: 8:30am–6:30pm</span>
          </div>
          <a
            href={getWhatsAppLink(SITE_CONFIG.whatsapp)}
            className="flex items-center gap-1.5 hover:text-whatsapp transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">ML</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-neutral-black leading-tight block">
                Manor Lane
              </span>
              <span className="text-xs text-neutral-medium-grey leading-tight block">
                Dry Cleaners
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-dark-grey hover:text-primary transition-colors rounded-md hover:bg-accent"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-neutral-light-grey py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-neutral-dark-grey hover:text-primary hover:bg-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href={getPhoneLink(SITE_CONFIG.phone)}
              icon={<Phone className="w-5 h-5" />}
            >
              Call Now
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="/quote"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-dark-grey hover:text-primary"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-light-grey">
          <div className="max-w-container mx-auto px-4 py-4 space-y-1">
            {MAIN_NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-neutral-dark-grey hover:text-primary hover:bg-accent rounded-md transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-neutral-medium-grey hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <Button
                variant="outline"
                className="w-full"
                href={getPhoneLink(SITE_CONFIG.phone)}
                icon={<Phone className="w-5 h-5" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
              <Button
                variant="whatsapp"
                className="w-full"
                href={getWhatsAppLink(SITE_CONFIG.whatsapp)}
                icon={<MessageCircle className="w-5 h-5" />}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
