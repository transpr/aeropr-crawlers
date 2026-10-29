import { gnewsSource } from "./google-news.js";

// Icelandair: gnews discovery fallback (newsroom not directly crawlable from runners).
export const icelandair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "icelandair",
  orgName: "Icelandair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:icelandair.com) when:30d",
});
