import { gnewsSource } from "./google-news.js";

// LanzaJet: gnews discovery fallback (newsroom not directly crawlable from runners).
export const lanzajet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lanzajet",
  orgName: "LanzaJet",
  orgGroup: null,
  alliance: null,
  type: "fuel",
  sector: "air",
  language: "en",
  query: "(site:lanzajet.com) when:30d",
});
