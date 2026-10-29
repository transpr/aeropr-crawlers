import { gnewsSource } from "./google-news.js";

// Corendon Airlines Europe: gnews discovery fallback (European coverage, full country list).
export const corendonEurope: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "corendon-europe",
  orgName: "Corendon Airlines Europe",
  orgGroup: "Corendon",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Corendon Airlines Europe") when:30d",
});
