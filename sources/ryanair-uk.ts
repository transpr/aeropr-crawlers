import { gnewsSource } from "./google-news.js";

// Ryanair UK: gnews discovery fallback (European coverage, full country list).
export const ryanairUk: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ryanair-uk",
  orgName: "Ryanair UK",
  orgGroup: "Ryanair Holdings",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Ryanair UK") when:30d",
});
