import { gnewsSource } from "./google-news.js";

// Evelop Airlines: gnews discovery fallback (European coverage, full country list).
export const evelop: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "evelop",
  orgName: "Evelop Airlines",
  orgGroup: "Ávoris",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Evelop") when:30d",
});
