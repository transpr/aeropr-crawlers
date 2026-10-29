import { gnewsSource } from "./google-news.js";

// Etihad Airways: gnews discovery fallback (newsroom not directly crawlable from runners).
export const etihad: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "etihad",
  orgName: "Etihad Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:etihad.com) when:30d",
});
