import { gnewsSource } from "./google-news.js";

// Challenge Airlines Belgium: gnews discovery fallback (European coverage, full country list).
export const challengeBe: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "challenge-be",
  orgName: "Challenge Airlines Belgium",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Challenge Airlines Belgium") when:30d",
});
