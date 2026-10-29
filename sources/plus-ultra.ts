import { gnewsSource } from "./google-news.js";

// Plus Ultra Líneas Aéreas: gnews discovery fallback (European coverage, full country list).
export const plusUltra: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "plus-ultra",
  orgName: "Plus Ultra Líneas Aéreas",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Plus Ultra" airline) when:30d",
});
