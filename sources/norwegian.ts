import { gnewsSource } from "./google-news.js";

// Norwegian: gnews discovery fallback (newsroom not directly crawlable from runners).
export const norwegian: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "norwegian",
  orgName: "Norwegian",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:norwegian.com) when:30d",
});
