import { gnewsSource } from "./google-news.js";

// Düsseldorf Airport: gnews discovery fallback (newsroom not directly crawlable from runners).
export const dusseldorfAirport: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "dusseldorf-airport",
  orgName: "Düsseldorf Airport",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "(site:dus.com) when:30d",
});
