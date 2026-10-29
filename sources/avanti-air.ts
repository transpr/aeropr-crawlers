import { gnewsSource } from "./google-news.js";

// Avanti Air: gnews discovery fallback (European coverage, full country list).
export const avantiAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "avanti-air",
  orgName: "Avanti Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Avanti Air") when:30d",
});
