import { gnewsSource } from "./google-news.js";

// Albawings: gnews discovery fallback (European coverage, full country list).
export const albawings: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "albawings",
  orgName: "Albawings",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Albawings") when:30d",
});
