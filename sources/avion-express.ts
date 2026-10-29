import { gnewsSource } from "./google-news.js";

// Avion Express: gnews discovery fallback (European coverage, full country list).
export const avionExpress: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "avion-express",
  orgName: "Avion Express",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Avion Express") when:30d",
});
