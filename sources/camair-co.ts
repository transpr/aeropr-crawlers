import { gnewsSource } from "./google-news.js";

// Camair-Co: gnews discovery fallback (world scheduled-carrier completion).
export const camairCo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "camair-co",
  orgName: "Camair-Co",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Camair-Co") when:30d",
});
