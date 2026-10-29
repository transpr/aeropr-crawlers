import { gnewsSource } from "./google-news.js";

// Aircalin: gnews discovery fallback (newsroom not directly crawlable from runners).
export const aircalin: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aircalin",
  orgName: "Aircalin",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:aircalin.nc) when:30d",
});
