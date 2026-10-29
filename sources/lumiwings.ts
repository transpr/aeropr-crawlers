import { gnewsSource } from "./google-news.js";

// Lumiwings: gnews discovery fallback (European coverage, full country list).
export const lumiwings: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lumiwings",
  orgName: "Lumiwings",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Lumiwings") when:30d",
});
