import { gnewsSource } from "./google-news.js";

// Helvetic Airways: gnews discovery fallback (European coverage, full country list).
export const helvetic: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "helvetic",
  orgName: "Helvetic Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Helvetic Airways") when:30d",
});
