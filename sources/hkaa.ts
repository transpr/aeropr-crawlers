import { gnewsSource } from "./google-news.js";

// Hong Kong Airport Authority: gnews discovery fallback (newsroom not directly crawlable from runners).
export const hkaa: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hkaa",
  orgName: "Hong Kong Airport Authority",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "(site:hongkongairport.com) when:30d",
});
