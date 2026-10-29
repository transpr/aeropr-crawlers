import { gnewsSource } from "./google-news.js";

// Frontier Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const frontier: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "frontier",
  orgName: "Frontier Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:flyfrontier.com) when:30d",
});
