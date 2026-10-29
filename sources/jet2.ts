import { gnewsSource } from "./google-news.js";

// Jet2: gnews discovery fallback (newsroom not directly crawlable from runners).
export const jet2: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "jet2",
  orgName: "Jet2",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:jet2.com) when:30d",
});
