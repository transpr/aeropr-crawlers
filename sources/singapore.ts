import { gnewsSource } from "./google-news.js";

// Singapore Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const singapore: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "singapore",
  orgName: "Singapore Airlines",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:singaporeair.com) when:30d",
});
