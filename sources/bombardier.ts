import { gnewsSource } from "./google-news.js";

// Bombardier: gnews discovery fallback (newsroom not directly crawlable from runners).
export const bombardier: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "bombardier",
  orgName: "Bombardier",
  orgGroup: null,
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:bombardier.com) when:30d",
});
