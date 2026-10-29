import { gnewsSource } from "./google-news.js";

// AAR Corp: gnews discovery fallback (newsroom not directly crawlable from runners).
export const aar: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aar",
  orgName: "AAR Corp",
  orgGroup: null,
  alliance: null,
  type: "mro",
  sector: "air",
  language: "en",
  query: "(site:aarcorp.com) when:30d",
});
