import { gnewsSource } from "./google-news.js";

// GOL Linhas Aéreas: gnews discovery fallback (newsroom not directly crawlable from runners).
export const gol: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "gol",
  orgName: "GOL Linhas Aéreas",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:voegol.com) when:30d",
});
