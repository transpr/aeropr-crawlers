import { gnewsSource } from "./google-news.js";

// Ural Airlines: gnews discovery fallback (European coverage, full country list).
export const uralAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ural-airlines",
  orgName: "Ural Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Ural Airlines") when:30d",
});
