import { gnewsSource } from "./google-news.js";

// CityJet: gnews discovery fallback (European coverage, full country list).
export const cityjet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cityjet",
  orgName: "CityJet",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("CityJet") when:30d",
});
