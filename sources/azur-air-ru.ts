import { gnewsSource } from "./google-news.js";

// Azur Air (Russia): gnews discovery fallback (European coverage, full country list).
export const azurAirRu: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "azur-air-ru",
  orgName: "Azur Air (Russia)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Azur Air") when:30d",
});
