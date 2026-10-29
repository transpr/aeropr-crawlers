import { gnewsSource } from "./google-news.js";

// Air Serbia: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airSerbia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-serbia",
  orgName: "Air Serbia",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:airserbia.com) when:30d",
});
