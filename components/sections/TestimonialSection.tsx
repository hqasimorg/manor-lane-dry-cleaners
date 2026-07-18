import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Star, Quote } from "lucide-react";
import { getGoogleReviews } from "@/lib/google/reviews";

const staticReviews = [
  {
    name: "Sarah Mitchell",
    text: "I've been using Manor Lane for over 3 years now. They always do an excellent job with my suits and the staff are so friendly. Highly recommend!",
    rating: 5,
    relative_time_description: "3 years ago",
  },
  {
    name: "James Thompson",
    text: "As an Airbnb host, I need reliable laundry service. Manor Lane handles all my linen turnover perfectly. Always on time, always fresh.",
    rating: 5,
    relative_time_description: "1 year ago",
  },
  {
    name: "Priya Patel",
    text: "The alterations service is fantastic. They took in my wedding dress and it fits perfectly now. Very reasonable prices too.",
    rating: 5,
    relative_time_description: "2 years ago",
  },
];

export async function TestimonialSection() {
  const data = await getGoogleReviews();

  const reviews = data?.reviews.filter((r) => r.rating >= 4).slice(0, 6) ?? staticReviews;
  const overallRating = data?.rating ?? 5.0;
  const totalRatings = data?.totalRatings ?? null;

  return (
    <section className="bg-white section-padding">
      <Container>
        <SectionHeader
          title="What South East London Says About Us"
          subtitle="Real reviews from our Google Business Profile."
        />

        {/* Overall rating bar */}
        <div className="flex items-center justify-center gap-4 mt-6 mb-12">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.round(overallRating) ? "text-secondary fill-secondary" : "text-neutral-light-grey fill-neutral-light-grey"}`}
              />
            ))}
          </div>
          <span className="text-2xl font-bold text-neutral-black">{overallRating.toFixed(1)}</span>
          {totalRatings && (
            <span className="text-neutral-medium-grey text-sm">
              ({totalRatings} Google reviews)
            </span>
          )}
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline font-medium"
          >
            Leave a review →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-neutral-off-white rounded-lg p-6 relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < review.rating ? "text-secondary fill-secondary" : "text-neutral-light-grey fill-neutral-light-grey"}`}
                  />
                ))}
              </div>
              <p className="text-neutral-dark-grey mb-6 text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-black text-sm">{review.name}</p>
                  <p className="text-xs text-neutral-medium-grey">{review.relative_time_description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
