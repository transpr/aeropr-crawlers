import { gnewsSource } from "./google-news.js";

// Orbest: gnews discovery fallback (European coverage, full country list).
export const orbest: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "orbest",
  orgName: "Orbest",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Orbest") when:30d",
});
