import { gnewsSource } from "./google-news.js";

// Air Corsica: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airCorsica: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-corsica",
  orgName: "Air Corsica",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:aircorsica.com) when:30d",
});
