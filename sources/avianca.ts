import { gnewsSource } from "./google-news.js";

// Avianca: gnews discovery fallback (newsroom not directly crawlable from runners).
export const avianca: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "avianca",
  orgName: "Avianca",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:avianca.com) when:30d",
});
