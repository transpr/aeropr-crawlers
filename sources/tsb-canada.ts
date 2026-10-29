import { gnewsSource } from "./google-news.js";

// Transportation Safety Board of Canada: gnews discovery fallback (newsroom not directly crawlable from runners).
export const tsbCanada: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tsb-canada",
  orgName: "Transportation Safety Board of Canada",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:bst-tsb.gc.ca) when:30d",
});
