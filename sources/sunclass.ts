import { gnewsSource } from "./google-news.js";

// Sunclass Airlines: gnews discovery fallback (European coverage, full country list).
export const sunclass: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "sunclass",
  orgName: "Sunclass Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Sunclass Airlines") when:30d",
});
