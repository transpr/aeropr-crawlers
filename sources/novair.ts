import { gnewsSource } from "./google-news.js";

// Novair (Sweden): gnews discovery fallback (European coverage, full country list).
export const novair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "novair",
  orgName: "Novair (Sweden)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Novair" Sweden) when:30d",
});
