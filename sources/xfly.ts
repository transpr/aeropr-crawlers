import { gnewsSource } from "./google-news.js";

// Xfly (Nordica): gnews discovery fallback (European coverage, full country list).
export const xfly: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "xfly",
  orgName: "Xfly (Nordica)",
  orgGroup: "Nordica",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Xfly" airline) when:30d",
});
