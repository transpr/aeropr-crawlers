import { gnewsSource } from "./google-news.js";

// Saudia: gnews discovery fallback (newsroom not directly crawlable from runners).
export const saudia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "saudia",
  orgName: "Saudia",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:saudia.com) when:30d",
});
