import { gnewsSource } from "./google-news.js";

// Yamal Airlines: gnews discovery fallback (European coverage, full country list).
export const yamal: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "yamal",
  orgName: "Yamal Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Yamal Airlines") when:30d",
});
