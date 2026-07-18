export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
}

interface PlacesResponse {
  result?: {
    reviews?: GoogleReview[];
    rating?: number;
    user_ratings_total?: number;
  };
  status: string;
}

export interface ReviewsData {
  reviews: GoogleReview[];
  rating: number;
  totalRatings: number;
}

export async function getGoogleReviews(): Promise<ReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&reviews_sort=newest&key=${apiKey}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    const data: PlacesResponse = await res.json();

    if (data.status !== "OK" || !data.result) return null;

    return {
      reviews: data.result.reviews ?? [],
      rating: data.result.rating ?? 0,
      totalRatings: data.result.user_ratings_total ?? 0,
    };
  } catch {
    return null;
  }
}
