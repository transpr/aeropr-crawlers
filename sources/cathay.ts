import { gnewsSource } from "./google-news.js";

// Cathay Pacific: gnews discovery fallback (newsroom not directly crawlable from runners).
export const cathay: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cathay",
  orgName: "Cathay Pacific",
  orgGroup: null,
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:cathaypacific.com) when:30d",
});
