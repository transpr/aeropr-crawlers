import { gnewsSource } from "./google-news.js";

// AirAsia: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airasia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "airasia",
  orgName: "AirAsia",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:airasia.com) when:30d",
});
