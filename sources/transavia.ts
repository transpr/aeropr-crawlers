import { gnewsSource } from "./google-news.js";

// Transavia: gnews discovery fallback (newsroom not directly crawlable from runners).
export const transavia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "transavia",
  orgName: "Transavia",
  orgGroup: "Air France-KLM",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:transavia.com) when:30d",
});
