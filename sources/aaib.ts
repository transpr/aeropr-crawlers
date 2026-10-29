import { gnewsSource } from "./google-news.js";

// UK Air Accidents Investigation Branch: gnews discovery fallback (newsroom not directly crawlable from runners).
export const aaib: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aaib",
  orgName: "UK Air Accidents Investigation Branch",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:aaib.gov.uk) when:30d",
});
