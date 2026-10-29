import { gnewsSource } from "./google-news.js";

// Leonardo: gnews discovery fallback (newsroom not directly crawlable from runners).
export const leonardo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "leonardo",
  orgName: "Leonardo",
  orgGroup: null,
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:leonardo.com) when:30d",
});
