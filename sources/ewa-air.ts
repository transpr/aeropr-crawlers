import { gnewsSource } from "./google-news.js";

// EWA Air: gnews discovery fallback (European coverage, full country list).
export const ewaAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ewa-air",
  orgName: "EWA Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("EWA Air") when:30d",
});
