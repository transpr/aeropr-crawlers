import { gnewsSource } from "./google-news.js";

// Pobeda: gnews discovery fallback (European coverage, full country list).
export const pobeda: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "pobeda",
  orgName: "Pobeda",
  orgGroup: "Aeroflot",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Pobeda" airline) when:30d",
});
