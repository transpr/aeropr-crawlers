import { gnewsSource } from "./google-news.js";

// AviAlliance: gnews discovery fallback (newsroom not directly crawlable from runners).
export const aviAlliance: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "avi-alliance",
  orgName: "AviAlliance",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "(site:avialliance.com) when:30d",
});
