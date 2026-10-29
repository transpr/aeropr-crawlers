import { gnewsSource } from "./google-news.js";

// Volotea: gnews discovery fallback (newsroom not directly crawlable from runners).
export const volotea: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "volotea",
  orgName: "Volotea",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:volotea.com) when:30d",
});
