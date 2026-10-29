import { gnewsSource } from "./google-news.js";

// Valljet: gnews discovery fallback (European coverage, full country list).
export const valljet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "valljet",
  orgName: "Valljet",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Valljet") when:30d",
});
