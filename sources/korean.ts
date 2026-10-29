import { gnewsSource } from "./google-news.js";

// Korean Air: gnews discovery fallback (newsroom not directly crawlable from runners).
export const korean: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "korean",
  orgName: "Korean Air",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:koreanair.com) when:30d",
});
