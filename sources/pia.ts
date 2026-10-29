import { gnewsSource } from "./google-news.js";

// Pakistan International Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const pia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "pia",
  orgName: "Pakistan International Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Pakistan International Airlines" OR "PIA airline) when:30d",
});
