import { gnewsSource } from "./google-news.js";

// Air India: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airIndia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-india",
  orgName: "Air India",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:airindia.com) when:30d",
});
