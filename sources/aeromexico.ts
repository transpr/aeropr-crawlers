import { gnewsSource } from "./google-news.js";

// Aeroméxico: gnews discovery fallback (newsroom not directly crawlable from runners).
export const aeromexico: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aeromexico",
  orgName: "Aeroméxico",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:aeromexico.com) when:30d",
});
