import { gnewsSource } from "./google-news.js";

// DFS Deutsche Flugsicherung: gnews discovery fallback (newsroom not directly crawlable from runners).
export const dfs: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "dfs",
  orgName: "DFS Deutsche Flugsicherung",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:dfs.de) when:30d",
});
