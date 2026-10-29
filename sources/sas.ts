import { gnewsSource } from "./google-news.js";

// SAS: gnews discovery fallback (newsroom not directly crawlable from runners).
export const sas: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "sas",
  orgName: "SAS",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:flysas.com OR site:sas.se) when:30d",
});
