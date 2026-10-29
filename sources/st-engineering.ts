import { gnewsSource } from "./google-news.js";

// ST Engineering: gnews discovery fallback (newsroom not directly crawlable from runners).
export const stEngineering: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "st-engineering",
  orgName: "ST Engineering",
  orgGroup: null,
  alliance: null,
  type: "mro",
  sector: "air",
  language: "en",
  query: "(site:stengg.com) when:30d",
});
