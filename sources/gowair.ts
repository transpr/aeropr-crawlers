import { gnewsSource } from "./google-news.js";

// Gowair: gnews discovery fallback (European coverage, full country list).
export const gowair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "gowair",
  orgName: "Gowair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Gowair") when:30d",
});
