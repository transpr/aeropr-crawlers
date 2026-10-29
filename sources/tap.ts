import { gnewsSource } from "./google-news.js";

// TAP Air Portugal: gnews discovery fallback (newsroom not directly crawlable from runners).
export const tap: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tap",
  orgName: "TAP Air Portugal",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:flytap.com) when:30d",
});
