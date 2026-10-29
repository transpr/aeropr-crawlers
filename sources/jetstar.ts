import { gnewsSource } from "./google-news.js";

// Jetstar: gnews discovery fallback (newsroom not directly crawlable from runners).
export const jetstar: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "jetstar",
  orgName: "Jetstar",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:jetstar.com) when:30d",
});
