import { gnewsSource } from "./google-news.js";

// IndiGo: gnews discovery fallback (newsroom not directly crawlable from runners).
export const indigo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "indigo",
  orgName: "IndiGo",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:goindigo.in) when:30d",
});
