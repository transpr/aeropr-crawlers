import { gnewsSource } from "./google-news.js";

// Hamburg Airport: gnews discovery fallback (newsroom not directly crawlable from runners).
export const hamburgAirport: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hamburg-airport",
  orgName: "Hamburg Airport",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "(site:hamburg-airport.de) when:30d",
});
