import { gnewsSource } from "./google-news.js";

// Aurigny Air Services: gnews discovery fallback (European coverage, full country list).
export const aurigny: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aurigny",
  orgName: "Aurigny Air Services",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Aurigny") when:30d",
});
