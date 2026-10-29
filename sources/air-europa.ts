import { gnewsSource } from "./google-news.js";

// Air Europa: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airEuropa: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-europa",
  orgName: "Air Europa",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:aireuropa.com) when:30d",
});
