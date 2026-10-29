import { gnewsSource } from "./google-news.js";

// ICAO: gnews discovery fallback (newsroom not directly crawlable from runners).
export const icao: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "icao",
  orgName: "ICAO",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:icao.int) when:30d",
});
