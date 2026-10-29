import { gnewsSource } from "./google-news.js";

// Swiftair: gnews discovery fallback (European coverage, full country list).
export const swiftair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "swiftair",
  orgName: "Swiftair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Swiftair") when:30d",
});
