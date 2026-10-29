import { gnewsSource } from "./google-news.js";

// Garuda Indonesia: gnews discovery fallback (newsroom not directly crawlable from runners).
export const garuda: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "garuda",
  orgName: "Garuda Indonesia",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:garuda-indonesia.com) when:30d",
});
