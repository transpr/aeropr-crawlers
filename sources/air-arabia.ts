import { gnewsSource } from "./google-news.js";

// Air Arabia: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airArabia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-arabia",
  orgName: "Air Arabia",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:airarabia.com) when:30d",
});
