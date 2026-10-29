import { gnewsSource } from "./google-news.js";

// KLM Cityhopper: gnews discovery fallback (European coverage, full country list).
export const klmCityhopper: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "klm-cityhopper",
  orgName: "KLM Cityhopper",
  orgGroup: "Air France-KLM",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("KLM Cityhopper") when:30d",
});
