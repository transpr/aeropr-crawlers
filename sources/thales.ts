import { gnewsSource } from "./google-news.js";

// Thales: gnews discovery fallback (newsroom not directly crawlable from runners).
export const thales: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "thales",
  orgName: "Thales",
  orgGroup: null,
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:thalesgroup.com) when:30d",
});
