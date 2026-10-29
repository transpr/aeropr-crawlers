import { gnewsSource } from "./google-news.js";

// Gullivair: gnews discovery fallback (European coverage, full country list).
export const gullivair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "gullivair",
  orgName: "Gullivair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Gullivair") when:30d",
});
