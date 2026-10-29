import { gnewsSource } from "./google-news.js";

// Star Alliance: gnews discovery fallback (newsroom not directly crawlable from runners).
export const starAlliance: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "star-alliance",
  orgName: "Star Alliance",
  orgGroup: null,
  alliance: null,
  type: "alliance",
  sector: "air",
  language: "en",
  query: "(site:staralliance.com) when:30d",
});
