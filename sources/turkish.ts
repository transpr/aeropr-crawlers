import { gnewsSource } from "./google-news.js";

// Turkish Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const turkish: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "turkish",
  orgName: "Turkish Airlines",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:turkishairlines.com) when:30d",
});
