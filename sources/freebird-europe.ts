import { gnewsSource } from "./google-news.js";

// Freebird Airlines Europe: gnews discovery fallback (European coverage, full country list).
export const freebirdEurope: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "freebird-europe",
  orgName: "Freebird Airlines Europe",
  orgGroup: "Freebird Airlines",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Freebird Europe") when:30d",
});
