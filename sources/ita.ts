import { gnewsSource } from "./google-news.js";

// ITA Airways: gnews discovery fallback (newsroom not directly crawlable from runners).
export const ita: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ita",
  orgName: "ITA Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:ita-airways.com) when:30d",
});
