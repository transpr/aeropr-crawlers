import { gnewsSource } from "./google-news.js";

// Privilege Style: gnews discovery fallback (European coverage, full country list).
export const privilegeStyle: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "privilege-style",
  orgName: "Privilege Style",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Privilege Style") when:30d",
});
