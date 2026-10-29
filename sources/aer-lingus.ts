import { gnewsSource } from "./google-news.js";

// Aer Lingus: gnews discovery fallback (newsroom not directly crawlable from runners).
export const aerLingus: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aer-lingus",
  orgName: "Aer Lingus",
  orgGroup: "IAG",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:aerlingus.com) when:30d",
});
