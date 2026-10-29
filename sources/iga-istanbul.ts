import { gnewsSource } from "./google-news.js";

// IGA Istanbul Airport: gnews discovery fallback (newsroom not directly crawlable from runners).
export const igaIstanbul: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "iga-istanbul",
  orgName: "IGA Istanbul Airport",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "(site:istairport.com) when:30d",
});
