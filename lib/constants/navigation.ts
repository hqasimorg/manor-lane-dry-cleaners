import { NavItem } from "@/types";

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Dry Cleaning", href: "/services/dry-cleaning" },
      { label: "Laundry Service", href: "/services/laundry-service" },
      { label: "Wash & Iron", href: "/services/wash-and-iron" },
      { label: "Alterations", href: "/services/alterations" },
      { label: "Duvet & Bedding", href: "/services/duvet-bedding-cleaning" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Commercial", href: "/commercial-laundry" },
  { label: "About", href: "/about" },
  { label: "Areas", href: "/areas-we-cover" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  services: [
    { label: "Dry Cleaning", href: "/services/dry-cleaning" },
    { label: "Laundry Service", href: "/services/laundry-service" },
    { label: "Wash & Iron", href: "/services/wash-and-iron" },
    { label: "Alterations", href: "/services/alterations" },
    { label: "Duvet & Bedding", href: "/services/duvet-bedding-cleaning" },
    { label: "Commercial Laundry", href: "/commercial-laundry" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Areas We Cover", href: "/areas-we-cover" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
