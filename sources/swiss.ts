import { gnewsSource } from "./google-news.js";

// SWISS: gnews discovery fallback (newsroom not directly crawlable from runners).
export const swiss: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "swiss",
  orgName: "SWISS",
  orgGroup: "Lufthansa Group",
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:swiss.com) when:30d",
});
