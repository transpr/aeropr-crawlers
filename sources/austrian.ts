import { gnewsSource } from "./google-news.js";

// Austrian Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const austrian: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "austrian",
  orgName: "Austrian Airlines",
  orgGroup: "Lufthansa Group",
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:austrian.com) when:30d",
});
