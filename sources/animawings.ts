import { gnewsSource } from "./google-news.js";

// Animawings: gnews discovery fallback (European coverage, full country list).
export const animawings: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "animawings",
  orgName: "Animawings",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Animawings") when:30d",
});
