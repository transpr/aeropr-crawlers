import { gnewsSource } from "./google-news.js";

// US Department of Transportation: gnews discovery fallback (newsroom not directly crawlable from runners).
export const dot: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "dot",
  orgName: "US Department of Transportation",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:transportation.gov) when:30d",
});
