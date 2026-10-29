import { gnewsSource } from "./google-news.js";

// Rossiya: gnews discovery fallback (European coverage, full country list).
export const rossiya: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "rossiya",
  orgName: "Rossiya",
  orgGroup: "Aeroflot",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Rossiya" airline) when:30d",
});
