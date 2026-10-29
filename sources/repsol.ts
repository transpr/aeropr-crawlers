import { gnewsSource } from "./google-news.js";

// Repsol: gnews discovery fallback (newsroom not directly crawlable from runners).
export const repsol: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "repsol",
  orgName: "Repsol",
  orgGroup: null,
  alliance: null,
  type: "fuel",
  sector: "air",
  language: "en",
  query: "(repsol aviation) (site:repsol.com) when:30d",
});
