import { gnewsSource } from "./google-news.js";

// ANA: gnews discovery fallback (newsroom not directly crawlable from runners).
export const ana: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ana",
  orgName: "ANA",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:ana.co.jp) when:30d",
});
