import { gnewsSource } from "./google-news.js";

// Wizz Air: gnews discovery fallback (newsroom not directly crawlable from runners).
export const wizz: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "wizz",
  orgName: "Wizz Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:wizzair.com) when:30d",
});
