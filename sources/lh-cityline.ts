import { gnewsSource } from "./google-news.js";

// Lufthansa CityLine: gnews discovery fallback (European coverage, full country list).
export const lhCityline: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "lh-cityline",
  orgName: "Lufthansa CityLine",
  orgGroup: "Lufthansa Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Lufthansa CityLine") when:30d",
});
