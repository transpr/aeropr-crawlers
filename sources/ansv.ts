import { gnewsSource } from "./google-news.js";

// ANSV Italy: gnews discovery fallback (newsroom not directly crawlable from runners).
export const ansv: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ansv",
  orgName: "ANSV Italy",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:ansv.it) when:30d",
});
