import { gnewsSource } from "./google-news.js";

// MJet Austria: gnews discovery fallback (European coverage, full country list).
export const mjet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "mjet",
  orgName: "MJet Austria",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("MJet" aviation) when:30d",
});
