import { gnewsSource } from "./google-news.js";

// El Al: gnews discovery fallback (newsroom not directly crawlable from runners).
export const elAl: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "el-al",
  orgName: "El Al",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:elal.com) when:30d",
});
