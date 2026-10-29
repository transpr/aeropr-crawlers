import { gnewsSource } from "./google-news.js";

// Zimex Aviation: gnews discovery fallback (European coverage, full country list).
export const zimex: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "zimex",
  orgName: "Zimex Aviation",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Zimex Aviation") when:30d",
});
