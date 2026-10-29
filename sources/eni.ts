import { gnewsSource } from "./google-news.js";

// Eni: gnews discovery fallback (newsroom not directly crawlable from runners).
export const eni: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "eni",
  orgName: "Eni",
  orgGroup: null,
  alliance: null,
  type: "fuel",
  sector: "air",
  language: "en",
  query: "(eni aviation) (site:eni.com) when:30d",
});
