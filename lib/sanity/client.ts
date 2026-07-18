import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2024-07-01",
  useCdn: true,
});

export const sanityFetch = async <T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
}): Promise<T> => {
  return client.fetch<T>(query, params, {
    next: { tags },
  });
};

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
