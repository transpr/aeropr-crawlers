import { gnewsSource } from "./google-news.js";

// oneworld: gnews discovery fallback (newsroom not directly crawlable from runners).
export const oneworld: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "oneworld",
  orgName: "oneworld",
  orgGroup: null,
  alliance: null,
  type: "alliance",
  sector: "air",
  language: "en",
  query: "(site:oneworld.com) when:30d",
});
