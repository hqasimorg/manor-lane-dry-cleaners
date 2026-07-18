import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Local Resident",
    location: "Hither Green",
    content:
      "I've been using Manor Lane for over 3 years now. They always do an excellent job with my suits and the staff are so friendly. Highly recommend!",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Airbnb Host",
    location: "Lee",
    content:
      "As an Airbnb host, I need reliable laundry service. Manor Lane handles all my linen turnover perfectly. Always on time, always fresh.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Local Resident",
    location: "Grove Park",
    content:
      "The alterations service is fantastic. They took in my wedding dress and it fits perfectly now. Very reasonable prices too.",
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="bg-white section-padding">
      <Container>
        <SectionHeader
          title="What South East London Says About Us"
          subtitle="Real reviews from real customers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-neutral-off-white rounded-lg p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-secondary fill-secondary"
                  />
                ))}
              </div>
              <p className="text-neutral-dark-grey mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-black text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-neutral-medium-grey">
                    {testimonial.role} — {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
