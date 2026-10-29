import { gnewsSource } from "./google-news.js";

// Air Transat: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airTransat: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-transat",
  orgName: "Air Transat",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:airtransat.com) when:30d",
});
