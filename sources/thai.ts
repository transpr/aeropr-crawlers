import { gnewsSource } from "./google-news.js";

// Thai Airways: gnews discovery fallback (newsroom not directly crawlable from runners).
export const thai: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "thai",
  orgName: "Thai Airways",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:thaiairways.com) when:30d",
});
