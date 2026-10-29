import { gnewsSource } from "./google-news.js";

// Azimuth Airlines: gnews discovery fallback (European coverage, full country list).
export const azimuth: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "azimuth",
  orgName: "Azimuth Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Azimuth" airline) when:30d",
});
