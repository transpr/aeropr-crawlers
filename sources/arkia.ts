import { gnewsSource } from "./google-news.js";

// Arkia: gnews discovery fallback (European coverage, full country list).
export const arkia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "arkia",
  orgName: "Arkia",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Arkia") when:30d",
});
