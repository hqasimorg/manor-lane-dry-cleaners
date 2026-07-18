import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, CheckCircle } from "lucide-react";

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

const serviceData: Record<string, {
  title: string;
  description: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
}> = {
  "dry-cleaning": {
    title: "Dry Cleaning",
    description: "Professional solvent-based cleaning for delicate and structured garments. Suits, dresses, coats, and more — treated with expert care.",
    features: [
      "Suits, dresses, coats, and jackets",
      "Delicate fabrics and designer garments",
      "Wedding dress cleaning",
      "Stain treatment and removal",
      "48-hour standard turnaround",
      "Same-day service available",
    ],
    process: [
      { step: 1, title: "Inspection", description: "We inspect every garment for stains, damage, and fabric type." },
      { step: 2, title: "Pre-treatment", description: "Stains are treated with specialist solutions before cleaning." },
      { step: 3, title: "Cleaning", description: "Garments are cleaned using professional dry cleaning solvents." },
      { step: 4, title: "Finishing", description: "Pressed, steamed, and packaged ready for collection." },
    ],
  },
  "shirt-service": {
    title: "Shirt Service",
    description: "Relax and let us handle it. Our shirt service ensures every shirt comes back crisp, clean, and perfectly pressed — ready to wear straight from the hanger.",
    features: [
      "Dress shirts and business shirts",
      "Casual and linen shirts",
      "Machine or hand wash depending on fabric",
      "Professional pressing and finishing",
      "Hung or folded to your preference",
      "Same-day service available",
    ],
    process: [
      { step: 1, title: "Drop Off", description: "Bring in your shirts or arrange a collection." },
      { step: 2, title: "Wash", description: "Each shirt is washed at the correct temperature for its fabric." },
      { step: 3, title: "Press", description: "Professionally pressed to a crisp, wrinkle-free finish." },
      { step: 4, title: "Ready", description: "Hung and ready for collection within 24–48 hours." },
    ],
  },
  "laundry-service": {
    title: "Laundry Service",
    description: "Just stop by and drop off your laundry. We wash, dry, and fold everything — perfect for busy households who want fresh clothes without the hassle.",
    features: [
      "Wash, dry, and fold service",
      "Everyday clothing and household items",
      "Bulk laundry for families",
      "Student laundry packages",
      "48-hour turnaround",
      "Free collection available",
    ],
    process: [
      { step: 1, title: "Drop Off", description: "Bring your laundry in or arrange a collection from your door." },
      { step: 2, title: "Sorting", description: "Items sorted by colour, fabric, and wash requirements." },
      { step: 3, title: "Washing", description: "Professional machines with quality detergents." },
      { step: 4, title: "Fold & Return", description: "Fresh, folded, and ready for collection or delivery." },
    ],
  },
  "ironing-service": {
    title: "Ironing Service",
    description: "We'll iron away your clothes' creases. Our professional ironing service leaves every item smooth, sharp, and ready to wear — without you lifting a finger.",
    features: [
      "Shirts, blouses, and trousers",
      "Dresses and skirts",
      "Bed linen and tablecloths",
      "Bulk ironing for households",
      "Professional steam finishing",
      "Hung or folded to preference",
    ],
    process: [
      { step: 1, title: "Drop Off", description: "Drop off your items or request a collection." },
      { step: 2, title: "Sorting", description: "Items sorted by fabric type and ironing requirements." },
      { step: 3, title: "Ironing", description: "Each item pressed by hand with professional steam irons." },
      { step: 4, title: "Return", description: "Neatly hung or folded and ready within 24 hours." },
    ],
  },
  "alterations-repairs": {
    title: "Alterations & Repairs",
    description: "Don't toss it — repair or alter it. Our skilled tailors handle everything from hemming and resizing to zip replacements and patch repairs.",
    features: [
      "Hemming trousers, dresses, and skirts",
      "Waist and size adjustments",
      "Zip and button replacements",
      "Patch repairs and invisible mending",
      "Sleeve shortening",
      "Curtain and household alterations",
    ],
    process: [
      { step: 1, title: "Assessment", description: "Free assessment of your alteration needs in store." },
      { step: 2, title: "Quote", description: "Clear pricing before any work begins — no surprises." },
      { step: 3, title: "Alteration", description: "Expert hand or machine work by our skilled tailors." },
      { step: 4, title: "Fitting", description: "Collect and try on — we'll adjust if needed." },
    ],
  },
  "wedding-dress-cleaning": {
    title: "Wedding Dress Cleaning",
    description: "Choose Manor Lane for your wedding dress care. We treat every wedding dress with the reverence it deserves — expert cleaning and optional preservation.",
    features: [
      "All fabrics including silk, lace, and satin",
      "Specialist stain treatment",
      "Careful hand finishing",
      "Preservation boxing available",
      "Free inspection before cleaning",
      "Fully insured handling",
    ],
    process: [
      { step: 1, title: "Inspection", description: "Detailed inspection for stains, fabric type, and damage." },
      { step: 2, title: "Pre-treatment", description: "Specialist stain treatment on problem areas." },
      { step: 3, title: "Gentle Clean", description: "Careful cleaning using fabric-appropriate methods." },
      { step: 4, title: "Finish & Box", description: "Pressed, steamed, and optionally preservation boxed." },
    ],
  },
  "natives-cleaning": {
    title: "Natives Cleaning",
    description: "Preserving heritage, one garment at a time. We provide specialist cleaning for traditional and cultural garments, treating each piece with the care and respect it deserves.",
    features: [
      "Traditional and cultural garments",
      "Embroidered and beaded items",
      "Delicate hand-woven fabrics",
      "Heritage textiles and heirlooms",
      "Careful hand cleaning where required",
      "Fully inspected before and after",
    ],
    process: [
      { step: 1, title: "Consultation", description: "We discuss your garment's fabric, history, and care needs." },
      { step: 2, title: "Inspection", description: "Thorough inspection before any cleaning begins." },
      { step: 3, title: "Specialist Clean", description: "Hand or solvent cleaning appropriate to the fabric." },
      { step: 4, title: "Careful Return", description: "Packaged with care to preserve the garment's integrity." },
    ],
  },
  "upholstery-cleaning": {
    title: "Upholstery Cleaning",
    description: "Clean sofa, happy life. Our professional upholstery cleaning service freshens up your furniture, removing stains, odours, and allergens from sofas, chairs, and more.",
    features: [
      "Sofas and armchairs",
      "Dining chairs and ottomans",
      "Stain and odour removal",
      "Allergen treatment",
      "Fabric and leather upholstery",
      "In-store or collection service",
    ],
    process: [
      { step: 1, title: "Assessment", description: "We assess the fabric type and condition of your upholstery." },
      { step: 2, title: "Pre-treatment", description: "Stains and problem areas treated before main cleaning." },
      { step: 3, title: "Deep Clean", description: "Professional cleaning to remove dirt, stains, and allergens." },
      { step: 4, title: "Dry & Return", description: "Thoroughly dried and returned fresh and clean." },
    ],
  },
  "rug-cleaning": {
    title: "Rug Cleaning",
    description: "Fresh rug, joy of walking. We deep clean all types of rugs, removing embedded dirt, stains, and allergens — leaving them fresh, bright, and soft underfoot.",
    features: [
      "All rug types and sizes",
      "Wool, silk, and synthetic rugs",
      "Persian and oriental rugs",
      "Stain and odour removal",
      "Allergen treatment",
      "Collection and delivery available",
    ],
    process: [
      { step: 1, title: "Inspection", description: "Fabric type, pile, and condition assessed before cleaning." },
      { step: 2, title: "Pre-treatment", description: "Stains and heavily soiled areas treated first." },
      { step: 3, title: "Deep Clean", description: "Specialist rug cleaning to remove embedded dirt and allergens." },
      { step: 4, title: "Dry & Return", description: "Fully dried and returned fresh and clean." },
    ],
  },
  "skiwear-cleaning": {
    title: "Skiwear Cleaning",
    description: "Luxury brand skiwear deserves specialist care. We clean ski jackets, salopettes, and technical outerwear — maintaining their waterproofing, insulation, and finish.",
    features: [
      "Ski jackets and salopettes",
      "Technical and waterproof fabrics",
      "Luxury brand garments",
      "DWR waterproofing treatment",
      "Down and synthetic insulation",
      "Helmet and glove cleaning",
    ],
    process: [
      { step: 1, title: "Inspection", description: "Fabric type, brand care label, and condition checked." },
      { step: 2, title: "Specialist Wash", description: "Technical fabrics cleaned with appropriate detergents." },
      { step: 3, title: "Re-proofing", description: "DWR waterproofing treatment reapplied where needed." },
      { step: 4, title: "Finishing", description: "Carefully dried to maintain insulation and shape." },
    ],
  },
  "dye-service": {
    title: "Dye Service",
    description: "We can even dye your clothes — giving them a completely new look and a second life. Whether you want to refresh a faded colour or change it entirely, we can help.",
    features: [
      "Colour refreshing and restoration",
      "Full colour change",
      "Natural and synthetic fabrics",
      "Faded garment revival",
      "Even, consistent results",
      "Pre-dye consultation included",
    ],
    process: [
      { step: 1, title: "Consultation", description: "We discuss the desired colour and assess the fabric's suitability." },
      { step: 2, title: "Preparation", description: "Garment cleaned and prepped to accept dye evenly." },
      { step: 3, title: "Dyeing", description: "Professional dye applied for an even, lasting result." },
      { step: 4, title: "Finishing", description: "Colour set, rinsed, and finished to a professional standard." },
    ],
  },
  "school-uniform": {
    title: "School Uniform Cleaning",
    description: "Keep uniforms looking their best. Our school uniform service keeps blazers, trousers, skirts, and shirts clean, pressed, and ready for the school week.",
    features: [
      "Blazers and jackets",
      "Trousers, skirts, and pinafores",
      "Shirts and blouses",
      "PE kits and sports uniforms",
      "Stain removal (ink, food, grass)",
      "Regular cleaning packages available",
    ],
    process: [
      { step: 1, title: "Drop Off", description: "Bring in uniforms or arrange a weekly collection." },
      { step: 2, title: "Stain Treatment", description: "Common school stains treated before washing." },
      { step: 3, title: "Clean & Press", description: "Washed at correct temperature and professionally pressed." },
      { step: 4, title: "Ready to Wear", description: "Returned fresh, clean, and ready for the week ahead." },
    ],
  },
  "shoe-repairs": {
    title: "Shoe Repairs",
    description: "Re-heel, save your soles, and restore comfort to your step. Our shoe repair service extends the life of your favourite footwear — from everyday shoes to quality leather.",
    features: [
      "Heel replacement and re-heeling",
      "Sole repair and replacement",
      "Stitching and sole bonding",
      "Leather cleaning and conditioning",
      "Zip repairs on boots",
      "All shoe types accepted",
    ],
    process: [
      { step: 1, title: "Assessment", description: "We assess the repair needed and provide a quote." },
      { step: 2, title: "Repair", description: "Skilled repair work carried out by our team." },
      { step: 3, title: "Finishing", description: "Shoes cleaned and polished as part of the service." },
      { step: 4, title: "Collection", description: "Ready for collection within 3–5 working days." },
    ],
  },
  "curtain-cleaning": {
    title: "Curtain Cleaning",
    description: "Time to drop the curtains and keep allergens away. Our curtain cleaning service removes dust, allergens, and odours — leaving your curtains fresh, bright, and like new.",
    features: [
      "All curtain types and fabrics",
      "Lined and unlined curtains",
      "Dust and allergen removal",
      "Stain treatment",
      "Re-hang service available",
      "Pinch pleat and eyelet styles",
    ],
    process: [
      { step: 1, title: "Drop Off", description: "Remove and bring in your curtains, or we can collect." },
      { step: 2, title: "Inspection", description: "Fabric assessed and any stains pre-treated." },
      { step: 3, title: "Specialist Clean", description: "Cleaned using fabric-appropriate methods." },
      { step: 4, title: "Finish & Return", description: "Pressed and returned ready to hang." },
    ],
  },
  "leather-suede-cleaning": {
    title: "Leather & Suede Cleaning",
    description: "Trust your leather care to the experts. We clean, condition, and restore leather and suede garments — jackets, bags, shoes, and accessories — bringing them back to their best.",
    features: [
      "Leather jackets and coats",
      "Suede jackets and skirts",
      "Leather bags and accessories",
      "Stain and scuff removal",
      "Conditioning and restoration",
      "Colour restoration available",
    ],
    process: [
      { step: 1, title: "Inspection", description: "Leather type, condition, and stains assessed carefully." },
      { step: 2, title: "Specialist Clean", description: "Cleaned using professional leather and suede solutions." },
      { step: 3, title: "Conditioning", description: "Leather conditioned to restore suppleness and finish." },
      { step: 4, title: "Finishing", description: "Buffed and finished to a professional standard." },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return { title: "Service Not Found | Manor Lane Dry Cleaners" };
  }

  return {
    title: `${service.title} Hither Green | Manor Lane Dry Cleaners`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Manor Lane Dry Cleaners",
      url: "https://www.manorlanedrycleaners.co.uk",
    },
    areaServed: { "@type": "City", name: "London" },
    url: `https://www.manorlanedrycleaners.co.uk/services/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeader
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${slug}` },
        ]}
      />

      <section className="bg-neutral-off-white section-padding">
        <Container>
          <div className="max-w-4xl mx-auto">

            {/* Features */}
            <div className="bg-white rounded-lg p-8 shadow-card mb-8">
              <h2 className="text-2xl font-bold text-neutral-black mb-6">What's Included</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-dark-grey text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="bg-white rounded-lg p-8 shadow-card mb-8">
              <h2 className="text-2xl font-bold text-neutral-black mb-6">How It Works</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-neutral-black mb-1">{step.title}</h3>
                    <p className="text-xs text-neutral-dark-grey leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="primary" size="lg" href="/quote" icon={<ArrowRight className="w-5 h-5" />}>
                Get a Quote for {service.title}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title={`Ready to book your ${service.title.toLowerCase()}?`}
        subtitle="Call, WhatsApp, or request a quote online. We'll take care of the rest."
      />
    </>
  );
}
