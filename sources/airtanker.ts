import { gnewsSource } from "./google-news.js";

// AirTanker: gnews discovery fallback (European coverage, full country list).
export const airtanker: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "airtanker",
  orgName: "AirTanker",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("AirTanker") when:30d",
});
