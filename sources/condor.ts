import { gnewsSource } from "./google-news.js";

// Condor: gnews discovery fallback (newsroom not directly crawlable from runners).
export const condor: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "condor",
  orgName: "Condor",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:condor.com) when:30d",
});
