import { gnewsSource } from "./google-news.js";

// Medavia: gnews discovery fallback (European coverage, full country list).
export const medavia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "medavia",
  orgName: "Medavia",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Medavia") when:30d",
});
