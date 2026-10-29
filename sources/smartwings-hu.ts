import { gnewsSource } from "./google-news.js";

// Smartwings Hungary: gnews discovery fallback (European coverage, full country list).
export const smartwingsHu: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "smartwings-hu",
  orgName: "Smartwings Hungary",
  orgGroup: "Smartwings",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Smartwings Hungary") when:30d",
});
