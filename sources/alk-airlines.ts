import { gnewsSource } from "./google-news.js";

// ALK Airlines: gnews discovery fallback (European coverage, full country list).
export const alkAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "alk-airlines",
  orgName: "ALK Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("ALK Airlines") when:30d",
});
