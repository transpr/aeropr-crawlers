import { gnewsSource } from "./google-news.js";

// Smartwings: gnews discovery fallback (European coverage, full country list).
export const smartwings: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "smartwings",
  orgName: "Smartwings",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Smartwings") when:30d",
});
