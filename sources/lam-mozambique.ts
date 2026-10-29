import { gnewsSource } from "./google-news.js";

// LAM Mozambique: gnews discovery fallback (world scheduled-carrier completion).
export const lamMozambique: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lam-mozambique",
  orgName: "LAM Mozambique",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("LAM Mozambique") when:30d",
});
