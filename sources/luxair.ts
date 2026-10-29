import { gnewsSource } from "./google-news.js";

// Luxair: gnews discovery fallback (European coverage, full country list).
export const luxair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "luxair",
  orgName: "Luxair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Luxair") when:30d",
});
