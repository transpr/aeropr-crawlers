import { gnewsSource } from "./google-news.js";

// UK Civil Aviation Authority: gnews discovery fallback (newsroom not directly crawlable from runners).
export const ukCaa: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "uk-caa",
  orgName: "UK Civil Aviation Authority",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:caa.co.uk) when:30d",
});
