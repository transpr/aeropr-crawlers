import { gnewsSource } from "./google-news.js";

// Brussels Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const brussels: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "brussels",
  orgName: "Brussels Airlines",
  orgGroup: "Lufthansa Group",
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:brusselsairlines.com) when:30d",
});
