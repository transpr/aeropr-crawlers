import { gnewsSource } from "./google-news.js";

// La Compagnie: gnews discovery fallback (European coverage, full country list).
export const laCompagnie: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "la-compagnie",
  orgName: "La Compagnie",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("La Compagnie" airline) when:30d",
});
