import { gnewsSource } from "./google-news.js";

// MNG Airlines: gnews discovery fallback (European coverage, full country list).
export const mngAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "mng-airlines",
  orgName: "MNG Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("MNG Airlines") when:30d",
});
