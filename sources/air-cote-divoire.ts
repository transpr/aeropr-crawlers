import { gnewsSource } from "./google-news.js";

// Air Côte d'Ivoire: gnews discovery fallback (world scheduled-carrier completion).
export const airCoteDivoire: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-cote-divoire",
  orgName: "Air Côte d'Ivoire",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Côte d'Ivoire") when:30d",
});
