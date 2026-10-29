import { gnewsSource } from "./google-news.js";

// HiSky: gnews discovery fallback (European coverage, full country list).
export const hisky: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hisky",
  orgName: "HiSky",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("HiSky" airline) when:30d",
});
