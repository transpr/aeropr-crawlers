import { gnewsSource } from "./google-news.js";

// VistaJet: gnews discovery fallback (European coverage, full country list).
export const vistajet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "vistajet",
  orgName: "VistaJet",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("VistaJet") when:30d",
});
