import { gnewsSource } from "./google-news.js";

// Malaysia Airlines: gnews discovery fallback (newsroom not directly crawlable from runners).
export const malaysia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "malaysia",
  orgName: "Malaysia Airlines",
  orgGroup: null,
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:malaysiaairlines.com) when:30d",
});
