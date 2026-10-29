import { gnewsSource } from "./google-news.js";

// Embraer: gnews discovery fallback (newsroom not directly crawlable from runners).
export const embraer: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "embraer",
  orgName: "Embraer",
  orgGroup: null,
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:embraer.com) when:30d",
});
