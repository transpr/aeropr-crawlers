import { gnewsSource } from "./google-news.js";

// Japan Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const jal: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "jal",
  orgName: "Japan Airlines",
  orgGroup: null,
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:jal.com OR site:jal.co.jp) when:30d",
});
