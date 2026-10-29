import { gnewsSource } from "./google-news.js";

// Spirit Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const spirit: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "spirit",
  orgName: "Spirit Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:spirit.com) when:30d",
});
