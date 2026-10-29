import { gnewsSource } from "./google-news.js";

// Suparna Airlines (Yangtze River Express): gnews discovery fallback (world scheduled-carrier completion).
export const suparna: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "suparna",
  orgName: "Suparna Airlines (Yangtze River Express)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Suparna Airlines") when:30d",
});
