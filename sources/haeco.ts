import { gnewsSource } from "./google-news.js";

// HAECO: gnews discovery fallback (newsroom not directly crawlable from runners).
export const haeco: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "haeco",
  orgName: "HAECO",
  orgGroup: null,
  alliance: null,
  type: "mro",
  sector: "air",
  language: "en",
  query: "(site:haeco.com) when:30d",
});
