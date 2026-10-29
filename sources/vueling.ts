import { gnewsSource } from "./google-news.js";

// Vueling: gnews discovery fallback (newsroom not directly crawlable from runners).
export const vueling: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "vueling",
  orgName: "Vueling",
  orgGroup: "IAG",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:vueling.com) when:30d",
});
