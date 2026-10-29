import { gnewsSource } from "./google-news.js";

// KlasJet: gnews discovery fallback (European coverage, full country list).
export const klasjet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "klasjet",
  orgName: "KlasJet",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("KlasJet") when:30d",
});
