import { gnewsSource } from "./google-news.js";

// Preem: gnews discovery fallback (newsroom not directly crawlable from runners).
export const preem: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "preem",
  orgName: "Preem",
  orgGroup: null,
  alliance: null,
  type: "fuel",
  sector: "air",
  language: "en",
  query: "(preem aviation OR preem SAF) (site:preem.se OR site:preem.com) when:30d",
});
