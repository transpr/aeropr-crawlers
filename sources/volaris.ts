import { gnewsSource } from "./google-news.js";

// Volaris: gnews discovery fallback (newsroom not directly crawlable from runners).
export const volaris: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "volaris",
  orgName: "Volaris",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:volaris.com) when:30d",
});
