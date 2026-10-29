import { gnewsSource } from "./google-news.js";

// Twin Jet: gnews discovery fallback (European coverage, full country list).
export const twinJet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "twin-jet",
  orgName: "Twin Jet",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Twin Jet" airline France) when:30d",
});
