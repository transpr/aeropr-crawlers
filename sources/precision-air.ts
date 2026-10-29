import { gnewsSource } from "./google-news.js";

// Precision Air (Tanzania): gnews discovery fallback (world scheduled-carrier completion).
export const precisionAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "precision-air",
  orgName: "Precision Air (Tanzania)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Precision Air" Tanzania) when:30d",
});
