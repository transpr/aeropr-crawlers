import { gnewsSource } from "./google-news.js";

// OMV: gnews discovery fallback (newsroom not directly crawlable from runners).
export const omv: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "omv",
  orgName: "OMV",
  orgGroup: null,
  alliance: null,
  type: "fuel",
  sector: "air",
  language: "en",
  query: "(omv aviation) (site:omv.com) when:30d",
});
