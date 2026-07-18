import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Dry Cleaners Hither Green | Manor Lane Dry Cleaners",
    template: "%s | Manor Lane Dry Cleaners, Hither Green",
  },
  description:
    "Professional dry cleaning and laundry services in Hither Green, London. Family-run, reliable, and local. Call or WhatsApp for a quote.",
  keywords: [
    "dry cleaners",
    "laundry service",
    "dry cleaning",
    "Hither Green",
    "London",
    "SE12",
    "alterations",
    "duvet cleaning",
    "commercial laundry",
  ],
  authors: [{ name: "Manor Lane Dry Cleaners" }],
  creator: "Manor Lane Dry Cleaners",
  metadataBase: new URL("https://www.manorlanedrycleaners.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.manorlanedrycleaners.co.uk",
    siteName: "Manor Lane Dry Cleaners",
    title: "Dry Cleaners Hither Green | Manor Lane Dry Cleaners",
    description:
      "Professional dry cleaning and laundry services in Hither Green, London. Family-run, reliable, and local.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dry Cleaners Hither Green | Manor Lane Dry Cleaners",
    description:
      "Professional dry cleaning and laundry services in Hither Green, London. Family-run, reliable, and local.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Manor Lane Dry Cleaners",
              image: "https://www.manorlanedrycleaners.co.uk/logo.png",
              "@id": "https://www.manorlanedrycleaners.co.uk",
              url: "https://www.manorlanedrycleaners.co.uk",
              telephone: SITE_CONFIG.phone,
              email: SITE_CONFIG.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE_CONFIG.address.street,
                addressLocality: SITE_CONFIG.address.city,
                addressRegion: "England",
                postalCode: SITE_CONFIG.address.postcode,
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: SITE_CONFIG.coordinates.lat,
                longitude: SITE_CONFIG.coordinates.lng,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:30",
                  closes: "18:30",
                },
              ],
              priceRange: "££",
              areaServed: {
                "@type": "City",
                name: "London",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-neutral-off-white`}>
        <Header />
        <main className="min-h-screen pt-[104px]">{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
