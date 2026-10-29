import { gnewsSource } from "./google-news.js";

// Cubana de Aviación: gnews discovery fallback (world scheduled-carrier completion).
export const cubana: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cubana",
  orgName: "Cubana de Aviación",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Cubana de Aviación") when:30d",
});
