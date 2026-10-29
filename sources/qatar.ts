import { gnewsSource } from "./google-news.js";

// Qatar Airways: gnews discovery fallback (newsroom not directly crawlable from runners).
export const qatar: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "qatar",
  orgName: "Qatar Airways",
  orgGroup: null,
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:qatarairways.com) when:30d",
});
