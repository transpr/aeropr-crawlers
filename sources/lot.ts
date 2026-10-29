import { gnewsSource } from "./google-news.js";

// LOT Polish Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const lot: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lot",
  orgName: "LOT Polish Airlines",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:lot.com) when:30d",
});
