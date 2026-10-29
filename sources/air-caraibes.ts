import { gnewsSource } from "./google-news.js";

// Air Caraïbes: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airCaraibes: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-caraibes",
  orgName: "Air Caraïbes",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:aircaraibes.com) when:30d",
});
