import { gnewsSource } from "./google-news.js";

// French bee: gnews discovery fallback (newsroom not directly crawlable from runners).
export const frenchBee: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "french-bee",
  orgName: "French bee",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:frenchbee.com) when:30d",
});
