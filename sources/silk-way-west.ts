import { gnewsSource } from "./google-news.js";

// Silk Way West Airlines: gnews discovery fallback (European coverage, full country list).
export const silkWayWest: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "silk-way-west",
  orgName: "Silk Way West Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:silkwaywest.com) when:30d",
});
