import { gnewsSource } from "./google-news.js";

// Avcon Jet: gnews discovery fallback (European coverage, full country list).
export const avconJet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "avcon-jet",
  orgName: "Avcon Jet",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Avcon Jet") when:30d",
});
