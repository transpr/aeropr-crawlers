import { gnewsSource } from "./google-news.js";

// Lauda Europe: gnews discovery fallback (European coverage, full country list).
export const laudaEurope: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lauda-europe",
  orgName: "Lauda Europe",
  orgGroup: "Ryanair Holdings",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Lauda Europe") when:30d",
});
