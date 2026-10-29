import { gnewsSource } from "./google-news.js";

// Air Austral: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airAustral: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-austral",
  orgName: "Air Austral",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:airaustral.com) when:30d",
});
