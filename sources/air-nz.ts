import { gnewsSource } from "./google-news.js";

// Air New Zealand: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airNz: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-nz",
  orgName: "Air New Zealand",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:airnewzealand.co.nz OR site:airnewzealand.com) when:30d",
});
