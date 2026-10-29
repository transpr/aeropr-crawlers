import { gnewsSource } from "./google-news.js";

// Red Wings Airlines: gnews discovery fallback (European coverage, full country list).
export const redWings: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "red-wings",
  orgName: "Red Wings Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Red Wings") when:30d",
});
