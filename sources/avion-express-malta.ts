import { gnewsSource } from "./google-news.js";

// Avion Express Malta: gnews discovery fallback (European coverage, full country list).
export const avionExpressMalta: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "avion-express-malta",
  orgName: "Avion Express Malta",
  orgGroup: "Avion Express",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Avion Express Malta") when:30d",
});
