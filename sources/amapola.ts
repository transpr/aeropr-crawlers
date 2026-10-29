import { gnewsSource } from "./google-news.js";

// Amapola Flyg: gnews discovery fallback (European coverage, full country list).
export const amapola: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "amapola",
  orgName: "Amapola Flyg",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Amapola Flyg") when:30d",
});
