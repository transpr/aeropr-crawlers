import { gnewsSource } from "./google-news.js";

// Eurowings: gnews discovery fallback (newsroom not directly crawlable from runners).
export const eurowings: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "eurowings",
  orgName: "Eurowings",
  orgGroup: "Lufthansa Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:eurowings.com) when:30d",
});
