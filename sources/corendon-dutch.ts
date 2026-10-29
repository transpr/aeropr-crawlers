import { gnewsSource } from "./google-news.js";

// Corendon Dutch Airlines: gnews discovery fallback (European coverage, full country list).
export const corendonDutch: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "corendon-dutch",
  orgName: "Corendon Dutch Airlines",
  orgGroup: "Corendon",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Corendon Dutch Airlines") when:30d",
});
