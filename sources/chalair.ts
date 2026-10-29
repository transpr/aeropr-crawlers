import { gnewsSource } from "./google-news.js";

// Chalair Aviation: gnews discovery fallback (European coverage, full country list).
export const chalair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "chalair",
  orgName: "Chalair Aviation",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Chalair") when:30d",
});
