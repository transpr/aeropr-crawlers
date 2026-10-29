import { gnewsSource } from "./google-news.js";

// Sun d'Or: gnews discovery fallback (European coverage, full country list).
export const sunDOr: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "sun-d-or",
  orgName: "Sun d'Or",
  orgGroup: "El Al",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Sun d'Or") when:30d",
});
