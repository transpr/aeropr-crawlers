import { gnewsSource } from "./google-news.js";

// Riyadh Air: gnews discovery fallback (newsroom not directly crawlable from runners).
export const riyadhAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "riyadh-air",
  orgName: "Riyadh Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:riyadhair.com) when:30d",
});
