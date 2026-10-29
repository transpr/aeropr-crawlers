import { gnewsSource } from "./google-news.js";

// EasyJet Switzerland: gnews discovery fallback (European coverage, full country list).
export const easyjetSwitzerland: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "easyjet-switzerland",
  orgName: "EasyJet Switzerland",
  orgGroup: "easyJet",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("EasyJet Switzerland") when:30d",
});
