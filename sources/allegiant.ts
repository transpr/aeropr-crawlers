import { gnewsSource } from "./google-news.js";

// Allegiant Air: gnews discovery fallback (newsroom not directly crawlable from runners).
export const allegiant: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "allegiant",
  orgName: "Allegiant Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:allegiantair.com) when:30d",
});
