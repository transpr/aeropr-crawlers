import { gnewsSource } from "./google-news.js";

// Belavia: gnews discovery fallback (European coverage, full country list).
export const belavia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "belavia",
  orgName: "Belavia",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Belavia") when:30d",
});
