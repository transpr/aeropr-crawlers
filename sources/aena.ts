import { gnewsSource } from "./google-news.js";

// AENA: gnews discovery fallback (newsroom not directly crawlable from runners).
export const aena: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aena",
  orgName: "AENA",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "(site:aena.es) when:30d",
});
