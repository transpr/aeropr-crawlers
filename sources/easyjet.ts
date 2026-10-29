import { gnewsSource } from "./google-news.js";

// easyJet: gnews discovery fallback (newsroom not directly crawlable from runners).
export const easyjet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "easyjet",
  orgName: "easyJet",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:easyjet.com) when:30d",
});
