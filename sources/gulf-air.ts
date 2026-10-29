import { gnewsSource } from "./google-news.js";

// Gulf Air: gnews discovery fallback (newsroom not directly crawlable from runners).
export const gulfAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "gulf-air",
  orgName: "Gulf Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:gulfair.com) when:30d",
});
