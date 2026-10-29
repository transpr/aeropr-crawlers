import { gnewsSource } from "./google-news.js";

// Finnair: gnews discovery fallback (newsroom not directly crawlable from runners).
export const finnair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "finnair",
  orgName: "Finnair",
  orgGroup: null,
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:finnair.com) when:30d",
});
