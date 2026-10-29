import { gnewsSource } from "./google-news.js";

// Lübeck Air: gnews discovery fallback (European coverage, full country list).
export const lubeckAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lubeck-air",
  orgName: "Lübeck Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Lübeck Air") when:30d",
});
