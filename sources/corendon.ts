import { gnewsSource } from "./google-news.js";

// Corendon Airlines: gnews discovery fallback (European coverage, full country list).
export const corendon: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "corendon",
  orgName: "Corendon Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Corendon Airlines") when:30d",
});
