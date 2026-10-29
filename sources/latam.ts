import { gnewsSource } from "./google-news.js";

// LATAM Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const latam: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "latam",
  orgName: "LATAM Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:latam.com) when:30d",
});
