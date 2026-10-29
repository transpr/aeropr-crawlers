import { gnewsSource } from "./google-news.js";

// flydubai: gnews discovery fallback (newsroom not directly crawlable from runners).
export const flydubai: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "flydubai",
  orgName: "flydubai",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:flydubai.com) when:30d",
});
