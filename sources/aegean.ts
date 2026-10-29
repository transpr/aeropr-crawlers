import { gnewsSource } from "./google-news.js";

// Aegean Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const aegean: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aegean",
  orgName: "Aegean Airlines",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:aegeanair.com) when:30d",
});
