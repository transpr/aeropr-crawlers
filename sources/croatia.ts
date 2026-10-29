import { gnewsSource } from "./google-news.js";

// Croatia Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const croatia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "croatia",
  orgName: "Croatia Airlines",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:croatiaairlines.com) when:30d",
});
