import { gnewsSource } from "./google-news.js";

// Dubai Airports: gnews discovery fallback (newsroom not directly crawlable from runners).
export const dubaiAirports: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "dubai-airports",
  orgName: "Dubai Airports",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "(site:dubaiairports.ae) when:30d",
});
