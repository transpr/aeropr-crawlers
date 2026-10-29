import { gnewsSource } from "./google-news.js";

// Boliviana de Aviación: gnews discovery fallback (world scheduled-carrier completion).
export const boliviana: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "boliviana",
  orgName: "Boliviana de Aviación",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Boliviana de Aviación") when:30d",
});
