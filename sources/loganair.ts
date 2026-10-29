import { gnewsSource } from "./google-news.js";

// Loganair: gnews discovery fallback (European coverage, full country list).
export const loganair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "loganair",
  orgName: "Loganair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Loganair") when:30d",
});
