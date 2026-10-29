import { gnewsSource } from "./google-news.js";

// EasyJet Europe: gnews discovery fallback (European coverage, full country list).
export const easyjetEurope: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "easyjet-europe",
  orgName: "EasyJet Europe",
  orgGroup: "easyJet",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("EasyJet Europe") when:30d",
});
