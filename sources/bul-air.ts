import { gnewsSource } from "./google-news.js";

// Bul Air: gnews discovery fallback (European coverage, full country list).
export const bulAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "bul-air",
  orgName: "Bul Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Bul Air") when:30d",
});
