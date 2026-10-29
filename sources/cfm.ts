import { gnewsSource } from "./google-news.js";

// CFM International: gnews discovery fallback (newsroom not directly crawlable from runners).
export const cfm: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cfm",
  orgName: "CFM International",
  orgGroup: "GE & Safran",
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:cfmaeroengines.com) when:30d",
});
