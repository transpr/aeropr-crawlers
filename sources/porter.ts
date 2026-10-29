import { gnewsSource } from "./google-news.js";

// Porter Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const porter: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "porter",
  orgName: "Porter Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:flyporter.com) when:30d",
});
