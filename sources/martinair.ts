import { gnewsSource } from "./google-news.js";

// Martinair: gnews discovery fallback (European coverage, full country list).
export const martinair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "martinair",
  orgName: "Martinair",
  orgGroup: "Air France-KLM",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Martinair") when:30d",
});
