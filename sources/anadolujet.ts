import { gnewsSource } from "./google-news.js";

// AnadoluJet: gnews discovery fallback (European coverage, full country list).
export const anadolujet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "anadolujet",
  orgName: "AnadoluJet",
  orgGroup: "Turkish Airlines",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("AnadoluJet") when:30d",
});
