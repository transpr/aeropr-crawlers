import { gnewsSource } from "./google-news.js";

// Ethiopian Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const ethiopian: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ethiopian",
  orgName: "Ethiopian Airlines",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:ethiopianairlines.com) when:30d",
});
